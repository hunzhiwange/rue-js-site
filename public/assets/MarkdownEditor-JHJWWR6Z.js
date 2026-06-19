import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ft as c,l,lt as u,mt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";import{t as b}from"./markdown-it-Cd9HuwxL.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>g(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>g(`preview`))}}));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`Markdown 编辑器（移植自 Vue）`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{w.value=`preview`}),i(y,h(`效果`));let S=s(`button`,_);i(_,S),p(S,`role`,`tab`),n(()=>{u(S,`tab ${w.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{w.value=`code`}),i(S,h(`代码`));let T=s(`div`,o);i(o,T),u(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=t(`rue:slot:anchor`);i(T,E),n(()=>{let a=w.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,T,E))}),i(T,h(` `));let D=t(`rue:slot:anchor`);return i(T,D),n(()=>{let t=w.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body grid gap-4`);let l=s(`div`,o);i(o,l),u(l,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let f=s(`textarea`,l);i(l,f),u(f,`textarea textarea-bordered rounded-none border-r`),n(()=>{d(f,b.value)}),a(f,`input`,C);let p=s(`div`,l);return i(l,p),u(p,`p-4 overflow-auto`),n(()=>{let e={__html:x.render(b.value)};c(p,e&&`__html`in e?e.__html:``)}),t}):``;r(()=>f(t,T,D))}),o})}),g,_),g})};export{C as default};