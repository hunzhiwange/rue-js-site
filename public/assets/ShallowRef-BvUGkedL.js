import{Bt as e,H as t,V as n,Vt as r,Wt as i,Y as a,ct as o,gn as s,mn as c,sn as l,u,yn as d,zt as f}from"./rue-runtime-Cv6BZekS.js";import{t as p}from"./createHomeSplitExamplePage-DqLcVC_n.js";var m=d(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">shallowRef 只追踪 .value</h2><p class="text-base-content/70 leading-7">直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。</p><div class="mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2"><div class="text-lg font-medium">当前渲染值：<!--rue:text-hole:0--></div><div>最近操作：<!--rue:text-hole:1--></div><div>内部对象保持普通对象；替换根值触发更新。</div></div><div class="mt-4 flex flex-wrap gap-2"><button class="rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200">仅修改内部对象</button><button class="rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200">整体替换 .value</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),h=(t,n,r)=>{let s=o({count:0,note:`等待操作`});return a(()=>i(t=>{let n=m().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[3].childNodes[0],i=n.childNodes[0].childNodes[3].childNodes[1],a=n.childNodes[0].childNodes[3].childNodes[2],o=n.childNodes[0].childNodes[2].childNodes[0].childNodes[1],c=o.parentNode,d=n.childNodes[0].childNodes[2].childNodes[1].childNodes[1],p=d.parentNode;return r.setAttribute(`class`,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),l(u(t,r,`click`,()=>()=>{s.value.count+=1,s.value.note=`仅修改内部对象`})),i.setAttribute(`class`,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),l(u(t,i,`click`,()=>()=>{s.value={count:s.value.count+1,note:`整体替换 .value`}})),a.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),l(u(t,a,`click`,()=>()=>{s.value={count:0,note:`已重置`}})),e({parent:c,before:o},()=>f(s.value.count),()=>({})),e({parent:p,before:d},()=>f(s.value.note),()=>({})),[n,n]}))},g=`import { type FC, shallowRef } from '@rue-js/rue'

const ShallowRefDemo: FC = () => {
  const state = shallowRef({ count: 0, note: '等待操作' })

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">shallowRef 只追踪 .value</h2>
        <p className="text-base-content/70 leading-7">
          直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect
          和视图才会重新运行。
        </p>

        <div className="mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2">
          <div className="text-lg font-medium">当前渲染值：{state.value.count}</div>
          <div>最近操作：{state.value.note}</div>
          <div>内部对象保持普通对象；替换根值触发更新。</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200"
            onClick={() => {
              state.value.count += 1
              state.value.note = '仅修改内部对象'
            }}
          >
            仅修改内部对象
          </button>
          <button
            className="rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200"
            onClick={() => {
              state.value = {
                count: state.value.count + 1,
                note: '整体替换 .value',
              }
            }}
          >
            整体替换 .value
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.value = {
                count: 0,
                note: '已重置',
              }
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShallowRefDemo
`,_=(e,a,o)=>n(p,()=>({options:{title:`shallowRef 浅层 ref`,source:g},children:(e,n,a)=>{let o=()=>i(e=>{let n=c();t(n,h,()=>({}));let r=s(``),i=s(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?o():r(e,a,o)}}));export{_ as default};