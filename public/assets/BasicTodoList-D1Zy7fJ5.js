import{Cn as e,Ct as t,Kt as n,Lt as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,jt as l,mt as u,ot as d,pt as f,st as p,tn as m,vn as h,wn as g}from"./context-8lXZvIn-.js";import{l as _,o as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var S=()=>y(`reactive:1:0`,()=>n({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`基础待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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

const BasicTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const [todoViews] = useState(() =>
    computed(() => {
      const items: Todo[] = []

      for (let index = 0; index < state.todos.length; index += 1) {
        const todo = state.todos[index]
        if (todo !== undefined && todo !== null) {
          items.push(todo)
        }
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

export default BasicTodoListDemo
`,Demo:()=>{let{state:n,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>e(()=>{let[e]=y(`useState:1:1`,()=>g(S)),[t]=y(`useState:1:3`,()=>g(()=>y(`computed:1:2`,()=>r(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>g(()=>y(`computed:1:4`,()=>r(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return _(e=>{let r=f(`div`,e);a(r,`card bg-base-100 shadow`);let g=f(`div`,r);p(r,g),a(g,`card-body`);let y=f(`h2`,g);p(g,y),a(y,`text-2xl font-semibold mb-3`),p(y,u(`基础待办事项`));let S=f(`div`,g);p(g,S),a(S,`flex items-center gap-2 mb-3`);let D=f(`input`,S);p(S,D),t(D,`type`,`text`),t(D,`placeholder`,`输入待办事项`),m(()=>{l(D,n.newTodo)}),d(D,`input`,e=>{n.newTodo=e.target.value}),d(D,`keypress`,e=>{e.key===`Enter`&&w()}),a(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=f(`button`,S);p(S,O),a(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),d(O,`click`,w),p(O,u(`添加`));let k=f(`div`,g);p(g,k);let A=o(`rue:list:start`),j=o(`rue:list:end`);p(k,A),p(k,j);let M=new Map;m(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(e,n,r,i,c)=>{v(_(()=>{let n=s(),r=f(`div`,n);p(n,r),m(()=>{t(r,`key`,String(e.id))}),m(()=>{a(r,`flex items-center justify-between rounded-lg border p-3 mb-2 ${e.completed?`bg-gray-50`:`bg-white`}`)});let i=f(`span`,r);p(r,i),d(i,`click`,()=>T(e.id)),m(()=>{a(i,`cursor-pointer ${e.completed?`line-through text-gray-500`:`text-gray-800`}`)});let c=o(`rue:slot:anchor`);p(i,c),m(()=>{let t=e.text;h(()=>v(t,i,c))});let l=f(`button`,r);return p(r,l),a(l,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),d(l,`click`,()=>E(e.id)),p(l,u(`删除`)),n}),n,r)}})});let N=f(`p`,g);p(g,N);let P=c(N);return p(N,P),m(()=>{i(P,`总计: ${n.todos.length} | 已完成: ${C.get()}`)}),r})}});export{C as default};