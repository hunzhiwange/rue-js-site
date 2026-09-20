import{Bt as e,P as t,Vt as n,Wt as r,ct as i,gn as a,mn as o,nt as s,sn as c,u as l,un as u,yn as d,zt as f}from"./rue-runtime-BWbIfNT8.js";import{t as p}from"./ExamplePlayground-aNL84Ro_.js";var m=d(`<p class="my-4">返回包含 Signal 句柄的普通对象，可以安全解构句柄；解构 get() 的结果只得到当前值。</p>`),h=d(`<div class="card bg-base-100 p-6 space-y-4"><h2><!--rue:text-hole:0-->: <!--rue:text-hole:1--></h2><p>两倍：<!--rue:text-hole:2--></p><button class="btn">count + 1</button><button class="btn">切换 label</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const count = signal(1)
  const label = signal('Rue')
  const doubled = computed(() => count.get() * 2)
  return <div>
      <h2>{label.get()}: {count.get()}</h2>
      <p>两倍：{doubled.get()}</p>
      <button className="btn" onClick={() => count.update(n => n + 1)}>count + 1</button>
      <button className="btn" onClick={() => label.update(v => v === 'Rue' ? 'Signal' : 'Rue')}>切换 label</button>
  </div>
}`,_=(d,_,v)=>{let y=u(1),b=u(`Rue`),x=i(()=>y.get()*2);return s(()=>t(p,()=>({title:`独立 Signal 与派生值`,source:g,children:(t,i,s)=>{let u=()=>r(t=>{let n=o();n.appendChild(m().content.cloneNode(!0));let r=h().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[2],u=i.childNodes[3],d=i.childNodes[0].childNodes[0],p=d.parentNode,g=i.childNodes[0].childNodes[2],_=g.parentNode,v=i.childNodes[1].childNodes[1],S=v.parentNode;n.appendChild(r),s.setAttribute(`class`,`btn`),c(l(t,s,`click`,()=>()=>y.update(e=>e+1))),u.setAttribute(`class`,`btn`),c(l(t,u,`click`,()=>()=>b.update(e=>e===`Rue`?`Signal`:`Rue`))),e({parent:p,before:d},()=>f(b.get()),()=>({})),e({parent:_,before:g},()=>f(y.get()),()=>({})),e({parent:S,before:v},()=>f(x.get()),()=>({}));let C=a(``),w=a(``);return n.insertBefore(C,n.firstChild),n.appendChild(w),[n.firstChild,n.lastChild]});return t==null?u():n(t,s,u)}})))};export{_ as default};