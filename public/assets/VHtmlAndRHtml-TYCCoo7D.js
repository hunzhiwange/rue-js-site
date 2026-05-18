import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,Y as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./Code-DQxnq0in.js";import{t as v}from"./SidebarPlaygroundExample-BwOo72z2.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>d(()=>({activeTab:g(`ref:1:0`,()=>p(`code`)),articleHtml:g(`ref:1:1`,()=>p(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>p(`<strong>Pro</strong><span> 专业版在线</span>`))})));return l(d=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),f(m(v,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`v-html / r-html`));let g=r(`div`,d);a(d,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),h(()=>{n(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{y.value=`preview`}),a(v,o(`效果`));let S=r(`button`,g);a(g,S),s(S,`role`,`tab`),h(()=>{n(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{y.value=`code`}),a(S,o(`代码`));let C=r(`div`,d);a(d,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),h(()=>{let i=y.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),h(()=>{let e=y.value===`preview`?l(()=>{let e=t(),s=r(`div`,e);a(e,s),n(s,`card bg-base-100 shadow`);let l=r(`div`,s);a(s,l),n(l,`card-body grid gap-6`);let u=r(`section`,l);a(l,u),n(u,`space-y-3`);let d=r(`div`,u);a(u,d),n(d,`flex flex-wrap items-center justify-between gap-3`);let f=r(`h2`,d);a(d,f),n(f,`text-xl font-semibold`),a(f,o(`v-html / r-html`));let p=r(`button`,d);a(d,p),n(p,`btn btn-sm`),i(p,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),a(p,o(`更新 HTML`));let m=r(`div`,u);a(u,m),n(m,`rounded-box border border-base-300 p-4 grid gap-3`);let g=r(`div`,m);a(m,g),n(g,`alert alert-info`),h(()=>{let e={__html:b.value};c(g,e&&`__html`in e?e.__html:``)});let _=r(`p`,m);return a(m,_),n(_,`badge badge-success badge-lg`),h(()=>{let e={__html:x.value};c(_,e&&`__html`in e?e.__html:``)}),e}):``;u(()=>f(e,C,T))}),d})}),p,g),p})};export{y as default};