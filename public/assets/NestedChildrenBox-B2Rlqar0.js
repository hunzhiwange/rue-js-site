import{E as e,T as t,Vt as n,_n as r,_t as i,at as a,ct as o,et as s,gn as c,hn as l,pn as u,st as d,vn as f,wn as p,xn as m}from"./rue-runtime-HIMg8Lz8.js";import{t as h}from"./createHomeSplitExamplePage-DNdswIPW.js";var g=f(`<div class="box"><h3><!--rue:text-hole:0--></h3><div class="content"><!--rue:text-hole:1--></div></div>`),_=f(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold">嵌套 children Box</h2><!--rue:opaque-hole:0--></div></div>`),v=e=>{let i=a(e.background),c=a(e.children),l=a(e.title);return o(n(Object.assign(e=>{let n=g().content.cloneNode(!0).firstChild,a=n,o=n.childNodes[0],s=n.childNodes[0].childNodes[0],u=s.parentNode,d=n.childNodes[1].childNodes[0],f=d.parentNode;a.className=`box`;let h;p(()=>{let e=`1px solid #ddd`;Object.is(h,e)||(h=e,a.style.border=e)});let _;p(()=>{let e=`12px`;Object.is(_,e)||(_=e,a.style.padding=e)});let v;p(()=>{let e=`12px`;Object.is(v,e)||(v=e,a.style.marginBottom=e)});let y;p(()=>{let e=i.get(),t=e==null?``:String(e);Object.is(y,t)||(y=t,a.style.background=t)}),Object.assign(o.style,{margin:`0 0 8px`});let b=r(``);return u.insertBefore(b,s),u.removeChild(s),m(b,()=>l.get()),t({parent:f,before:d},()=>c.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{i.set(e.background),c.set(e.children),l.set(e.title)}),()=>e)},y=h({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(n(Object.assign(t=>{let a=_().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1],s=o.parentNode,f=l(s);return d(f,v,()=>({title:`嵌套 children`,background:`blue`,children:(t,a,o)=>e(t,o,()=>n(Object.assign(t=>{let a=i();return d(a,v,()=>({title:`内层 Box`,background:`red`,children:[(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i(),n=c(`span`,t);return u(t,n),u(n,r(`嵌套的子元素`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,a,o)=>e(t,o,()=>n(Object.assign(t=>{let a=i();return d(a,v,()=>({title:`内层 Box2`,background:`yellow`,children:[(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i(),n=c(`span`,t);return u(t,n),u(n,r(`嵌套的子元素2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,a,o)=>e(t,o,()=>n(Object.assign(t=>{let a=i();return d(a,v,()=>({title:`内层 Box3`,background:`green`,children:(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i(),n=c(`span`,t);return u(t,n),u(n,r(`嵌套的子元素3`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(f,o),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{}))});export{y as default};