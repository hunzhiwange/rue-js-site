import{$t as e,At as t,C as n,Dn as r,Dt as i,E as a,Q as o,Qt as s,Vt as c,Wt as l,Z as u,Zt as d,_n as f,_t as p,at as m,b as h,ct as g,et as _,kn as v,qt as y,rt as b,tn as x,ut as S,v as C,vn as w,w as T,wn as E,xn as D,xt as O,z as k}from"./rue-runtime-HIMg8Lz8.js";import{t as A}from"./createHomeSplitExamplePage-DNdswIPW.js";var j=w(`<li class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"><label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3"><input type="checkbox" class="checkbox checkbox-primary checkbox-sm"><span><!--rue:text-hole:0--></span></label><button class="btn btn-ghost btn-xs">删除</button></li>`),M=w(`<div class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">registered runtime app</p><h2 class="mt-2 text-2xl font-semibold">TodoItem 来自字符串注册名</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">列表项没有直接写成 <code>&lt;TodoItem /&gt;</code>，而是通过 <code>&lt;Component is="TodoItem" /&gt;</code> 从当前应用的注册表解析。</p></div><div class="stats stats-horizontal bg-base-200"><div class="stat px-4 py-2"><div class="stat-title text-xs">完成</div><div class="stat-value text-lg"><!--rue:text-hole:0-->/<!--rue:text-hole:1--></div></div></div></div><div class="mt-5 flex flex-col gap-3 sm:flex-row"><input class="input input-bordered flex-1" placeholder="新增一条任务"><button class="btn btn-primary">添加</button></div><ul class="mt-4 grid gap-3"><!--rue:text-hole:2--></ul></div>`),N=w(`<div class="grid gap-4"><div class="alert border border-info/30 bg-info/10 text-sm"><span><!--rue:text-hole:0--></span></div><div></div><div class="mockup-code bg-neutral text-neutral-content"><pre data-prefix="1"><code><!--rue:text-hole:1--></code></pre><pre data-prefix="2"><code><!--rue:text-hole:2--></code></pre><pre data-prefix="3"><code><!--rue:text-hole:3--></code></pre></div></div>`),P=e=>{let t=m(e.onRemove),n=m(e.onToggle),i=m(e.todo);return g(c(Object.assign(e=>{let a=j().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0],s=a.childNodes[0].childNodes[1],c=a.childNodes[1],l=a.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode;o.setAttribute(`type`,`checkbox`),o.className=`checkbox checkbox-primary checkbox-sm`;let d;E(()=>{let e=!!i.get().done;Object.is(d,e)||(d=e,o.checked=e)});let p=e=>{let t=()=>n.get()(i.get().id);typeof t==`function`&&t(e)};o.addEventListener(`change`,p),r(()=>o.removeEventListener(`change`,p));let m;E(()=>{let e=`truncate ${i.get().done?`text-base-content/45 line-through`:``}`,t=e==null?``:String(e);Object.is(m,t)||(m=t,s.className=t)}),c.className=`btn btn-ghost btn-xs`;let h=e=>{let n=()=>t.get()(i.get().id);typeof n==`function`&&n(e)};c.addEventListener(`click`,h),r(()=>c.removeEventListener(`click`,h));let g=f(``);return u.insertBefore(g,l),u.removeChild(l),D(g,()=>i.get().text),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{t.set(e.onRemove),n.set(e.onToggle),i.set(e.todo)}),()=>e)},F=()=>{let e=k({draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`通过 useApp().component 注册 TodoItem`,done:!0},{id:3,text:`用 <Component is="TodoItem" /> 渲染`,done:!1}]}),c=()=>{let t=e.draft.trim();t&&(e.todos.push({id:Date.now(),text:t,done:!1}),e.draft=``)},l=t=>{let n=e.todos.find(e=>e.id===t);n&&(n.done=!n.done)},u=t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)},d=e.todos.filter(e=>e.done).length;return y(()=>g(t(()=>{let t=p(),f=M().content.cloneNode(!0),g=f.firstChild,_=g.childNodes[1].childNodes[0],y=g.childNodes[1].childNodes[1],x=g.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],w=x.parentNode,D=g.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[2],k=D.parentNode,A=g.childNodes[2].childNodes[0],j=A.parentNode;t.appendChild(f),o(_,`input input-bordered flex-1`),E(()=>{i(_,e.draft)}),O(_,`placeholder`,`新增一条任务`);let N=t=>{let n=t=>{e.draft=t.currentTarget.value};typeof n==`function`&&n(t)};_.addEventListener(`input`,N),s(()=>_.removeEventListener(`input`,N));let P=e=>{let t=e=>{e.key===`Enter`&&c()};typeof t==`function`&&t(e)};_.addEventListener(`keydown`,P),s(()=>_.removeEventListener(`keydown`,P)),o(y,`btn btn-primary`);let F=e=>{let t=c;typeof t==`function`&&t(e)};y.addEventListener(`click`,F),s(()=>y.removeEventListener(`click`,F)),E(()=>{let e=d;v(()=>S(e,w,x))}),E(()=>{let t=e.todos.length;v(()=>S(t,k,D))});let I=[];return E(()=>{let t=e.todos||[];I=T(j,A,I,t,(e,t)=>e.id,(e,t)=>{let r=m(e);return n((e,t,n)=>a(e,n,()=>b(C,()=>({is:`TodoItem`,todo:r.get(),onToggle:l,onRemove:u}))),(n,i)=>{e=n,t=i,r.set(n)})})}),r(()=>h(I)),t},!0),e=>_(()=>{})))},I=A({title:`useApp().component 运行时注册`,source:`import {
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
`,Demo:()=>{let t=l(`GlobalComponentRegistrationDemo:hook:0`),n=x(`等待外层 demo 挂载内部应用`),i=null,a=!1;return d(()=>{queueMicrotask(()=>{if(a)return;let e=t.current;e&&(i=u(F).component(`TodoItem`,P),i.mount(e),n.value=`已注册 TodoItem，并通过 Component 的字符串 is 完成渲染`)})}),e(()=>{a=!0,i?.unmount(),i=null}),y(()=>g(c(Object.assign(e=>{let i=N().content.cloneNode(!0).firstChild,a=i.childNodes[1],o=i.childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,c=i.childNodes[2].childNodes[0].childNodes[0].childNodes[0],l=c.parentNode,u=i.childNodes[2].childNodes[1].childNodes[0].childNodes[0],d=u.parentNode,p=i.childNodes[2].childNodes[2].childNodes[0].childNodes[0],m=p.parentNode,h=t;typeof h==`function`?h(a):h&&typeof h==`object`&&`current`in h&&(h.current=a),r(()=>{typeof h==`function`?h(null):h&&typeof h==`object`&&`current`in h&&(h.current=null)});let g=f(``);s.insertBefore(g,o),s.removeChild(o),D(g,()=>n.value);let _=f(``);l.insertBefore(_,c),l.removeChild(c),D(_,()=>`const app = useApp(RegisteredTodoHost)`);let v=f(``);d.insertBefore(v,u),d.removeChild(u),D(v,()=>`.component('TodoItem', TodoItem)`);let y=f(``);return m.insertBefore(y,p),m.removeChild(p),D(y,()=>`.mount(container)`),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))}});export{I as default};