import{Bt as e,Dt as t,H as n,Mt as r,Ut as i,Vt as a,Wt as o,Y as s,fn as c,gn as l,hn as u,in as d,kt as f,mn as p,sn as m,st as h,u as g,yn as _,yt as v,z as y}from"./rue-runtime-Cv6BZekS.js";import{t as b}from"./Code-BzFVdc3U.js";import{r as x}from"./SidebarPlaygroundExample-rFyhXfC_.js";import{t as S}from"./dist-C5ug97T8.js";var C=_(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Markdown 编辑器（移植自 Vue）</h1>`),w=_(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=_(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=e=>S(e).html;function D(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var O=(_,S,O)=>{let k=h(`# hello`),A=D(e=>{k.value=e.target.value},100),j=h(`preview`);return s(()=>(()=>{let s=o(s=>{let h=p(),g=T().content.cloneNode(!0),_=g.firstChild,y=_.childNodes[0],x=y.parentNode,S=_.childNodes[1],C=S.parentNode;h.appendChild(g),i(x,y,()=>{let e=j.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let t=u(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=u(`div`,t);return c(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>v(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>v(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),e({parent:C,before:S},()=>j.value===`preview`?(e,n,i)=>a(e,i,()=>o(()=>{let e=p(),n=u(`div`,e);c(e,n),t(n,`card bg-base-100 shadow`);let i=u(`div`,n);c(n,i),t(i,`card-body grid gap-4`);let a=u(`div`,i);c(i,a),t(a,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let o=u(`textarea`,a);c(a,o),t(o,`textarea textarea-bordered rounded-none border-r`),d(()=>{r(o,k.value)});let s=e=>{let t=A;typeof t==`function`&&t(e)};o.addEventListener(`input`,s),m(()=>o.removeEventListener(`input`,s));let h=u(`div`,a);c(a,h),t(h,`p-4 overflow-auto`),d(()=>{let e={__html:E(k.value)};f(h,e&&`__html`in e?e.__html:``)});let g=l(``),_=l(``);return e.insertBefore(g,e.firstChild),e.appendChild(_),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>v(e=>{let t=l(``);return[t,t]});return e==null?r():a(e,n,r)},()=>({}));let w=l(``),D=l(``);return h.insertBefore(w,h.firstChild),h.appendChild(D),[h.firstChild,h.lastChild]});return y(x,()=>({children:[v(e=>{let t=C().content.cloneNode(!0).firstChild;return[t,t]}),o(e=>{let t=w().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;d(()=>{let e=`tab ${j.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),m(g(e,n,`click`,()=>()=>{j.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return d(()=>{let e=`tab ${j.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),m(g(e,r,`click`,()=>()=>{j.value=`code`})),[t,t]}),s]}))})())};export{O as default};