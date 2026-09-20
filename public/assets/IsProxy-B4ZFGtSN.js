import{Bt as e,Wt as t,Y as n,gn as r,mn as i,sn as a,tt as o,u as s,un as c,yn as l,yt as u,z as d,zt as f}from"./rue-runtime-Cv6BZekS.js";import{t as p}from"./ExamplePlayground-C5_Cdpk2.js";var m=l(`<p class="my-4">状态容器维护路径依赖图，不创建响应式对象代理。需要给外部函数传数据时显式创建快照，并将结果写回 Signal。</p>`),h=l(`<div class="card bg-base-100 p-6 space-y-4"><p>根值：<!--rue:text-hole:0-->，两倍：<!--rue:text-hole:1--></p><button class="btn">计数 + 1</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const state = signal({ count: 1 })
  const doubled = computed(() => state.get().count * 2)
  return <div>
      <p>根值：{state.get().count}，两倍：{doubled.get()}</p>
      <button className="btn" onClick={() => state.update(value => ({ ...value, count: value.count + 1 }))}>计数 + 1</button>
  </div>
}`,_=(l,_,v)=>{let y=c({count:1}),b=o(()=>y.get().count*2);return n(()=>(()=>{let n=t(t=>{let n=i(),o=h().content.cloneNode(!0),c=o.firstChild,l=c.childNodes[1],u=c.childNodes[0].childNodes[1],d=u.parentNode,p=c.childNodes[0].childNodes[3],m=p.parentNode;n.appendChild(o),l.setAttribute(`class`,`btn`),a(s(t,l,`click`,()=>()=>y.update(e=>({...e,count:e.count+1})))),e({parent:d,before:u},()=>f(y.get().count),()=>({})),e({parent:m,before:p},()=>f(b.get()),()=>({}));let g=r(``),_=r(``);return n.insertBefore(g,n.firstChild),n.appendChild(_),[n.firstChild,n.lastChild]});return d(p,()=>({title:`无代理状态模型`,source:g,children:[u(e=>{let t=m().content.cloneNode(!0).firstChild;return[t,t]}),n]}))})())};export{_ as default};