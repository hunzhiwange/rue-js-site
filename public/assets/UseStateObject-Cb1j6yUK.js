import{$t as e,Q as t,Z as n,_t as r,an as i,dt as a,et as o,in as s,l as c,nt as l,o as u,rt as d,zt as f}from"./vapor-runtime-DsQWl-IB.js";import{a as p}from"./vapor-helpers-vapor-Dg64FcpK.js";import{r as m}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as h}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>s(()=>{let[e,t]=p(`useState:1:0`,()=>i({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(i=>{let s=l(`div`,i);a(s,`card bg-base-100 shadow`);let c=l(`div`,s);t(s,c),a(c,`card-body`);let p=l(`h2`,c);t(c,p),a(p,`text-2xl font-semibold text-amber-600 mb-3`),t(p,d(`useState 对象示例`));let m=l(`div`,c);t(c,m),a(m,`flex gap-2 items-center mb-2`);let g=l(`input`,m);t(m,g),a(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),f(()=>{r(g,h.name)}),n(g,`input`,v);let b=l(`input`,m);t(m,b),a(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),f(()=>{r(b,h.name)}),n(b,`input`,y);let x=l(`button`,m);t(m,x),a(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),n(x,`click`,_),t(x,d(`年龄+1`));let S=l(`p`,c);t(c,S),a(S,`text-gray-700`),t(S,d(`姓名：`));let C=o(`rue:slot:anchor`);t(S,C),f(()=>{let t=h.name;e(()=>u(t,S,C))});let w=l(`p`,c);t(c,w),a(w,`text-gray-700`),t(w,d(`年龄：`));let T=o(`rue:slot:anchor`);return t(w,T),f(()=>{let t=h.age;e(()=>u(t,w,T))}),s})}});export{g as default};