import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,Y as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h}from"./vapor-runtime-Dfq7aA8z.js";import{a as g}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as _}from"./Code-CLTo4rRM.js";import{t as v}from"./SidebarPlaygroundExample-DOFGFBd1.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>f(()=>({activeTab:g(`ref:1:0`,()=>p(`code`)),articleHtml:g(`ref:1:1`,()=>p(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>p(`<strong>Pro</strong><span> 专业版在线</span>`))})));return u(f=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),d(m(v,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`v-html / r-html`));let g=r(`div`,f);a(f,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),l(()=>{n(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{y.value=`preview`}),a(v,o(`效果`));let S=r(`button`,g);a(g,S),s(S,`role`,`tab`),l(()=>{n(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{y.value=`code`}),a(S,o(`代码`));let C=r(`div`,f);a(f,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),l(()=>{let i=y.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),l(()=>{let e=y.value===`preview`?u(()=>{let e=t(),s=r(`div`,e);a(e,s),n(s,`card bg-base-100 shadow`);let u=r(`div`,s);a(s,u),n(u,`card-body grid gap-6`);let d=r(`section`,u);a(u,d),n(d,`space-y-3`);let f=r(`div`,d);a(d,f),n(f,`flex flex-wrap items-center justify-between gap-3`);let p=r(`h2`,f);a(f,p),n(p,`text-xl font-semibold`),a(p,o(`v-html / r-html`));let m=r(`button`,f);a(f,m),n(m,`btn btn-sm`),i(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),a(m,o(`更新 HTML`));let h=r(`div`,d);a(d,h),n(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=r(`div`,h);a(h,g),n(g,`alert alert-info`),l(()=>{let e={__html:b.value};c(g,e&&`__html`in e?e.__html:``)});let _=r(`p`,h);return a(h,_),n(_,`badge badge-success badge-lg`),l(()=>{let e={__html:x.value};c(_,e&&`__html`in e?e.__html:``)}),e}):``;h(()=>d(e,C,T))}),f})}),p,g),p})};export{y as default};