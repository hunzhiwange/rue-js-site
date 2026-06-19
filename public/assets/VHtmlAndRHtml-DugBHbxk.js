import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ft as c,l,lt as u,o as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./Code-BIscIyEp.js";import{r as v}from"./SidebarPlaygroundExample-CEz1fABX.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>o(()=>({activeTab:g(`ref:1:0`,()=>h(`code`)),articleHtml:g(`ref:1:1`,()=>h(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>h(`<strong>Pro</strong><span> 专业版在线</span>`))})));return l(o=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),d(p(v,{children:l(()=>{let o=e(),h=s(`h1`,o);i(o,h),u(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,m(`v-html / r-html`));let g=s(`div`,o);i(o,g),f(g,`role`,`tablist`),u(g,`tabs tabs-box`);let v=s(`button`,g);i(g,v),f(v,`role`,`tab`),n(()=>{u(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),a(v,`click`,()=>{y.value=`preview`}),i(v,m(`效果`));let S=s(`button`,g);i(g,S),f(S,`role`,`tab`),n(()=>{u(S,`tab ${y.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{y.value=`code`}),i(S,m(`代码`));let C=s(`div`,o);i(o,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let a=y.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});r(()=>d(e,c,l))}),a}):``;r(()=>d(a,C,w))}),i(C,m(` `));let T=t(`rue:slot:anchor`);return i(C,T),n(()=>{let t=y.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body grid gap-6`);let l=s(`section`,o);i(o,l),u(l,`space-y-3`);let d=s(`div`,l);i(l,d),u(d,`flex flex-wrap items-center justify-between gap-3`);let f=s(`h2`,d);i(d,f),u(f,`text-xl font-semibold`),i(f,m(`v-html / r-html`));let p=s(`button`,d);i(d,p),u(p,`btn btn-sm`),a(p,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),i(p,m(`更新 HTML`));let h=s(`div`,l);i(l,h),u(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=s(`div`,h);i(h,g),u(g,`alert alert-info`),n(()=>{let e={__html:b.value};c(g,e&&`__html`in e?e.__html:``)});let _=s(`p`,h);return i(h,_),u(_,`badge badge-success badge-lg`),n(()=>{let e={__html:x.value};c(_,e&&`__html`in e?e.__html:``)}),t}):``;r(()=>d(t,C,T))}),o})}),h,g),h})};export{y as default};