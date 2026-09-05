import{Bt as e,C as t,Dn as n,Et as r,H as i,I as a,It as o,L as s,Lt as c,Mt as l,Rt as u,S as d,W as f,Y as p,_n as m,bn as h,ft as g,gn as _,ht as v,kn as y,kt as b,l as x,nn as S,nt as C,ot as w,q as T,wn as E,x as D,z as O}from"./rue-runtime-CwEGJ854.js";import{t as k}from"./createHomeSplitExamplePage-DuLZTUZH.js";var A=m(`<li class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"><label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3"><input type="checkbox" class="checkbox checkbox-primary checkbox-sm"><span><!--rue:text-hole:0--></span></label><button class="btn btn-ghost btn-xs">删除</button></li>`),j=m(`<div class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">registered runtime app</p><h2 class="mt-2 text-2xl font-semibold">TodoItem 来自字符串注册名</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">列表项没有直接写成 <code>&lt;TodoItem /&gt;</code>，而是通过 <code>&lt;Component is="TodoItem" /&gt;</code> 从当前应用的注册表解析。</p></div><div class="stats stats-horizontal bg-base-200"><div class="stat px-4 py-2"><div class="stat-title text-xs">完成</div><div class="stat-value text-lg"><!--rue:text-hole:0-->/<!--rue:text-hole:1--></div></div></div></div><div class="mt-5 flex flex-col gap-3 sm:flex-row"><input class="input input-bordered flex-1" placeholder="新增一条任务"><button class="btn btn-primary">添加</button></div><ul class="mt-4 grid gap-3"><!--rue:text-hole:2--></ul></div>`),M=m(`<div class="grid gap-4"><div class="alert border border-info/30 bg-info/10 text-sm"><span><!--rue:text-hole:0--></span></div><div></div><div class="mockup-code bg-neutral text-neutral-content"><pre data-prefix="1"><code><!--rue:text-hole:1--></code></pre><pre data-prefix="2"><code><!--rue:text-hole:2--></code></pre><pre data-prefix="3"><code><!--rue:text-hole:3--></code></pre></div></div>`),N=e=>{let t=f(e.onRemove),i=f(e.onToggle),a=f(e.todo);return T(r(Object.assign(e=>{let r=A().content.cloneNode(!0).firstChild,o=r.childNodes[0].childNodes[0],s=r.childNodes[0].childNodes[1],c=r.childNodes[1],l=r.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode;o.setAttribute(`type`,`checkbox`),o.className=`checkbox checkbox-primary checkbox-sm`;let d;E(()=>{let e=!!a.get().done;Object.is(d,e)||(d=e,o.checked=e)});let f=e=>{let t=()=>i.get()(a.get().id);typeof t==`function`&&t(e)};o.addEventListener(`change`,f),n(()=>o.removeEventListener(`change`,f));let p;E(()=>{let e=`truncate ${a.get().done?`text-base-content/45 line-through`:``}`,t=e==null?``:String(e);Object.is(p,t)||(p=t,s.className=t)}),c.className=`btn btn-ghost btn-xs`;let m=e=>{let n=()=>t.get()(a.get().id);typeof n==`function`&&n(e)};c.addEventListener(`click`,m),n(()=>c.removeEventListener(`click`,m));let g=_(``);return u.insertBefore(g,l),u.removeChild(l),h(g,()=>a.get().text),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{t.set(e.onRemove),i.set(e.onToggle),a.set(e.todo)}),()=>e)},P=()=>{let e=S({draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`通过 useApp().component 注册 TodoItem`,done:!0},{id:3,text:`用 <Component is="TodoItem" /> 渲染`,done:!1}]}),n=()=>{let t=e.draft.trim();t&&(e.todos.push({id:Date.now(),text:t,done:!1}),e.draft=``)},r=t=>{let n=e.todos.find(e=>e.id===t);n&&(n.done=!n.done)},a=t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)},o=e.todos.filter(e=>e.done).length;return l(()=>T(v(()=>{let l=C(),u=j().content.cloneNode(!0),m=u.firstChild,h=m.childNodes[1].childNodes[0],_=m.childNodes[1].childNodes[1],v=m.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],b=v.parentNode,S=m.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[2],T=S.parentNode,O=m.childNodes[2].childNodes[0],k=O.parentNode;l.appendChild(u),s(h,`input input-bordered flex-1`),E(()=>{g(h,e.draft)}),w(h,`placeholder`,`新增一条任务`);let A=t=>{let n=t=>{e.draft=t.currentTarget.value};typeof n==`function`&&n(t)};h.addEventListener(`input`,A),c(()=>h.removeEventListener(`input`,A));let M=e=>{let t=e=>{e.key===`Enter`&&n()};typeof t==`function`&&t(e)};h.addEventListener(`keydown`,M),c(()=>h.removeEventListener(`keydown`,M)),s(_,`btn btn-primary`);let N=e=>{let t=n;typeof t==`function`&&t(e)};_.addEventListener(`click`,N),c(()=>_.removeEventListener(`click`,N)),E(()=>{let e=o;y(()=>p(e,b,v))}),E(()=>{let t=e.todos.length;y(()=>p(t,T,S))});let P=[];return E(()=>{let n=e.todos||[];P=t(k,O,P,n,(e,t)=>e.id,(e,t)=>{let n=f(e),o=f(t);return d((e,t,o)=>D(e,o,()=>i(x,()=>({is:`TodoItem`,todo:n.get(),onToggle:r,onRemove:a}))),(r,i)=>{e=r,t=i,n.set(r),o.set(i)})})}),l},!0),e=>O(()=>{})))},F=k({title:`useApp().component 运行时注册`,source:`import {
  Component,
  type FC,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useApp,
  useRef,
} from '@rue-js/rue'

type Todo = {
  id: number
  text: string
  done: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = props => (
  <li className="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3">
    <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="checkbox checkbox-primary checkbox-sm"
        checked={props.todo.done}
        onChange={() => props.onToggle(props.todo.id)}
      />
      <span className={\`truncate \${props.todo.done ? 'text-base-content/45 line-through' : ''}\`}>
        {props.todo.text}
      </span>
    </label>
    <button className="btn btn-ghost btn-xs" onClick={() => props.onRemove(props.todo.id)}>
      删除
    </button>
  </li>
)

const RegisteredTodoHost: FC = () => {
  const state = reactive({
    draft: '确认 Component 能解析字符串名',
    todos: [
      { id: 1, text: '定义 TodoItem 函数组件', done: true },
      { id: 2, text: '通过 useApp().component 注册 TodoItem', done: true },
      { id: 3, text: '用 <Component is="TodoItem" /> 渲染', done: false },
    ] as Todo[],
  })

  const addTodo = () => {
    const text = state.draft.trim()
    if (!text) return

    state.todos.push({
      id: Date.now(),
      text,
      done: false,
    })
    state.draft = ''
  }

  const toggleTodo = (id: number) => {
    const todo = state.todos.find(item => item.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }

  const removeTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  const completed = state.todos.filter(todo => todo.done).length

  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            registered runtime app
          </p>
          <h2 className="mt-2 text-2xl font-semibold">TodoItem 来自字符串注册名</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">
            列表项没有直接写成 <code>{'<TodoItem />'}</code>，而是通过{' '}
            <code>{'<Component is="TodoItem" />'}</code> 从当前应用的注册表解析。
          </p>
        </div>
        <div className="stats stats-horizontal bg-base-200">
          <div className="stat px-4 py-2">
            <div className="stat-title text-xs">完成</div>
            <div className="stat-value text-lg">
              {completed}/{state.todos.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          className="input input-bordered flex-1"
          value={state.draft}
          placeholder="新增一条任务"
          onInput={(event: any) => {
            state.draft = event.currentTarget.value
          }}
          onKeyDown={(event: any) => {
            if (event.key === 'Enter') addTodo()
          }}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          添加
        </button>
      </div>

      <ul className="mt-4 grid gap-3">
        {state.todos.map(todo => (
          <Component
            is="TodoItem"
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  )
}

const GlobalComponentRegistrationDemo: FC = () => {
  const mountTarget = useRef<HTMLDivElement>()
  const status = ref('等待外层 demo 挂载内部应用')
  let innerApp: ReturnType<typeof useApp> | null = null
  let disposed = false

  onMounted(() => {
    queueMicrotask(() => {
      if (disposed) return

      const target = mountTarget.current
      if (!target) return

      innerApp = useApp(RegisteredTodoHost).component('TodoItem', TodoItem as FC<any>)
      innerApp.mount(target)
      status.value = '已注册 TodoItem，并通过 Component 的字符串 is 完成渲染'
    })
  })

  onUnmounted(() => {
    disposed = true
    innerApp?.unmount()
    innerApp = null
  })

  return (
    <div className="grid gap-4">
      <div className="alert border border-info/30 bg-info/10 text-sm">
        <span>{status.value}</span>
      </div>
      <div ref={mountTarget} />
      <div className="mockup-code bg-neutral text-neutral-content">
        <pre data-prefix="1">
          <code>{\`const app = useApp(RegisteredTodoHost)\`}</code>
        </pre>
        <pre data-prefix="2">
          <code>{\`.component('TodoItem', TodoItem)\`}</code>
        </pre>
        <pre data-prefix="3">
          <code>{\`.mount(container)\`}</code>
        </pre>
      </div>
    </div>
  )
}

export default GlobalComponentRegistrationDemo
`,Demo:()=>{let t=b(`GlobalComponentRegistrationDemo:hook:0`),i=e(`等待外层 demo 挂载内部应用`),s=null,c=!1;return o(()=>{queueMicrotask(()=>{if(c)return;let e=t.current;e&&(s=a(P).component(`TodoItem`,N),s.mount(e),i.value=`已注册 TodoItem，并通过 Component 的字符串 is 完成渲染`)})}),u(()=>{c=!0,s?.unmount(),s=null}),l(()=>T(r(Object.assign(e=>{let r=M().content.cloneNode(!0).firstChild,a=r.childNodes[1],o=r.childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,c=r.childNodes[2].childNodes[0].childNodes[0].childNodes[0],l=c.parentNode,u=r.childNodes[2].childNodes[1].childNodes[0].childNodes[0],d=u.parentNode,f=r.childNodes[2].childNodes[2].childNodes[0].childNodes[0],p=f.parentNode,m=t;typeof m==`function`?m(a):m&&typeof m==`object`&&`current`in m&&(m.current=a),n(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)});let g=_(``);s.insertBefore(g,o),s.removeChild(o),h(g,()=>i.value);let v=_(``);l.insertBefore(v,c),l.removeChild(c),h(v,()=>`const app = useApp(RegisteredTodoHost)`);let y=_(``);d.insertBefore(y,u),d.removeChild(u),h(y,()=>`.component('TodoItem', TodoItem)`);let b=_(``);return p.insertBefore(b,f),p.removeChild(f),h(b,()=>`.mount(container)`),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{})))}});export{F as default};