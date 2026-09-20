import{Bt as e,P as t,Vt as n,Wt as r,ct as i,gn as a,mn as o,nt as s,sn as c,u as l,un as u,yn as d,zt as f}from"./rue-runtime-BWbIfNT8.js";import{t as p}from"./ExamplePlayground-aNL84Ro_.js";var m=d(`<p class="my-4">不带 setter 的 computed 只提供派生读取。对象的 TypeScript Readonly 类型只约束类型检查，不会创建运行时只读代理。</p>`),h=d(`<div class="card bg-base-100 p-6 space-y-4"><p>源值：<!--rue:text-hole:0-->，只读派生值：<!--rue:text-hole:1--></p><button class="btn">源值 + 1</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const count = signal(1)
  const doubled = computed(() => count.get() * 2)
  return <div>
      <p>源值：{count.get()}，只读派生值：{doubled.get()}</p>
      <button className="btn" onClick={() => count.update(n => n + 1)}>源值 + 1</button>
  </div>
}`,_=(d,_,v)=>{let y=u(1),b=i(()=>y.get()*2);return s(()=>t(p,()=>({title:`只读派生值`,source:g,children:(t,i,s)=>{let u=()=>r(t=>{let n=o();n.appendChild(m().content.cloneNode(!0));let r=h().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[1],u=i.childNodes[0].childNodes[1],d=u.parentNode,p=i.childNodes[0].childNodes[3],g=p.parentNode;n.appendChild(r),s.setAttribute(`class`,`btn`),c(l(t,s,`click`,()=>()=>y.update(e=>e+1))),e({parent:d,before:u},()=>f(y.get()),()=>({})),e({parent:g,before:p},()=>f(b.get()),()=>({}));let _=a(``),v=a(``);return n.insertBefore(_,n.firstChild),n.appendChild(v),[n.firstChild,n.lastChild]});return t==null?u():n(t,s,u)}})))};export{_ as default};