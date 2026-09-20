import{B as e,Bt as t,F as n,I as r,P as i,V as a,Vt as o,W as s,Wt as c,en as l,fn as u,gn as d,hn as f,in as p,mn as m,pn as h,yn as g,z as _,zt as v}from"./rue-runtime-BWbIfNT8.js";import{t as y}from"./createHomeSplitExamplePage-Cjn7V321.js";var b=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold">基础 children Box</h2><!--rue:opaque-hole:0--></div></div>`),x=(n,i,a)=>{let o=s(_(n,`background`)),d=s(_(n,`children`)),m=s(_(n,`title`));return r(c(e=>{let n=f(`div`,e);n.setAttribute(`class`,`box`);let r;p(()=>{let e=`1px solid #ddd`;Object.is(r,e)||(r=e,n.style.border=e)});let i;p(()=>{let e=`12px`;Object.is(i,e)||(i=e,n.style.padding=e)});let a;p(()=>{let e=`12px`;Object.is(a,e)||(a=e,n.style.marginBottom=e)});let s;p(()=>{let e=o.get(),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,n.style.background=t)});let c=f(`h3`,n);u(n,c),Object.assign(c.style,{margin:`0 0 8px`});let l=h(`rue:compiled-slot`);u(c,l),t({parent:c,before:l},()=>v(m.get()),()=>({}));let g=f(`div`,n);u(n,g),g.setAttribute(`class`,`content`);let _=h(`rue:compiled-slot`);return u(g,_),t({parent:g,before:_},()=>d.get(),()=>({})),[n,n]}),e=>l(()=>{o.set(e.background),d.set(e.children),m.set(e.title)}),()=>e(n))},S=(e,n,r)=>c(e=>{let n=b().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],s=r.parentNode,c=(e,t,n)=>{let r=()=>i(x,()=>({title:`基本 children`,background:`purple`,children:(e,t,n)=>{let r=()=>a(e=>{let t=m(),n=f(`p`,t);u(t,n),u(n,d(`这是子内容 A`));let r=f(`p`,t);u(t,r),u(r,d(`这是子内容 B`));let i=d(``),a=d(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?r():o(e,n,r)},l=r.nextSibling;return s.removeChild(r),t({parent:s,before:l},()=>c,()=>({})),[n,n]}),C=`import { type FC } from '@rue-js/rue'

const Box: FC<{ title: string; background: string }> = props => {
  return (
    <div
      className="box"
      style={{
        border: '1px solid #ddd',
        padding: '12px',
        marginBottom: '12px',
        background: props.background,
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{props.title}</h3>
      <div className="content">{props.children}</div>
    </div>
  )
}

const BasicChildrenBoxDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold">基础 children Box</h2>
        <Box title="基本 children" background="purple">
          <p>这是子内容 A</p>
          <p>这是子内容 B</p>
        </Box>
      </div>
    </div>
  )
}

export default BasicChildrenBoxDemo
`,w=(e,t,r)=>i(y,()=>({options:{title:`基础 children Box`,source:C},children:(e,t,r)=>{let i=()=>c(e=>{let t=m();n(t,S,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{w as default};