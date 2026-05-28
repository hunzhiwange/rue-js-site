import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,dt as d,et as f,l as p,ot as m,t as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./Code-B_4lzH85.js";import{t as v}from"./SidebarPlaygroundExample-CtM-WHq_.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>n(()=>({activeTab:g(`ref:1:0`,()=>r(`code`)),articleHtml:g(`ref:1:1`,()=>r(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>r(`<strong>Pro</strong><span> 专业版在线</span>`))})));return u(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),p(h(v,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,f(`v-html / r-html`));let g=e(`div`,n);o(n,g),m(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),m(v,`role`,`tab`),s(()=>{l(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{y.value=`preview`}),o(v,f(`效果`));let S=e(`button`,g);o(g,S),m(S,`role`,`tab`),s(()=>{l(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{y.value=`code`}),o(S,f(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=y.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,C,w))}),o(C,f(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let n=y.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let c=e(`section`,a);o(a,c),l(c,`space-y-3`);let u=e(`div`,c);o(c,u),l(u,`flex flex-wrap items-center justify-between gap-3`);let p=e(`h2`,u);o(u,p),l(p,`text-xl font-semibold`),o(p,f(`v-html / r-html`));let m=e(`button`,u);o(u,m),l(m,`btn btn-sm`),t(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),o(m,f(`更新 HTML`));let h=e(`div`,c);o(c,h),l(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=e(`div`,h);o(h,g),l(g,`alert alert-info`),s(()=>{let e={__html:b.value};d(g,e&&`__html`in e?e.__html:``)});let _=e(`p`,h);return o(h,_),l(_,`badge badge-success badge-lg`),s(()=>{let e={__html:x.value};d(_,e&&`__html`in e?e.__html:``)}),n}):``;a(()=>p(n,C,T))}),n})}),r,g),r})};export{y as default};