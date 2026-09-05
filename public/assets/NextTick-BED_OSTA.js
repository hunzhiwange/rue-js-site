import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,Mt as c,Pn as l,S as u,V as d,W as f,X as p,Y as m,Z as h,_n as g,_t as _,bn as v,fn as y,ft as b,gn as x,hn as S,ht as C,it as w,kn as T,kt as E,nt as D,ot as O,pn as k,q as A,rt as j,tt as M,wn as N,x as P,z as F}from"./rue-runtime-CwEGJ854.js";import{t as I}from"./Code-B3jCYMAr.js";import{r as L}from"./SidebarPlaygroundExample-EGR0CyDT.js";var R=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。</p><div class="rounded-box border border-base-300 bg-base-100"><div class="flex items-center justify-between border-b border-base-300 px-4 py-3"><div class="text-sm font-medium text-base-content/70">订单通知流</div><div class="badge badge-outline"><!--rue:text-hole:0--> 条消息</div></div><div class="max-h-56 space-y-3 overflow-y-auto px-4 py-4"><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">追加通知并滚动到底部</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 scrollHeight</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后的高度</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),z=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],B=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],V=()=>{let i=e(B()),a=e(`尚未追加`),o=e(`尚未追加`),s=e([...z]),d=E(`ChatScrollDemo:hook:0`),p=async()=>{let e=i.value.length+1,t=String(19+e).padStart(2,`0`);i.value=[...i.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=d.current?.scrollHeight??0;a.value=`${n}px（旧高度）`,o.value=`等待 flush...`,s.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],d.current&&(d.current.scrollTop=n),await l();let r=d.current?.scrollHeight??0;d.current&&(d.current.scrollTop=r),o.value=`${r}px（已包含新消息）`,s.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},m=()=>{i.value=B(),a.value=`尚未追加`,o.value=`尚未追加`,s.value=[...z],d.current&&(d.current.scrollTop=0)};return c(()=>A(r(Object.assign(e=>{let c=R().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1].childNodes[1],h=c.childNodes[0].childNodes[2].childNodes[0],g=c.childNodes[0].childNodes[2].childNodes[1],_=c.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],b=_.parentNode,C=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0],w=C.parentNode,T=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],E=T.parentNode,D=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],O=D.parentNode,k=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],A=k.parentNode,j=d;typeof j==`function`?j(l):j&&typeof j==`object`&&`current`in j&&(j.current=l),n(()=>{typeof j==`function`?j(null):j&&typeof j==`object`&&`current`in j&&(j.current=null)}),l.className=`max-h-56 space-y-3 overflow-y-auto px-4 py-4`,h.className=`btn btn-primary`;let M=e=>{let t=()=>void p();typeof t==`function`&&t(e)};h.addEventListener(`click`,M),n(()=>h.removeEventListener(`click`,M)),g.className=`btn btn-ghost`;let F=e=>{let t=m;typeof t==`function`&&t(e)};g.addEventListener(`click`,F),n(()=>g.removeEventListener(`click`,F));let I=x(``);b.insertBefore(I,_),b.removeChild(_),v(I,()=>i.value.length);let L=[];N(()=>{let e=i.value||[];L=t(w,C,L,e,(e,t)=>e.id,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`rounded-box bg-base-200/70 p-3 text-sm leading-6`;let r=x(``);return y(t,r),v(r,()=>n.get().text),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})});let z=x(``);E.insertBefore(z,T),E.removeChild(T),v(z,()=>a.value);let B=x(``);O.insertBefore(B,D),O.removeChild(D),v(B,()=>o.value);let V=[];return N(()=>{let e=s.value||[];V=t(A,k,V,e,(e,t)=>`chat-scroll-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},H=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type ChatMessage = {
  id: number
  text: string
}

const defaultLogs = [
  '1. 追加一条新的订单通知',
  '2. 同步读取列表 scrollHeight 并尝试滚动',
  '3. await nextTick() 后再读取高度并滚到底部',
]

const createChatMessages = (): ChatMessage[] => [
  { id: 1, text: '09:20 新订单 #A1024 已创建' },
  { id: 2, text: '09:21 支付回调已确认' },
  { id: 3, text: '09:22 仓库开始拣货' },
  { id: 4, text: '09:23 配送单已推送' },
]

const ChatScrollDemo: FC = () => {
  const messages = ref<ChatMessage[]>(createChatMessages())
  const syncHeight = ref('尚未追加')
  const flushedHeight = ref('尚未追加')
  const logLines = ref<string[]>([...defaultLogs])
  const listRef = useRef<HTMLDivElement>()

  const appendMessage = async () => {
    const nextId = messages.value.length + 1
    const minute = String(19 + nextId).padStart(2, '0')

    messages.value = [
      ...messages.value,
      {
        id: nextId,
        text: \`09:\${minute} 订单 #A10\${20 + nextId} 已完成支付\`,
      },
    ]

    const currentHeight = listRef.current?.scrollHeight ?? 0
    syncHeight.value = \`\${currentHeight}px（旧高度）\`
    flushedHeight.value = '等待 flush...'
    logLines.value = [
      \`消息数已变为 \${messages.value.length}\`,
      \`同步读取 scrollHeight：\${currentHeight}px\`,
      '等待 nextTick() 后重新计算高度...',
    ]

    if (listRef.current) {
      listRef.current.scrollTop = currentHeight
    }

    await nextTick()

    const nextHeight = listRef.current?.scrollHeight ?? 0
    if (listRef.current) {
      listRef.current.scrollTop = nextHeight
    }
    flushedHeight.value = \`\${nextHeight}px（已包含新消息）\`
    logLines.value = [
      \`消息数已变为 \${messages.value.length}\`,
      \`同步读取 scrollHeight：\${currentHeight}px\`,
      \`nextTick() 后 scrollHeight：\${nextHeight}px，并已滚动到底部\`,
    ]
  }

  const reset = () => {
    messages.value = createChatMessages()
    syncHeight.value = '尚未追加'
    flushedHeight.value = '尚未追加'
    logLines.value = [...defaultLogs]
    if (listRef.current) {
      listRef.current.scrollTop = 0
    }
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取
          scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。
        </p>

        <div className="rounded-box border border-base-300 bg-base-100">
          <div className="flex items-center justify-between border-b border-base-300 px-4 py-3">
            <div className="text-sm font-medium text-base-content/70">订单通知流</div>
            <div className="badge badge-outline">{messages.value.length} 条消息</div>
          </div>
          <div ref={listRef} className="max-h-56 space-y-3 overflow-y-auto px-4 py-4">
            {messages.value.map(message => (
              <div key={message.id} className="rounded-box bg-base-200/70 p-3 text-sm leading-6">
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void appendMessage()}>
            追加通知并滚动到底部
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的 scrollHeight</div>
            <div className="mt-2 font-mono text-2xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后的高度</div>
            <div className="mt-2 font-mono text-2xl text-success">{flushedHeight.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`chat-scroll-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatScrollDemo
`,U=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。</p><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">当前 DOM 文本</div><div class="mt-3 text-4xl font-semibold text-primary"><span><!--rue:text-hole:0--></span></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">自增并读取 DOM</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 DOM 文本</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后读取</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:2--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),W=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],G=()=>{let i=e(0),a=e(`尚未读取`),o=e(`尚未读取`),s=e([...W]),d=E(`DomReadDemo:hook:0`),p=async()=>{i.value+=1;let e=d.current?.textContent??`(missing)`;a.value=e,o.value=`等待 flush...`,s.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await l();let t=d.current?.textContent??`(missing)`;o.value=t,s.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},m=()=>{i.value=0,a.value=`尚未读取`,o.value=`尚未读取`,s.value=[...W]};return c(()=>A(r(Object.assign(e=>{let c=U().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0],h=c.childNodes[0].childNodes[2].childNodes[0],g=c.childNodes[0].childNodes[2].childNodes[1],_=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],b=_.parentNode,C=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],w=C.parentNode,T=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],E=T.parentNode,D=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],O=D.parentNode,k=d;typeof k==`function`?k(l):k&&typeof k==`object`&&`current`in k&&(k.current=l),n(()=>{typeof k==`function`?k(null):k&&typeof k==`object`&&`current`in k&&(k.current=null)}),h.className=`btn btn-primary`;let A=e=>{let t=()=>void p();typeof t==`function`&&t(e)};h.addEventListener(`click`,A),n(()=>h.removeEventListener(`click`,A)),g.className=`btn btn-ghost`;let j=e=>{let t=m;typeof t==`function`&&t(e)};g.addEventListener(`click`,j),n(()=>g.removeEventListener(`click`,j));let M=x(``);b.insertBefore(M,_),b.removeChild(_),v(M,()=>i.value);let F=x(``);w.insertBefore(F,C),w.removeChild(C),v(F,()=>a.value);let I=x(``);E.insertBefore(I,T),E.removeChild(T),v(I,()=>o.value);let L=[];return N(()=>{let e=s.value||[];L=t(O,D,L,e,(e,t)=>`dom-read-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},K=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 点击按钮后先执行 count.value += 1',
  '2. 紧接着读取当前 span.textContent',
  '3. await nextTick() 后再读取一次 DOM',
]

const DomReadDemo: FC = () => {
  const count = ref(0)
  const beforeDomText = ref('尚未读取')
  const afterDomText = ref('尚未读取')
  const logLines = ref<string[]>([...defaultLogs])
  const counterRef = useRef<HTMLSpanElement>()

  const inspectUpdate = async () => {
    count.value += 1

    const syncText = counterRef.current?.textContent ?? '(missing)'
    beforeDomText.value = syncText
    afterDomText.value = '等待 flush...'
    logLines.value = [
      \`状态值已经改为 \${count.value}\`,
      \`同步读取 DOM：\${syncText}\`,
      '等待 nextTick() 完成...',
    ]

    await nextTick()

    const flushedText = counterRef.current?.textContent ?? '(missing)'
    afterDomText.value = flushedText
    logLines.value = [
      \`状态值已经改为 \${count.value}\`,
      \`同步读取 DOM：\${syncText}\`,
      \`nextTick() 后读取 DOM：\${flushedText}\`,
    ]
  }

  const reset = () => {
    count.value = 0
    beforeDomText.value = '尚未读取'
    afterDomText.value = '尚未读取'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM
          文本，能直接看到同一轮刷新前后的差异。
        </p>

        <div className="rounded-box border border-base-300 bg-base-200/40 p-5">
          <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
            当前 DOM 文本
          </div>
          <div className="mt-3 text-4xl font-semibold text-primary">
            <span ref={counterRef}>{count.value}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void inspectUpdate()}>
            自增并读取 DOM
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的 DOM 文本</div>
            <div className="mt-2 font-mono text-2xl">{beforeDomText.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后读取</div>
            <div className="mt-2 font-mono text-2xl text-success">{afterDomText.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`dom-read-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DomReadDemo
`,q=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开高级筛选</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段状态</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后状态</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:2--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),J=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],ee=()=>{let i=e(!1),a=e(``),o=e(`尚未打开`),s=e(`尚未聚焦`),p=e([...J]),m=E(`FilterFocusDemo:hook:0`),h=async()=>{i.value=!0,o.value=m.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,s.value=`等待 flush...`,p.value=[`筛选面板状态已切到打开`,o.value,`等待 nextTick() 后执行 focus()`],await l(),m.current?.focus();let e=globalThis.document?.activeElement===m.current;s.value=e?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,p.value=[`筛选面板状态已切到打开`,o.value,s.value]},g=()=>{i.value=!1,a.value=``,o.value=`尚未打开`,s.value=`尚未聚焦`,p.value=[...J]};return c(()=>A(r(Object.assign(e=>{let c=q().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1].childNodes[0],_=c.childNodes[0].childNodes[1].childNodes[1],C=c.childNodes[0].childNodes[2],w=C.parentNode,T=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],E=T.parentNode,O=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],k=O.parentNode,A=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],j=A.parentNode;l.className=`btn btn-primary`;let M=e=>{let t=()=>void h();typeof t==`function`&&t(e)};l.addEventListener(`click`,M),n(()=>l.removeEventListener(`click`,M)),_.className=`btn btn-ghost`;let F=e=>{let t=g;typeof t==`function`&&t(e)};_.addEventListener(`click`,F),n(()=>_.removeEventListener(`click`,F)),d(w,C,()=>{let e=i.value;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`rounded-box border border-base-300 bg-base-100 p-5`;let r=S(`div`,t);y(t,r),r.className=`grid gap-4 md:grid-cols-2`;let i=S(`label`,r);y(r,i),i.className=`block`;let o=S(`div`,i);y(i,o),o.className=`text-sm text-base-content/60`,y(o,x(`关键词`));let s=S(`input`,i);y(i,s);let c=m;typeof c==`function`?c(s):c&&typeof c==`object`&&`current`in c&&(c.current=s),n(()=>{typeof c==`function`?c(null):c&&typeof c==`object`&&`current`in c&&(c.current=null)}),s.className=`input input-bordered mt-2 w-full`;let l;N(()=>{let e=a.value,t=e==null?``:String(e);Object.is(l,t)||(l=t,b(s,t))}),s.setAttribute(`placeholder`,`订单号 / 用户名 / 手机号`);let u=e=>{let t=e=>{a.value=e.target.value};typeof t==`function`&&t(e)};s.addEventListener(`input`,u),n(()=>s.removeEventListener(`input`,u));let d=S(`label`,r);y(r,d),d.className=`block`;let f=S(`div`,d);y(d,f),f.className=`text-sm text-base-content/60`,y(f,x(`订单状态`));let p=S(`select`,d);y(d,p),p.className=`select select-bordered mt-2 w-full`;let h=S(`option`,p);y(p,h),y(h,x(`全部`));let g=S(`option`,p);y(p,g),y(g,x(`待支付`));let _=S(`option`,p);y(p,_),y(_,x(`待发货`));let v=S(`option`,p);return y(p,v),y(v,x(`已完成`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let I=x(``);E.insertBefore(I,T),E.removeChild(T),v(I,()=>o.value);let L=x(``);k.insertBefore(L,O),k.removeChild(O),v(L,()=>s.value);let R=[];return N(()=>{let e=p.value||[];R=t(j,A,R,e,(e,t)=>`filter-focus-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 打开高级筛选面板',
  '2. 同步阶段输入框还没有挂载完成',
  '3. await nextTick() 后聚焦关键字输入框',
]

const FilterFocusDemo: FC = () => {
  const panelOpen = ref(false)
  const keyword = ref('')
  const syncState = ref('尚未打开')
  const postTickState = ref('尚未聚焦')
  const logLines = ref<string[]>([...defaultLogs])
  const inputRef = useRef<HTMLInputElement>()

  const openPanel = async () => {
    panelOpen.value = true
    syncState.value = inputRef.current ? '同步阶段输入框已存在' : '同步阶段输入框尚未挂载'
    postTickState.value = '等待 flush...'
    logLines.value = ['筛选面板状态已切到打开', syncState.value, '等待 nextTick() 后执行 focus()']

    await nextTick()

    inputRef.current?.focus()
    const focused = globalThis.document?.activeElement === inputRef.current
    postTickState.value = focused ? 'nextTick() 后已聚焦关键字输入框' : '输入框已挂载，但未成功聚焦'
    logLines.value = ['筛选面板状态已切到打开', syncState.value, postTickState.value]
  }

  const closePanel = () => {
    panelOpen.value = false
    keyword.value = ''
    syncState.value = '尚未打开'
    postTickState.value = '尚未聚焦'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等
          nextTick() 之后再调用 focus()。
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void openPanel()}>
            打开高级筛选
          </button>
          <button className="btn btn-ghost" onClick={closePanel}>
            关闭并重置
          </button>
        </div>

        {panelOpen.value && (
          <div className="rounded-box border border-base-300 bg-base-100 p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <div className="text-sm text-base-content/60">关键词</div>
                <input
                  ref={inputRef}
                  className="input input-bordered mt-2 w-full"
                  value={keyword.value}
                  placeholder="订单号 / 用户名 / 手机号"
                  onInput={(event: any) => {
                    keyword.value = (event.target as HTMLInputElement).value
                  }}
                />
              </label>

              <label className="block">
                <div className="text-sm text-base-content/60">订单状态</div>
                <select className="select select-bordered mt-2 w-full">
                  <option>全部</option>
                  <option>待支付</option>
                  <option>待发货</option>
                  <option>已完成</option>
                </select>
              </label>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步阶段状态</div>
            <div className="mt-2 font-mono text-xl">{syncState.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后状态</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickState.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`filter-focus-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterFocusDemo
`,ne=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。</p><div class="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"><label class="block"><div class="text-sm text-base-content/60">联系人</div><input name="receiver" placeholder="请输入联系人"><!--rue:text-hole:0--></label><label class="block"><div class="text-sm text-base-content/60">手机号</div><input name="phone" placeholder="请输入 11 位手机号"><!--rue:text-hole:1--></label><label class="block"><div class="text-sm text-base-content/60">邮箱</div><input name="email" placeholder="请输入邮箱"><!--rue:text-hole:2--></label></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">提交并定位错误字段</button><button class="btn btn-outline">填入合法示例</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段识别到的字段</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后结果</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:4--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),Y=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],X={receiver:`联系人`,phone:`手机号`,email:`邮箱`},Z=()=>({receiver:``,phone:``,email:``}),re=()=>{let i=e(``),a=e(``),o=e(``),s=e(Z()),p=e(`尚未提交`),m=e(`尚未聚焦`),h=e([...Y]),g=E(`FocusErrorFieldDemo:hook:0`),_=()=>({receiver:i.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(a.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value)?``:`请输入有效邮箱`}),C=async()=>{let e=_(),t=Object.values(e).filter(Boolean).length;s.value=e;let n=g.current?.querySelector(`[data-invalid="true"]`);p.value=n?.name?`${X[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,m.value=`等待 flush...`,h.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${p.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await l();let r=g.current?.querySelector(`[data-invalid="true"]`);r?.focus(),m.value=r?.name?`${X[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,h.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${p.value}`,m.value]},w=()=>{i.value=`李四`,a.value=`13800001111`,o.value=`li.si@example.com`,s.value=Z(),p.value=`已填入合法示例`,m.value=`再次点击提交可观察通过路径`,h.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},T=()=>{i.value=``,a.value=``,o.value=``,s.value=Z(),p.value=`尚未提交`,m.value=`尚未聚焦`,h.value=[...Y]};return c(()=>A(r(Object.assign(e=>{let c=ne().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1],_=c.childNodes[0].childNodes[1].childNodes[0].childNodes[1],E=c.childNodes[0].childNodes[1].childNodes[1].childNodes[1],O=c.childNodes[0].childNodes[1].childNodes[2].childNodes[1],k=c.childNodes[0].childNodes[2].childNodes[0],A=c.childNodes[0].childNodes[2].childNodes[1],j=c.childNodes[0].childNodes[2].childNodes[2],M=c.childNodes[0].childNodes[1].childNodes[0].childNodes[2],F=M.parentNode,I=c.childNodes[0].childNodes[1].childNodes[1].childNodes[2],L=I.parentNode,R=c.childNodes[0].childNodes[1].childNodes[2].childNodes[2],z=R.parentNode,B=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],V=B.parentNode,H=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],U=H.parentNode,W=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode,K=g;typeof K==`function`?K(l):K&&typeof K==`object`&&`current`in K&&(K.current=l),n(()=>{typeof K==`function`?K(null):K&&typeof K==`object`&&`current`in K&&(K.current=null)}),l.className=`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`,_.setAttribute(`name`,`receiver`);let q;N(()=>{let e=s.value.receiver?`true`:`false`;Object.is(q,e)||(q=e,e==null||e===!1?_.removeAttribute(`data-invalid`):_.setAttribute(`data-invalid`,String(e)))});let J;N(()=>{let e=`input input-bordered mt-2 w-full ${s.value.receiver?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(J,t)||(J=t,_.className=t)});let ee;N(()=>{let e=i.value,t=e==null?``:String(e);Object.is(ee,t)||(ee=t,b(_,t))}),_.setAttribute(`placeholder`,`请输入联系人`);let te=e=>{let t=e=>{i.value=e.target.value};typeof t==`function`&&t(e)};_.addEventListener(`input`,te),n(()=>_.removeEventListener(`input`,te)),E.setAttribute(`name`,`phone`);let Y;N(()=>{let e=s.value.phone?`true`:`false`;Object.is(Y,e)||(Y=e,e==null||e===!1?E.removeAttribute(`data-invalid`):E.setAttribute(`data-invalid`,String(e)))});let X;N(()=>{let e=`input input-bordered mt-2 w-full ${s.value.phone?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(X,t)||(X=t,E.className=t)});let Z;N(()=>{let e=a.value,t=e==null?``:String(e);Object.is(Z,t)||(Z=t,b(E,t))}),E.setAttribute(`placeholder`,`请输入 11 位手机号`);let re=e=>{let t=e=>{a.value=e.target.value};typeof t==`function`&&t(e)};E.addEventListener(`input`,re),n(()=>E.removeEventListener(`input`,re)),O.setAttribute(`name`,`email`);let ie;N(()=>{let e=s.value.email?`true`:`false`;Object.is(ie,e)||(ie=e,e==null||e===!1?O.removeAttribute(`data-invalid`):O.setAttribute(`data-invalid`,String(e)))});let ae;N(()=>{let e=`input input-bordered mt-2 w-full ${s.value.email?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(ae,t)||(ae=t,O.className=t)});let Q;N(()=>{let e=o.value,t=e==null?``:String(e);Object.is(Q,t)||(Q=t,b(O,t))}),O.setAttribute(`placeholder`,`请输入邮箱`);let $=e=>{let t=e=>{o.value=e.target.value};typeof t==`function`&&t(e)};O.addEventListener(`input`,$),n(()=>O.removeEventListener(`input`,$)),k.className=`btn btn-primary`;let oe=e=>{let t=()=>void C();typeof t==`function`&&t(e)};k.addEventListener(`click`,oe),n(()=>k.removeEventListener(`click`,oe)),A.className=`btn btn-outline`;let se=e=>{let t=w;typeof t==`function`&&t(e)};A.addEventListener(`click`,se),n(()=>A.removeEventListener(`click`,se)),j.className=`btn btn-ghost`;let ce=e=>{let t=T;typeof t==`function`&&t(e)};j.addEventListener(`click`,ce),n(()=>j.removeEventListener(`click`,ce)),d(F,M,()=>{let e=s.value.receiver;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`mt-2 text-sm text-error`;let n=x(``);return y(t,n),v(n,()=>s.value.receiver),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(L,I,()=>{let e=s.value.phone;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`mt-2 text-sm text-error`;let n=x(``);return y(t,n),v(n,()=>s.value.phone),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(z,R,()=>{let e=s.value.email;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`mt-2 text-sm text-error`;let n=x(``);return y(t,n),v(n,()=>s.value.email),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let le=x(``);V.insertBefore(le,B),V.removeChild(B),v(le,()=>p.value);let ue=x(``);U.insertBefore(ue,H),U.removeChild(H),v(ue,()=>m.value);let de=[];return N(()=>{let e=h.value||[];de=t(G,W,de,e,(e,t)=>`focus-error-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},ie=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type FieldErrors = {
  receiver: string
  phone: string
  email: string
}

const defaultLogs = [
  '1. 点击提交后先更新错误状态',
  '2. 同步阶段还拿不到新的首个错误字段',
  '3. await nextTick() 后再 focus 首个错误输入框',
]

const fieldLabels: Record<keyof FieldErrors, string> = {
  receiver: '联系人',
  phone: '手机号',
  email: '邮箱',
}

const createEmptyErrors = (): FieldErrors => ({
  receiver: '',
  phone: '',
  email: '',
})

const FocusErrorFieldDemo: FC = () => {
  const receiver = ref('')
  const phone = ref('')
  const email = ref('')
  const errors = ref<FieldErrors>(createEmptyErrors())
  const syncField = ref('尚未提交')
  const postTickField = ref('尚未聚焦')
  const logLines = ref<string[]>([...defaultLogs])
  const formRef = useRef<HTMLDivElement>()

  const validate = (): FieldErrors => ({
    receiver: receiver.value.trim() ? '' : '请输入联系人姓名',
    phone: /^1\\d{10}$/.test(phone.value) ? '' : '请输入 11 位手机号',
    email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value) ? '' : '请输入有效邮箱',
  })

  const submit = async () => {
    const nextErrors = validate()
    const errorCount = Object.values(nextErrors).filter(Boolean).length
    errors.value = nextErrors

    const syncInvalid = formRef.current?.querySelector(
      '[data-invalid="true"]',
    ) as HTMLInputElement | null
    syncField.value = syncInvalid?.name
      ? \`\${fieldLabels[syncInvalid.name as keyof FieldErrors]}（同步阶段）\`
      : '同步阶段还没有错误字段'
    postTickField.value = '等待 flush...'
    logLines.value = [
      \`本次提交发现 \${errorCount} 个字段错误\`,
      \`同步读取首个错误字段：\${syncField.value}\`,
      '等待 nextTick() 后自动聚焦首个错误输入框...',
    ]

    await nextTick()

    const firstInvalid = formRef.current?.querySelector(
      '[data-invalid="true"]',
    ) as HTMLInputElement | null
    firstInvalid?.focus()
    postTickField.value = firstInvalid?.name
      ? \`\${fieldLabels[firstInvalid.name as keyof FieldErrors]} 已自动聚焦\`
      : '校验通过，无需聚焦'
    logLines.value = [
      \`本次提交发现 \${errorCount} 个字段错误\`,
      \`同步读取首个错误字段：\${syncField.value}\`,
      postTickField.value,
    ]
  }

  const fillValidData = () => {
    receiver.value = '李四'
    phone.value = '13800001111'
    email.value = 'li.si@example.com'
    errors.value = createEmptyErrors()
    syncField.value = '已填入合法示例'
    postTickField.value = '再次点击提交可观察通过路径'
    logLines.value = [
      '已填入一组合法数据',
      '当前没有错误字段需要聚焦',
      '再次点击提交会直接走校验通过路径',
    ]
  }

  const reset = () => {
    receiver.value = ''
    phone.value = ''
    email.value = ''
    errors.value = createEmptyErrors()
    syncField.value = '尚未提交'
    postTickField.value = '尚未聚焦'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等
          nextTick() 之后再 focus。
        </p>

        <div
          ref={formRef}
          className="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"
        >
          <label className="block">
            <div className="text-sm text-base-content/60">联系人</div>
            <input
              name="receiver"
              data-invalid={errors.value.receiver ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.receiver ? 'input-error' : ''}\`.trim()}
              value={receiver.value}
              placeholder="请输入联系人"
              onInput={(event: any) => {
                receiver.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.receiver && (
              <div className="mt-2 text-sm text-error">{errors.value.receiver}</div>
            )}
          </label>

          <label className="block">
            <div className="text-sm text-base-content/60">手机号</div>
            <input
              name="phone"
              data-invalid={errors.value.phone ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.phone ? 'input-error' : ''}\`.trim()}
              value={phone.value}
              placeholder="请输入 11 位手机号"
              onInput={(event: any) => {
                phone.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.phone && (
              <div className="mt-2 text-sm text-error">{errors.value.phone}</div>
            )}
          </label>

          <label className="block">
            <div className="text-sm text-base-content/60">邮箱</div>
            <input
              name="email"
              data-invalid={errors.value.email ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.email ? 'input-error' : ''}\`.trim()}
              value={email.value}
              placeholder="请输入邮箱"
              onInput={(event: any) => {
                email.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.email && (
              <div className="mt-2 text-sm text-error">{errors.value.email}</div>
            )}
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void submit()}>
            提交并定位错误字段
          </button>
          <button className="btn btn-outline" onClick={fillValidData}>
            填入合法示例
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步阶段识别到的字段</div>
            <div className="mt-2 font-mono text-xl">{syncField.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后结果</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickField.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`focus-error-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FocusErrorFieldDemo
`,ae=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开批量发送弹窗</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">布局决策</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),Q=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],$=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],oe=()=>{let n=e(!1),i=e(`尚未打开`),a=e(`尚未测量`),d=e(`等待测量`),g=e([...Q]),_=E(`ModalMeasureListDemo:hook:0`),b=async()=>{n.value=!0;let e=_.current?.scrollHeight??0;i.value=`${e}px`,a.value=`等待 flush...`,d.value=`等待布局完成...`,g.value=[`弹窗准备渲染 ${$.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await l();let t=_.current?.scrollHeight??0;a.value=`${t}px`,d.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,g.value=[`弹窗准备渲染 ${$.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${d.value}`]},O=()=>{n.value=!1,i.value=`尚未打开`,a.value=`尚未测量`,d.value=`等待测量`,g.value=[...Q]};return c(()=>A(C(()=>{let e=D(),c=ae().content.cloneNode(!0),l=c.firstChild,E=l.childNodes[0].childNodes[1].childNodes[0],A=l.childNodes[0].childNodes[1].childNodes[1],F=l.childNodes[0].childNodes[2],I=F.parentNode,L=l.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],R=L.parentNode,z=l.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],B=z.parentNode,V=l.childNodes[0].childNodes[3].childNodes[2].childNodes[1].childNodes[0],H=V.parentNode,U=l.childNodes[0].childNodes[4].childNodes[1].childNodes[0],W=U.parentNode;e.appendChild(c),o(E,`btn btn-primary`);let G=e=>{let t=()=>void b();typeof t==`function`&&t(e)};E.addEventListener(`click`,G),s(()=>E.removeEventListener(`click`,G)),o(A,`btn btn-ghost`);let K=e=>{let t=O;typeof t==`function`&&t(e)};A.addEventListener(`click`,K),s(()=>A.removeEventListener(`click`,K)),N(()=>{let e=n.value?C(()=>{let e=D(),n=j(`div`,e);p(e,n),o(n,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let i=j(`div`,n);p(n,i),o(i,`flex items-start justify-between gap-4`);let a=j(`div`,i);p(i,a);let s=j(`div`,a);p(a,s),o(s,`text-sm uppercase tracking-[0.24em] text-base-content/50`),p(s,w(`批量发送预览`));let c=j(`div`,a);p(a,c),o(c,`mt-2 text-2xl font-semibold`),p(c,w(`确认接收人列表`));let l=j(`div`,i);p(i,l),o(l,`badge badge-outline`);let d=M(`rue:slot:anchor`);p(l,d),N(()=>{let e=$.length;T(()=>m(e,l,d))}),p(l,w(` 人`));let g=j(`div`,n);p(n,g),h(g,()=>_),o(g,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let b=k(`rue:list:end`);y(g,b);let C=[];return N(()=>{C=t(g,b,C,$||[],(e,t)=>e.id,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`rounded-box bg-base-200/70 p-3 text-sm leading-6`;let r=S(`div`,t);y(t,r),r.className=`font-medium`;let i=x(``);y(r,i),v(i,()=>n.get().name);let a=S(`div`,t);y(t,a),a.className=`text-base-content/60`;let o=x(``);y(a,o),v(o,()=>n.get().team),y(a,x(` · `));let s=x(``);return y(a,s),v(s,()=>n.get().region),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e},!0):``;T(()=>m(e,I,F))}),N(()=>{let e=i.value;T(()=>m(e,R,L))}),N(()=>{let e=a.value;T(()=>m(e,B,z))}),N(()=>{let e=d.value;T(()=>m(e,H,V))});let q=[];return N(()=>{let e=g.value||[];q=t(W,U,q,e,(e,t)=>`modal-measure-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e},!0),e=>F(()=>{})))},se=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type Recipient = {
  id: number
  name: string
  team: string
  region: string
}

const defaultLogs = [
  '1. 打开批量发送弹窗',
  '2. 同步阶段列表容器还没真正挂载完成',
  '3. await nextTick() 后再测量列表高度决定布局策略',
]

const recipients: Recipient[] = [
  { id: 1, name: '李婷', team: '华东销售', region: '上海' },
  { id: 2, name: '周扬', team: '华东销售', region: '杭州' },
  { id: 3, name: '张一鸣', team: '华南渠道', region: '深圳' },
  { id: 4, name: '赵琪', team: '华南渠道', region: '广州' },
  { id: 5, name: '孙旭', team: '风控运营', region: '北京' },
  { id: 6, name: '陈尧', team: '风控运营', region: '天津' },
  { id: 7, name: '王蔓', team: '售后支持', region: '苏州' },
  { id: 8, name: '杨柳', team: '售后支持', region: '南京' },
  { id: 9, name: '蒋可', team: '仓储计划', region: '武汉' },
  { id: 10, name: '高晴', team: '仓储计划', region: '成都' },
]

const ModalMeasureListDemo: FC = () => {
  const modalOpen = ref(false)
  const syncHeight = ref('尚未打开')
  const postTickHeight = ref('尚未测量')
  const layoutDecision = ref('等待测量')
  const logLines = ref<string[]>([...defaultLogs])
  const listRef = useRef<HTMLDivElement>()

  const openModal = async () => {
    modalOpen.value = true

    const currentHeight = listRef.current?.scrollHeight ?? 0
    syncHeight.value = \`\${currentHeight}px\`
    postTickHeight.value = '等待 flush...'
    layoutDecision.value = '等待布局完成...'
    logLines.value = [
      \`弹窗准备渲染 \${recipients.length} 个接收人\`,
      \`同步读取列表高度：\${currentHeight}px\`,
      '等待 nextTick() 后决定是否启用内部滚动...',
    ]

    await nextTick()

    const nextHeight = listRef.current?.scrollHeight ?? 0
    postTickHeight.value = \`\${nextHeight}px\`
    layoutDecision.value =
      nextHeight > 280
        ? '列表超过阈值，建议固定 320px 高度并启用内部滚动'
        : '列表高度可控，可以直接完整展示'
    logLines.value = [
      \`弹窗准备渲染 \${recipients.length} 个接收人\`,
      \`同步读取列表高度：\${currentHeight}px\`,
      \`nextTick() 后列表高度：\${nextHeight}px，\${layoutDecision.value}\`,
    ]
  }

  const closeModal = () => {
    modalOpen.value = false
    syncHeight.value = '尚未打开'
    postTickHeight.value = '尚未测量'
    layoutDecision.value = '等待测量'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等
          nextTick() 后再测量。
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void openModal()}>
            打开批量发送弹窗
          </button>
          <button className="btn btn-ghost" onClick={closeModal}>
            关闭并重置
          </button>
        </div>

        {modalOpen.value && (
          <div className="rounded-box border border-base-300 bg-base-100 p-5 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
                  批量发送预览
                </div>
                <div className="mt-2 text-2xl font-semibold">确认接收人列表</div>
              </div>
              <div className="badge badge-outline">{recipients.length} 人</div>
            </div>

            <div ref={listRef} className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-2">
              {recipients.map(person => (
                <div key={person.id} className="rounded-box bg-base-200/70 p-3 text-sm leading-6">
                  <div className="font-medium">{person.name}</div>
                  <div className="text-base-content/60">
                    {person.team} · {person.region}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的高度</div>
            <div className="mt-2 font-mono text-xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后高度</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">布局决策</div>
            <div className="mt-2 text-sm leading-6 text-base-content/80">
              {layoutDecision.value}
            </div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`modal-measure-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ModalMeasureListDemo
`,ce=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。</p><div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">订单详情卡片</div><div class="mt-2 text-2xl font-semibold">订单 #A1024</div></div><div><!--rue:text-hole:0--></div></div><div class="mt-5 grid gap-3 md:grid-cols-2"><div class="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div><div class="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div><div class="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div><div class="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary"><!--rue:text-hole:2--></button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:4--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),le=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],ue=()=>{let i=e(!1),a=e(`尚未测量`),o=e(`尚未测量`),s=e([...le]),p=E(`PanelMeasureDemo:hook:0`),m=async()=>{i.value=!i.value;let e=i.value?`展开`:`收起`,t=p.current?.offsetHeight??0;a.value=`${t}px`,o.value=`等待 flush...`,s.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await l();let n=p.current?.offsetHeight??0;o.value=`${n}px`,s.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},h=()=>{i.value=!1,a.value=`尚未测量`,o.value=`尚未测量`,s.value=[...le]};return c(()=>A(r(Object.assign(e=>{let c=ce().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1],g=c.childNodes[0].childNodes[1].childNodes[0].childNodes[1],_=c.childNodes[0].childNodes[2].childNodes[0],b=c.childNodes[0].childNodes[2].childNodes[1],C=c.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],w=C.parentNode,T=c.childNodes[0].childNodes[1].childNodes[1].childNodes[4],E=T.parentNode,O=c.childNodes[0].childNodes[2].childNodes[0].childNodes[0],k=O.parentNode,A=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],j=A.parentNode,M=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],F=M.parentNode,I=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],L=I.parentNode,R=p;typeof R==`function`?R(l):R&&typeof R==`object`&&`current`in R&&(R.current=l),n(()=>{typeof R==`function`?R(null):R&&typeof R==`object`&&`current`in R&&(R.current=null)}),l.className=`rounded-box border border-base-300 bg-base-100 p-5`;let z;N(()=>{let e=`badge ${i.value?`badge-primary`:`badge-outline`}`,t=e==null?``:String(e);Object.is(z,t)||(z=t,g.className=t)}),_.className=`btn btn-primary`;let B=e=>{let t=()=>void m();typeof t==`function`&&t(e)};_.addEventListener(`click`,B),n(()=>_.removeEventListener(`click`,B)),b.className=`btn btn-ghost`;let V=e=>{let t=h;typeof t==`function`&&t(e)};b.addEventListener(`click`,V),n(()=>b.removeEventListener(`click`,V));let H=x(``);w.insertBefore(H,C),w.removeChild(C),v(H,()=>i.value?`已展开`:`已收起`),d(E,T,()=>{let e=i.value;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=D(),n=S(`div`,t);y(t,n),n.className=`rounded-box bg-base-200/60 p-3 text-sm`,y(n,x(`发票状态：电子发票已开具`));let r=S(`div`,t);y(t,r),r.className=`rounded-box bg-base-200/60 p-3 text-sm`,y(r,x(`风控结果：人工审核已通过`));let i=S(`div`,t);y(t,i),i.className=`rounded-box bg-base-200/60 p-3 text-sm`,y(i,x(`配送备注：优先联系收货人本人`));let a=S(`div`,t);return y(t,a),a.className=`rounded-box bg-base-200/60 p-3 text-sm`,y(a,x(`售后状态：暂无售后单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let U=x(``);k.insertBefore(U,O),k.removeChild(O),v(U,()=>i.value?`收起详情区并测量`:`展开详情区并测量`);let W=x(``);j.insertBefore(W,A),j.removeChild(A),v(W,()=>a.value);let G=x(``);F.insertBefore(G,M),F.removeChild(M),v(G,()=>o.value);let K=[];return N(()=>{let e=s.value||[];K=t(L,I,K,e,(e,t)=>`panel-measure-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},de=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 切换订单详情区的展开状态',
  '2. 同步阶段读取到的还是旧高度',
  '3. await nextTick() 后再拿到新高度',
]

const PanelMeasureDemo: FC = () => {
  const expanded = ref(false)
  const syncHeight = ref('尚未测量')
  const postTickHeight = ref('尚未测量')
  const logLines = ref<string[]>([...defaultLogs])
  const panelRef = useRef<HTMLDivElement>()

  const toggleExpanded = async () => {
    expanded.value = !expanded.value
    const targetState = expanded.value ? '展开' : '收起'
    const currentHeight = panelRef.current?.offsetHeight ?? 0

    syncHeight.value = \`\${currentHeight}px\`
    postTickHeight.value = '等待 flush...'
    logLines.value = [
      \`详情区准备\${targetState}\`,
      \`同步读取 offsetHeight：\${currentHeight}px\`,
      '等待 nextTick() 后重新测量...',
    ]

    await nextTick()

    const nextHeight = panelRef.current?.offsetHeight ?? 0
    postTickHeight.value = \`\${nextHeight}px\`
    logLines.value = [
      \`详情区准备\${targetState}\`,
      \`同步读取 offsetHeight：\${currentHeight}px\`,
      \`nextTick() 后 offsetHeight：\${nextHeight}px\`,
    ]
  }

  const reset = () => {
    expanded.value = false
    syncHeight.value = '尚未测量'
    postTickHeight.value = '尚未测量'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等
          nextTick() 后再测一次。
        </p>

        <div ref={panelRef} className="rounded-box border border-base-300 bg-base-100 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
                订单详情卡片
              </div>
              <div className="mt-2 text-2xl font-semibold">订单 #A1024</div>
            </div>
            <div className={\`badge \${expanded.value ? 'badge-primary' : 'badge-outline'}\`}>
              {expanded.value ? '已展开' : '已收起'}
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div>
            {expanded.value && (
              <>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  发票状态：电子发票已开具
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  风控结果：人工审核已通过
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  配送备注：优先联系收货人本人
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">售后状态：暂无售后单</div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void toggleExpanded()}>
            {expanded.value ? '收起详情区并测量' : '展开详情区并测量'}
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的高度</div>
            <div className="mt-2 font-mono text-2xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后高度</div>
            <div className="mt-2 font-mono text-2xl text-success">{postTickHeight.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`panel-measure-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PanelMeasureDemo
`,fe=g(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。</p><div class="flex flex-wrap gap-2"><!--rue:text-hole:0--><button class="btn btn-sm btn-outline">重置</button></div><div class="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"><table class="table table-pin-rows table-sm"><thead><tr><th>订单号</th><th>客户</th><th>状态</th><th>金额</th><th>备注</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的首条结果</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后定位到</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),pe=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],me={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},he=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],ge=e=>e===`all`?he:he.filter(t=>t.status===e),_e=()=>{let i=e(`all`),a=e(`尚未筛选`),o=e(`尚未定位`),s=e([...pe]),p=E(`TableFilterScrollDemo:hook:0`),h=async e=>{i.value=e;let t=p.current?.querySelector(`[data-first-visible="true"]`);a.value=t?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,o.value=`等待 flush...`,s.value=[`筛选条件切换为：${me[e]}`,`同步读取首条结果：${a.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await l();let n=p.current?.querySelector(`[data-first-visible="true"]`);n?.scrollIntoView({block:`nearest`}),o.value=n?.getAttribute(`data-order-no`)??`当前筛选没有结果`,s.value=[`筛选条件切换为：${me[e]}`,`同步读取首条结果：${a.value}`,`nextTick() 后首条结果：${o.value}，并已滚动到可视区域`]},g=()=>{i.value=`all`,a.value=`尚未筛选`,o.value=`尚未定位`,s.value=[...pe],p.current&&(p.current.scrollTop=0)},_=ge(i.value);return c(()=>A(r(Object.assign(e=>{let c=fe().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1].childNodes[1],b=c.childNodes[0].childNodes[2],C=c.childNodes[0].childNodes[1].childNodes[0],w=C.parentNode,E=c.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],O=E.parentNode,A=c.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],j=A.parentNode,M=c.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],F=M.parentNode,I=c.childNodes[0].childNodes[4].childNodes[1].childNodes[0],L=I.parentNode;l.className=`btn btn-sm btn-outline`;let R=e=>{let t=g;typeof t==`function`&&t(e)};l.addEventListener(`click`,R),n(()=>l.removeEventListener(`click`,R));let z=p;typeof z==`function`?z(b):z&&typeof z==`object`&&`current`in z&&(z.current=b),n(()=>{typeof z==`function`?z(null):z&&typeof z==`object`&&`current`in z&&(z.current=null)}),b.className=`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`;let B=[];N(()=>{B=t(w,C,B,[`all`,`risk`,`refund`,`shipping`,`done`],(e,t)=>e,(e,t)=>{let a=f(e),o=f(t);return u((e,t,o)=>P(e,o,()=>r(Object.assign(e=>{let t=S(`button`,e),r;N(()=>{let e=`btn btn-sm ${i.value===a.get()?`btn-primary`:`btn-ghost`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let o=e=>{let t=()=>void h(a.get());typeof t==`function`&&t(e)};t.addEventListener(`click`,o),n(()=>t.removeEventListener(`click`,o));let s=k(`rue:compiled-slot`);return y(t,s),N(()=>{let e=me[a.get()];T(()=>m(e,t,s))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,a.set(n),o.set(r)})})}),d(O,E,()=>_.length>0?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let n=D(),i=k(`rue:list:end`);y(n,i);let a=[];return N(()=>{let e=_||[];a=t(i.parentNode,i,a,e,(e,t)=>e.id,(e,t)=>{let n=f(e),i=f(t);return u((e,t,a)=>P(e,a,()=>r(Object.assign(e=>{let t=S(`tr`,e),r;N(()=>{let e=i.get()===0?`true`:`false`;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`data-first-visible`):t.setAttribute(`data-first-visible`,String(e)))});let a;N(()=>{let e=n.get().orderNo;Object.is(a,e)||(a=e,e==null||e===!1?t.removeAttribute(`data-order-no`):t.setAttribute(`data-order-no`,String(e)))});let o=S(`td`,t);y(t,o),o.className=`font-medium`;let s=x(``);y(o,s),v(s,()=>n.get().orderNo);let c=S(`td`,t);y(t,c);let l=x(``);y(c,l),v(l,()=>n.get().customer);let u=S(`td`,t);y(t,u);let d=S(`span`,u);y(u,d),d.className=`badge badge-outline`;let f=k(`rue:compiled-slot`);y(d,f),N(()=>{let e=me[n.get().status];T(()=>m(e,d,f))});let p=S(`td`,t);y(t,p);let h=x(``);y(p,h),v(h,()=>n.get().amount);let g=S(`td`,t);y(t,g),g.className=`text-base-content/60`;let _=x(``);return y(g,_),v(_,()=>n.get().note),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=S(`tr`,e),n=S(`td`,t);return y(t,n),n.setAttribute(`colSpan`,`5`),n.className=`py-8 text-center text-base-content/60`,y(n,x(`当前筛选没有结果`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let V=x(``);j.insertBefore(V,A),j.removeChild(A),v(V,()=>a.value);let H=x(``);F.insertBefore(H,M),F.removeChild(M),v(H,()=>o.value);let U=[];return N(()=>{let e=s.value||[];U=t(L,I,U,e,(e,t)=>`table-filter-log-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`li`,e),r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{})))},ve=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type OrderStatus = 'all' | 'risk' | 'refund' | 'shipping' | 'done'

type OrderRecord = {
  id: number
  orderNo: string
  customer: string
  status: Exclude<OrderStatus, 'all'>
  amount: string
  note: string
}

const defaultLogs = [
  '1. 切换筛选条件，表格准备重新渲染',
  '2. 同步阶段读取到的还是旧首条结果',
  '3. await nextTick() 后滚到新的首条命中记录',
]

const statusLabels: Record<OrderStatus, string> = {
  all: '全部订单',
  risk: '待风控',
  refund: '退款中',
  shipping: '待发货',
  done: '已完成',
}

const orders: OrderRecord[] = [
  {
    id: 1,
    orderNo: 'A-1024',
    customer: '上海徐汇门店',
    status: 'shipping',
    amount: '¥1,280',
    note: '等待波次出库',
  },
  {
    id: 2,
    orderNo: 'A-1025',
    customer: '苏州工业园',
    status: 'done',
    amount: '¥980',
    note: '已签收',
  },
  {
    id: 3,
    orderNo: 'A-1026',
    customer: '深圳南山客户',
    status: 'risk',
    amount: '¥2,430',
    note: '等待人工复核',
  },
  {
    id: 4,
    orderNo: 'A-1027',
    customer: '北京朝阳客户',
    status: 'refund',
    amount: '¥560',
    note: '退款审核中',
  },
  {
    id: 5,
    orderNo: 'A-1028',
    customer: '杭州西湖门店',
    status: 'shipping',
    amount: '¥1,120',
    note: '拣货完成',
  },
  {
    id: 6,
    orderNo: 'A-1029',
    customer: '武汉光谷仓',
    status: 'risk',
    amount: '¥3,100',
    note: '需补充发票信息',
  },
  {
    id: 7,
    orderNo: 'A-1030',
    customer: '成都高新区客户',
    status: 'refund',
    amount: '¥760',
    note: '等待退款到账',
  },
  {
    id: 8,
    orderNo: 'A-1031',
    customer: '广州天河客户',
    status: 'done',
    amount: '¥640',
    note: '回访完成',
  },
  {
    id: 9,
    orderNo: 'A-1032',
    customer: '天津滨海门店',
    status: 'shipping',
    amount: '¥1,860',
    note: '待分配骑手',
  },
  {
    id: 10,
    orderNo: 'A-1033',
    customer: '厦门湖里客户',
    status: 'risk',
    amount: '¥1,420',
    note: '身份核验异常',
  },
]

const getVisibleOrders = (status: OrderStatus) =>
  status === 'all' ? orders : orders.filter(order => order.status === status)

const TableFilterScrollDemo: FC = () => {
  const activeStatus = ref<OrderStatus>('all')
  const syncTarget = ref('尚未筛选')
  const postTickTarget = ref('尚未定位')
  const logLines = ref<string[]>([...defaultLogs])
  const viewportRef = useRef<HTMLDivElement>()

  const applyFilter = async (status: OrderStatus) => {
    activeStatus.value = status

    const syncRow = viewportRef.current?.querySelector(
      '[data-first-visible="true"]',
    ) as HTMLElement | null
    syncTarget.value = syncRow?.getAttribute('data-order-no') ?? '同步阶段尚未定位到新首条'
    postTickTarget.value = '等待 flush...'
    logLines.value = [
      \`筛选条件切换为：\${statusLabels[status]}\`,
      \`同步读取首条结果：\${syncTarget.value}\`,
      '等待 nextTick() 后滚到新的首条命中记录...',
    ]

    await nextTick()

    const nextRow = viewportRef.current?.querySelector(
      '[data-first-visible="true"]',
    ) as HTMLElement | null
    nextRow?.scrollIntoView({ block: 'nearest' })
    postTickTarget.value = nextRow?.getAttribute('data-order-no') ?? '当前筛选没有结果'
    logLines.value = [
      \`筛选条件切换为：\${statusLabels[status]}\`,
      \`同步读取首条结果：\${syncTarget.value}\`,
      \`nextTick() 后首条结果：\${postTickTarget.value}，并已滚动到可视区域\`,
    ]
  }

  const reset = () => {
    activeStatus.value = 'all'
    syncTarget.value = '尚未筛选'
    postTickTarget.value = '尚未定位'
    logLines.value = [...defaultLogs]
    if (viewportRef.current) {
      viewportRef.current.scrollTop = 0
    }
  }

  const visibleOrders = getVisibleOrders(activeStatus.value)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等
          nextTick() 后再定位首条新结果。
        </p>

        <div className="flex flex-wrap gap-2">
          {(['all', 'risk', 'refund', 'shipping', 'done'] as OrderStatus[]).map(status => (
            <button
              key={status}
              className={\`btn btn-sm \${activeStatus.value === status ? 'btn-primary' : 'btn-ghost'}\`}
              onClick={() => void applyFilter(status)}
            >
              {statusLabels[status]}
            </button>
          ))}
          <button className="btn btn-sm btn-outline" onClick={reset}>
            重置
          </button>
        </div>

        <div
          ref={viewportRef}
          className="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"
        >
          <table className="table table-pin-rows table-sm">
            <thead>
              <tr>
                <th>订单号</th>
                <th>客户</th>
                <th>状态</th>
                <th>金额</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {visibleOrders.length > 0 ? (
                visibleOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    data-first-visible={index === 0 ? 'true' : 'false'}
                    data-order-no={order.orderNo}
                  >
                    <td className="font-medium">{order.orderNo}</td>
                    <td>{order.customer}</td>
                    <td>
                      <span className="badge badge-outline">{statusLabels[order.status]}</span>
                    </td>
                    <td>{order.amount}</td>
                    <td className="text-base-content/60">{order.note}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-base-content/60">
                    当前筛选没有结果
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的首条结果</div>
            <div className="mt-2 font-mono text-2xl">{syncTarget.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后定位到</div>
            <div className="mt-2 font-mono text-2xl text-success">{postTickTarget.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`table-filter-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TableFilterScrollDemo
`,ye=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:K,Demo:G}],be=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:H,Demo:V},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:te,Demo:ee},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:de,Demo:ue},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:ve,Demo:_e},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:ie,Demo:re},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:se,Demo:oe}],xe=g(`<section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div><p class="mt-2 text-base-content/70 leading-7"><!--rue:text-hole:2--></p><div class="mt-4 flex flex-wrap gap-2"><!--rue:text-hole:3--></div><div class="mt-4"><!--rue:text-hole:4--></div></section>`),Se=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">nextTick 真实业务场景</h1>`),Ce=g(`<p class="max-w-4xl text-base-content/70 leading-7">现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。</p>`),we=g(`<div role="tablist" class="tabs tabs-box mt-6"><button role="tab">效果</button><button role="tab">代码</button></div>`),Te=g(`<div class="mt-4 grid gap-6"><!--rue:text-hole:0--><section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">新增业务 demo</div><div class="mt-2 text-2xl font-semibold">真实业务里 nextTick 怎么用</div><p class="mt-2 text-base-content/70 leading-7">这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。</p></section><!--rue:text-hole:1--></div>`),Ee=e=>{let n=f(e.activeTab),i=f(e.eyebrow),o=f(e.scenario),s=o.get().Demo;return A(C(()=>{let e=D(),c=xe().content.cloneNode(!0),l=c.firstChild,d=l.childNodes[0].childNodes[0],p=d.parentNode,h=l.childNodes[1].childNodes[0],g=h.parentNode,b=l.childNodes[2].childNodes[0],C=b.parentNode,w=l.childNodes[3].childNodes[0],E=w.parentNode,O=l.childNodes[4].childNodes[0],k=O.parentNode;e.appendChild(c),N(()=>{let e=i.get();T(()=>m(e,p,d))}),N(()=>{let e=o.get().title;T(()=>m(e,g,h))}),N(()=>{let e=o.get().summary;T(()=>m(e,C,b))});let A=[];return N(()=>{let e=o.get().businessCases||[];A=t(E,w,A,e,(e,t)=>e,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=S(`span`,e);t.className=`badge badge-outline`;let r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),N(()=>{let e=n.get().value===`preview`?_(s,()=>({})):r(Object.assign(e=>{let t=S(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=S(`div`,t);return y(t,n),n.className=`card-body p-0`,a(n,I,()=>({className:`h-full`,lang:`tsx`,code:o.get().source})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));T(()=>m(e,k,O))}),e},!0),e=>F(()=>{n.set(e.activeTab),i.set(e.eyebrow),o.set(e.scenario)}),()=>e)},De=()=>{let n=e(`preview`);return c(()=>A(i(L,()=>({children:[(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=D();return t.appendChild(Se().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=D();return t.appendChild(Ce().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=D(),r=we().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],c=i.childNodes[1];t.appendChild(r),O(a,`role`,`tab`),N(()=>{o(a,`tab ${n.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{n.value=`preview`};typeof t==`function`&&t(e)};a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),O(c,`role`,`tab`),N(()=>{o(c,`tab ${n.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{n.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),s(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,o)=>P(e,o,()=>r(Object.assign(e=>{let r=D(),a=Te().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[2],d=l.parentNode;r.appendChild(a);let p=[];N(()=>{p=t(c,s,p,ye||[],(e,t)=>e.title,(e,t)=>{let r=f(e),a=f(t);return u((e,t,a)=>P(e,a,()=>i(Ee,()=>({scenario:r.get(),eyebrow:`保留原始 demo`,activeTab:n}))),(n,i)=>{e=n,t=i,r.set(n),a.set(i)})})});let m=[];return N(()=>{m=t(d,l,m,be||[],(e,t)=>e.title,(e,t)=>{let r=f(e),a=f(t);return u((e,t,o)=>P(e,o,()=>i(Ee,()=>({scenario:r.get(),eyebrow:`业务场景 ${a.get()+1}`,activeTab:n}))),(n,i)=>{e=n,t=i,r.set(n),a.set(i)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>F(()=>{})))};export{De as default};