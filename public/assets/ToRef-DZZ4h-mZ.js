import{Bt as e,Wt as t,Y as n,gn as r,mn as i,sn as a,tt as o,u as s,un as c,yn as l,yt as u,z as d,zt as f}from"./rue-runtime-Cv6BZekS.js";import{t as p}from"./ExamplePlayground-C5_Cdpk2.js";var m=l(`<p class="my-4">使用 get 读取根值，并通过 update 不可变地替换对象。普通对象成员赋值不会自动触发更新。</p>`),h=l(`<div class="card bg-base-100 p-6 space-y-4"><p>姓名：<!--rue:text-hole:0--></p><p>访问次数：<!--rue:text-hole:1-->，两倍：<!--rue:text-hole:2--></p><button class="btn">访问 + 1</button><button class="btn">更新姓名</button></div>`),g=`import { signal, computed } from '@rue-js/rue'

export default function Demo() {
  const profile = signal({ name: 'Rue', visits: 1 })
  const doubled = computed(() => profile.get().visits * 2)
  return <div>
      <p>姓名：{profile.get().name}</p>
      <p>访问次数：{profile.get().visits}，两倍：{doubled.get()}</p>
      <button className="btn" onClick={() => profile.update(value => ({ ...value, visits: value.visits + 1 }))}>访问 + 1</button>
      <button className="btn" onClick={() => profile.update(value => ({ ...value, name: 'Signal' }))}>更新姓名</button>
  </div>
}`,_=(l,_,v)=>{let y=c({name:`Rue`,visits:1}),b=o(()=>y.get().visits*2);return n(()=>(()=>{let n=t(t=>{let n=i(),o=h().content.cloneNode(!0),c=o.firstChild,l=c.childNodes[2],u=c.childNodes[3],d=c.childNodes[0].childNodes[1],p=d.parentNode,m=c.childNodes[1].childNodes[1],g=m.parentNode,_=c.childNodes[1].childNodes[3],v=_.parentNode;n.appendChild(o),l.setAttribute(`class`,`btn`),a(s(t,l,`click`,()=>()=>y.update(e=>({...e,visits:e.visits+1})))),u.setAttribute(`class`,`btn`),a(s(t,u,`click`,()=>()=>y.update(e=>({...e,name:`Signal`})))),e({parent:p,before:d},()=>f(y.get().name),()=>({})),e({parent:g,before:m},()=>f(y.get().visits),()=>({})),e({parent:v,before:_},()=>f(b.get()),()=>({}));let x=r(``),S=r(``);return n.insertBefore(x,n.firstChild),n.appendChild(S),[n.firstChild,n.lastChild]});return d(p,()=>({title:`Signal 路径读写`,source:g,children:[u(e=>{let t=m().content.cloneNode(!0).firstChild;return[t,t]}),n]}))})())};export{_ as default};