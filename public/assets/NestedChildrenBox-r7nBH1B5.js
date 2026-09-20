import{B as e,Bt as t,F as n,I as r,P as i,V as a,Vt as o,W as s,Wt as c,en as l,fn as u,gn as d,hn as f,in as p,mn as m,pn as h,yn as g,z as _,zt as v}from"./rue-runtime-BWbIfNT8.js";import{t as y}from"./createHomeSplitExamplePage-Cjn7V321.js";var b=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold">嵌套 children Box</h2><!--rue:opaque-hole:0--></div></div>`),x=(n,i,a)=>{let o=s(_(n,`background`)),d=s(_(n,`children`)),m=s(_(n,`title`));return r(c(e=>{let n=f(`div`,e);n.setAttribute(`class`,`box`);let r;p(()=>{let e=`1px solid #ddd`;Object.is(r,e)||(r=e,n.style.border=e)});let i;p(()=>{let e=`12px`;Object.is(i,e)||(i=e,n.style.padding=e)});let a;p(()=>{let e=`12px`;Object.is(a,e)||(a=e,n.style.marginBottom=e)});let s;p(()=>{let e=o.get(),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,n.style.background=t)});let c=f(`h3`,n);u(n,c),Object.assign(c.style,{margin:`0 0 8px`});let l=h(`rue:compiled-slot`);u(c,l),t({parent:c,before:l},()=>v(m.get()),()=>({}));let g=f(`div`,n);u(n,g),g.setAttribute(`class`,`content`);let _=h(`rue:compiled-slot`);return u(g,_),t({parent:g,before:_},()=>d.get(),()=>({})),[n,n]}),e=>l(()=>{o.set(e.background),d.set(e.children),m.set(e.title)}),()=>e(n))},S=(e,r,s)=>c(e=>{let r=b().content.cloneNode(!0).firstChild,s=r.childNodes[0].childNodes[1],l=s.parentNode,p=(e,t,r)=>{let s=()=>i(x,()=>({title:`嵌套 children`,background:`blue`,children:(e,t,r)=>{let i=()=>c(e=>{let t=m();n(t,x,()=>({title:`内层 Box`,background:`red`,children:(e,t,r)=>{let i=()=>c(e=>{let t=m(),r=f(`span`,t);u(t,r),u(r,d(`嵌套的子元素`)),n(t,x,()=>({title:`内层 Box2`,background:`yellow`,children:(e,t,r)=>{let i=()=>c(e=>{let t=m(),r=f(`span`,t);u(t,r),u(r,d(`嵌套的子元素2`)),n(t,x,()=>({title:`内层 Box3`,background:`green`,children:(e,t,n)=>{let r=()=>a(e=>{let t=m(),n=f(`span`,t);u(t,n),u(n,d(`嵌套的子元素3`));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));let i=d(``),s=d(``);return t.insertBefore(i,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));let i=d(``),s=d(``);return t.insertBefore(i,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));return e==null?s():o(e,r,s)},h=s.nextSibling;return l.removeChild(s),t({parent:l,before:h},()=>p,()=>({})),[r,r]}),C=`import { type FC } from '@rue-js/rue'

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

const NestedChildrenBoxDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold">嵌套 children Box</h2>
        <Box title="嵌套 children" background="blue">
          <Box title="内层 Box" background="red">
            <span>嵌套的子元素</span>
            <Box title="内层 Box2" background="yellow">
              <span>嵌套的子元素2</span>
              <Box title="内层 Box3" background="green">
                <span>嵌套的子元素3</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default NestedChildrenBoxDemo
`,w=(e,t,r)=>i(y,()=>({options:{title:`嵌套 children Box`,source:C},children:(e,t,r)=>{let i=()=>c(e=>{let t=m();n(t,S,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{w as default};