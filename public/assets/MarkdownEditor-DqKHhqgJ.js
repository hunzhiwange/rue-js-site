import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,dt as d,et as f,l as p,ot as m,pt as h,t as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _}from"./vapor-helpers-vapor-DkadWylb.js";import{t as v}from"./Code-B_4lzH85.js";import{t as y}from"./SidebarPlaygroundExample-CtM-WHq_.js";import{t as b}from"./markdown-it-CnXmgGnJ.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>n(()=>{let e=_(`ref:1:0`,()=>r(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>r(`preview`))}}));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),p(g(y,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,f(`Markdown 编辑器（移植自 Vue）`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{w.value=`preview`}),o(y,f(`效果`));let S=e(`button`,_);o(_,S),m(S,`role`,`tab`),s(()=>{l(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{w.value=`code`}),o(S,f(`代码`));let T=e(`div`,n);o(n,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);o(T,E),s(()=>{let t=w.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,T,E))}),o(T,f(` `));let D=c(`rue:slot:anchor`);return o(T,D),s(()=>{let n=w.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-4`);let c=e(`div`,a);o(a,c),l(c,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let u=e(`textarea`,c);o(c,u),l(u,`textarea textarea-bordered rounded-none border-r`),s(()=>{h(u,b.value)}),t(u,`input`,C);let f=e(`div`,c);return o(c,f),l(f,`p-4 overflow-auto`),s(()=>{let e={__html:x.render(b.value)};d(f,e&&`__html`in e?e.__html:``)}),n}):``;a(()=>p(n,T,D))}),n})}),r,_),r})};export{C as default};