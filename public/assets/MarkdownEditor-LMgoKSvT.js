import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,ht as l,l as u,nt as d,o as f,pt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";import{t as b}from"./markdown-it-Cd9HuwxL.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>a(()=>{let e=_(`ref:1:0`,()=>n(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>n(`preview`))}}));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`Markdown 编辑器（移植自 Vue）`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{w.value=`preview`}),o(y,d(`效果`));let S=h(`button`,_);o(_,S),s(S,`role`,`tab`),t(()=>{g(S,`tab ${w.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{w.value=`code`}),o(S,d(`代码`));let T=h(`div`,n);o(n,T),g(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);o(T,E),t(()=>{let n=w.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true, linkify: true, breaks: true });

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
            dangerouslySetInnerHTML={{ __html: md.render(input.value) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,T,E))}),o(T,d(` `));let D=e(`rue:slot:anchor`);return o(T,D),t(()=>{let e=w.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body grid gap-4`);let a=h(`div`,r);o(r,a),g(a,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let s=h(`textarea`,a);o(a,s),g(s,`textarea textarea-bordered rounded-none border-r`),t(()=>{l(s,b.value)}),i(s,`input`,C);let u=h(`div`,a);return o(a,u),g(u,`p-4 overflow-auto`),t(()=>{let e={__html:x.render(b.value)};p(u,e&&`__html`in e?e.__html:``)}),e}):``;r(()=>f(e,T,D))}),n})}),a,_),a})};export{C as default};