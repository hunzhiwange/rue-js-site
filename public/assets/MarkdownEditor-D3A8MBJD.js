import{Bt as e,Dt as t,F as n,M as r,Mt as i,Ut as a,V as o,Vt as s,Wt as c,fn as l,gn as u,hn as d,in as f,kt as p,mn as m,mt as h,nt as g,sn as _,u as v,yn as y}from"./rue-runtime-BWbIfNT8.js";import{t as b}from"./Code-C5ZhIIr9.js";import{r as x}from"./SidebarPlaygroundExample-DUmYtIFQ.js";import{t as S}from"./dist-C5ug97T8.js";var C=y(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Markdown 编辑器（移植自 Vue）</h1>`),w=y(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=y(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=e=>S(e).html;function D(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var O=(y,S,O)=>{let k=h(`# hello`),A=D(e=>{k.value=e.target.value},100),j=h(`preview`);return g(()=>(()=>{let h=c(r=>{let h=m(),g=T().content.cloneNode(!0),v=g.firstChild,y=v.childNodes[0],x=y.parentNode,S=v.childNodes[1],C=S.parentNode;h.appendChild(g),a(x,y,()=>{let e=j.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=d(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=d(`div`,t);return l(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
import { markdownToHtml } from 'satteri';

const renderMarkdown = (source: string) => markdownToHtml(source).html;

function debounce<T extends (...args: any[]) => void>(fn: T, wait = 100) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), wait) as unknown as number;
  };
}

const MarkdownEditor: FC = () => {
  const input = ref<string>('# hello');
  const update = debounce((e: any) => { input.value = (e.target as HTMLTextAreaElement).value; }, 100);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5">
          <textarea
            className="textarea textarea-bordered rounded-none border-r"
            value={input.value}
            onInput={update}
          />
          <div
            className="p-4 overflow-auto"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(input.value) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=m();return[t.firstChild,t.lastChild]})}}),e({parent:C,before:S},()=>j.value===`preview`?(e,n,r)=>s(e,r,()=>c(()=>{let e=m(),n=d(`div`,e);l(e,n),t(n,`card bg-base-100 shadow`);let r=d(`div`,n);l(n,r),t(r,`card-body grid gap-4`);let a=d(`div`,r);l(r,a),t(a,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let o=d(`textarea`,a);l(a,o),t(o,`textarea textarea-bordered rounded-none border-r`),f(()=>{i(o,k.value)});let s=e=>{let t=A;typeof t==`function`&&t(e)};o.addEventListener(`input`,s),_(()=>o.removeEventListener(`input`,s));let c=d(`div`,a);l(a,c),t(c,`p-4 overflow-auto`),f(()=>{let e={__html:E(k.value)};p(c,e&&`__html`in e?e.__html:``)});let h=u(``),g=u(``);return e.insertBefore(h,e.firstChild),e.appendChild(g),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>o(e=>{let t=u(``);return[t,t]});return e==null?r():s(e,n,r)},()=>({}));let w=u(``),D=u(``);return h.insertBefore(w,h.firstChild),h.appendChild(D),[h.firstChild,h.lastChild]});return r(x,()=>({children:[o(e=>{let t=C().content.cloneNode(!0).firstChild;return[t,t]}),c(e=>{let t=w().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;f(()=>{let e=`tab ${j.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),_(v(e,n,`click`,()=>()=>{j.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return f(()=>{let e=`tab ${j.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),_(v(e,r,`click`,()=>()=>{j.value=`code`})),[t,t]}),h]}))})())};export{O as default};