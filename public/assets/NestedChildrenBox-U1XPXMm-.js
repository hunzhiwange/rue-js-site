import{Bt as e,H as t,U as n,V as r,Vt as i,Wt as a,_t as o,en as s,fn as c,gn as l,gt as u,hn as d,in as f,mn as p,pn as m,vt as h,yn as g,yt as _,zt as v}from"./rue-runtime-Cv6BZekS.js";import{t as y}from"./createHomeSplitExamplePage-DqLcVC_n.js";var b=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold">嵌套 children Box</h2><!--rue:opaque-hole:0--></div></div>`),x=(t,r,i)=>{let l=h(u(t,`background`)),p=h(u(t,`children`)),g=h(u(t,`title`));return n(a(t=>{let n=d(`div`,t);n.setAttribute(`class`,`box`);let r;f(()=>{let e=`1px solid #ddd`;Object.is(r,e)||(r=e,n.style.border=e)});let i;f(()=>{let e=`12px`;Object.is(i,e)||(i=e,n.style.padding=e)});let a;f(()=>{let e=`12px`;Object.is(a,e)||(a=e,n.style.marginBottom=e)});let o;f(()=>{let e=l.get(),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,n.style.background=t)});let s=d(`h3`,n);c(n,s),Object.assign(s.style,{margin:`0 0 8px`});let u=m(`rue:compiled-slot`);c(s,u),e({parent:s,before:u},()=>v(g.get()),()=>({}));let h=d(`div`,n);c(n,h),h.setAttribute(`class`,`content`);let _=m(`rue:compiled-slot`);return c(h,_),e({parent:h,before:_},()=>p.get(),()=>({})),[n,n]}),e=>s(()=>{l.set(e.background),p.set(e.children),g.set(e.title)}),()=>o(t))},S=(n,o,s)=>a(n=>{let o=b().content.cloneNode(!0).firstChild,s=o.childNodes[0].childNodes[1],u=s.parentNode,f=(e,n,o)=>{let s=()=>r(x,()=>({title:`嵌套 children`,background:`blue`,children:(e,n,r)=>{let o=()=>a(e=>{let n=p();t(n,x,()=>({title:`内层 Box`,background:`red`,children:(e,n,r)=>{let o=()=>a(e=>{let n=p(),r=d(`span`,n);c(n,r),c(r,l(`嵌套的子元素`)),t(n,x,()=>({title:`内层 Box2`,background:`yellow`,children:(e,n,r)=>{let o=()=>a(e=>{let n=p(),r=d(`span`,n);c(n,r),c(r,l(`嵌套的子元素2`)),t(n,x,()=>({title:`内层 Box3`,background:`green`,children:(e,t,n)=>{let r=()=>_(e=>{let t=p(),n=d(`span`,t);c(t,n),c(n,l(`嵌套的子元素3`));let r=l(``),i=l(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():i(e,n,r)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));let o=l(``),s=l(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));let r=l(``),o=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));return e==null?s():i(e,o,s)},m=s.nextSibling;return u.removeChild(s),e({parent:u,before:m},()=>f,()=>({})),[o,o]}),C=`import { type FC } from '@rue-js/rue'

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
`,w=(e,n,o)=>r(y,()=>({options:{title:`嵌套 children Box`,source:C},children:(e,n,r)=>{let o=()=>a(e=>{let n=p();t(n,S,()=>({}));let r=l(``),i=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));export{w as default};