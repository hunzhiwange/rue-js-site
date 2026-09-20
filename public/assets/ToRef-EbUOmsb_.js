import{Bt as e,M as t,V as n,Wt as r,ct as i,gn as a,mn as o,nt as s,sn as c,u as l,un as u,yn as d,zt as f}from"./rue-runtime-BWbIfNT8.js";import{t as p}from"./ExamplePlayground-aNL84Ro_.js";var m=d(`<p class="my-4">使用 get 读取根值，并通过 update 不可变地替换对象。普通对象成员赋值不会自动触发更新。</p>`),h=d(`<div class="card bg-base-100 p-6 space-y-4"><p>姓名：<!--rue:text-hole:0--></p><p>访问次数：<!--rue:text-hole:1-->，两倍：<!--rue:text-hole:2--></p><button class="btn">访问 + 1</button><button class="btn">更新姓名</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const profile = signal({ name: 'Rue', visits: 1 })
  const doubled = computed(() => profile.get().visits * 2)
  return <div>
      <p>姓名：{profile.get().name}</p>
      <p>访问次数：{profile.get().visits}，两倍：{doubled.get()}</p>
      <button className="btn" onClick={() => profile.update(value => ({ ...value, visits: value.visits + 1 }))}>访问 + 1</button>
      <button className="btn" onClick={() => profile.update(value => ({ ...value, name: 'Signal' }))}>更新姓名</button>
  </div>
}`,_=(d,_,v)=>{let y=u({name:`Rue`,visits:1}),b=i(()=>y.get().visits*2);return s(()=>(()=>{let i=r(t=>{let n=o(),r=h().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[2],u=i.childNodes[3],d=i.childNodes[0].childNodes[1],p=d.parentNode,m=i.childNodes[1].childNodes[1],g=m.parentNode,_=i.childNodes[1].childNodes[3],v=_.parentNode;n.appendChild(r),s.setAttribute(`class`,`btn`),c(l(t,s,`click`,()=>()=>y.update(e=>({...e,visits:e.visits+1})))),u.setAttribute(`class`,`btn`),c(l(t,u,`click`,()=>()=>y.update(e=>({...e,name:`Signal`})))),e({parent:p,before:d},()=>f(y.get().name),()=>({})),e({parent:g,before:m},()=>f(y.get().visits),()=>({})),e({parent:v,before:_},()=>f(b.get()),()=>({}));let x=a(``),S=a(``);return n.insertBefore(x,n.firstChild),n.appendChild(S),[n.firstChild,n.lastChild]});return t(p,()=>({title:`Signal 路径读写`,source:g,children:[n(e=>{let t=m().content.cloneNode(!0).firstChild;return[t,t]}),i]}))})())};export{_ as default};