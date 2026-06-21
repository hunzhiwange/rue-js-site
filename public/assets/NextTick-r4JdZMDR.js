import{$t as e,Dt as t,Jt as n,Q as r,St as i,Z as a,_t as o,dt as s,et as c,in as l,it as u,l as d,lt as f,n as p,nt as m,o as h,rn as g,rt as _,s as v,t as y,tt as b,vt as x,zt as S}from"./vapor-runtime-DsQWl-IB.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as T}from"./Code-4SUSUwRg.js";import{r as E}from"./SidebarPlaygroundExample-BEWYUWOl.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:i,syncHeight:o,flushedHeight:v,logLines:y,listRef:T}=C(`useSetup:0:0`,()=>l(()=>({messages:C(`ref:1:0`,()=>n(O())),syncHeight:C(`ref:1:1`,()=>n(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>n(`尚未追加`)),logLines:C(`ref:1:3`,()=>n([...D])),listRef:C(`useRef:1:4`,()=>g())}))),E=async()=>{let e=i.value.length+1,n=String(19+e).padStart(2,`0`);i.value=[...i.value,{id:e,text:`09:${n} 订单 #A10${20+e} 已完成支付`}];let r=T.current?.scrollHeight??0;o.value=`${r}px（旧高度）`,v.value=`等待 flush...`,y.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${r}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=r),await t();let a=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=a),v.value=`${a}px（已包含新消息）`,y.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${r}px`,`nextTick() 后 scrollHeight：${a}px，并已滚动到底部`]},k=()=>{i.value=O(),o.value=`尚未追加`,v.value=`尚未追加`,y.value=[...D],T.current&&(T.current.scrollTop=0)};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=m(`div`,l);r(l,C),s(C,`rounded-box border border-base-300 bg-base-100`);let D=m(`div`,C);r(C,D),s(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=m(`div`,D);r(D,O),s(O,`text-sm font-medium text-base-content/70`),r(O,_(`订单通知流`));let A=m(`div`,D);r(D,A),s(A,`badge badge-outline`);let j=c(`rue:slot:anchor`);r(A,j),S(()=>{let t=i.value.length;e(()=>h(t,A,j))}),r(A,_(` 条消息`));let M=m(`div`,C);r(C,M);let N=ee(M,()=>T);p(()=>{N()}),s(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=c(`rue:list:start`),F=c(`rue:list:end`);r(M,P),r(M,F);let I=new Map;S(()=>{I=w({items:i.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,i,a,o)=>{h(d(()=>{let n=b(),i=m(`div`,n);r(n,i),S(()=>{f(i,`key`,String(t.id))}),s(i,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let a=c(`rue:slot:anchor`);return r(i,a),S(()=>{let n=t.text;e(()=>h(n,i,a))}),n}),n,i)}})});let L=m(`div`,l);r(l,L),s(L,`flex flex-wrap gap-3`);let R=m(`button`,L);r(L,R),s(R,`btn btn-primary`),a(R,`click`,()=>void E()),r(R,_(`追加通知并滚动到底部`));let z=m(`button`,L);r(L,z),s(z,`btn btn-ghost`),a(z,`click`,k),r(z,_(`重置`));let B=m(`div`,l);r(l,B),s(B,`grid gap-4 md:grid-cols-2`);let V=m(`div`,B);r(B,V),s(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=m(`div`,V);r(V,H),s(H,`text-sm text-base-content/60`),r(H,_(`同步读取到的 scrollHeight`));let U=m(`div`,V);r(V,U),s(U,`mt-2 font-mono text-2xl`);let W=u(U);r(U,W),S(()=>{x(W,o.value)});let G=m(`div`,B);r(B,G),s(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=m(`div`,G);r(G,K),s(K,`text-sm text-base-content/60`),r(K,_(`await nextTick() 后的高度`));let q=m(`div`,G);r(G,q),s(q,`mt-2 font-mono text-2xl text-success`);let J=u(q);r(q,J),S(()=>{x(J,v.value)});let Y=m(`div`,l);r(l,Y),s(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=m(`div`,Y);r(Y,X),s(X,`text-sm font-medium text-base-content/70`),r(X,_(`本轮步骤`));let Z=m(`ul`,Y);r(Y,Z),s(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let te=c(`rue:list:start`),ne=c(`rue:list:end`);r(Z,te),r(Z,ne);let Q=new Map;return S(()=>{Q=w({items:y.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:Q,parent:Z,before:ne,singleRoot:!0,start:te,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`chat-scroll-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:e,beforeDomText:i,afterDomText:o,logLines:v,counterRef:y}=C(`useSetup:0:0`,()=>l(()=>({count:C(`ref:1:0`,()=>n(0)),beforeDomText:C(`ref:1:1`,()=>n(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>n(`尚未读取`)),logLines:C(`ref:1:3`,()=>n([...j])),counterRef:C(`useRef:1:4`,()=>g())}))),T=async()=>{e.value+=1;let n=y.current?.textContent??`(missing)`;i.value=n,o.value=`等待 flush...`,v.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${n}`,`等待 nextTick() 完成...`],await t();let r=y.current?.textContent??`(missing)`;o.value=r,v.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${n}`,`nextTick() 后读取 DOM：${r}`]},E=()=>{e.value=0,i.value=`尚未读取`,o.value=`尚未读取`,v.value=[...j]};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=m(`div`,l);r(l,C),s(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=m(`div`,C);r(C,D),s(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(D,_(`当前 DOM 文本`));let O=m(`div`,C);r(C,O),s(O,`mt-3 text-4xl font-semibold text-primary`);let k=m(`span`,O);r(O,k);let A=ee(k,()=>y);p(()=>{A()});let j=u(k);r(k,j),S(()=>{x(j,e.value)});let M=m(`div`,l);r(l,M),s(M,`flex flex-wrap gap-3`);let N=m(`button`,M);r(M,N),s(N,`btn btn-primary`),a(N,`click`,()=>void T()),r(N,_(`自增并读取 DOM`));let P=m(`button`,M);r(M,P),s(P,`btn btn-ghost`),a(P,`click`,E),r(P,_(`重置`));let F=m(`div`,l);r(l,F),s(F,`grid gap-4 md:grid-cols-2`);let I=m(`div`,F);r(F,I),s(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=m(`div`,I);r(I,L),s(L,`text-sm text-base-content/60`),r(L,_(`同步读取到的 DOM 文本`));let R=m(`div`,I);r(I,R),s(R,`mt-2 font-mono text-2xl`);let z=u(R);r(R,z),S(()=>{x(z,i.value)});let B=m(`div`,F);r(F,B),s(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=m(`div`,B);r(B,V),s(V,`text-sm text-base-content/60`),r(V,_(`await nextTick() 后读取`));let H=m(`div`,B);r(B,H),s(H,`mt-2 font-mono text-2xl text-success`);let U=u(H);r(H,U),S(()=>{x(U,o.value)});let W=m(`div`,l);r(l,W),s(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=m(`div`,W);r(W,G),s(G,`text-sm font-medium text-base-content/70`),r(G,_(`本轮步骤`));let K=m(`ul`,W);r(W,K),s(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=c(`rue:list:start`),J=c(`rue:list:end`);r(K,q),r(K,J);let Y=new Map;return S(()=>{Y=w({items:v.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`dom-read-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:i,keyword:v,syncState:y,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>l(()=>({panelOpen:C(`ref:1:0`,()=>n(!1)),keyword:C(`ref:1:1`,()=>n(``)),syncState:C(`ref:1:2`,()=>n(`尚未打开`)),postTickState:C(`ref:1:3`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>n([...P])),inputRef:C(`useRef:1:5`,()=>g())}))),O=async()=>{i.value=!0,y.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,y.value,`等待 nextTick() 后执行 focus()`],await t(),D.current?.focus(),T.value=globalThis.document?.activeElement===D.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,y.value,T.value]},k=()=>{i.value=!1,v.value=``,y.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=m(`div`,l);r(l,C),s(C,`flex flex-wrap gap-3`);let A=m(`button`,C);r(C,A),s(A,`btn btn-primary`),a(A,`click`,()=>void O()),r(A,_(`打开高级筛选`));let j=m(`button`,C);r(C,j),s(j,`btn btn-ghost`),a(j,`click`,k),r(j,_(`关闭并重置`));let M=c(`rue:slot:anchor`);r(l,M),S(()=>{let t=i.value?d(()=>{let e=b(),t=m(`div`,e);r(e,t),s(t,`rounded-box border border-base-300 bg-base-100 p-5`);let n=m(`div`,t);r(t,n),s(n,`grid gap-4 md:grid-cols-2`);let i=m(`label`,n);r(n,i),s(i,`block`);let c=m(`div`,i);r(i,c),s(c,`text-sm text-base-content/60`),r(c,_(`关键词`));let l=m(`input`,i);r(i,l);let u=ee(l,()=>D);p(()=>{u()}),s(l,`input input-bordered mt-2 w-full`),S(()=>{o(l,v.value)}),f(l,`placeholder`,`订单号 / 用户名 / 手机号`),a(l,`input`,e=>{v.value=e.target.value});let d=m(`label`,n);r(n,d),s(d,`block`);let h=m(`div`,d);r(d,h),s(h,`text-sm text-base-content/60`),r(h,_(`订单状态`));let g=m(`select`,d);r(d,g),s(g,`select select-bordered mt-2 w-full`);let y=m(`option`,g);r(g,y),r(y,_(`全部`));let x=m(`option`,g);r(g,x),r(x,_(`待支付`));let C=m(`option`,g);r(g,C),r(C,_(`待发货`));let w=m(`option`,g);return r(g,w),r(w,_(`已完成`)),e}):``;e(()=>h(t,l,M))});let N=m(`div`,l);r(l,N),s(N,`grid gap-4 md:grid-cols-2`);let P=m(`div`,N);r(N,P),s(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=m(`div`,P);r(P,F),s(F,`text-sm text-base-content/60`),r(F,_(`同步阶段状态`));let I=m(`div`,P);r(P,I),s(I,`mt-2 font-mono text-xl`);let L=u(I);r(I,L),S(()=>{x(L,y.value)});let R=m(`div`,N);r(N,R),s(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=m(`div`,R);r(R,z),s(z,`text-sm text-base-content/60`),r(z,_(`await nextTick() 后状态`));let B=m(`div`,R);r(R,B),s(B,`mt-2 font-mono text-xl text-success`);let V=u(B);r(B,V),S(()=>{x(V,T.value)});let H=m(`div`,l);r(l,H),s(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=m(`div`,H);r(H,U),s(U,`text-sm font-medium text-base-content/70`),r(U,_(`本轮步骤`));let W=m(`ul`,H);r(H,W),s(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=c(`rue:list:start`),K=c(`rue:list:end`);r(W,G),r(W,K);let q=new Map;return S(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`filter-focus-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:i,phone:v,email:y,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>l(()=>{let e=C(`ref:1:0`,()=>n(``)),t=C(`ref:1:1`,()=>n(``)),r=C(`ref:1:2`,()=>n(``));return{receiver:e,phone:t,email:r,errors:C(`ref:1:3`,()=>n(z())),syncField:C(`ref:1:4`,()=>n(`尚未提交`)),postTickField:C(`ref:1:5`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>n([...L])),formRef:C(`useRef:1:7`,()=>g()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),n=Object.values(e).filter(Boolean).length;T.value=e;let r=k.current?.querySelector(`[data-invalid="true"]`);E.value=r?.name?`${R[r.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${n} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await t();let i=k.current?.querySelector(`[data-invalid="true"]`);i?.focus(),D.value=i?.name?`${R[i.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${n} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{i.value=`李四`,v.value=`13800001111`,y.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{i.value=``,v.value=``,y.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=m(`div`,l);r(l,C);let A=ee(C,()=>k);p(()=>{A()}),s(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=m(`label`,C);r(C,P),s(P,`block`);let F=m(`div`,P);r(P,F),s(F,`text-sm text-base-content/60`),r(F,_(`联系人`));let I=m(`input`,P);r(P,I),f(I,`name`,`receiver`),S(()=>{f(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),S(()=>{s(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),S(()=>{o(I,i.value)}),f(I,`placeholder`,`请输入联系人`),a(I,`input`,e=>{i.value=e.target.value});let L=c(`rue:slot:anchor`);r(P,L),S(()=>{let t=T.value.receiver?d(()=>{let t=b(),n=m(`div`,t);r(t,n),s(n,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(n,i),S(()=>{let t=T.value.receiver;e(()=>h(t,n,i))}),t}):``;e(()=>h(t,P,L))});let R=m(`label`,C);r(C,R),s(R,`block`);let z=m(`div`,R);r(R,z),s(z,`text-sm text-base-content/60`),r(z,_(`手机号`));let B=m(`input`,R);r(R,B),f(B,`name`,`phone`),S(()=>{f(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),S(()=>{s(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),S(()=>{o(B,v.value)}),f(B,`placeholder`,`请输入 11 位手机号`),a(B,`input`,e=>{v.value=e.target.value});let V=c(`rue:slot:anchor`);r(R,V),S(()=>{let t=T.value.phone?d(()=>{let t=b(),n=m(`div`,t);r(t,n),s(n,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(n,i),S(()=>{let t=T.value.phone;e(()=>h(t,n,i))}),t}):``;e(()=>h(t,R,V))});let H=m(`label`,C);r(C,H),s(H,`block`);let U=m(`div`,H);r(H,U),s(U,`text-sm text-base-content/60`),r(U,_(`邮箱`));let W=m(`input`,H);r(H,W),f(W,`name`,`email`),S(()=>{f(W,`data-invalid`,String(T.value.email?`true`:`false`))}),S(()=>{s(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),S(()=>{o(W,y.value)}),f(W,`placeholder`,`请输入邮箱`),a(W,`input`,e=>{y.value=e.target.value});let G=c(`rue:slot:anchor`);r(H,G),S(()=>{let t=T.value.email?d(()=>{let t=b(),n=m(`div`,t);r(t,n),s(n,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(n,i),S(()=>{let t=T.value.email;e(()=>h(t,n,i))}),t}):``;e(()=>h(t,H,G))});let K=m(`div`,l);r(l,K),s(K,`flex flex-wrap gap-3`);let q=m(`button`,K);r(K,q),s(q,`btn btn-primary`),a(q,`click`,()=>void j()),r(q,_(`提交并定位错误字段`));let J=m(`button`,K);r(K,J),s(J,`btn btn-outline`),a(J,`click`,M),r(J,_(`填入合法示例`));let Y=m(`button`,K);r(K,Y),s(Y,`btn btn-ghost`),a(Y,`click`,N),r(Y,_(`重置`));let X=m(`div`,l);r(l,X),s(X,`grid gap-4 md:grid-cols-2`);let Z=m(`div`,X);r(X,Z),s(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=m(`div`,Z);r(Z,te),s(te,`text-sm text-base-content/60`),r(te,_(`同步阶段识别到的字段`));let ne=m(`div`,Z);r(Z,ne),s(ne,`mt-2 font-mono text-xl`);let Q=u(ne);r(ne,Q),S(()=>{x(Q,E.value)});let $=m(`div`,X);r(X,$),s($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=m(`div`,$);r($,re),s(re,`text-sm text-base-content/60`),r(re,_(`await nextTick() 后结果`));let ie=m(`div`,$);r($,ie),s(ie,`mt-2 font-mono text-xl text-success`);let ae=u(ie);r(ie,ae),S(()=>{x(ae,D.value)});let oe=m(`div`,l);r(l,oe),s(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=m(`div`,oe);r(oe,se),s(se,`text-sm font-medium text-base-content/70`),r(se,_(`本轮步骤`));let ce=m(`ul`,oe);r(oe,ce),s(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=c(`rue:list:start`),ue=c(`rue:list:end`);r(ce,le),r(ce,ue);let de=new Map;return S(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`focus-error-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:i,syncHeight:o,postTickHeight:v,layoutDecision:y,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>l(()=>({modalOpen:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>n(`等待测量`)),logLines:C(`ref:1:4`,()=>n([...H])),listRef:C(`useRef:1:5`,()=>g())}))),D=async()=>{i.value=!0;let e=E.current?.scrollHeight??0;o.value=`${e}px`,v.value=`等待 flush...`,y.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await t();let n=E.current?.scrollHeight??0;v.value=`${n}px`,y.value=n>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${n}px，${y.value}`]},O=()=>{i.value=!1,o.value=`尚未打开`,v.value=`尚未测量`,y.value=`等待测量`,T.value=[...H]};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=m(`div`,l);r(l,C),s(C,`flex flex-wrap gap-3`);let k=m(`button`,C);r(C,k),s(k,`btn btn-primary`),a(k,`click`,()=>void D()),r(k,_(`打开批量发送弹窗`));let A=m(`button`,C);r(C,A),s(A,`btn btn-ghost`),a(A,`click`,O),r(A,_(`关闭并重置`));let j=c(`rue:slot:anchor`);r(l,j),S(()=>{let t=i.value?d(()=>{let t=b(),n=m(`div`,t);r(t,n),s(n,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let i=m(`div`,n);r(n,i),s(i,`flex items-start justify-between gap-4`);let a=m(`div`,i);r(i,a);let o=m(`div`,a);r(a,o),s(o,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(o,_(`批量发送预览`));let l=m(`div`,a);r(a,l),s(l,`mt-2 text-2xl font-semibold`),r(l,_(`确认接收人列表`));let u=m(`div`,i);r(i,u),s(u,`badge badge-outline`);let g=c(`rue:slot:anchor`);r(u,g),S(()=>{let t=U.length;e(()=>h(t,u,g))}),r(u,_(` 人`));let v=m(`div`,n);r(n,v);let y=ee(v,()=>E);p(()=>{y()}),s(v,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let x=c(`rue:list:start`),C=c(`rue:list:end`);r(v,x),r(v,C);let T=new Map;return S(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,n,i,a,o)=>{h(d(()=>{let n=b(),i=m(`div`,n);r(n,i),S(()=>{f(i,`key`,String(t.id))}),s(i,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let a=m(`div`,i);r(i,a),s(a,`font-medium`);let o=c(`rue:slot:anchor`);r(a,o),S(()=>{let n=t.name;e(()=>h(n,a,o))});let l=m(`div`,i);r(i,l),s(l,`text-base-content/60`);let u=c(`rue:slot:anchor`);r(l,u),S(()=>{let n=t.team;e(()=>h(n,l,u))}),r(l,_(` · `));let d=c(`rue:slot:anchor`);return r(l,d),S(()=>{let n=t.region;e(()=>h(n,l,d))}),n}),n,i)}})}),t}):``;e(()=>h(t,l,j))});let M=m(`div`,l);r(l,M),s(M,`grid gap-4 md:grid-cols-3`);let N=m(`div`,M);r(M,N),s(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=m(`div`,N);r(N,P),s(P,`text-sm text-base-content/60`),r(P,_(`同步读取到的高度`));let F=m(`div`,N);r(N,F),s(F,`mt-2 font-mono text-xl`);let I=u(F);r(F,I),S(()=>{x(I,o.value)});let L=m(`div`,M);r(M,L),s(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=m(`div`,L);r(L,R),s(R,`text-sm text-base-content/60`),r(R,_(`await nextTick() 后高度`));let z=m(`div`,L);r(L,z),s(z,`mt-2 font-mono text-xl text-success`);let B=u(z);r(z,B),S(()=>{x(B,v.value)});let V=m(`div`,M);r(M,V),s(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=m(`div`,V);r(V,H),s(H,`text-sm text-base-content/60`),r(H,_(`布局决策`));let W=m(`div`,V);r(V,W),s(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=u(W);r(W,G),S(()=>{x(G,y.value)});let K=m(`div`,l);r(l,K),s(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=m(`div`,K);r(K,q),s(q,`text-sm font-medium text-base-content/70`),r(q,_(`本轮步骤`));let J=m(`ul`,K);r(K,J),s(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=c(`rue:list:start`),X=c(`rue:list:end`);r(J,Y),r(J,X);let Z=new Map;return S(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`modal-measure-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:i,syncHeight:o,postTickHeight:v,logLines:y,panelRef:T}=C(`useSetup:0:0`,()=>l(()=>({expanded:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),logLines:C(`ref:1:3`,()=>n([...K])),panelRef:C(`useRef:1:4`,()=>g())}))),E=async()=>{i.value=!i.value;let e=i.value?`展开`:`收起`,n=T.current?.offsetHeight??0;o.value=`${n}px`,v.value=`等待 flush...`,y.value=[`详情区准备${e}`,`同步读取 offsetHeight：${n}px`,`等待 nextTick() 后重新测量...`],await t();let r=T.current?.offsetHeight??0;v.value=`${r}px`,y.value=[`详情区准备${e}`,`同步读取 offsetHeight：${n}px`,`nextTick() 后 offsetHeight：${r}px`]},D=()=>{i.value=!1,o.value=`尚未测量`,v.value=`尚未测量`,y.value=[...K]};return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let l=m(`div`,n);r(n,l),s(l,`card-body gap-5`);let g=m(`p`,l);r(l,g),s(g,`text-base-content/70 leading-7`),r(g,_(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=m(`div`,l);r(l,C);let O=ee(C,()=>T);p(()=>{O()}),s(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=m(`div`,C);r(C,k),s(k,`flex items-center justify-between`);let A=m(`div`,k);r(k,A);let j=m(`div`,A);r(A,j),s(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(j,_(`订单详情卡片`));let M=m(`div`,A);r(A,M),s(M,`mt-2 text-2xl font-semibold`),r(M,_(`订单 #A1024`));let N=m(`div`,k);r(k,N),S(()=>{s(N,`badge ${i.value?`badge-primary`:`badge-outline`}`)});let P=u(N);r(N,P),S(()=>{x(P,i.value?`已展开`:`已收起`)});let F=m(`div`,C);r(C,F),s(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=m(`div`,F);r(F,I),s(I,`rounded-box bg-base-200/60 p-3 text-sm`),r(I,_(`支付状态：已支付`));let L=m(`div`,F);r(F,L),s(L,`rounded-box bg-base-200/60 p-3 text-sm`),r(L,_(`配送方式：同城急送`));let R=m(`div`,F);r(F,R),s(R,`rounded-box bg-base-200/60 p-3 text-sm`),r(R,_(`仓库：上海 3 号仓`));let z=m(`div`,F);r(F,z),s(z,`rounded-box bg-base-200/60 p-3 text-sm`),r(z,_(`下单时间：09:20`));let B=c(`rue:slot:anchor`);r(F,B),S(()=>{let t=i.value?d(()=>{let e=b();r(e,_(` `));let t=m(`div`,e);r(e,t),s(t,`rounded-box bg-base-200/60 p-3 text-sm`),r(t,_(`发票状态：电子发票已开具`)),r(e,_(` `));let n=m(`div`,e);r(e,n),s(n,`rounded-box bg-base-200/60 p-3 text-sm`),r(n,_(`风控结果：人工审核已通过`)),r(e,_(` `));let i=m(`div`,e);r(e,i),s(i,`rounded-box bg-base-200/60 p-3 text-sm`),r(i,_(`配送备注：优先联系收货人本人`)),r(e,_(` `));let a=m(`div`,e);return r(e,a),s(a,`rounded-box bg-base-200/60 p-3 text-sm`),r(a,_(`售后状态：暂无售后单`)),r(e,_(` `)),e}):``;e(()=>h(t,F,B))});let V=m(`div`,l);r(l,V),s(V,`flex flex-wrap gap-3`);let H=m(`button`,V);r(V,H),s(H,`btn btn-primary`),a(H,`click`,()=>void E());let U=u(H);r(H,U),S(()=>{x(U,i.value?`收起详情区并测量`:`展开详情区并测量`)});let W=m(`button`,V);r(V,W),s(W,`btn btn-ghost`),a(W,`click`,D),r(W,_(`重置`));let G=m(`div`,l);r(l,G),s(G,`grid gap-4 md:grid-cols-2`);let K=m(`div`,G);r(G,K),s(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=m(`div`,K);r(K,q),s(q,`text-sm text-base-content/60`),r(q,_(`同步读取到的高度`));let J=m(`div`,K);r(K,J),s(J,`mt-2 font-mono text-2xl`);let Y=u(J);r(J,Y),S(()=>{x(Y,o.value)});let X=m(`div`,G);r(G,X),s(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=m(`div`,X);r(X,Z),s(Z,`text-sm text-base-content/60`),r(Z,_(`await nextTick() 后高度`));let te=m(`div`,X);r(X,te),s(te,`mt-2 font-mono text-2xl text-success`);let ne=u(te);r(te,ne),S(()=>{x(ne,v.value)});let Q=m(`div`,l);r(l,Q),s(Q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=m(`div`,Q);r(Q,$),s($,`text-sm font-medium text-base-content/70`),r($,_(`本轮步骤`));let re=m(`ul`,Q);r(Q,re),s(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=c(`rue:list:start`),ae=c(`rue:list:end`);r(re,ie),r(re,ae);let oe=new Map;return S(()=>{oe=w({items:y.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`panel-measure-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],te=e=>e===`all`?Z:Z.filter(t=>t.status===e),ne=()=>{let{activeStatus:o,syncTarget:v,postTickTarget:y,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>l(()=>({activeStatus:C(`ref:1:0`,()=>n(`all`)),syncTarget:C(`ref:1:1`,()=>n(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>n(`尚未定位`)),logLines:C(`ref:1:3`,()=>n([...Y])),viewportRef:C(`useRef:1:4`,()=>g())}))),D=async e=>{o.value=e,v.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,y.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await t();let n=E.current?.querySelector(`[data-first-visible="true"]`);n?.scrollIntoView({block:`nearest`}),y.value=n?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`nextTick() 后首条结果：${y.value}，并已滚动到可视区域`]},O=()=>{o.value=`all`,v.value=`尚未筛选`,y.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>i(()=>te(o.value)));return d(t=>{let n=m(`div`,t);s(n,`card bg-base-100 shadow`);let i=m(`div`,n);r(n,i),s(i,`card-body gap-5`);let l=m(`p`,i);r(i,l),s(l,`text-base-content/70 leading-7`),r(l,_(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let g=m(`div`,i);r(i,g),s(g,`flex flex-wrap gap-2`);let C=c(`rue:list:start`),A=c(`rue:list:end`);r(g,C),r(g,A);let j=new Map;S(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:g,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,i,l,u)=>{h(d(()=>{let n=b(),i=m(`button`,n);r(n,i),S(()=>{f(i,`key`,String(t))}),S(()=>{s(i,`btn btn-sm ${o.value===t?`btn-primary`:`btn-ghost`}`)}),a(i,`click`,()=>void D(t));let l=c(`rue:slot:anchor`);return r(i,l),S(()=>{let n=X[t];e(()=>h(n,i,l))}),n}),n,i)}})});let M=m(`button`,g);r(g,M),s(M,`btn btn-sm btn-outline`),a(M,`click`,O),r(M,_(`重置`));let N=m(`div`,i);r(i,N);let P=ee(N,()=>E);p(()=>{P()}),s(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=m(`table`,N);r(N,F),s(F,`table table-pin-rows table-sm`);let I=m(`thead`,F);r(F,I);let L=m(`tr`,I);r(I,L);let R=m(`th`,L);r(L,R),r(R,_(`订单号`));let z=m(`th`,L);r(L,z),r(z,_(`客户`));let B=m(`th`,L);r(L,B),r(B,_(`状态`));let V=m(`th`,L);r(L,V),r(V,_(`金额`));let H=m(`th`,L);r(L,H),r(H,_(`备注`));let U=m(`tbody`,F);r(F,U);let W=c(`rue:slot:anchor`);r(U,W),S(()=>{let t=k.get().length>0?d(()=>{let t=b(),n=c(`rue:list:start`),i=c(`rue:list:end`);r(t,n),r(t,i);let a=new Map;return S(()=>{a=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:a,parent:n.parentNode,before:i,singleRoot:!0,start:n,renderItem:(t,n,i,a,o)=>{h(d(()=>{let n=b(),i=m(`tr`,n);r(n,i),S(()=>{f(i,`key`,String(t.id))}),S(()=>{f(i,`data-first-visible`,String(o===0?`true`:`false`))}),S(()=>{f(i,`data-order-no`,String(t.orderNo))});let a=m(`td`,i);r(i,a),s(a,`font-medium`);let l=c(`rue:slot:anchor`);r(a,l),S(()=>{let n=t.orderNo;e(()=>h(n,a,l))});let u=m(`td`,i);r(i,u);let d=c(`rue:slot:anchor`);r(u,d),S(()=>{let n=t.customer;e(()=>h(n,u,d))});let p=m(`td`,i);r(i,p);let g=m(`span`,p);r(p,g),s(g,`badge badge-outline`);let _=c(`rue:slot:anchor`);r(g,_),S(()=>{let n=X[t.status];e(()=>h(n,g,_))});let v=m(`td`,i);r(i,v);let y=c(`rue:slot:anchor`);r(v,y),S(()=>{let n=t.amount;e(()=>h(n,v,y))});let x=m(`td`,i);r(i,x),s(x,`text-base-content/60`);let C=c(`rue:slot:anchor`);return r(x,C),S(()=>{let n=t.note;e(()=>h(n,x,C))}),n}),n,i)}})}),t}):d(()=>{let e=b(),t=m(`tr`,e);r(e,t);let n=m(`td`,t);return r(t,n),f(n,`colSpan`,`5`),s(n,`py-8 text-center text-base-content/60`),r(n,_(`当前筛选没有结果`)),e});e(()=>h(t,U,W))});let G=m(`div`,i);r(i,G),s(G,`grid gap-4 md:grid-cols-2`);let K=m(`div`,G);r(G,K),s(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=m(`div`,K);r(K,q),s(q,`text-sm text-base-content/60`),r(q,_(`同步读取到的首条结果`));let J=m(`div`,K);r(K,J),s(J,`mt-2 font-mono text-2xl`);let Y=u(J);r(J,Y),S(()=>{x(Y,v.value)});let Z=m(`div`,G);r(G,Z),s(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=m(`div`,Z);r(Z,te),s(te,`text-sm text-base-content/60`),r(te,_(`await nextTick() 后定位到`));let ne=m(`div`,Z);r(Z,ne),s(ne,`mt-2 font-mono text-2xl text-success`);let Q=u(ne);r(ne,Q),S(()=>{x(Q,y.value)});let $=m(`div`,i);r(i,$),s($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=m(`div`,$);r($,re),s(re,`text-sm font-medium text-base-content/70`),r(re,_(`本轮步骤`));let ie=m(`ul`,$);r($,ie),s(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=c(`rue:list:start`),oe=c(`rue:list:end`);r(ie,ae),r(ie,oe);let se=new Map;return S(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`li`,t);r(t,n),S(()=>{f(n,`key`,String(`table-filter-log-${a}`))});let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})}),n})},Q=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Q,Demo:ne},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=t=>{let{Demo:n}=C(`useSetup:0:0`,()=>l(()=>({Demo:t.scenario.Demo})));return d(i=>{let a=m(`section`,i);s(a,`rounded-box border border-base-300 bg-base-100 p-5`);let o=m(`div`,a);r(a,o),s(o,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let l=c(`rue:slot:anchor`);r(o,l),S(()=>{let n=t.eyebrow;e(()=>h(n,o,l))});let p=m(`div`,a);r(a,p),s(p,`mt-2 text-2xl font-semibold`);let g=c(`rue:slot:anchor`);r(p,g),S(()=>{let n=t.scenario.title;e(()=>h(n,p,g))});let _=m(`p`,a);r(a,_),s(_,`mt-2 text-base-content/70 leading-7`);let v=c(`rue:slot:anchor`);r(_,v),S(()=>{let n=t.scenario.summary;e(()=>h(n,_,v))});let C=m(`div`,a);r(a,C),s(C,`mt-4 flex flex-wrap gap-2`);let ee=c(`rue:list:start`),E=c(`rue:list:end`);r(C,ee),r(C,E);let D=new Map;S(()=>{D=w({items:t.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(e,t,n,i,a)=>{h(d(()=>{let t=b(),n=m(`span`,t);r(t,n),S(()=>{f(n,`key`,String(e))}),s(n,`badge badge-outline`);let i=u(n);return r(n,i),S(()=>{x(i,e)}),t}),t,n)}})});let O=m(`div`,a);r(a,O),s(O,`mt-4`);let k=c(`rue:slot:anchor`);return r(O,k),S(()=>{let i=t.activeTab.value===`preview`?d(()=>{let e=b(),t=c(`rue:component:anchor`);return r(e,t),h(y(n,{}),e,t),e}):d(()=>{let n=b(),i=m(`div`,n);r(n,i),s(i,`card bg-base-100 shadow overflow-auto`);let a=m(`div`,i);r(i,a),s(a,`card-body p-0`);let o=c(`rue:component:anchor`);return r(a,o),S(()=>{let n=y(T,{className:`h-full`,lang:`tsx`,code:t.scenario.source});e(()=>h(n,a,o))}),n});e(()=>h(i,O,k))}),a})},ae=()=>{let{activeTab:e}=C(`useSetup:0:0:dup1`,()=>l(()=>({activeTab:C(`ref:1:0`,()=>n(`preview`))})));return d(t=>{let n=b(),i=c(`rue:component:anchor`);return r(n,i),h(y(E,{children:d(()=>{let t=b(),n=m(`h1`,t);r(t,n),s(n,`text-5xl font-semibold mb-4 md:mb-4`),r(n,_(`nextTick 真实业务场景`));let i=m(`p`,t);r(t,i),s(i,`max-w-4xl text-base-content/70 leading-7`),r(i,_(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let o=m(`div`,t);r(t,o),f(o,`role`,`tablist`),s(o,`tabs tabs-box mt-6`);let l=m(`button`,o);r(o,l),f(l,`role`,`tab`),S(()=>{s(l,`tab ${e.value===`preview`?`tab-active`:``}`)}),a(l,`click`,()=>{e.value=`preview`}),r(l,_(`效果`));let u=m(`button`,o);r(o,u),f(u,`role`,`tab`),S(()=>{s(u,`tab ${e.value===`code`?`tab-active`:``}`)}),a(u,`click`,()=>{e.value=`code`}),r(u,_(`代码`));let d=m(`div`,t);r(t,d),s(d,`mt-4 grid gap-6`);let p=c(`rue:list:start`),h=c(`rue:list:end`);r(d,p),r(d,h);let g=new Map;S(()=>{g=w({items:$||[],getKey:(e,t)=>e.title,elements:g,parent:d,before:h,start:p,renderItem:(t,n,r,i,a)=>{v(y(ie,{key:t.title,scenario:t,eyebrow:`保留原始 demo`,activeTab:e}),n,r,i)}})});let x=m(`section`,d);r(d,x),s(x,`rounded-box border border-base-300 bg-base-100 p-5`);let C=m(`div`,x);r(x,C),s(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(C,_(`新增业务 demo`));let ee=m(`div`,x);r(x,ee),s(ee,`mt-2 text-2xl font-semibold`),r(ee,_(`真实业务里 nextTick 怎么用`));let T=m(`p`,x);r(x,T),s(T,`mt-2 text-base-content/70 leading-7`),r(T,_(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=c(`rue:list:start`),D=c(`rue:list:end`);r(d,E),r(d,D);let O=new Map;return S(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:d,before:D,start:E,renderItem:(t,n,r,i,a)=>{v(y(ie,{key:t.title,scenario:t,eyebrow:`业务场景 ${a+1}`,activeTab:e}),n,r,i)}})}),t})}),n,i),n})};export{ae as default};