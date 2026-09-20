import{F as e,Gt as t,Kt as n,P as r,Qt as i,Vt as a,Wt as o,a as s,gn as c,in as l,mn as u,nt as d,sn as f,st as p,yn as m}from"./rue-runtime-BWbIfNT8.js";import{t as h}from"./createHomeSplitExamplePage-Cjn7V321.js";var g=t([`name`],[!1]),_=t([`age`],[!1]),v=m(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2><div class="flex gap-2 items-center mb-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><button class="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white">年龄+1</button></div><p class="text-gray-700">姓名：<!--rue:text-hole:0--></p><p class="text-gray-700">年龄：<!--rue:text-hole:1--></p></div></div>`),y=(e,t,r)=>{let[a,u]=p(`UseStateObjectDemo:hook:0`,{name:`小明`,age:18}),m=()=>{u(e=>s(e,{age:e.age+1}))},h=e=>{u(t=>s(t,{name:e.target.value}))},y=e=>{u(t=>s(t,{name:e.target.value}))};return d(()=>o(e=>{let t=v().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[1].childNodes[1],s=t.childNodes[0].childNodes[1].childNodes[2],u=t.childNodes[0].childNodes[2].childNodes[1],d=u.parentNode,p=t.childNodes[0].childNodes[3].childNodes[1],b=p.parentNode;r.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1`);let x;l(()=>{let e=n(a,g),t=e==null?``:String(e);Object.is(x,t)||(x=t,r.value=t)});let S=e=>{let t=h;typeof t==`function`&&t(e)};r.addEventListener(`input`,S),f(()=>r.removeEventListener(`input`,S)),o.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1`);let C;l(()=>{let e=n(a,g),t=e==null?``:String(e);Object.is(C,t)||(C=t,o.value=t)});let w=e=>{let t=y;typeof t==`function`&&t(e)};o.addEventListener(`input`,w),f(()=>o.removeEventListener(`input`,w)),s.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`);let T=e=>{let t=m;typeof t==`function`&&t(e)};s.addEventListener(`click`,T),f(()=>s.removeEventListener(`click`,T));let E=c(``);d.insertBefore(E,u),d.removeChild(u),i(E,()=>n(a,g));let D=c(``);return b.insertBefore(D,p),b.removeChild(p),i(D,()=>n(a,_)),[t,t]}))},b=`import { type FC, useState } from '@rue-js/rue'
import { extend } from '@rue-js/shared'

const UseStateObjectDemo: FC = () => {
  const [profile, setProfile] = useState<{ name: string; age: number }>({
    name: '小明',
    age: 18,
  })

  const increaseAge = () => {
    setProfile(previous => extend(previous, { age: previous.age + 1 }))
  }

  const changeName = (event: any) => {
    setProfile(previous => extend(previous, { name: (event.target as HTMLInputElement).value }))
  }

  const changeNameMirror = (event: any) => {
    setProfile(previous => extend(previous, { name: (event.target as HTMLInputElement).value }))
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2>
        <div className="flex gap-2 items-center mb-2">
          <input
            className="rounded-md border-gray-300 shadow-sm px-3 py-1"
            value={profile.name}
            onInput={changeName}
          />
          <input
            className="rounded-md border-gray-300 shadow-sm px-3 py-1"
            value={profile.name}
            onInput={changeNameMirror}
          />
          <button
            className="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white"
            onClick={increaseAge}
          >
            年龄+1
          </button>
        </div>
        <p className="text-gray-700">姓名：{profile.name}</p>
        <p className="text-gray-700">年龄：{profile.age}</p>
      </div>
    </div>
  )
}

export default UseStateObjectDemo
`,x=(t,n,i)=>r(h,()=>({options:{title:`useState 对象`,source:b},children:(t,n,r)=>{let i=()=>o(t=>{let n=u();e(n,y,()=>({}));let r=c(``),i=c(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():a(t,r,i)}}));export{x as default};