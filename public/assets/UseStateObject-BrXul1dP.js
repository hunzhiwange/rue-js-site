import{Gt as e,H as t,Kt as n,Qt as r,V as i,Vt as a,Wt as o,Y as s,a as c,et as l,gn as u,in as d,mn as f,sn as p,yn as m}from"./rue-runtime-Cv6BZekS.js";import{t as h}from"./createHomeSplitExamplePage-DqLcVC_n.js";var g=e([`name`],[!1]),_=e([`age`],[!1]),v=m(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2><div class="flex gap-2 items-center mb-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1"><button class="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white">年龄+1</button></div><p class="text-gray-700">姓名：<!--rue:text-hole:0--></p><p class="text-gray-700">年龄：<!--rue:text-hole:1--></p></div></div>`),y=(e,t,i)=>{let[a,f]=l(`UseStateObjectDemo:hook:0`,{name:`小明`,age:18}),m=()=>{f(e=>c(e,{age:e.age+1}))},h=e=>{f(t=>c(t,{name:e.target.value}))},y=e=>{f(t=>c(t,{name:e.target.value}))};return s(()=>o(e=>{let t=v().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[1].childNodes[1],s=t.childNodes[0].childNodes[1].childNodes[2],c=t.childNodes[0].childNodes[2].childNodes[1],l=c.parentNode,f=t.childNodes[0].childNodes[3].childNodes[1],b=f.parentNode;i.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1`);let x;d(()=>{let e=n(a,g),t=e==null?``:String(e);Object.is(x,t)||(x=t,i.value=t)});let S=e=>{let t=h;typeof t==`function`&&t(e)};i.addEventListener(`input`,S),p(()=>i.removeEventListener(`input`,S)),o.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1`);let C;d(()=>{let e=n(a,g),t=e==null?``:String(e);Object.is(C,t)||(C=t,o.value=t)});let w=e=>{let t=y;typeof t==`function`&&t(e)};o.addEventListener(`input`,w),p(()=>o.removeEventListener(`input`,w)),s.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`);let T=e=>{let t=m;typeof t==`function`&&t(e)};s.addEventListener(`click`,T),p(()=>s.removeEventListener(`click`,T));let E=u(``);l.insertBefore(E,c),l.removeChild(c),r(E,()=>n(a,g));let D=u(``);return b.insertBefore(D,f),b.removeChild(f),r(D,()=>n(a,_)),[t,t]}))},b=`import { type FC, useState } from '@rue-js/rue'
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
`,x=(e,n,r)=>i(h,()=>({options:{title:`useState 对象`,source:b},children:(e,n,r)=>{let i=()=>o(e=>{let n=f();t(n,y,()=>({}));let r=u(``),i=u(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{x as default};