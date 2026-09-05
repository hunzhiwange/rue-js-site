import{Bt as e,Dn as t,Et as n,K as r,L as i,Lt as a,Mt as o,V as s,X as c,Y as l,_n as u,_t as d,fn as f,ft as p,gn as m,hn as h,ht as g,kn as _,lt as v,nt as y,q as b,rt as x,wn as S,z as C}from"./rue-runtime-CwEGJ854.js";import{t as w}from"./Code-B3jCYMAr.js";import{r as T}from"./SidebarPlaygroundExample-EGR0CyDT.js";import{t as E}from"./dist-C5ug97T8.js";var D=u(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Markdown 编辑器（移植自 Vue）</h1>`),O=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=u(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=e=>E(e).html;function j(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var M=()=>{let u=e(`# hello`),E=j(e=>{u.value=e.target.value},100),M=e(`preview`);return o(()=>b((()=>{let e=g(()=>{let e=y(),t=k().content.cloneNode(!0),o=t.firstChild,d=o.childNodes[0],b=d.parentNode,C=o.childNodes[1],T=C.parentNode;return e.appendChild(t),s(b,d,()=>{let e=M.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`;let n=h(`div`,t);return f(t,n),n.className=`card-body p-0`,r(n,w,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),S(()=>{let e=M.value===`preview`?g(()=>{let e=y(),t=x(`div`,e);c(e,t),i(t,`card bg-base-100 shadow`);let n=x(`div`,t);c(t,n),i(n,`card-body grid gap-4`);let r=x(`div`,n);c(n,r),i(r,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let o=x(`textarea`,r);c(r,o),i(o,`textarea textarea-bordered rounded-none border-r`),S(()=>{p(o,u.value)});let s=e=>{let t=E;typeof t==`function`&&t(e)};o.addEventListener(`input`,s),a(()=>o.removeEventListener(`input`,s));let l=x(`div`,r);return c(r,l),i(l,`p-4 overflow-auto`),S(()=>{let e={__html:A(u.value)};v(l,e&&`__html`in e?e.__html:``)}),e},!0):``;_(()=>l(e,T,C))}),e});return d(T,()=>({children:[n(e=>D().content.cloneNode(!0).firstChild),n(Object.assign(e=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;S(()=>{let e=`tab ${M.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{M.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;S(()=>{let e=`tab ${M.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{M.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e]}))})(),e=>C(()=>{})))};export{M as default};