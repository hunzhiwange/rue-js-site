import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,pt as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./Code-D5UqTwV6.js";import{r as v}from"./SidebarPlaygroundExample-D2vGHFCu.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>a(()=>({activeTab:g(`ref:1:0`,()=>n(`code`)),articleHtml:g(`ref:1:1`,()=>n(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>n(`<strong>Pro</strong><span> 专业版在线</span>`))})));return l(n=>{let a=c(),g=e(`rue:component:anchor`);return o(a,g),d(p(v,{children:l(()=>{let n=c(),a=m(`h1`,n);o(n,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`v-html / r-html`));let g=m(`div`,n);o(n,g),s(g,`role`,`tablist`),h(g,`tabs tabs-box`);let v=m(`button`,g);o(g,v),s(v,`role`,`tab`),t(()=>{h(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{y.value=`preview`}),o(v,u(`效果`));let S=m(`button`,g);o(g,S),s(S,`role`,`tab`),t(()=>{h(S,`tab ${y.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{y.value=`code`}),o(S,u(`代码`));let C=m(`div`,n);o(n,C),h(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let n=y.value===`code`?l(()=>{let n=c(),i=m(`div`,n);o(n,i),h(i,`card bg-base-100 shadow overflow-auto`);let a=m(`div`,i);o(i,a),h(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,C,w))}),o(C,u(` `));let T=e(`rue:slot:anchor`);return o(C,T),t(()=>{let e=y.value===`preview`?l(()=>{let e=c(),n=m(`div`,e);o(e,n),h(n,`card bg-base-100 shadow`);let r=m(`div`,n);o(n,r),h(r,`card-body grid gap-6`);let a=m(`section`,r);o(r,a),h(a,`space-y-3`);let s=m(`div`,a);o(a,s),h(s,`flex flex-wrap items-center justify-between gap-3`);let l=m(`h2`,s);o(s,l),h(l,`text-xl font-semibold`),o(l,u(`v-html / r-html`));let d=m(`button`,s);o(s,d),h(d,`btn btn-sm`),i(d,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),o(d,u(`更新 HTML`));let p=m(`div`,a);o(a,p),h(p,`rounded-box border border-base-300 p-4 grid gap-3`);let g=m(`div`,p);o(p,g),h(g,`alert alert-info`),t(()=>{let e={__html:b.value};f(g,e&&`__html`in e?e.__html:``)});let _=m(`p`,p);return o(p,_),h(_,`badge badge-success badge-lg`),t(()=>{let e={__html:x.value};f(_,e&&`__html`in e?e.__html:``)}),e}):``;r(()=>d(e,C,T))}),n})}),a,g),a})};export{y as default};