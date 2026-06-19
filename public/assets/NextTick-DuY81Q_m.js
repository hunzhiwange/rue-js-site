import{$ as e,$t as t,Bt as n,Ct as r,Gt as i,X as a,Xt as o,Yt as s,Z as c,ct as l,et as u,gt as d,ht as f,l as p,n as m,nt as h,o as g,rt as _,s as v,t as y,tt as b,ut as x,yt as S}from"./vapor-runtime-CKrmRMZX.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as T}from"./Code-D5UqTwV6.js";import{r as E}from"./SidebarPlaygroundExample-D2vGHFCu.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:f,syncHeight:v,flushedHeight:y,logLines:S,listRef:T}=C(`useSetup:0:0`,()=>o(()=>({messages:C(`ref:1:0`,()=>n(O())),syncHeight:C(`ref:1:1`,()=>n(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>n(`尚未追加`)),logLines:C(`ref:1:3`,()=>n([...D])),listRef:C(`useRef:1:4`,()=>s())}))),E=async()=>{let e=f.value.length+1,t=String(19+e).padStart(2,`0`);f.value=[...f.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=T.current?.scrollHeight??0;v.value=`${n}px（旧高度）`,y.value=`等待 flush...`,S.value=[`消息数已变为 ${f.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=n),await r();let i=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=i),y.value=`${i}px（已包含新消息）`,S.value=[`消息数已变为 ${f.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${i}px，并已滚动到底部`]},k=()=>{f.value=O(),v.value=`尚未追加`,y.value=`尚未追加`,S.value=[...D],T.current&&(T.current.scrollTop=0)};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=b(`div`,o);c(o,C),x(C,`rounded-box border border-base-300 bg-base-100`);let D=b(`div`,C);c(C,D),x(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=b(`div`,D);c(D,O),x(O,`text-sm font-medium text-base-content/70`),c(O,h(`订单通知流`));let A=b(`div`,D);c(D,A),x(A,`badge badge-outline`);let j=e(`rue:slot:anchor`);c(A,j),t(()=>{let e=f.value.length;i(()=>g(e,A,j))}),c(A,h(` 条消息`));let M=b(`div`,C);c(C,M);let N=ee(M,()=>T);m(()=>{N()}),x(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=e(`rue:list:start`),F=e(`rue:list:end`);c(M,P),c(M,F);let I=new Map;t(()=>{I=w({items:f.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,r,a,o,s)=>{g(p(()=>{let r=u(),a=b(`div`,r);c(r,a),t(()=>{l(a,`key`,String(n.id))}),x(a,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let o=e(`rue:slot:anchor`);return c(a,o),t(()=>{let e=n.text;i(()=>g(e,a,o))}),r}),r,a)}})});let L=b(`div`,o);c(o,L),x(L,`flex flex-wrap gap-3`);let R=b(`button`,L);c(L,R),x(R,`btn btn-primary`),a(R,`click`,()=>void E()),c(R,h(`追加通知并滚动到底部`));let z=b(`button`,L);c(L,z),x(z,`btn btn-ghost`),a(z,`click`,k),c(z,h(`重置`));let B=b(`div`,o);c(o,B),x(B,`grid gap-4 md:grid-cols-2`);let V=b(`div`,B);c(B,V),x(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=b(`div`,V);c(V,H),x(H,`text-sm text-base-content/60`),c(H,h(`同步读取到的 scrollHeight`));let U=b(`div`,V);c(V,U),x(U,`mt-2 font-mono text-2xl`);let W=_(U);c(U,W),t(()=>{d(W,v.value)});let G=b(`div`,B);c(B,G),x(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=b(`div`,G);c(G,K),x(K,`text-sm text-base-content/60`),c(K,h(`await nextTick() 后的高度`));let q=b(`div`,G);c(G,q),x(q,`mt-2 font-mono text-2xl text-success`);let J=_(q);c(q,J),t(()=>{d(J,y.value)});let Y=b(`div`,o);c(o,Y),x(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=b(`div`,Y);c(Y,X),x(X,`text-sm font-medium text-base-content/70`),c(X,h(`本轮步骤`));let Z=b(`ul`,Y);c(Y,Z),x(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let te=e(`rue:list:start`),ne=e(`rue:list:end`);c(Z,te),c(Z,ne);let Q=new Map;return t(()=>{Q=w({items:S.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:Q,parent:Z,before:ne,singleRoot:!0,start:te,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`chat-scroll-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:i,beforeDomText:f,afterDomText:v,logLines:y,counterRef:S}=C(`useSetup:0:0`,()=>o(()=>({count:C(`ref:1:0`,()=>n(0)),beforeDomText:C(`ref:1:1`,()=>n(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>n(`尚未读取`)),logLines:C(`ref:1:3`,()=>n([...j])),counterRef:C(`useRef:1:4`,()=>s())}))),T=async()=>{i.value+=1;let e=S.current?.textContent??`(missing)`;f.value=e,v.value=`等待 flush...`,y.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await r();let t=S.current?.textContent??`(missing)`;v.value=t,y.value=[`状态值已经改为 ${i.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},E=()=>{i.value=0,f.value=`尚未读取`,v.value=`尚未读取`,y.value=[...j]};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=b(`div`,o);c(o,C),x(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=b(`div`,C);c(C,D),x(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(D,h(`当前 DOM 文本`));let O=b(`div`,C);c(C,O),x(O,`mt-3 text-4xl font-semibold text-primary`);let k=b(`span`,O);c(O,k);let A=ee(k,()=>S);m(()=>{A()});let j=_(k);c(k,j),t(()=>{d(j,i.value)});let M=b(`div`,o);c(o,M),x(M,`flex flex-wrap gap-3`);let N=b(`button`,M);c(M,N),x(N,`btn btn-primary`),a(N,`click`,()=>void T()),c(N,h(`自增并读取 DOM`));let P=b(`button`,M);c(M,P),x(P,`btn btn-ghost`),a(P,`click`,E),c(P,h(`重置`));let F=b(`div`,o);c(o,F),x(F,`grid gap-4 md:grid-cols-2`);let I=b(`div`,F);c(F,I),x(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=b(`div`,I);c(I,L),x(L,`text-sm text-base-content/60`),c(L,h(`同步读取到的 DOM 文本`));let R=b(`div`,I);c(I,R),x(R,`mt-2 font-mono text-2xl`);let z=_(R);c(R,z),t(()=>{d(z,f.value)});let B=b(`div`,F);c(F,B),x(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=b(`div`,B);c(B,V),x(V,`text-sm text-base-content/60`),c(V,h(`await nextTick() 后读取`));let H=b(`div`,B);c(B,H),x(H,`mt-2 font-mono text-2xl text-success`);let U=_(H);c(H,U),t(()=>{d(U,v.value)});let W=b(`div`,o);c(o,W),x(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=b(`div`,W);c(W,G),x(G,`text-sm font-medium text-base-content/70`),c(G,h(`本轮步骤`));let K=b(`ul`,W);c(W,K),x(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=e(`rue:list:start`),J=e(`rue:list:end`);c(K,q),c(K,J);let Y=new Map;return t(()=>{Y=w({items:y.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`dom-read-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:v,keyword:y,syncState:S,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>o(()=>({panelOpen:C(`ref:1:0`,()=>n(!1)),keyword:C(`ref:1:1`,()=>n(``)),syncState:C(`ref:1:2`,()=>n(`尚未打开`)),postTickState:C(`ref:1:3`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>n([...P])),inputRef:C(`useRef:1:5`,()=>s())}))),O=async()=>{v.value=!0,S.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,S.value,`等待 nextTick() 后执行 focus()`],await r(),D.current?.focus(),T.value=globalThis.document?.activeElement===D.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,S.value,T.value]},k=()=>{v.value=!1,y.value=``,S.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=b(`div`,o);c(o,C),x(C,`flex flex-wrap gap-3`);let A=b(`button`,C);c(C,A),x(A,`btn btn-primary`),a(A,`click`,()=>void O()),c(A,h(`打开高级筛选`));let j=b(`button`,C);c(C,j),x(j,`btn btn-ghost`),a(j,`click`,k),c(j,h(`关闭并重置`));let M=e(`rue:slot:anchor`);c(o,M),t(()=>{let e=v.value?p(()=>{let e=u(),n=b(`div`,e);c(e,n),x(n,`rounded-box border border-base-300 bg-base-100 p-5`);let r=b(`div`,n);c(n,r),x(r,`grid gap-4 md:grid-cols-2`);let i=b(`label`,r);c(r,i),x(i,`block`);let o=b(`div`,i);c(i,o),x(o,`text-sm text-base-content/60`),c(o,h(`关键词`));let s=b(`input`,i);c(i,s);let d=ee(s,()=>D);m(()=>{d()}),x(s,`input input-bordered mt-2 w-full`),t(()=>{f(s,y.value)}),l(s,`placeholder`,`订单号 / 用户名 / 手机号`),a(s,`input`,e=>{y.value=e.target.value});let p=b(`label`,r);c(r,p),x(p,`block`);let g=b(`div`,p);c(p,g),x(g,`text-sm text-base-content/60`),c(g,h(`订单状态`));let _=b(`select`,p);c(p,_),x(_,`select select-bordered mt-2 w-full`);let v=b(`option`,_);c(_,v),c(v,h(`全部`));let S=b(`option`,_);c(_,S),c(S,h(`待支付`));let C=b(`option`,_);c(_,C),c(C,h(`待发货`));let w=b(`option`,_);return c(_,w),c(w,h(`已完成`)),e}):``;i(()=>g(e,o,M))});let N=b(`div`,o);c(o,N),x(N,`grid gap-4 md:grid-cols-2`);let P=b(`div`,N);c(N,P),x(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=b(`div`,P);c(P,F),x(F,`text-sm text-base-content/60`),c(F,h(`同步阶段状态`));let I=b(`div`,P);c(P,I),x(I,`mt-2 font-mono text-xl`);let L=_(I);c(I,L),t(()=>{d(L,S.value)});let R=b(`div`,N);c(N,R),x(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=b(`div`,R);c(R,z),x(z,`text-sm text-base-content/60`),c(z,h(`await nextTick() 后状态`));let B=b(`div`,R);c(R,B),x(B,`mt-2 font-mono text-xl text-success`);let V=_(B);c(B,V),t(()=>{d(V,T.value)});let H=b(`div`,o);c(o,H),x(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=b(`div`,H);c(H,U),x(U,`text-sm font-medium text-base-content/70`),c(U,h(`本轮步骤`));let W=b(`ul`,H);c(H,W),x(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=e(`rue:list:start`),K=e(`rue:list:end`);c(W,G),c(W,K);let q=new Map;return t(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`filter-focus-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:v,phone:y,email:S,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>o(()=>{let e=C(`ref:1:0`,()=>n(``)),t=C(`ref:1:1`,()=>n(``)),r=C(`ref:1:2`,()=>n(``));return{receiver:e,phone:t,email:r,errors:C(`ref:1:3`,()=>n(z())),syncField:C(`ref:1:4`,()=>n(`尚未提交`)),postTickField:C(`ref:1:5`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>n([...L])),formRef:C(`useRef:1:7`,()=>s()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),t=Object.values(e).filter(Boolean).length;T.value=e;let n=k.current?.querySelector(`[data-invalid="true"]`);E.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await r();let i=k.current?.querySelector(`[data-invalid="true"]`);i?.focus(),D.value=i?.name?`${R[i.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{v.value=`李四`,y.value=`13800001111`,S.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{v.value=``,y.value=``,S.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=b(`div`,o);c(o,C);let A=ee(C,()=>k);m(()=>{A()}),x(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=b(`label`,C);c(C,P),x(P,`block`);let F=b(`div`,P);c(P,F),x(F,`text-sm text-base-content/60`),c(F,h(`联系人`));let I=b(`input`,P);c(P,I),l(I,`name`,`receiver`),t(()=>{l(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),t(()=>{x(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),t(()=>{f(I,v.value)}),l(I,`placeholder`,`请输入联系人`),a(I,`input`,e=>{v.value=e.target.value});let L=e(`rue:slot:anchor`);c(P,L),t(()=>{let n=T.value.receiver?p(()=>{let n=u(),r=b(`div`,n);c(n,r),x(r,`mt-2 text-sm text-error`);let a=e(`rue:slot:anchor`);return c(r,a),t(()=>{let e=T.value.receiver;i(()=>g(e,r,a))}),n}):``;i(()=>g(n,P,L))});let R=b(`label`,C);c(C,R),x(R,`block`);let z=b(`div`,R);c(R,z),x(z,`text-sm text-base-content/60`),c(z,h(`手机号`));let B=b(`input`,R);c(R,B),l(B,`name`,`phone`),t(()=>{l(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),t(()=>{x(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),t(()=>{f(B,y.value)}),l(B,`placeholder`,`请输入 11 位手机号`),a(B,`input`,e=>{y.value=e.target.value});let V=e(`rue:slot:anchor`);c(R,V),t(()=>{let n=T.value.phone?p(()=>{let n=u(),r=b(`div`,n);c(n,r),x(r,`mt-2 text-sm text-error`);let a=e(`rue:slot:anchor`);return c(r,a),t(()=>{let e=T.value.phone;i(()=>g(e,r,a))}),n}):``;i(()=>g(n,R,V))});let H=b(`label`,C);c(C,H),x(H,`block`);let U=b(`div`,H);c(H,U),x(U,`text-sm text-base-content/60`),c(U,h(`邮箱`));let W=b(`input`,H);c(H,W),l(W,`name`,`email`),t(()=>{l(W,`data-invalid`,String(T.value.email?`true`:`false`))}),t(()=>{x(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),t(()=>{f(W,S.value)}),l(W,`placeholder`,`请输入邮箱`),a(W,`input`,e=>{S.value=e.target.value});let G=e(`rue:slot:anchor`);c(H,G),t(()=>{let n=T.value.email?p(()=>{let n=u(),r=b(`div`,n);c(n,r),x(r,`mt-2 text-sm text-error`);let a=e(`rue:slot:anchor`);return c(r,a),t(()=>{let e=T.value.email;i(()=>g(e,r,a))}),n}):``;i(()=>g(n,H,G))});let K=b(`div`,o);c(o,K),x(K,`flex flex-wrap gap-3`);let q=b(`button`,K);c(K,q),x(q,`btn btn-primary`),a(q,`click`,()=>void j()),c(q,h(`提交并定位错误字段`));let J=b(`button`,K);c(K,J),x(J,`btn btn-outline`),a(J,`click`,M),c(J,h(`填入合法示例`));let Y=b(`button`,K);c(K,Y),x(Y,`btn btn-ghost`),a(Y,`click`,N),c(Y,h(`重置`));let X=b(`div`,o);c(o,X),x(X,`grid gap-4 md:grid-cols-2`);let Z=b(`div`,X);c(X,Z),x(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=b(`div`,Z);c(Z,te),x(te,`text-sm text-base-content/60`),c(te,h(`同步阶段识别到的字段`));let ne=b(`div`,Z);c(Z,ne),x(ne,`mt-2 font-mono text-xl`);let Q=_(ne);c(ne,Q),t(()=>{d(Q,E.value)});let $=b(`div`,X);c(X,$),x($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=b(`div`,$);c($,re),x(re,`text-sm text-base-content/60`),c(re,h(`await nextTick() 后结果`));let ie=b(`div`,$);c($,ie),x(ie,`mt-2 font-mono text-xl text-success`);let ae=_(ie);c(ie,ae),t(()=>{d(ae,D.value)});let oe=b(`div`,o);c(o,oe),x(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=b(`div`,oe);c(oe,se),x(se,`text-sm font-medium text-base-content/70`),c(se,h(`本轮步骤`));let ce=b(`ul`,oe);c(oe,ce),x(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=e(`rue:list:start`),ue=e(`rue:list:end`);c(ce,le),c(ce,ue);let de=new Map;return t(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`focus-error-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:f,syncHeight:v,postTickHeight:y,layoutDecision:S,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>o(()=>({modalOpen:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>n(`等待测量`)),logLines:C(`ref:1:4`,()=>n([...H])),listRef:C(`useRef:1:5`,()=>s())}))),D=async()=>{f.value=!0;let e=E.current?.scrollHeight??0;v.value=`${e}px`,y.value=`等待 flush...`,S.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await r();let t=E.current?.scrollHeight??0;y.value=`${t}px`,S.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${S.value}`]},O=()=>{f.value=!1,v.value=`尚未打开`,y.value=`尚未测量`,S.value=`等待测量`,T.value=[...H]};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=b(`div`,o);c(o,C),x(C,`flex flex-wrap gap-3`);let k=b(`button`,C);c(C,k),x(k,`btn btn-primary`),a(k,`click`,()=>void D()),c(k,h(`打开批量发送弹窗`));let A=b(`button`,C);c(C,A),x(A,`btn btn-ghost`),a(A,`click`,O),c(A,h(`关闭并重置`));let j=e(`rue:slot:anchor`);c(o,j),t(()=>{let n=f.value?p(()=>{let n=u(),r=b(`div`,n);c(n,r),x(r,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let a=b(`div`,r);c(r,a),x(a,`flex items-start justify-between gap-4`);let o=b(`div`,a);c(a,o);let s=b(`div`,o);c(o,s),x(s,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(s,h(`批量发送预览`));let d=b(`div`,o);c(o,d),x(d,`mt-2 text-2xl font-semibold`),c(d,h(`确认接收人列表`));let f=b(`div`,a);c(a,f),x(f,`badge badge-outline`);let _=e(`rue:slot:anchor`);c(f,_),t(()=>{let e=U.length;i(()=>g(e,f,_))}),c(f,h(` 人`));let v=b(`div`,r);c(r,v);let y=ee(v,()=>E);m(()=>{y()}),x(v,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=e(`rue:list:start`),C=e(`rue:list:end`);c(v,S),c(v,C);let T=new Map;return t(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,a,o,s)=>{g(p(()=>{let r=u(),a=b(`div`,r);c(r,a),t(()=>{l(a,`key`,String(n.id))}),x(a,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let o=b(`div`,a);c(a,o),x(o,`font-medium`);let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=n.name;i(()=>g(e,o,s))});let d=b(`div`,a);c(a,d),x(d,`text-base-content/60`);let f=e(`rue:slot:anchor`);c(d,f),t(()=>{let e=n.team;i(()=>g(e,d,f))}),c(d,h(` · `));let p=e(`rue:slot:anchor`);return c(d,p),t(()=>{let e=n.region;i(()=>g(e,d,p))}),r}),r,a)}})}),n}):``;i(()=>g(n,o,j))});let M=b(`div`,o);c(o,M),x(M,`grid gap-4 md:grid-cols-3`);let N=b(`div`,M);c(M,N),x(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=b(`div`,N);c(N,P),x(P,`text-sm text-base-content/60`),c(P,h(`同步读取到的高度`));let F=b(`div`,N);c(N,F),x(F,`mt-2 font-mono text-xl`);let I=_(F);c(F,I),t(()=>{d(I,v.value)});let L=b(`div`,M);c(M,L),x(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=b(`div`,L);c(L,R),x(R,`text-sm text-base-content/60`),c(R,h(`await nextTick() 后高度`));let z=b(`div`,L);c(L,z),x(z,`mt-2 font-mono text-xl text-success`);let B=_(z);c(z,B),t(()=>{d(B,y.value)});let V=b(`div`,M);c(M,V),x(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=b(`div`,V);c(V,H),x(H,`text-sm text-base-content/60`),c(H,h(`布局决策`));let W=b(`div`,V);c(V,W),x(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=_(W);c(W,G),t(()=>{d(G,S.value)});let K=b(`div`,o);c(o,K),x(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=b(`div`,K);c(K,q),x(q,`text-sm font-medium text-base-content/70`),c(q,h(`本轮步骤`));let J=b(`ul`,K);c(K,J),x(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=e(`rue:list:start`),X=e(`rue:list:end`);c(J,Y),c(J,X);let Z=new Map;return t(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`modal-measure-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:f,syncHeight:v,postTickHeight:y,logLines:S,panelRef:T}=C(`useSetup:0:0`,()=>o(()=>({expanded:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),logLines:C(`ref:1:3`,()=>n([...K])),panelRef:C(`useRef:1:4`,()=>s())}))),E=async()=>{f.value=!f.value;let e=f.value?`展开`:`收起`,t=T.current?.offsetHeight??0;v.value=`${t}px`,y.value=`等待 flush...`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await r();let n=T.current?.offsetHeight??0;y.value=`${n}px`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},D=()=>{f.value=!1,v.value=`尚未测量`,y.value=`尚未测量`,S.value=[...K]};return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=b(`div`,o);c(o,C);let O=ee(C,()=>T);m(()=>{O()}),x(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=b(`div`,C);c(C,k),x(k,`flex items-center justify-between`);let A=b(`div`,k);c(k,A);let j=b(`div`,A);c(A,j),x(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(j,h(`订单详情卡片`));let M=b(`div`,A);c(A,M),x(M,`mt-2 text-2xl font-semibold`),c(M,h(`订单 #A1024`));let N=b(`div`,k);c(k,N),t(()=>{x(N,`badge ${f.value?`badge-primary`:`badge-outline`}`)});let P=_(N);c(N,P),t(()=>{d(P,f.value?`已展开`:`已收起`)});let F=b(`div`,C);c(C,F),x(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=b(`div`,F);c(F,I),x(I,`rounded-box bg-base-200/60 p-3 text-sm`),c(I,h(`支付状态：已支付`));let L=b(`div`,F);c(F,L),x(L,`rounded-box bg-base-200/60 p-3 text-sm`),c(L,h(`配送方式：同城急送`));let R=b(`div`,F);c(F,R),x(R,`rounded-box bg-base-200/60 p-3 text-sm`),c(R,h(`仓库：上海 3 号仓`));let z=b(`div`,F);c(F,z),x(z,`rounded-box bg-base-200/60 p-3 text-sm`),c(z,h(`下单时间：09:20`));let B=e(`rue:slot:anchor`);c(F,B),t(()=>{let e=f.value?p(()=>{let e=u();c(e,h(` `));let t=b(`div`,e);c(e,t),x(t,`rounded-box bg-base-200/60 p-3 text-sm`),c(t,h(`发票状态：电子发票已开具`)),c(e,h(` `));let n=b(`div`,e);c(e,n),x(n,`rounded-box bg-base-200/60 p-3 text-sm`),c(n,h(`风控结果：人工审核已通过`)),c(e,h(` `));let r=b(`div`,e);c(e,r),x(r,`rounded-box bg-base-200/60 p-3 text-sm`),c(r,h(`配送备注：优先联系收货人本人`)),c(e,h(` `));let i=b(`div`,e);return c(e,i),x(i,`rounded-box bg-base-200/60 p-3 text-sm`),c(i,h(`售后状态：暂无售后单`)),c(e,h(` `)),e}):``;i(()=>g(e,F,B))});let V=b(`div`,o);c(o,V),x(V,`flex flex-wrap gap-3`);let H=b(`button`,V);c(V,H),x(H,`btn btn-primary`),a(H,`click`,()=>void E());let U=_(H);c(H,U),t(()=>{d(U,f.value?`收起详情区并测量`:`展开详情区并测量`)});let W=b(`button`,V);c(V,W),x(W,`btn btn-ghost`),a(W,`click`,D),c(W,h(`重置`));let G=b(`div`,o);c(o,G),x(G,`grid gap-4 md:grid-cols-2`);let K=b(`div`,G);c(G,K),x(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=b(`div`,K);c(K,q),x(q,`text-sm text-base-content/60`),c(q,h(`同步读取到的高度`));let J=b(`div`,K);c(K,J),x(J,`mt-2 font-mono text-2xl`);let Y=_(J);c(J,Y),t(()=>{d(Y,v.value)});let X=b(`div`,G);c(G,X),x(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=b(`div`,X);c(X,Z),x(Z,`text-sm text-base-content/60`),c(Z,h(`await nextTick() 后高度`));let te=b(`div`,X);c(X,te),x(te,`mt-2 font-mono text-2xl text-success`);let ne=_(te);c(te,ne),t(()=>{d(ne,y.value)});let Q=b(`div`,o);c(o,Q),x(Q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=b(`div`,Q);c(Q,$),x($,`text-sm font-medium text-base-content/70`),c($,h(`本轮步骤`));let re=b(`ul`,Q);c(Q,re),x(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=e(`rue:list:start`),ae=e(`rue:list:end`);c(re,ie),c(re,ae);let oe=new Map;return t(()=>{oe=w({items:S.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`panel-measure-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],te=e=>e===`all`?Z:Z.filter(t=>t.status===e),ne=()=>{let{activeStatus:f,syncTarget:v,postTickTarget:y,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>o(()=>({activeStatus:C(`ref:1:0`,()=>n(`all`)),syncTarget:C(`ref:1:1`,()=>n(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>n(`尚未定位`)),logLines:C(`ref:1:3`,()=>n([...Y])),viewportRef:C(`useRef:1:4`,()=>s())}))),D=async e=>{f.value=e,v.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,y.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await r();let t=E.current?.querySelector(`[data-first-visible="true"]`);t?.scrollIntoView({block:`nearest`}),y.value=t?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`nextTick() 后首条结果：${y.value}，并已滚动到可视区域`]},O=()=>{f.value=`all`,v.value=`尚未筛选`,y.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>S(()=>te(f.value)));return p(n=>{let r=b(`div`,n);x(r,`card bg-base-100 shadow`);let o=b(`div`,r);c(r,o),x(o,`card-body gap-5`);let s=b(`p`,o);c(o,s),x(s,`text-base-content/70 leading-7`),c(s,h(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=b(`div`,o);c(o,S),x(S,`flex flex-wrap gap-2`);let C=e(`rue:list:start`),A=e(`rue:list:end`);c(S,C),c(S,A);let j=new Map;t(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:S,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,o,s,d)=>{g(p(()=>{let r=u(),o=b(`button`,r);c(r,o),t(()=>{l(o,`key`,String(n))}),t(()=>{x(o,`btn btn-sm ${f.value===n?`btn-primary`:`btn-ghost`}`)}),a(o,`click`,()=>void D(n));let s=e(`rue:slot:anchor`);return c(o,s),t(()=>{let e=X[n];i(()=>g(e,o,s))}),r}),r,o)}})});let M=b(`button`,S);c(S,M),x(M,`btn btn-sm btn-outline`),a(M,`click`,O),c(M,h(`重置`));let N=b(`div`,o);c(o,N);let P=ee(N,()=>E);m(()=>{P()}),x(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=b(`table`,N);c(N,F),x(F,`table table-pin-rows table-sm`);let I=b(`thead`,F);c(F,I);let L=b(`tr`,I);c(I,L);let R=b(`th`,L);c(L,R),c(R,h(`订单号`));let z=b(`th`,L);c(L,z),c(z,h(`客户`));let B=b(`th`,L);c(L,B),c(B,h(`状态`));let V=b(`th`,L);c(L,V),c(V,h(`金额`));let H=b(`th`,L);c(L,H),c(H,h(`备注`));let U=b(`tbody`,F);c(F,U);let W=e(`rue:slot:anchor`);c(U,W),t(()=>{let n=k.get().length>0?p(()=>{let n=u(),r=e(`rue:list:start`),a=e(`rue:list:end`);c(n,r),c(n,a);let o=new Map;return t(()=>{o=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:o,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(n,r,a,o,s)=>{g(p(()=>{let r=u(),a=b(`tr`,r);c(r,a),t(()=>{l(a,`key`,String(n.id))}),t(()=>{l(a,`data-first-visible`,String(s===0?`true`:`false`))}),t(()=>{l(a,`data-order-no`,String(n.orderNo))});let o=b(`td`,a);c(a,o),x(o,`font-medium`);let d=e(`rue:slot:anchor`);c(o,d),t(()=>{let e=n.orderNo;i(()=>g(e,o,d))});let f=b(`td`,a);c(a,f);let p=e(`rue:slot:anchor`);c(f,p),t(()=>{let e=n.customer;i(()=>g(e,f,p))});let m=b(`td`,a);c(a,m);let h=b(`span`,m);c(m,h),x(h,`badge badge-outline`);let _=e(`rue:slot:anchor`);c(h,_),t(()=>{let e=X[n.status];i(()=>g(e,h,_))});let v=b(`td`,a);c(a,v);let y=e(`rue:slot:anchor`);c(v,y),t(()=>{let e=n.amount;i(()=>g(e,v,y))});let S=b(`td`,a);c(a,S),x(S,`text-base-content/60`);let C=e(`rue:slot:anchor`);return c(S,C),t(()=>{let e=n.note;i(()=>g(e,S,C))}),r}),r,a)}})}),n}):p(()=>{let e=u(),t=b(`tr`,e);c(e,t);let n=b(`td`,t);return c(t,n),l(n,`colSpan`,`5`),x(n,`py-8 text-center text-base-content/60`),c(n,h(`当前筛选没有结果`)),e});i(()=>g(n,U,W))});let G=b(`div`,o);c(o,G),x(G,`grid gap-4 md:grid-cols-2`);let K=b(`div`,G);c(G,K),x(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=b(`div`,K);c(K,q),x(q,`text-sm text-base-content/60`),c(q,h(`同步读取到的首条结果`));let J=b(`div`,K);c(K,J),x(J,`mt-2 font-mono text-2xl`);let Y=_(J);c(J,Y),t(()=>{d(Y,v.value)});let Z=b(`div`,G);c(G,Z),x(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=b(`div`,Z);c(Z,te),x(te,`text-sm text-base-content/60`),c(te,h(`await nextTick() 后定位到`));let ne=b(`div`,Z);c(Z,ne),x(ne,`mt-2 font-mono text-2xl text-success`);let Q=_(ne);c(ne,Q),t(()=>{d(Q,y.value)});let $=b(`div`,o);c(o,$),x($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=b(`div`,$);c($,re),x(re,`text-sm font-medium text-base-content/70`),c(re,h(`本轮步骤`));let ie=b(`ul`,$);c($,ie),x(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=e(`rue:list:start`),oe=e(`rue:list:end`);c(ie,ae),c(ie,oe);let se=new Map;return t(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`table-filter-log-${a}`))});let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),r})},Q=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Q,Demo:ne},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=n=>{let{Demo:r}=C(`useSetup:0:0`,()=>o(()=>({Demo:n.scenario.Demo})));return p(a=>{let o=b(`section`,a);x(o,`rounded-box border border-base-300 bg-base-100 p-5`);let s=b(`div`,o);c(o,s),x(s,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let f=e(`rue:slot:anchor`);c(s,f),t(()=>{let e=n.eyebrow;i(()=>g(e,s,f))});let m=b(`div`,o);c(o,m),x(m,`mt-2 text-2xl font-semibold`);let h=e(`rue:slot:anchor`);c(m,h),t(()=>{let e=n.scenario.title;i(()=>g(e,m,h))});let v=b(`p`,o);c(o,v),x(v,`mt-2 text-base-content/70 leading-7`);let S=e(`rue:slot:anchor`);c(v,S),t(()=>{let e=n.scenario.summary;i(()=>g(e,v,S))});let C=b(`div`,o);c(o,C),x(C,`mt-4 flex flex-wrap gap-2`);let ee=e(`rue:list:start`),E=e(`rue:list:end`);c(C,ee),c(C,E);let D=new Map;t(()=>{D=w({items:n.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=u(),r=b(`span`,n);c(n,r),t(()=>{l(r,`key`,String(e))}),x(r,`badge badge-outline`);let i=_(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})});let O=b(`div`,o);c(o,O),x(O,`mt-4`);let k=e(`rue:slot:anchor`);return c(O,k),t(()=>{let a=n.activeTab.value===`preview`?p(()=>{let t=u(),n=e(`rue:component:anchor`);return c(t,n),g(y(r,{}),t,n),t}):p(()=>{let r=u(),a=b(`div`,r);c(r,a),x(a,`card bg-base-100 shadow overflow-auto`);let o=b(`div`,a);c(a,o),x(o,`card-body p-0`);let s=e(`rue:component:anchor`);return c(o,s),t(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:n.scenario.source});i(()=>g(e,o,s))}),r});i(()=>g(a,O,k))}),o})},ae=()=>{let{activeTab:r}=C(`useSetup:0:0:dup1`,()=>o(()=>({activeTab:C(`ref:1:0`,()=>n(`preview`))})));return p(n=>{let i=u(),o=e(`rue:component:anchor`);return c(i,o),g(y(E,{children:p(()=>{let n=u(),i=b(`h1`,n);c(n,i),x(i,`text-5xl font-semibold mb-4 md:mb-4`),c(i,h(`nextTick 真实业务场景`));let o=b(`p`,n);c(n,o),x(o,`max-w-4xl text-base-content/70 leading-7`),c(o,h(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let s=b(`div`,n);c(n,s),l(s,`role`,`tablist`),x(s,`tabs tabs-box mt-6`);let d=b(`button`,s);c(s,d),l(d,`role`,`tab`),t(()=>{x(d,`tab ${r.value===`preview`?`tab-active`:``}`)}),a(d,`click`,()=>{r.value=`preview`}),c(d,h(`效果`));let f=b(`button`,s);c(s,f),l(f,`role`,`tab`),t(()=>{x(f,`tab ${r.value===`code`?`tab-active`:``}`)}),a(f,`click`,()=>{r.value=`code`}),c(f,h(`代码`));let p=b(`div`,n);c(n,p),x(p,`mt-4 grid gap-6`);let m=e(`rue:list:start`),g=e(`rue:list:end`);c(p,m),c(p,g);let _=new Map;t(()=>{_=w({items:$||[],getKey:(e,t)=>e.title,elements:_,parent:p,before:g,start:m,renderItem:(e,t,n,i,a)=>{v(y(ie,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:r}),t,n,i)}})});let S=b(`section`,p);c(p,S),x(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=b(`div`,S);c(S,C),x(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(C,h(`新增业务 demo`));let ee=b(`div`,S);c(S,ee),x(ee,`mt-2 text-2xl font-semibold`),c(ee,h(`真实业务里 nextTick 怎么用`));let T=b(`p`,S);c(S,T),x(T,`mt-2 text-base-content/70 leading-7`),c(T,h(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=e(`rue:list:start`),D=e(`rue:list:end`);c(p,E),c(p,D);let O=new Map;return t(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:p,before:D,start:E,renderItem:(e,t,n,i,a)=>{v(y(ie,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:r}),t,n,i)}})}),n})}),i,o),i})};export{ae as default};