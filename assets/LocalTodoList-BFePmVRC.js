import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,at as d,d as f,ht as p,l as m,mt as h,nt as g,ut as _,z as v}from"./vapor-runtime-Dfq7aA8z.js";import{a as y,n as b}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as x}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var S=()=>y(`reactive:1:0`,()=>d({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const createTodoState = () =>
  reactive({
    todos: [
      { id: 1, text: '学习响应式框架', completed: false },
      { id: 2, text: '编写示例代码', completed: true },
      { id: 3, text: '测试功能', completed: false },
    ] as Todo[],
    newTodo: '',
  })

const LocalTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const [todoViews] = useState(() =>
    computed(() => {
      const items: Todo[] = []

      for (let index = 0; index < state.todos.length; index += 1) {
        items.push(state.todos[index])
      }

      return items
    }),
  )
  const [completedCount] = useState(() =>
    computed(() => todoViews.get().filter(todo => todo.completed).length),
  )

  const addTodo = () => {
    if (!state.newTodo.trim()) {
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
      state.todos[index].completed = !state.todos[index].completed
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
        <h2 className="text-2xl font-semibold mb-3">本地待办事项</h2>
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
          {todoViews.get().map(todo => (
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

export default LocalTodoListDemo`,Demo:()=>{let{state:d,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>h(()=>{let[e]=y(`useState:1:1`,()=>p(S)),[t]=y(`useState:1:3`,()=>p(()=>y(`computed:1:2`,()=>g(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1)t.push(e.todos[n]);return t})))),[n]=y(`useState:1:5`,()=>p(()=>y(`computed:1:4`,()=>g(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return f(p=>{let h=r(`div`,p);n(h,`card bg-base-100 shadow`);let g=r(`div`,h);a(h,g),n(g,`card-body`);let y=r(`h2`,g);a(g,y),n(y,`text-2xl font-semibold mb-3`),a(y,s(`本地待办事项`));let S=r(`div`,g);a(g,S),n(S,`flex items-center gap-2 mb-3`);let D=r(`input`,S);a(S,D),c(D,`type`,`text`),c(D,`placeholder`,`输入待办事项`),u(()=>{l(D,d.newTodo)}),i(D,`input`,e=>{d.newTodo=e.target.value}),i(D,`keypress`,e=>{e.key===`Enter`&&w()}),n(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=r(`button`,S);a(S,O),n(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),i(O,`click`,w),a(O,s(`添加`));let k=r(`div`,g);a(g,k);let A=e(`rue:list:start`),j=e(`rue:list:end`);a(k,A),a(k,j);let M=new Map;u(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(o,l,d,p,h)=>{m(f(()=>{let l=t(),d=r(`div`,l);a(l,d),u(()=>{c(d,`key`,String(o.id))}),u(()=>{n(d,String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${o.completed?`bg-gray-50`:`bg-white`}`))});let f=r(`span`,d);a(d,f),i(f,`click`,()=>T(o.id)),u(()=>{n(f,String(`cursor-pointer ${o.completed?`line-through text-gray-500`:`text-gray-800`}`))});let p=e(`rue:slot:anchor`);a(f,p),u(()=>{let e=o.text;_(()=>m(e,f,p))});let h=r(`button`,d);return a(d,h),n(h,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),i(h,`click`,()=>E(o.id)),a(h,s(`删除`)),l}),l,d)}})});let N=r(`p`,g);a(g,N);let P=v(N);return a(N,P),u(()=>{o(P,`总计: ${d.todos.length} | 已完成: ${C.get()}`)}),h})}});export{C as default};