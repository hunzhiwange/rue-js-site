import{Bt as e,V as t,Vt as n,Wt as r,Y as i,gn as a,mn as o,sn as s,tt as c,u as l,un as u,yn as d,zt as f}from"./rue-runtime-Cv6BZekS.js";import{t as p}from"./ExamplePlayground-C5_Cdpk2.js";var m=d(`<p class="my-4">不带 setter 的 computed 只提供派生读取。对象的 TypeScript Readonly 类型只约束类型检查，不会创建运行时只读代理。</p>`),h=d(`<div class="card bg-base-100 p-6 space-y-4"><p>源值：<!--rue:text-hole:0-->，只读派生值：<!--rue:text-hole:1--></p><button class="btn">源值 + 1</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const count = signal(1)
  const doubled = computed(() => count.get() * 2)
  return <div>
      <p>源值：{count.get()}，只读派生值：{doubled.get()}</p>
      <button className="btn" onClick={() => count.update(n => n + 1)}>源值 + 1</button>
  </div>
}`,_=(d,_,v)=>{let y=u(1),b=c(()=>y.get()*2);return i(()=>t(p,()=>({title:`只读派生值`,source:g,children:(t,i,c)=>{let u=()=>r(t=>{let n=o();n.appendChild(m().content.cloneNode(!0));let r=h().content.cloneNode(!0),i=r.firstChild,c=i.childNodes[1],u=i.childNodes[0].childNodes[1],d=u.parentNode,p=i.childNodes[0].childNodes[3],g=p.parentNode;n.appendChild(r),c.setAttribute(`class`,`btn`),s(l(t,c,`click`,()=>()=>y.update(e=>e+1))),e({parent:d,before:u},()=>f(y.get()),()=>({})),e({parent:g,before:p},()=>f(b.get()),()=>({}));let _=a(``),v=a(``);return n.insertBefore(_,n.firstChild),n.appendChild(v),[n.firstChild,n.lastChild]});return t==null?u():n(t,c,u)}})))};export{_ as default};