import{Dn as e,Dt as t,Kt as n,Vt as r,_n as i,ct as a,et as o,qt as s,t as c,vn as l,wn as u,xn as d}from"./rue-runtime-HIMg8Lz8.js";import{t as f}from"./createHomeSplitExamplePage-DNdswIPW.js";var p=l(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2><div class="flex gap-2 items-center mb-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><button class="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white">年龄+1</button></div><p class="text-gray-700">姓名：<!--rue:text-hole:0--></p><p class="text-gray-700">年龄：<!--rue:text-hole:1--></p></div></div>`),m=f({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let[l,f]=n(`UseStateObjectDemo:hook:0`,{name:`小明`,age:18}),m=()=>{f(e=>c(e,{age:e.age+1}))},h=e=>{f(t=>c(t,{name:e.target.value}))},g=e=>{f(t=>c(t,{name:e.target.value}))};return s(()=>a(r(Object.assign(n=>{let r=p().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1].childNodes[0],o=r.childNodes[0].childNodes[1].childNodes[1],s=r.childNodes[0].childNodes[1].childNodes[2],c=r.childNodes[0].childNodes[2].childNodes[1],f=c.parentNode,_=r.childNodes[0].childNodes[3].childNodes[1],v=_.parentNode;a.className=`rounded-md border-gray-300 shadow-sm px-3 py-1`;let y;u(()=>{let e=l.get().name,n=e==null?``:String(e);Object.is(y,n)||(y=n,t(a,n))});let b=e=>{let t=h;typeof t==`function`&&t(e)};a.addEventListener(`input`,b),e(()=>a.removeEventListener(`input`,b)),o.className=`rounded-md border-gray-300 shadow-sm px-3 py-1`;let x;u(()=>{let e=l.get().name,n=e==null?``:String(e);Object.is(x,n)||(x=n,t(o,n))});let S=e=>{let t=g;typeof t==`function`&&t(e)};o.addEventListener(`input`,S),e(()=>o.removeEventListener(`input`,S)),s.className=`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`;let C=e=>{let t=m;typeof t==`function`&&t(e)};s.addEventListener(`click`,C),e(()=>s.removeEventListener(`click`,C));let w=i(``);f.insertBefore(w,c),f.removeChild(c),d(w,()=>l.get().name);let T=i(``);return v.insertBefore(T,_),v.removeChild(_),d(T,()=>l.get().age),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{})))}});export{m as default};