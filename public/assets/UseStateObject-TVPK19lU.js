import{L as e,Lt as t,Mt as n,Y as r,_n as i,ft as a,ht as o,jt as s,kn as c,nt as l,q as u,t as d,wn as f,z as p}from"./rue-runtime-CwEGJ854.js";import{t as m}from"./createHomeSplitExamplePage-DuLZTUZH.js";var h=i(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2><div class="flex gap-2 items-center mb-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><button class="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white">年龄+1</button></div><p class="text-gray-700">姓名：<!--rue:text-hole:0--></p><p class="text-gray-700">年龄：<!--rue:text-hole:1--></p></div></div>`),g=m({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let[i,m]=s(`UseStateObjectDemo:hook:0`,{name:`小明`,age:18}),g=()=>{m(e=>d(e,{age:e.age+1}))},_=e=>{m(t=>d(t,{name:e.target.value}))},v=e=>{m(t=>d(t,{name:e.target.value}))};return n(()=>u(o(()=>{let n=l(),o=h().content.cloneNode(!0),s=o.firstChild,u=s.childNodes[0].childNodes[1].childNodes[0],d=s.childNodes[0].childNodes[1].childNodes[1],p=s.childNodes[0].childNodes[1].childNodes[2],m=s.childNodes[0].childNodes[2].childNodes[1],y=m.parentNode,b=s.childNodes[0].childNodes[3].childNodes[1],x=b.parentNode;n.appendChild(o),e(u,`rounded-md border-gray-300 shadow-sm px-3 py-1`),f(()=>{a(u,i.name)});let S=e=>{let t=_;typeof t==`function`&&t(e)};u.addEventListener(`input`,S),t(()=>u.removeEventListener(`input`,S)),e(d,`rounded-md border-gray-300 shadow-sm px-3 py-1`),f(()=>{a(d,i.name)});let C=e=>{let t=v;typeof t==`function`&&t(e)};d.addEventListener(`input`,C),t(()=>d.removeEventListener(`input`,C)),e(p,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`);let w=e=>{let t=g;typeof t==`function`&&t(e)};return p.addEventListener(`click`,w),t(()=>p.removeEventListener(`click`,w)),f(()=>{let e=i.name;c(()=>r(e,y,m))}),f(()=>{let e=i.age;c(()=>r(e,x,b))}),n},!0),e=>p(()=>{})))}});export{g as default};