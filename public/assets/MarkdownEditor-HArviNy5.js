import{At as e,Dn as t,Dt as n,Mt as r,Q as i,Qt as a,Vt as o,_n as s,_t as c,ct as l,dt as u,et as d,gn as f,kn as p,nt as m,pn as h,qt as g,st as _,tn as v,ut as y,vn as b,vt as x,wn as S,wt as C}from"./rue-runtime-HIMg8Lz8.js";import{t as w}from"./Code-DpH7u0gk.js";import{r as T}from"./SidebarPlaygroundExample-BCPRe0hA.js";import{t as E}from"./dist-C5ug97T8.js";var D=b(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Markdown 编辑器（移植自 Vue）</h1>`),O=b(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=b(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=e=>E(e).html;function j(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var M=()=>{let b=v(`# hello`),E=j(e=>{b.value=e.target.value},100),M=v(`preview`);return g(()=>l((()=>{let l=e(()=>{let t=c(),r=k().content.cloneNode(!0),l=r.firstChild,d=l.childNodes[0],g=d.parentNode,v=l.childNodes[1],T=v.parentNode;return t.appendChild(r),m(g,d,()=>{let e=M.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`;let n=f(`div`,t);return h(t,n),n.className=`card-body p-0`,_(n,w,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),S(()=>{let t=M.value===`preview`?e(()=>{let e=c(),t=x(`div`,e);u(e,t),i(t,`card bg-base-100 shadow`);let r=x(`div`,t);u(t,r),i(r,`card-body grid gap-4`);let o=x(`div`,r);u(r,o),i(o,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let s=x(`textarea`,o);u(o,s),i(s,`textarea textarea-bordered rounded-none border-r`),S(()=>{n(s,b.value)});let l=e=>{let t=E;typeof t==`function`&&t(e)};s.addEventListener(`input`,l),a(()=>s.removeEventListener(`input`,l));let d=x(`div`,o);return u(o,d),i(d,`p-4 overflow-auto`),S(()=>{let e={__html:A(b.value)};C(d,e&&`__html`in e?e.__html:``)}),e},!0):``;p(()=>y(t,T,v))}),t});return r(T,()=>({children:[o(e=>D().content.cloneNode(!0).firstChild),o(Object.assign(e=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;S(()=>{let e=`tab ${M.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{M.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;S(()=>{let e=`tab ${M.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{M.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),l]}))})(),e=>d(()=>{})))};export{M as default};