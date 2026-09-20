import{Bt as e,Gt as t,H as n,Kt as r,V as i,Vt as a,Wt as o,Xt as s,Y as c,Yt as l,Zt as u,et as d,f,fn as p,gn as m,h,hn as g,in as _,mn as v,p as y,pn as b,qt as x,sn as S,tt as C,u as w,vt as T,yn as E,zt as D}from"./rue-runtime-Cv6BZekS.js";import{t as O}from"./createHomeSplitExamplePage-DqLcVC_n.js";var k=t([`newTodo`],[!1]),A=t([`todos`],[!1]),j=t([`todos`,`length`],[!1,!1]),M=E(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">基础待办事项</h2><div class="flex items-center gap-2 mb-3"><input type="text" placeholder="输入待办事项" class="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"><button class="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200">添加</button></div><div><!--rue:text-hole:0--></div><p><!--rue:text-hole:1--></p></div></div>`),N=()=>({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``}),P=(t,n,i)=>{let[v]=d(`BasicTodoListDemo:hook:0`,N),E=C(()=>v.get().todos.filter(e=>e.completed).length),O=()=>{`${v.get().newTodo}`.trim()&&(s(l(u(v))(`todos`),`push`)({id:Date.now(),text:r(v,k),completed:!1}),l(u(v))(`newTodo`).value=``)},P=e=>{let t=v.get().todos.findIndex(t=>t.id===e);t!==-1&&(l(l(u(v))(`todos`))(t).value={...r(v,A)[t],completed:!r(v,A)[t].completed})},F=e=>{let t=v.get().todos.findIndex(t=>t.id===e);t!==-1&&s(l(u(v))(`todos`),`splice`)(t,1)};return c(()=>o(t=>{let n=M().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],s=n.childNodes[0].childNodes[1].childNodes[1],c=n.childNodes[0].childNodes[2].childNodes[0],d=c.parentNode,C=n.childNodes[0].childNodes[3].childNodes[0],A=C.parentNode;i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`输入待办事项`);let N;_(()=>{let e=r(v,k),t=e==null?``:String(e);Object.is(N,t)||(N=t,i.value=t)});let I=e=>{let t=e=>{l(u(v))(`newTodo`).value=e.target.value};typeof t==`function`&&t(e)};i.addEventListener(`input`,I),S(()=>i.removeEventListener(`input`,I));let L=e=>{let t=e=>{e.key===`Enter`&&O()};typeof t==`function`&&t(e)};i.addEventListener(`keypress`,L),S(()=>i.removeEventListener(`keypress`,L)),i.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),s.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`);let R=e=>{let t=O;typeof t==`function`&&t(e)};s.addEventListener(`click`,R),S(()=>s.removeEventListener(`click`,R));let z=[];return x(()=>{let t=v.get().todos||[];z=h(d,c,z,t,(e,t)=>e.id,(t,n)=>{let r=T(t);return y((t,n,i)=>{let s=()=>o(t=>{let n=g(`div`,t),i;_(()=>{let e=`flex items-center justify-between rounded-lg border p-3 mb-2 ${r.get().completed?`bg-gray-50`:`bg-white`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let a=g(`span`,n);p(n,a),S(w(t,a,`click`,()=>()=>P(r.get().id)));let o;_(()=>{let e=`cursor-pointer ${r.get().completed?`line-through text-gray-500`:`text-gray-800`}`,t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,a.setAttribute(`class`,t))});let s=b(`rue:compiled-slot`);p(a,s),e({parent:a,before:s},()=>D(r.get().text),()=>({}));let c=g(`button`,n);return p(n,c),c.setAttribute(`class`,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),S(w(t,c,`click`,()=>()=>F(r.get().id))),p(c,m(`删除`)),[n,n]});return t==null?s():a(t,i,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),S(()=>f(z)),e({parent:A,before:C},()=>D(`总计: ${r(v,j)} | 已完成: ${E.get()}`),()=>({})),[n,n]}))},F=`import { type FC, computed, useState } from '@rue-js/rue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const createTodoState = () => ({
  todos: [
    { id: 1, text: '学习响应式框架', completed: false },
    { id: 2, text: '编写示例代码', completed: true },
    { id: 3, text: '测试功能', completed: false },
  ] as Todo[],
  newTodo: '',
})

const BasicTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const completedCount = computed(() => state.todos.filter(todo => todo.completed).length)

  const addTodo = () => {
    if (!\`\${state.newTodo}\`.trim()) {
      return
    }

    state.todos.push({
      id: Date.now(),
      text: state.newTodo,
      completed: false,
    })
    state.newTodo = ''
  }

  const toggleTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], completed: !state.todos[index].completed }
    }
  }

  const deleteTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">基础待办事项</h2>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="输入待办事项"
            value={state.newTodo}
            onInput={(event: any) => {
              state.newTodo = (event.target as HTMLInputElement).value
            }}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') addTodo()
            }}
            className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          />
          <button
            className="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200"
            onClick={addTodo}
          >
            添加
          </button>
        </div>
        <div>
          {state.todos.map(todo => (
            <div
              key={todo.id}
              className={\`flex items-center justify-between rounded-lg border p-3 mb-2 \${todo.completed ? 'bg-gray-50' : 'bg-white'}\`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={\`cursor-pointer \${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}\`}
              >
                {todo.text}
              </span>
              <button
                className="rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </div>
          ))}
        </div>
        <p>{\`总计: \${state.todos.length} | 已完成: \${completedCount.get()}\`}</p>
      </div>
    </div>
  )
}

export default BasicTodoListDemo
`,I=(e,t,r)=>i(O,()=>({options:{title:`基础待办事项`,source:F},children:(e,t,r)=>{let i=()=>o(e=>{let t=v();n(t,P,()=>({}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));export{I as default};