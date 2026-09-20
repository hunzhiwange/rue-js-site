import{Bt as e,Dt as t,F as n,H as r,Ht as i,I as a,O as o,Qt as s,U as c,Ut as l,V as u,Vt as d,W as f,Wt as p,Y as m,_t as h,dn as g,en as _,f as v,fn as y,g as b,gn as x,gt as S,h as C,hn as w,in as T,m as E,mn as D,p as O,pn as k,q as A,qt as j,sn as M,st as N,tt as P,u as F,vt as I,yn as L,yt as R,zt as z}from"./rue-runtime-Cv6BZekS.js";import{t as B}from"./Code-BzFVdc3U.js";import{r as V}from"./SidebarPlaygroundExample-rFyhXfC_.js";var H=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。</p><div class="rounded-box border border-base-300 bg-base-100"><div class="flex items-center justify-between border-b border-base-300 px-4 py-3"><div class="text-sm font-medium text-base-content/70">订单通知流</div><div class="badge badge-outline"><!--rue:text-hole:0--> 条消息</div></div><div class="max-h-56 space-y-3 overflow-y-auto px-4 py-4"><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">追加通知并滚动到底部</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 scrollHeight</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后的高度</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),U=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],W=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],G=(t,r,i)=>{let s=N(W()),c=N(`尚未追加`),l=N(`尚未追加`),u=N([...U]),f=A(`ChatScrollDemo:hook:0`),h=async()=>{let e=s.value.length+1,t=String(19+e).padStart(2,`0`);s.value=[...s.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=f.current?.scrollHeight??0;c.value=`${n}px（旧高度）`,l.value=`等待 flush...`,u.value=[`消息数已变为 ${s.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],f.current&&(f.current.scrollTop=n),await o();let r=f.current?.scrollHeight??0;f.current&&(f.current.scrollTop=r),l.value=`${r}px（已包含新消息）`,u.value=[`消息数已变为 ${s.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},g=()=>{s.value=W(),c.value=`尚未追加`,l.value=`尚未追加`,u.value=[...U],f.current&&(f.current.scrollTop=0)};return m(()=>p(t=>{let r=H().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[1],o=r.childNodes[0].childNodes[2].childNodes[0],p=r.childNodes[0].childNodes[2].childNodes[1],m=r.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],_=m.parentNode,S=r.childNodes[0].childNodes[1].childNodes[1].childNodes[0],T=S.parentNode,D=r.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],A=D.parentNode,N=r.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],P=N.parentNode,R=r.childNodes[0].childNodes[4].childNodes[1].childNodes[0],B=R.parentNode,V=k(`rue:text-hole:2`);A.replaceChild(V,D);let U=k(`rue:text-hole:3`);P.replaceChild(U,N);let W=f;typeof W==`function`?W(i):W&&typeof W==`object`&&`current`in W&&(W.current=i),M(()=>{typeof W==`function`?W(null):W&&typeof W==`object`&&`current`in W&&(W.current=null)}),i.setAttribute(`class`,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`),o.setAttribute(`class`,`btn btn-primary`),M(F(t,o,`click`,()=>()=>void h())),p.setAttribute(`class`,`btn btn-ghost`);let G=e=>{let t=g;typeof t==`function`&&t(e)};p.addEventListener(`click`,G),M(()=>p.removeEventListener(`click`,G)),e({parent:_,before:m},()=>z(s.value.length),()=>({}));let K=L(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><!--rue:text-hole:0--></div>`),q=[];j(()=>{let e=s.value||[];q=b(T,S,q,e,(e,t)=>e.id,(e,t,n)=>{let r=e,i;return E(e=>{let t=K().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=x(``);a.insertBefore(o,n),a.removeChild(n);let s=r.text==null||typeof r.text==`boolean`?``:String(r.text);return o.textContent=s,i=()=>{{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),M(()=>v(q)),e({parent:A,before:V},()=>z(c.value),()=>({})),e({parent:P,before:U},()=>z(l.value),()=>({}));let J=[];return j(()=>{let e=u.value||[];J=C(B,R,J,e,(e,t)=>`chat-scroll-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(J)),[r,r]}))},K=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,q=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。</p><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">当前 DOM 文本</div><div class="mt-3 text-4xl font-semibold text-primary"><span>rue:direct-text</span></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">自增并读取 DOM</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 DOM 文本</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后读取</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),J=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],Y=(e,t,r)=>{let i=N(0),c=N(`尚未读取`),l=N(`尚未读取`),u=N([...J]),f=A(`DomReadDemo:hook:0`),h=async()=>{i.value+=1;let e=f.current?.textContent??`(missing)`;c.value=e,l.value=`等待 flush...`,u.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await o();let t=f.current?.textContent??`(missing)`;l.value=t,u.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},g=()=>{i.value=0,c.value=`尚未读取`,l.value=`尚未读取`,u.value=[...J]};return m(()=>p(e=>{let t=q().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[2].childNodes[0],p=t.childNodes[0].childNodes[2].childNodes[1],m=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],_=m.parentNode,b=k(`rue:text-hole:0`);_.replaceChild(b,m);let S=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],T=S.parentNode,E=k(`rue:text-hole:1`);T.replaceChild(E,S);let D=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],A=D.parentNode,N=k(`rue:text-hole:2`);A.replaceChild(N,D);let P=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],L=P.parentNode,R=f;typeof R==`function`?R(r):R&&typeof R==`object`&&`current`in R&&(R.current=r),M(()=>{typeof R==`function`?R(null):R&&typeof R==`object`&&`current`in R&&(R.current=null)}),o.setAttribute(`class`,`btn btn-primary`),M(F(e,o,`click`,()=>()=>void h())),p.setAttribute(`class`,`btn btn-ghost`);let z=e=>{let t=g;typeof t==`function`&&t(e)};p.addEventListener(`click`,z),M(()=>p.removeEventListener(`click`,z));let B=x(``);_.insertBefore(B,b),_.removeChild(b),s(B,()=>i.value);let V=x(``);T.insertBefore(V,E),T.removeChild(E),s(V,()=>c.value);let H=x(``);A.insertBefore(H,N),A.removeChild(N),s(H,()=>l.value);let U=[];return j(()=>{let e=u.value||[];U=C(L,P,U,e,(e,t)=>`dom-read-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(U)),[t,t]}))},X=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Z=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开高级筛选</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段状态</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后状态</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),ee=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],Q=(e,t,r)=>{let i=N(!1),c=N(``),u=N(`尚未打开`),f=N(`尚未聚焦`),h=N([...ee]),g=A(`FilterFocusDemo:hook:0`),_=async()=>{i.value=!0,u.value=g.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,f.value=`等待 flush...`,h.value=[`筛选面板状态已切到打开`,u.value,`等待 nextTick() 后执行 focus()`],await o(),g.current?.focus();let e=globalThis.document?.activeElement===g.current;f.value=e?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,h.value=[`筛选面板状态已切到打开`,u.value,f.value]},b=()=>{i.value=!1,c.value=``,u.value=`尚未打开`,f.value=`尚未聚焦`,h.value=[...ee]};return m(()=>p(e=>{let t=Z().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[1].childNodes[1],m=t.childNodes[0].childNodes[2],S=m.parentNode,E=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],A=E.parentNode,N=k(`rue:text-hole:1`);A.replaceChild(N,E);let P=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],L=P.parentNode,z=k(`rue:text-hole:2`);L.replaceChild(z,P);let B=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],V=B.parentNode;r.setAttribute(`class`,`btn btn-primary`),M(F(e,r,`click`,()=>()=>void _())),o.setAttribute(`class`,`btn btn-ghost`);let H=e=>{let t=b;typeof t==`function`&&t(e)};o.addEventListener(`click`,H),M(()=>o.removeEventListener(`click`,H)),l(S,m,()=>{let e=i.value;return e?{__rue_compiled_branch_key:!0,create:()=>p(e=>{let t=w(`div`,e);t.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5`);let n=w(`div`,t);y(t,n),n.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let r=w(`label`,n);y(n,r),r.setAttribute(`class`,`block`);let i=w(`div`,r);y(r,i),i.setAttribute(`class`,`text-sm text-base-content/60`),y(i,x(`关键词`));let a=w(`input`,r);y(r,a);let o=g;typeof o==`function`?o(a):o&&typeof o==`object`&&`current`in o&&(o.current=a),M(()=>{typeof o==`function`?o(null):o&&typeof o==`object`&&`current`in o&&(o.current=null)}),a.setAttribute(`class`,`input input-bordered mt-2 w-full`);let s;T(()=>{let e=c.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,a.value=t)}),a.setAttribute(`placeholder`,`订单号 / 用户名 / 手机号`);let l=e=>{let t=e=>{c.value=e.target.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,l),M(()=>a.removeEventListener(`input`,l));let u=w(`label`,n);y(n,u),u.setAttribute(`class`,`block`);let d=w(`div`,u);y(u,d),d.setAttribute(`class`,`text-sm text-base-content/60`),y(d,x(`订单状态`));let f=w(`select`,u);y(u,f),f.setAttribute(`class`,`select select-bordered mt-2 w-full`);let p=w(`option`,f);y(f,p),y(p,x(`全部`));let m=w(`option`,f);y(f,m),y(m,x(`待支付`));let h=w(`option`,f);y(f,h),y(h,x(`待发货`));let _=w(`option`,f);return y(f,_),y(_,x(`已完成`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>R(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>R(e=>{let t=D();return[t.firstChild,t.lastChild]})}});let U=x(``);A.insertBefore(U,N),A.removeChild(N),s(U,()=>u.value);let W=x(``);L.insertBefore(W,z),L.removeChild(z),s(W,()=>f.value);let G=[];return j(()=>{let e=h.value||[];G=C(V,B,G,e,(e,t)=>`filter-focus-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(G)),[t,t]}))},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ne=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。</p><div class="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"><label class="block"><div class="text-sm text-base-content/60">联系人</div><input name="receiver" placeholder="请输入联系人"><!--rue:text-hole:0--></label><label class="block"><div class="text-sm text-base-content/60">手机号</div><input name="phone" placeholder="请输入 11 位手机号"><!--rue:text-hole:1--></label><label class="block"><div class="text-sm text-base-content/60">邮箱</div><input name="email" placeholder="请输入邮箱"><!--rue:text-hole:2--></label></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">提交并定位错误字段</button><button class="btn btn-outline">填入合法示例</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段识别到的字段</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后结果</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),$=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],re={receiver:`联系人`,phone:`手机号`,email:`邮箱`},ie=()=>({receiver:``,phone:``,email:``}),ae=(r,i,s)=>{let c=N(``),l=N(``),u=N(``),f=N(ie()),h=N(`尚未提交`),g=N(`尚未聚焦`),_=N([...$]),b=A(`FocusErrorFieldDemo:hook:0`),S=()=>({receiver:c.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(l.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.value)?``:`请输入有效邮箱`}),E=async()=>{let e=S(),t=Object.values(e).filter(Boolean).length;f.value=e;let n=b.current?.querySelector(`[data-invalid="true"]`);h.value=n?.name?`${re[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,g.value=`等待 flush...`,_.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${h.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await o();let r=b.current?.querySelector(`[data-invalid="true"]`);r?.focus(),g.value=r?.name?`${re[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,_.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${h.value}`,g.value]},P=()=>{c.value=`李四`,l.value=`13800001111`,u.value=`li.si@example.com`,f.value=ie(),h.value=`已填入合法示例`,g.value=`再次点击提交可观察通过路径`,_.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},L=()=>{c.value=``,l.value=``,u.value=``,f.value=ie(),h.value=`尚未提交`,g.value=`尚未聚焦`,_.value=[...$]};return m(()=>p(r=>{let i=ne().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[1],s=i.childNodes[0].childNodes[1].childNodes[0].childNodes[1],m=i.childNodes[0].childNodes[1].childNodes[1].childNodes[1],S=i.childNodes[0].childNodes[1].childNodes[2].childNodes[1],A=i.childNodes[0].childNodes[2].childNodes[0],N=i.childNodes[0].childNodes[2].childNodes[1],B=i.childNodes[0].childNodes[2].childNodes[2],V=i.childNodes[0].childNodes[1].childNodes[0].childNodes[2],H=V.parentNode,U=i.childNodes[0].childNodes[1].childNodes[1].childNodes[2],W=U.parentNode,G=i.childNodes[0].childNodes[1].childNodes[2].childNodes[2],K=G.parentNode,q=i.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],J=q.parentNode,Y=i.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],X=Y.parentNode,Z=i.childNodes[0].childNodes[4].childNodes[1].childNodes[0],ee=Z.parentNode,Q=k(`rue:text-hole:3`);J.replaceChild(Q,q);let te=k(`rue:text-hole:4`);X.replaceChild(te,Y);let $=b;typeof $==`function`?$(o):$&&typeof $==`object`&&`current`in $&&($.current=o),M(()=>{typeof $==`function`?$(null):$&&typeof $==`object`&&`current`in $&&($.current=null)}),o.setAttribute(`class`,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`),s.setAttribute(`name`,`receiver`);let re;T(()=>{let e=f.value.receiver?`true`:`false`;Object.is(re,e)||(re=e,e==null?s.removeAttribute(`data-invalid`):s.setAttribute(`data-invalid`,String(e)))});let ie;T(()=>{let e=`input input-bordered mt-2 w-full ${f.value.receiver?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(ie,t)||(ie=t,s.setAttribute(`class`,t))});let ae;T(()=>{let e=c.value,t=e==null?``:String(e);Object.is(ae,t)||(ae=t,s.value=t)}),s.setAttribute(`placeholder`,`请输入联系人`);let oe=e=>{let t=e=>{c.value=e.target.value};typeof t==`function`&&t(e)};s.addEventListener(`input`,oe),M(()=>s.removeEventListener(`input`,oe)),m.setAttribute(`name`,`phone`);let se;T(()=>{let e=f.value.phone?`true`:`false`;Object.is(se,e)||(se=e,e==null?m.removeAttribute(`data-invalid`):m.setAttribute(`data-invalid`,String(e)))});let ce;T(()=>{let e=`input input-bordered mt-2 w-full ${f.value.phone?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(ce,t)||(ce=t,m.setAttribute(`class`,t))});let le;T(()=>{let e=l.value,t=e==null?``:String(e);Object.is(le,t)||(le=t,m.value=t)}),m.setAttribute(`placeholder`,`请输入 11 位手机号`);let ue=e=>{let t=e=>{l.value=e.target.value};typeof t==`function`&&t(e)};m.addEventListener(`input`,ue),M(()=>m.removeEventListener(`input`,ue)),S.setAttribute(`name`,`email`);let de;T(()=>{let e=f.value.email?`true`:`false`;Object.is(de,e)||(de=e,e==null?S.removeAttribute(`data-invalid`):S.setAttribute(`data-invalid`,String(e)))});let fe;T(()=>{let e=`input input-bordered mt-2 w-full ${f.value.email?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(fe,t)||(fe=t,S.setAttribute(`class`,t))});let pe;T(()=>{let e=u.value,t=e==null?``:String(e);Object.is(pe,t)||(pe=t,S.value=t)}),S.setAttribute(`placeholder`,`请输入邮箱`);let me=e=>{let t=e=>{u.value=e.target.value};typeof t==`function`&&t(e)};S.addEventListener(`input`,me),M(()=>S.removeEventListener(`input`,me)),A.setAttribute(`class`,`btn btn-primary`),M(F(r,A,`click`,()=>()=>void E())),N.setAttribute(`class`,`btn btn-outline`);let he=e=>{let t=P;typeof t==`function`&&t(e)};N.addEventListener(`click`,he),M(()=>N.removeEventListener(`click`,he)),B.setAttribute(`class`,`btn btn-ghost`);let ge=e=>{let t=L;typeof t==`function`&&t(e)};B.addEventListener(`click`,ge),M(()=>B.removeEventListener(`click`,ge)),e({parent:H,before:V},()=>f.value.receiver?(n,r,i)=>d(n,i,()=>p(()=>{let n=D(),r=w(`div`,n);y(n,r),t(r,`mt-2 text-sm text-error`);let i=k(`rue:slot:anchor`);y(r,i),e({parent:r,before:i},()=>z(f.value.receiver),()=>({}));let a=x(``),o=x(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>R(e=>{let t=x(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),e({parent:W,before:U},()=>f.value.phone?(n,r,i)=>d(n,i,()=>p(()=>{let n=D(),r=w(`div`,n);y(n,r),t(r,`mt-2 text-sm text-error`);let i=k(`rue:slot:anchor`);y(r,i),e({parent:r,before:i},()=>z(f.value.phone),()=>({}));let a=x(``),o=x(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>R(e=>{let t=x(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),e({parent:K,before:G},()=>f.value.email?(n,r,i)=>d(n,i,()=>p(()=>{let n=D(),r=w(`div`,n);y(n,r),t(r,`mt-2 text-sm text-error`);let i=k(`rue:slot:anchor`);y(r,i),e({parent:r,before:i},()=>z(f.value.email),()=>({}));let a=x(``),o=x(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>R(e=>{let t=x(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),e({parent:J,before:Q},()=>z(h.value),()=>({})),e({parent:X,before:te},()=>z(g.value),()=>({}));let _e=[];return j(()=>{let e=_.value||[];_e=C(ee,Z,_e,e,(e,t)=>`focus-error-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(_e)),[i,i]}))},oe=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,se=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开批量发送弹窗</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">布局决策</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),ce=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],le=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],ue=(r,i,s)=>{let c=N(!1),l=N(`尚未打开`),u=N(`尚未测量`),h=N(`等待测量`),g=N([...ce]),_=A(`ModalMeasureListDemo:hook:0`),S=async()=>{c.value=!0;let e=_.current?.scrollHeight??0;l.value=`${e}px`,u.value=`等待 flush...`,h.value=`等待布局完成...`,g.value=[`弹窗准备渲染 ${le.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await o();let t=_.current?.scrollHeight??0;u.value=`${t}px`,h.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,g.value=[`弹窗准备渲染 ${le.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${h.value}`]},T=()=>{c.value=!1,l.value=`尚未打开`,u.value=`尚未测量`,h.value=`等待测量`,g.value=[...ce]};return m(()=>p(r=>{let i=se().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[1].childNodes[0],s=i.childNodes[0].childNodes[1].childNodes[1],m=i.childNodes[0].childNodes[2],A=m.parentNode,N=i.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],P=N.parentNode,B=i.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],V=B.parentNode,H=i.childNodes[0].childNodes[3].childNodes[2].childNodes[1].childNodes[0],U=H.parentNode,W=i.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode,K=k(`rue:text-hole:1`);P.replaceChild(K,N);let q=k(`rue:text-hole:2`);V.replaceChild(q,B),o.setAttribute(`class`,`btn btn-primary`),M(F(r,o,`click`,()=>()=>void S())),s.setAttribute(`class`,`btn btn-ghost`);let J=e=>{let t=T;typeof t==`function`&&t(e)};s.addEventListener(`click`,J),M(()=>s.removeEventListener(`click`,J)),e({parent:A,before:m},()=>c.value?(n,r,i)=>d(n,i,()=>p(n=>{let r=D(),i=w(`div`,r);y(r,i),t(i,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let a=w(`div`,i);y(i,a),t(a,`flex items-start justify-between gap-4`);let o=w(`div`,a);y(a,o);let s=w(`div`,o);y(o,s),t(s,`text-sm uppercase tracking-[0.24em] text-base-content/50`),y(s,x(`批量发送预览`));let c=w(`div`,o);y(o,c),t(c,`mt-2 text-2xl font-semibold`),y(c,x(`确认接收人列表`));let l=w(`div`,a);y(a,l),t(l,`badge badge-outline`);let u=k(`rue:slot:anchor`);y(l,u),e({parent:l,before:u},()=>z(le.length),()=>({})),y(l,x(` 人`));let d=w(`div`,i);y(i,d),f(d,()=>_),t(d,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let p=L(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><div class="font-medium">rue:row-text</div><div class="text-base-content/60"><!--rue:text-hole:1--> · <!--rue:text-hole:2--></div></div>`),m=k(`rue:list:end`);y(d,m);let h=[];j(()=>{h=b(d,m,h,le||[],(e,t)=>e.id,(e,t,n)=>{let r=e,i;return E(e=>{let t=p().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.parentNode;let a=t.childNodes[1].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[2],c=s.parentNode,l=r.name==null||typeof r.name==`boolean`?``:String(r.name);n.textContent=l;let u=x(``);o.insertBefore(u,a),o.removeChild(a);let d=r.team==null||typeof r.team==`boolean`?``:String(r.team);u.textContent=d;let f=x(``);c.insertBefore(f,s),c.removeChild(s);let m=r.region==null||typeof r.region==`boolean`?``:String(r.region);return f.textContent=m,i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(n.textContent=e,l=e)}{let e=r.team==null||typeof r.team==`boolean`?``:String(r.team);Object.is(d,e)||(u.textContent=e,d=e)}{let e=r.region==null||typeof r.region==`boolean`?``:String(r.region);Object.is(m,e)||(f.textContent=e,m=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),M(()=>v(h));let g=x(``),S=x(``);return r.insertBefore(g,r.firstChild),r.appendChild(S),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>R(e=>{let t=x(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),e({parent:P,before:K},()=>z(l.value),()=>({})),e({parent:V,before:q},()=>z(u.value),()=>({})),e({parent:U,before:H},()=>z(h.value),()=>({}));let Y=[];return j(()=>{let e=g.value||[];Y=C(G,W,Y,e,(e,t)=>`modal-measure-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(Y)),[i,i]}))},de=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,fe=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。</p><div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">订单详情卡片</div><div class="mt-2 text-2xl font-semibold">订单 #A1024</div></div><div><!--rue:text-hole:0--></div></div><div class="mt-5 grid gap-3 md:grid-cols-2"><div class="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div><div class="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div><div class="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div><div class="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary"><!--rue:text-hole:2--></button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),pe=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],me=(e,t,r)=>{let i=N(!1),c=N(`尚未测量`),u=N(`尚未测量`),f=N([...pe]),h=A(`PanelMeasureDemo:hook:0`),g=async()=>{i.value=!i.value;let e=i.value?`展开`:`收起`,t=h.current?.offsetHeight??0;c.value=`${t}px`,u.value=`等待 flush...`,f.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await o();let n=h.current?.offsetHeight??0;u.value=`${n}px`,f.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},_=()=>{i.value=!1,c.value=`尚未测量`,u.value=`尚未测量`,f.value=[...pe]};return m(()=>p(e=>{let t=fe().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1],o=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1],p=t.childNodes[0].childNodes[2].childNodes[0],m=t.childNodes[0].childNodes[2].childNodes[1],b=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],S=b.parentNode,E=t.childNodes[0].childNodes[1].childNodes[1].childNodes[4],A=E.parentNode,N=t.childNodes[0].childNodes[2].childNodes[0].childNodes[0],P=N.parentNode,L=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],z=L.parentNode,B=k(`rue:text-hole:3`);z.replaceChild(B,L);let V=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],H=V.parentNode,U=k(`rue:text-hole:4`);H.replaceChild(U,V);let W=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode,K=h;typeof K==`function`?K(r):K&&typeof K==`object`&&`current`in K&&(K.current=r),M(()=>{typeof K==`function`?K(null):K&&typeof K==`object`&&`current`in K&&(K.current=null)}),r.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5`);let q;T(()=>{let e=`badge ${i.value?`badge-primary`:`badge-outline`}`,t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,o.setAttribute(`class`,t))}),p.setAttribute(`class`,`btn btn-primary`),M(F(e,p,`click`,()=>()=>void g())),m.setAttribute(`class`,`btn btn-ghost`);let J=e=>{let t=_;typeof t==`function`&&t(e)};m.addEventListener(`click`,J),M(()=>m.removeEventListener(`click`,J));let Y=x(``);S.insertBefore(Y,b),S.removeChild(b),s(Y,()=>i.value?`已展开`:`已收起`),l(A,E,()=>{let e=i.value;return e?{__rue_compiled_branch_key:!0,create:()=>R(e=>{let t=D(),n=w(`div`,t);y(t,n),n.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),y(n,x(`发票状态：电子发票已开具`));let r=w(`div`,t);y(t,r),r.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),y(r,x(`风控结果：人工审核已通过`));let i=w(`div`,t);y(t,i),i.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),y(i,x(`配送备注：优先联系收货人本人`));let a=w(`div`,t);y(t,a),a.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),y(a,x(`售后状态：暂无售后单`));let o=x(``),s=x(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>R(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>R(e=>{let t=D();return[t.firstChild,t.lastChild]})}});let X=x(``);P.insertBefore(X,N),P.removeChild(N),s(X,()=>i.value?`收起详情区并测量`:`展开详情区并测量`);let Z=x(``);z.insertBefore(Z,B),z.removeChild(B),s(Z,()=>c.value);let ee=x(``);H.insertBefore(ee,U),H.removeChild(U),s(ee,()=>u.value);let Q=[];return j(()=>{let e=f.value||[];Q=C(G,W,Q,e,(e,t)=>`panel-measure-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(Q)),[t,t]}))},he=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ge=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。</p><div class="flex flex-wrap gap-2"><!--rue:text-hole:0--><button class="btn btn-sm btn-outline">重置</button></div><div class="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"><table class="table table-pin-rows table-sm"><thead><tr><th>订单号</th><th>客户</th><th>状态</th><th>金额</th><th>备注</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的首条结果</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后定位到</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),_e=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],ve={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},ye=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],be=e=>e===`all`?ye:ye.filter(t=>t.status===e),xe=(t,r,i)=>{let c=N(`all`),u=N(`尚未筛选`),f=N(`尚未定位`),h=N([..._e]),_=A(`TableFilterScrollDemo:hook:0`),b=async e=>{c.value=e;let t=_.current?.querySelector(`[data-first-visible="true"]`);u.value=t?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,f.value=`等待 flush...`,h.value=[`筛选条件切换为：${ve[e]}`,`同步读取首条结果：${u.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await o();let n=_.current?.querySelector(`[data-first-visible="true"]`);n?.scrollIntoView({block:`nearest`}),f.value=n?.getAttribute(`data-order-no`)??`当前筛选没有结果`,h.value=[`筛选条件切换为：${ve[e]}`,`同步读取首条结果：${u.value}`,`nextTick() 后首条结果：${f.value}，并已滚动到可视区域`]},S=()=>{c.value=`all`,u.value=`尚未筛选`,f.value=`尚未定位`,h.value=[..._e],_.current&&(_.current.scrollTop=0)},E=P(()=>be(c.value));return g(()=>E.get()),m(()=>p(t=>{let r=ge().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[1],o=r.childNodes[0].childNodes[2],m=r.childNodes[0].childNodes[1].childNodes[0],g=m.parentNode,A=r.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],N=A.parentNode,P=r.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],L=P.parentNode,B=k(`rue:text-hole:2`);L.replaceChild(B,P);let V=r.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],H=V.parentNode,U=k(`rue:text-hole:3`);H.replaceChild(U,V);let W=r.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode;i.setAttribute(`class`,`btn btn-sm btn-outline`);let K=e=>{let t=S;typeof t==`function`&&t(e)};i.addEventListener(`click`,K),M(()=>i.removeEventListener(`click`,K));let q=_;typeof q==`function`?q(o):q&&typeof q==`object`&&`current`in q&&(q.current=o),M(()=>{typeof q==`function`?q(null):q&&typeof q==`object`&&`current`in q&&(q.current=null)}),o.setAttribute(`class`,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let J=[];j(()=>{J=C(g,m,J,[`all`,`risk`,`refund`,`shipping`,`done`],(e,t)=>e,(t,n)=>{let r=I(t);return O((t,n,i)=>{let a=()=>p(t=>{let n=w(`button`,t),i;T(()=>{let e=`btn btn-sm ${c.value===r.get()?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),M(F(t,n,`click`,()=>()=>void b(r.get())));let a=k(`rue:compiled-slot`);return y(n,a),e({parent:n,before:a},()=>z(ve[r.get()]),()=>({})),[n,n]});return t==null?a():d(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),M(()=>v(J)),l(N,A,()=>E.get().length>0?{__rue_compiled_branch_key:!0,create:()=>p(t=>{let n=D(),r=k(`rue:list:end`);y(n,r);let i=[];j(()=>{let t=E.get()||[];i=C(r.parentNode,r,i,t,(e,t)=>e.id,(t,n)=>{let r=I(t),i=I(n);return O((t,n,a)=>{let o=()=>p(t=>{let n=w(`tr`,t),a;T(()=>{let e=i.get()===0?`true`:`false`;Object.is(a,e)||(a=e,e==null?n.removeAttribute(`data-first-visible`):n.setAttribute(`data-first-visible`,String(e)))});let o;T(()=>{let e=r.get().orderNo;Object.is(o,e)||(o=e,e==null?n.removeAttribute(`data-order-no`):n.setAttribute(`data-order-no`,String(e)))});let s=w(`td`,n);y(n,s),s.setAttribute(`class`,`font-medium`);let c=k(`rue:compiled-slot`);y(s,c),e({parent:s,before:c},()=>z(r.get().orderNo),()=>({}));let l=w(`td`,n);y(n,l);let u=k(`rue:compiled-slot`);y(l,u),e({parent:l,before:u},()=>z(r.get().customer),()=>({}));let d=w(`td`,n);y(n,d);let f=w(`span`,d);y(d,f),f.setAttribute(`class`,`badge badge-outline`);let p=k(`rue:compiled-slot`);y(f,p),e({parent:f,before:p},()=>z(ve[r.get().status]),()=>({}));let m=w(`td`,n);y(n,m);let h=k(`rue:compiled-slot`);y(m,h),e({parent:m,before:h},()=>z(r.get().amount),()=>({}));let g=w(`td`,n);y(n,g),g.setAttribute(`class`,`text-base-content/60`);let _=k(`rue:compiled-slot`);return y(g,_),e({parent:g,before:_},()=>z(r.get().note),()=>({})),[n,n]});return t==null?o():d(t,a,o)},(e,a)=>{t=e,n=a,r.set(e),i.set(a)},void 0)},!0,!1)}),M(()=>v(i));let a=x(``),o=x(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>R(e=>{let t=w(`tr`,e),n=w(`td`,t);return y(t,n),n.setAttribute(`colSpan`,`5`),n.setAttribute(`class`,`py-8 text-center text-base-content/60`),y(n,x(`当前筛选没有结果`)),[t,t]})});let Y=x(``);L.insertBefore(Y,B),L.removeChild(B),s(Y,()=>u.value);let X=x(``);H.insertBefore(X,U),H.removeChild(U),s(X,()=>f.value);let Z=[];return j(()=>{let e=h.value||[];Z=C(G,W,Z,e,(e,t)=>`table-filter-log-${t}`,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e),n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(Z)),[r,r]}))},Se=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Ce=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:X,Demo:Y}],we=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:K,Demo:G},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:te,Demo:Q},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:he,Demo:me},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Se,Demo:xe},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:oe,Demo:ae},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:de,Demo:ue}],Te=L(`<section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold">rue:direct-text</div><p class="mt-2 text-base-content/70 leading-7">rue:direct-text</p><div class="mt-4 flex flex-wrap gap-2"><!--rue:text-hole:3--></div><div class="mt-4"><!--rue:text-hole:4--></div></section>`),Ee=L(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">nextTick 真实业务场景</h1>`),De=L(`<p class="max-w-4xl text-base-content/70 leading-7">现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。</p>`),Oe=L(`<div role="tablist" class="tabs tabs-box mt-6"><button role="tab">效果</button><button role="tab">代码</button></div>`),ke=L(`<div class="mt-4 grid gap-6"><!--rue:text-hole:0--><section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">新增业务 demo</div><div class="mt-2 text-2xl font-semibold">真实业务里 nextTick 怎么用</div><p class="mt-2 text-base-content/70 leading-7">这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。</p></section><!--rue:text-hole:1--></div>`),Ae=(e,t,n)=>{let r=I(S(e,`title`));return c(i(()=>r.get()===`读取最新 DOM 文本`?{__rue_compiled_branch_key:0,create:()=>u(Y,()=>({}))}:{__rue_compiled_branch_key:1,create:()=>r.get()===`消息流自动滚动`?u(G,()=>({})):r.get()===`打开面板后自动聚焦`?u(Q,()=>({})):r.get()===`展开后测量高度`?u(me,()=>({})):r.get()===`表格筛选后滚到首条结果`?u(xe,()=>({})):r.get()===`提交后聚焦错误字段`?u(ae,()=>({})):u(ue,()=>({}))}),e=>_(()=>{r.set(e.title)}),()=>h(e))},je=(t,i,o)=>{let s=I(S(t,`activeTab`)),f=I(S(t,`eyebrow`)),m=I(S(t,`scenario`));return c(p(t=>{let i=D(),o=Te().content.cloneNode(!0),c=o.firstChild,h=c.childNodes[0].childNodes[0],g=h.parentNode,_=c.childNodes[1].childNodes[0],b=_.parentNode,S=c.childNodes[2].childNodes[0],T=S.parentNode,E=c.childNodes[3].childNodes[0],A=E.parentNode,N=c.childNodes[4].childNodes[0],P=N.parentNode,F=k(`rue:text-hole:1`);b.replaceChild(F,_);let L=k(`rue:text-hole:2`);T.replaceChild(L,S),i.appendChild(o),e({parent:g,before:h},()=>z(f.get()),()=>({})),e({parent:b,before:F},()=>z(m.get().title),()=>({})),e({parent:T,before:L},()=>z(m.get().summary),()=>({}));let R=[];j(()=>{let e=m.get().businessCases||[];R=C(A,E,R,e,(e,t)=>e,(e,t)=>{let r=I(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`span`,e);t.setAttribute(`class`,`badge badge-outline`);let n=x(``);return y(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),M(()=>v(R)),l(P,N,()=>s.get().value===`preview`?{__rue_compiled_branch_key:!0,create:()=>u(Ae,()=>({title:m.get().title}))}:{__rue_compiled_branch_key:!1,create:()=>p(e=>{let t=w(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=w(`div`,t);return y(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,B,()=>({className:`h-full`,lang:`tsx`,code:m.get().source})),[t,t]})});let V=x(``),H=x(``);return i.insertBefore(V,i.firstChild),i.appendChild(H),[i.firstChild,i.lastChild]}),e=>_(()=>{s.set(e.activeTab),f.set(e.eyebrow),m.set(e.scenario)}),()=>h(t))},Me=(e,t,n)=>{let r=N(`preview`);return m(()=>u(V,()=>({children:(e,t,n)=>{let i=()=>p(e=>{let t=D();t.appendChild(Ee().content.cloneNode(!0)),t.appendChild(De().content.cloneNode(!0));let n=Oe().content.cloneNode(!0),i=n.firstChild,a=i.childNodes[0],o=i.childNodes[1];t.appendChild(n),a.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${r.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,a.setAttribute(`class`,t))}),M(F(e,a,`click`,()=>()=>{r.value=`preview`})),o.setAttribute(`role`,`tab`);let c;T(()=>{let e=`tab ${r.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,o.setAttribute(`class`,t))}),M(F(e,o,`click`,()=>()=>{r.value=`code`}));let l=ke().content.cloneNode(!0),f=l.firstChild,p=f.childNodes[0],m=p.parentNode,h=f.childNodes[2],g=h.parentNode;t.appendChild(l);let _=[];j(()=>{_=C(m,p,_,Ce||[],(e,t)=>e.title,(e,t)=>{let n=I(e);return O((e,t,i)=>{let a=()=>u(je,()=>({scenario:n.get(),eyebrow:`保留原始 demo`,activeTab:r}));return e==null?a():d(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),M(()=>v(_));let y=[];j(()=>{y=C(g,h,y,we||[],(e,t)=>e.title,(e,t)=>{let n=I(e),i=I(t);return O((e,t,a)=>{let o=()=>u(je,()=>({scenario:n.get(),eyebrow:`业务场景 ${i.get()+1}`,activeTab:r}));return e==null?o():d(e,a,o)},(r,a)=>{e=r,t=a,n.set(r),i.set(a)},void 0)},!0,!1)}),M(()=>v(y));let b=x(``),S=x(``);return t.insertBefore(b,t.firstChild),t.appendChild(S),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})))};export{Me as default};