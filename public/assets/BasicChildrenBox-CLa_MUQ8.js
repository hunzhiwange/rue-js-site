import{Et as e,K as t,W as n,_n as r,b as i,bn as a,fn as o,gn as s,hn as c,mn as l,nt as u,q as d,wn as f,x as p,z as m}from"./rue-runtime-CwEGJ854.js";import{t as h}from"./createHomeSplitExamplePage-DuLZTUZH.js";var g=r(`<div class="box"><h3><!--rue:text-hole:0--></h3><div class="content"><!--rue:text-hole:1--></div></div>`),_=r(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold">基础 children Box</h2><!--rue:opaque-hole:0--></div></div>`),v=t=>{let r=n(t.background),o=n(t.children),c=n(t.title);return d(e(Object.assign(e=>{let t=g().content.cloneNode(!0).firstChild,n=t,l=t.childNodes[0],u=t.childNodes[0].childNodes[0],d=u.parentNode,p=t.childNodes[1].childNodes[0],m=p.parentNode;n.className=`box`;let h;f(()=>{let e=`1px solid #ddd`;Object.is(h,e)||(h=e,n.style.border=e)});let _;f(()=>{let e=`12px`;Object.is(_,e)||(_=e,n.style.padding=e)});let v;f(()=>{let e=`12px`;Object.is(v,e)||(v=e,n.style.marginBottom=e)});let y;f(()=>{let e=r.get(),t=e==null?``:String(e);Object.is(y,t)||(y=t,n.style.background=t)}),Object.assign(l.style,{margin:`0 0 8px`});let b=s(``);return d.insertBefore(b,u),d.removeChild(u),a(b,()=>c.get()),i({parent:m,before:p},()=>o.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{r.set(e.background),o.set(e.children),c.set(e.title)}),()=>t)},y=h({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>d(e(Object.assign(n=>{let r=_().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,d=l(a);return t(d,v,()=>({title:`基本 children`,background:`purple`,children:[(t,n,r)=>p(t,r,()=>e(Object.assign(e=>{let t=u(),n=c(`p`,t);return o(t,n),o(n,s(`这是子内容 A`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>p(t,r,()=>e(Object.assign(e=>{let t=u(),n=c(`p`,t);return o(t,n),o(n,s(`这是子内容 B`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),a.insertBefore(d,i),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{}))});export{y as default};