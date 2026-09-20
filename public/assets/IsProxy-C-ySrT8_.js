import{Bt as e,M as t,V as n,Wt as r,ct as i,gn as a,mn as o,nt as s,sn as c,u as l,un as u,yn as d,zt as f}from"./rue-runtime-BWbIfNT8.js";import{t as p}from"./ExamplePlayground-aNL84Ro_.js";var m=d(`<p class="my-4">状态容器维护路径依赖图，不创建响应式对象代理。需要给外部函数传数据时显式创建快照，并将结果写回 Signal。</p>`),h=d(`<div class="card bg-base-100 p-6 space-y-4"><p>根值：<!--rue:text-hole:0-->，两倍：<!--rue:text-hole:1--></p><button class="btn">计数 + 1</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const state = signal({ count: 1 })
  const doubled = computed(() => state.get().count * 2)
  return <div>
      <p>根值：{state.get().count}，两倍：{doubled.get()}</p>
      <button className="btn" onClick={() => state.update(value => ({ ...value, count: value.count + 1 }))}>计数 + 1</button>
  </div>
}`,_=(d,_,v)=>{let y=u({count:1}),b=i(()=>y.get().count*2);return s(()=>(()=>{let i=r(t=>{let n=o(),r=h().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[1],u=i.childNodes[0].childNodes[1],d=u.parentNode,p=i.childNodes[0].childNodes[3],m=p.parentNode;n.appendChild(r),s.setAttribute(`class`,`btn`),c(l(t,s,`click`,()=>()=>y.update(e=>({...e,count:e.count+1})))),e({parent:d,before:u},()=>f(y.get().count),()=>({})),e({parent:m,before:p},()=>f(b.get()),()=>({}));let g=a(``),_=a(``);return n.insertBefore(g,n.firstChild),n.appendChild(_),[n.firstChild,n.lastChild]});return t(p,()=>({title:`无代理状态模型`,source:g,children:[n(e=>{let t=m().content.cloneNode(!0).firstChild;return[t,t]}),i]}))})())};export{_ as default};