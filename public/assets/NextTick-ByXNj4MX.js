import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,c as d,ft as f,ht as p,it as m,l as h,r as g,s as _,t as v,wt as y,yt as b,z as x}from"./vapor-runtime-C1rlwc61.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as T}from"./Code-BCLFq1E3.js";import{t as E}from"./SidebarPlaygroundExample-CdMvdgT7.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:d,syncHeight:m,flushedHeight:v,logLines:T,listRef:E,appendMessage:k,reset:A}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(O())),t=S(`ref:1:1`,()=>p(`尚未追加`)),r=S(`ref:1:2`,()=>p(`尚未追加`)),i=S(`ref:1:3`,()=>p([...D])),a=S(`useRef:1:4`,()=>n());return{messages:e,syncHeight:t,flushedHeight:r,logLines:i,listRef:a,appendMessage:async()=>{let n=e.value.length+1,o=String(19+n).padStart(2,`0`);e.value=[...e.value,{id:n,text:`09:${o} 订单 #A10${20+n} 已完成支付`}];let s=a.current?.scrollHeight??0;t.value=`${s}px（旧高度）`,r.value=`等待 flush...`,i.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`等待 nextTick() 后重新计算高度...`],a.current&&(a.current.scrollTop=s),await f();let c=a.current?.scrollHeight??0;a.current&&(a.current.scrollTop=c),r.value=`${c}px（已包含新消息）`,i.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`nextTick() 后 scrollHeight：${c}px，并已滚动到底部`]},reset:()=>{e.value=O(),t.value=`尚未追加`,r.value=`尚未追加`,i.value=[...D],a.current&&(a.current.scrollTop=0)}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let S=c(`div`,p);t(p,S),e(S,`rounded-box border border-base-300 bg-base-100`);let D=c(`div`,S);t(S,D),e(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=c(`div`,D);t(D,O),e(O,`text-sm font-medium text-base-content/70`),t(O,i(`订单通知流`));let j=c(`div`,D);t(D,j),e(j,`badge badge-outline`);let M=a(`rue:slot:anchor`);t(j,M),r(()=>{let e=d.value.length;b(()=>_(e,j,M))}),t(j,i(` 条消息`));let N=c(`div`,S);t(S,N);let P=w(N,()=>E);g(()=>{P()}),e(N,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let F=a(`rue:list:start`),I=a(`rue:list:end`);t(N,F),t(N,I);let L=new Map;r(()=>{L=C({items:d.value||[],getKey:(e,t)=>e.id,elements:L,parent:N,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(n,i,o,u,d)=>{_(h(()=>{let i=s(),o=c(`div`,i);t(i,o),r(()=>{l(o,`key`,String(n.id))}),e(o,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let u=a(`rue:slot:anchor`);return t(o,u),r(()=>{let e=n.text;b(()=>_(e,o,u))}),i}),i,o)}})});let R=c(`div`,p);t(p,R),e(R,`flex flex-wrap gap-3`);let z=c(`button`,R);t(R,z),e(z,`btn btn-primary`),x(z,`click`,()=>void k()),t(z,i(`追加通知并滚动到底部`));let B=c(`button`,R);t(R,B),e(B,`btn btn-ghost`),x(B,`click`,A),t(B,i(`重置`));let V=c(`div`,p);t(p,V),e(V,`grid gap-4 md:grid-cols-2`);let H=c(`div`,V);t(V,H),e(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=c(`div`,H);t(H,U),e(U,`text-sm text-base-content/60`),t(U,i(`同步读取到的 scrollHeight`));let W=c(`div`,H);t(H,W),e(W,`mt-2 font-mono text-2xl`);let G=o(W);t(W,G),r(()=>{u(G,m.value)});let K=c(`div`,V);t(V,K),e(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=c(`div`,K);t(K,q),e(q,`text-sm text-base-content/60`),t(q,i(`await nextTick() 后的高度`));let J=c(`div`,K);t(K,J),e(J,`mt-2 font-mono text-2xl text-success`);let Y=o(J);t(J,Y),r(()=>{u(Y,v.value)});let X=c(`div`,p);t(p,X),e(X,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let Z=c(`div`,X);t(X,Z),e(Z,`text-sm font-medium text-base-content/70`),t(Z,i(`本轮步骤`));let Q=c(`ul`,X);t(X,Q),e(Q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ee=a(`rue:list:start`),te=a(`rue:list:end`);t(Q,ee),t(Q,te);let ne=new Map;return r(()=>{ne=C({items:T.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Q,before:te,singleRoot:!0,start:ee,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`chat-scroll-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:d,beforeDomText:m,afterDomText:v,logLines:b,counterRef:T,inspectUpdate:E,reset:D}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(0)),t=S(`ref:1:1`,()=>p(`尚未读取`)),r=S(`ref:1:2`,()=>p(`尚未读取`)),i=S(`ref:1:3`,()=>p([...j])),a=S(`useRef:1:4`,()=>n());return{count:e,beforeDomText:t,afterDomText:r,logLines:i,counterRef:a,inspectUpdate:async()=>{e.value+=1;let n=a.current?.textContent??`(missing)`;t.value=n,r.value=`等待 flush...`,i.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${n}`,`等待 nextTick() 完成...`],await f();let o=a.current?.textContent??`(missing)`;r.value=o,i.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${n}`,`nextTick() 后读取 DOM：${o}`]},reset:()=>{e.value=0,t.value=`尚未读取`,r.value=`尚未读取`,i.value=[...j]}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let S=c(`div`,p);t(p,S),e(S,`rounded-box border border-base-300 bg-base-200/40 p-5`);let O=c(`div`,S);t(S,O),e(O,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(O,i(`当前 DOM 文本`));let k=c(`div`,S);t(S,k),e(k,`mt-3 text-4xl font-semibold text-primary`);let A=c(`span`,k);t(k,A);let j=w(A,()=>T);g(()=>{j()});let M=o(A);t(A,M),r(()=>{u(M,d.value)});let N=c(`div`,p);t(p,N),e(N,`flex flex-wrap gap-3`);let P=c(`button`,N);t(N,P),e(P,`btn btn-primary`),x(P,`click`,()=>void E()),t(P,i(`自增并读取 DOM`));let F=c(`button`,N);t(N,F),e(F,`btn btn-ghost`),x(F,`click`,D),t(F,i(`重置`));let I=c(`div`,p);t(p,I),e(I,`grid gap-4 md:grid-cols-2`);let L=c(`div`,I);t(I,L),e(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=c(`div`,L);t(L,R),e(R,`text-sm text-base-content/60`),t(R,i(`同步读取到的 DOM 文本`));let z=c(`div`,L);t(L,z),e(z,`mt-2 font-mono text-2xl`);let B=o(z);t(z,B),r(()=>{u(B,m.value)});let V=c(`div`,I);t(I,V),e(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=c(`div`,V);t(V,H),e(H,`text-sm text-base-content/60`),t(H,i(`await nextTick() 后读取`));let U=c(`div`,V);t(V,U),e(U,`mt-2 font-mono text-2xl text-success`);let W=o(U);t(U,W),r(()=>{u(W,v.value)});let G=c(`div`,p);t(p,G),e(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let K=c(`div`,G);t(G,K),e(K,`text-sm font-medium text-base-content/70`),t(K,i(`本轮步骤`));let q=c(`ul`,G);t(G,q),e(q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let J=a(`rue:list:start`),Y=a(`rue:list:end`);t(q,J),t(q,Y);let X=new Map;return r(()=>{X=C({items:b.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:X,parent:q,before:Y,singleRoot:!0,start:J,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`dom-read-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:d,keyword:v,syncState:T,postTickState:E,logLines:D,inputRef:O,openPanel:k,closePanel:A}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(!1)),t=S(`ref:1:1`,()=>p(``)),r=S(`ref:1:2`,()=>p(`尚未打开`)),i=S(`ref:1:3`,()=>p(`尚未聚焦`)),a=S(`ref:1:4`,()=>p([...P])),o=S(`useRef:1:5`,()=>n());return{panelOpen:e,keyword:t,syncState:r,postTickState:i,logLines:a,inputRef:o,openPanel:async()=>{e.value=!0,r.value=o.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,i.value=`等待 flush...`,a.value=[`筛选面板状态已切到打开`,r.value,`等待 nextTick() 后执行 focus()`],await f(),o.current?.focus(),i.value=globalThis.document?.activeElement===o.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,a.value=[`筛选面板状态已切到打开`,r.value,i.value]},closePanel:()=>{e.value=!1,t.value=``,r.value=`尚未打开`,i.value=`尚未聚焦`,a.value=[...P]}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let S=c(`div`,p);t(p,S),e(S,`flex flex-wrap gap-3`);let j=c(`button`,S);t(S,j),e(j,`btn btn-primary`),x(j,`click`,()=>void k()),t(j,i(`打开高级筛选`));let M=c(`button`,S);t(S,M),e(M,`btn btn-ghost`),x(M,`click`,A),t(M,i(`关闭并重置`));let N=a(`rue:slot:anchor`);t(p,N),r(()=>{let n=d.value?h(()=>{let n=s(),a=c(`div`,n);t(n,a),e(a,`rounded-box border border-base-300 bg-base-100 p-5`);let o=c(`div`,a);t(a,o),e(o,`grid gap-4 md:grid-cols-2`);let u=c(`label`,o);t(o,u),e(u,`block`);let d=c(`div`,u);t(u,d),e(d,`text-sm text-base-content/60`),t(d,i(`关键词`));let f=c(`input`,u);t(u,f);let p=w(f,()=>O);g(()=>{p()}),e(f,`input input-bordered mt-2 w-full`),r(()=>{m(f,v.value)}),l(f,`placeholder`,`订单号 / 用户名 / 手机号`),x(f,`input`,e=>{v.value=e.target.value});let h=c(`label`,o);t(o,h),e(h,`block`);let _=c(`div`,h);t(h,_),e(_,`text-sm text-base-content/60`),t(_,i(`订单状态`));let y=c(`select`,h);t(h,y),e(y,`select select-bordered mt-2 w-full`);let b=c(`option`,y);t(y,b),t(b,i(`全部`));let S=c(`option`,y);t(y,S),t(S,i(`待支付`));let C=c(`option`,y);t(y,C),t(C,i(`待发货`));let T=c(`option`,y);return t(y,T),t(T,i(`已完成`)),n}):``;b(()=>_(n,p,N))});let P=c(`div`,p);t(p,P),e(P,`grid gap-4 md:grid-cols-2`);let F=c(`div`,P);t(P,F),e(F,`rounded-box border border-base-300 bg-base-100 p-4`);let I=c(`div`,F);t(F,I),e(I,`text-sm text-base-content/60`),t(I,i(`同步阶段状态`));let L=c(`div`,F);t(F,L),e(L,`mt-2 font-mono text-xl`);let R=o(L);t(L,R),r(()=>{u(R,T.value)});let z=c(`div`,P);t(P,z),e(z,`rounded-box border border-base-300 bg-base-100 p-4`);let B=c(`div`,z);t(z,B),e(B,`text-sm text-base-content/60`),t(B,i(`await nextTick() 后状态`));let V=c(`div`,z);t(z,V),e(V,`mt-2 font-mono text-xl text-success`);let H=o(V);t(V,H),r(()=>{u(H,E.value)});let U=c(`div`,p);t(p,U),e(U,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let W=c(`div`,U);t(U,W),e(W,`text-sm font-medium text-base-content/70`),t(W,i(`本轮步骤`));let G=c(`ul`,U);t(U,G),e(G,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let K=a(`rue:list:start`),q=a(`rue:list:end`);t(G,K),t(G,q);let J=new Map;return r(()=>{J=C({items:D.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:J,parent:G,before:q,singleRoot:!0,start:K,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`filter-focus-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:d,phone:v,email:T,errors:E,syncField:D,postTickField:O,logLines:k,formRef:A,validate:j,submit:M,fillValidData:N,reset:P}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(``)),t=S(`ref:1:1`,()=>p(``)),r=S(`ref:1:2`,()=>p(``)),i=S(`ref:1:3`,()=>p(z())),a=S(`ref:1:4`,()=>p(`尚未提交`)),o=S(`ref:1:5`,()=>p(`尚未聚焦`)),s=S(`ref:1:6`,()=>p([...L])),c=S(`useRef:1:7`,()=>n()),l=()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`});return{receiver:e,phone:t,email:r,errors:i,syncField:a,postTickField:o,logLines:s,formRef:c,validate:l,submit:async()=>{let e=l(),t=Object.values(e).filter(Boolean).length;i.value=e;let n=c.current?.querySelector(`[data-invalid="true"]`);a.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,o.value=`等待 flush...`,s.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${a.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await f();let r=c.current?.querySelector(`[data-invalid="true"]`);r?.focus(),o.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,s.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${a.value}`,o.value]},fillValidData:()=>{e.value=`李四`,t.value=`13800001111`,r.value=`li.si@example.com`,i.value=z(),a.value=`已填入合法示例`,o.value=`再次点击提交可观察通过路径`,s.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},reset:()=>{e.value=``,t.value=``,r.value=``,i.value=z(),a.value=`尚未提交`,o.value=`尚未聚焦`,s.value=[...L]}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let S=c(`div`,p);t(p,S);let j=w(S,()=>A);g(()=>{j()}),e(S,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let F=c(`label`,S);t(S,F),e(F,`block`);let I=c(`div`,F);t(F,I),e(I,`text-sm text-base-content/60`),t(I,i(`联系人`));let L=c(`input`,F);t(F,L),l(L,`name`,`receiver`),r(()=>{l(L,`data-invalid`,String(E.value.receiver?`true`:`false`))}),r(()=>{e(L,String(`input input-bordered mt-2 w-full ${E.value.receiver?`input-error`:``}`.trim()))}),r(()=>{m(L,d.value)}),l(L,`placeholder`,`请输入联系人`),x(L,`input`,e=>{d.value=e.target.value});let R=a(`rue:slot:anchor`);t(F,R),r(()=>{let n=E.value.receiver?h(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`mt-2 text-sm text-error`);let o=a(`rue:slot:anchor`);return t(i,o),r(()=>{let e=E.value.receiver;b(()=>_(e,i,o))}),n}):``;b(()=>_(n,F,R))});let z=c(`label`,S);t(S,z),e(z,`block`);let B=c(`div`,z);t(z,B),e(B,`text-sm text-base-content/60`),t(B,i(`手机号`));let V=c(`input`,z);t(z,V),l(V,`name`,`phone`),r(()=>{l(V,`data-invalid`,String(E.value.phone?`true`:`false`))}),r(()=>{e(V,String(`input input-bordered mt-2 w-full ${E.value.phone?`input-error`:``}`.trim()))}),r(()=>{m(V,v.value)}),l(V,`placeholder`,`请输入 11 位手机号`),x(V,`input`,e=>{v.value=e.target.value});let H=a(`rue:slot:anchor`);t(z,H),r(()=>{let n=E.value.phone?h(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`mt-2 text-sm text-error`);let o=a(`rue:slot:anchor`);return t(i,o),r(()=>{let e=E.value.phone;b(()=>_(e,i,o))}),n}):``;b(()=>_(n,z,H))});let U=c(`label`,S);t(S,U),e(U,`block`);let W=c(`div`,U);t(U,W),e(W,`text-sm text-base-content/60`),t(W,i(`邮箱`));let G=c(`input`,U);t(U,G),l(G,`name`,`email`),r(()=>{l(G,`data-invalid`,String(E.value.email?`true`:`false`))}),r(()=>{e(G,String(`input input-bordered mt-2 w-full ${E.value.email?`input-error`:``}`.trim()))}),r(()=>{m(G,T.value)}),l(G,`placeholder`,`请输入邮箱`),x(G,`input`,e=>{T.value=e.target.value});let K=a(`rue:slot:anchor`);t(U,K),r(()=>{let n=E.value.email?h(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`mt-2 text-sm text-error`);let o=a(`rue:slot:anchor`);return t(i,o),r(()=>{let e=E.value.email;b(()=>_(e,i,o))}),n}):``;b(()=>_(n,U,K))});let q=c(`div`,p);t(p,q),e(q,`flex flex-wrap gap-3`);let J=c(`button`,q);t(q,J),e(J,`btn btn-primary`),x(J,`click`,()=>void M()),t(J,i(`提交并定位错误字段`));let Y=c(`button`,q);t(q,Y),e(Y,`btn btn-outline`),x(Y,`click`,N),t(Y,i(`填入合法示例`));let X=c(`button`,q);t(q,X),e(X,`btn btn-ghost`),x(X,`click`,P),t(X,i(`重置`));let Z=c(`div`,p);t(p,Z),e(Z,`grid gap-4 md:grid-cols-2`);let Q=c(`div`,Z);t(Z,Q),e(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=c(`div`,Q);t(Q,ee),e(ee,`text-sm text-base-content/60`),t(ee,i(`同步阶段识别到的字段`));let te=c(`div`,Q);t(Q,te),e(te,`mt-2 font-mono text-xl`);let ne=o(te);t(te,ne),r(()=>{u(ne,D.value)});let $=c(`div`,Z);t(Z,$),e($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=c(`div`,$);t($,re),e(re,`text-sm text-base-content/60`),t(re,i(`await nextTick() 后结果`));let ie=c(`div`,$);t($,ie),e(ie,`mt-2 font-mono text-xl text-success`);let ae=o(ie);t(ie,ae),r(()=>{u(ae,O.value)});let oe=c(`div`,p);t(p,oe),e(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=c(`div`,oe);t(oe,se),e(se,`text-sm font-medium text-base-content/70`),t(se,i(`本轮步骤`));let ce=c(`ul`,oe);t(oe,ce),e(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=a(`rue:list:start`),ue=a(`rue:list:end`);t(ce,le),t(ce,ue);let de=new Map;return r(()=>{de=C({items:k.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`focus-error-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:d,syncHeight:m,postTickHeight:v,layoutDecision:T,logLines:E,listRef:D,openModal:O,closeModal:k}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(!1)),t=S(`ref:1:1`,()=>p(`尚未打开`)),r=S(`ref:1:2`,()=>p(`尚未测量`)),i=S(`ref:1:3`,()=>p(`等待测量`)),a=S(`ref:1:4`,()=>p([...H])),o=S(`useRef:1:5`,()=>n());return{modalOpen:e,syncHeight:t,postTickHeight:r,layoutDecision:i,logLines:a,listRef:o,openModal:async()=>{e.value=!0;let n=o.current?.scrollHeight??0;t.value=`${n}px`,r.value=`等待 flush...`,i.value=`等待布局完成...`,a.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${n}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await f();let s=o.current?.scrollHeight??0;r.value=`${s}px`,i.value=s>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,a.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${n}px`,`nextTick() 后列表高度：${s}px，${i.value}`]},closeModal:()=>{e.value=!1,t.value=`尚未打开`,r.value=`尚未测量`,i.value=`等待测量`,a.value=[...H]}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let S=c(`div`,p);t(p,S),e(S,`flex flex-wrap gap-3`);let A=c(`button`,S);t(S,A),e(A,`btn btn-primary`),x(A,`click`,()=>void O()),t(A,i(`打开批量发送弹窗`));let j=c(`button`,S);t(S,j),e(j,`btn btn-ghost`),x(j,`click`,k),t(j,i(`关闭并重置`));let M=a(`rue:slot:anchor`);t(p,M),r(()=>{let n=d.value?h(()=>{let n=s(),o=c(`div`,n);t(n,o),e(o,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let u=c(`div`,o);t(o,u),e(u,`flex items-start justify-between gap-4`);let d=c(`div`,u);t(u,d);let f=c(`div`,d);t(d,f),e(f,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(f,i(`批量发送预览`));let p=c(`div`,d);t(d,p),e(p,`mt-2 text-2xl font-semibold`),t(p,i(`确认接收人列表`));let m=c(`div`,u);t(u,m),e(m,`badge badge-outline`);let v=a(`rue:slot:anchor`);t(m,v),r(()=>{let e=U.length;b(()=>_(e,m,v))}),t(m,i(` 人`));let y=c(`div`,o);t(o,y);let x=w(y,()=>D);g(()=>{x()}),e(y,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=a(`rue:list:start`),T=a(`rue:list:end`);t(y,S),t(y,T);let E=new Map;return r(()=>{E=C({items:U||[],getKey:(e,t)=>e.id,elements:E,parent:y,before:T,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,o,u,d,f)=>{_(h(()=>{let o=s(),u=c(`div`,o);t(o,u),r(()=>{l(u,`key`,String(n.id))}),e(u,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let d=c(`div`,u);t(u,d),e(d,`font-medium`);let f=a(`rue:slot:anchor`);t(d,f),r(()=>{let e=n.name;b(()=>_(e,d,f))});let p=c(`div`,u);t(u,p),e(p,`text-base-content/60`);let m=a(`rue:slot:anchor`);t(p,m),r(()=>{let e=n.team;b(()=>_(e,p,m))}),t(p,i(` · `));let h=a(`rue:slot:anchor`);return t(p,h),r(()=>{let e=n.region;b(()=>_(e,p,h))}),o}),o,u)}})}),n}):``;b(()=>_(n,p,M))});let N=c(`div`,p);t(p,N),e(N,`grid gap-4 md:grid-cols-3`);let P=c(`div`,N);t(N,P),e(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=c(`div`,P);t(P,F),e(F,`text-sm text-base-content/60`),t(F,i(`同步读取到的高度`));let I=c(`div`,P);t(P,I),e(I,`mt-2 font-mono text-xl`);let L=o(I);t(I,L),r(()=>{u(L,m.value)});let R=c(`div`,N);t(N,R),e(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=c(`div`,R);t(R,z),e(z,`text-sm text-base-content/60`),t(z,i(`await nextTick() 后高度`));let B=c(`div`,R);t(R,B),e(B,`mt-2 font-mono text-xl text-success`);let V=o(B);t(B,V),r(()=>{u(V,v.value)});let H=c(`div`,N);t(N,H),e(H,`rounded-box border border-base-300 bg-base-100 p-4`);let W=c(`div`,H);t(H,W),e(W,`text-sm text-base-content/60`),t(W,i(`布局决策`));let G=c(`div`,H);t(H,G),e(G,`mt-2 text-sm leading-6 text-base-content/80`);let K=o(G);t(G,K),r(()=>{u(K,T.value)});let q=c(`div`,p);t(p,q),e(q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let J=c(`div`,q);t(q,J),e(J,`text-sm font-medium text-base-content/70`),t(J,i(`本轮步骤`));let Y=c(`ul`,q);t(q,Y),e(Y,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let X=a(`rue:list:start`),Z=a(`rue:list:end`);t(Y,X),t(Y,Z);let Q=new Map;return r(()=>{Q=C({items:E.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Q,parent:Y,before:Z,singleRoot:!0,start:X,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`modal-measure-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:d,syncHeight:m,postTickHeight:v,logLines:T,panelRef:E,toggleExpanded:D,reset:O}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(!1)),t=S(`ref:1:1`,()=>p(`尚未测量`)),r=S(`ref:1:2`,()=>p(`尚未测量`)),i=S(`ref:1:3`,()=>p([...K])),a=S(`useRef:1:4`,()=>n());return{expanded:e,syncHeight:t,postTickHeight:r,logLines:i,panelRef:a,toggleExpanded:async()=>{e.value=!e.value;let n=e.value?`展开`:`收起`,o=a.current?.offsetHeight??0;t.value=`${o}px`,r.value=`等待 flush...`,i.value=[`详情区准备${n}`,`同步读取 offsetHeight：${o}px`,`等待 nextTick() 后重新测量...`],await f();let s=a.current?.offsetHeight??0;r.value=`${s}px`,i.value=[`详情区准备${n}`,`同步读取 offsetHeight：${o}px`,`nextTick() 后 offsetHeight：${s}px`]},reset:()=>{e.value=!1,t.value=`尚未测量`,r.value=`尚未测量`,i.value=[...K]}}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let S=c(`div`,p);t(p,S);let k=w(S,()=>E);g(()=>{k()}),e(S,`rounded-box border border-base-300 bg-base-100 p-5`);let A=c(`div`,S);t(S,A),e(A,`flex items-center justify-between`);let j=c(`div`,A);t(A,j);let M=c(`div`,j);t(j,M),e(M,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(M,i(`订单详情卡片`));let N=c(`div`,j);t(j,N),e(N,`mt-2 text-2xl font-semibold`),t(N,i(`订单 #A1024`));let P=c(`div`,A);t(A,P),r(()=>{e(P,String(`badge ${d.value?`badge-primary`:`badge-outline`}`))});let F=o(P);t(P,F),r(()=>{u(F,d.value?`已展开`:`已收起`)});let I=c(`div`,S);t(S,I),e(I,`mt-5 grid gap-3 md:grid-cols-2`);let L=c(`div`,I);t(I,L),e(L,`rounded-box bg-base-200/60 p-3 text-sm`),t(L,i(`支付状态：已支付`));let R=c(`div`,I);t(I,R),e(R,`rounded-box bg-base-200/60 p-3 text-sm`),t(R,i(`配送方式：同城急送`));let z=c(`div`,I);t(I,z),e(z,`rounded-box bg-base-200/60 p-3 text-sm`),t(z,i(`仓库：上海 3 号仓`));let B=c(`div`,I);t(I,B),e(B,`rounded-box bg-base-200/60 p-3 text-sm`),t(B,i(`下单时间：09:20`));let V=a(`rue:slot:anchor`);t(I,V),r(()=>{let n=d.value?h(()=>{let n=s();t(n,i(` `));let r=c(`div`,n);t(n,r),e(r,`rounded-box bg-base-200/60 p-3 text-sm`),t(r,i(`发票状态：电子发票已开具`)),t(n,i(` `));let a=c(`div`,n);t(n,a),e(a,`rounded-box bg-base-200/60 p-3 text-sm`),t(a,i(`风控结果：人工审核已通过`)),t(n,i(` `));let o=c(`div`,n);t(n,o),e(o,`rounded-box bg-base-200/60 p-3 text-sm`),t(o,i(`配送备注：优先联系收货人本人`)),t(n,i(` `));let l=c(`div`,n);return t(n,l),e(l,`rounded-box bg-base-200/60 p-3 text-sm`),t(l,i(`售后状态：暂无售后单`)),t(n,i(` `)),n}):``;b(()=>_(n,I,V))});let H=c(`div`,p);t(p,H),e(H,`flex flex-wrap gap-3`);let U=c(`button`,H);t(H,U),e(U,`btn btn-primary`),x(U,`click`,()=>void D());let W=o(U);t(U,W),r(()=>{u(W,d.value?`收起详情区并测量`:`展开详情区并测量`)});let G=c(`button`,H);t(H,G),e(G,`btn btn-ghost`),x(G,`click`,O),t(G,i(`重置`));let K=c(`div`,p);t(p,K),e(K,`grid gap-4 md:grid-cols-2`);let q=c(`div`,K);t(K,q),e(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=c(`div`,q);t(q,J),e(J,`text-sm text-base-content/60`),t(J,i(`同步读取到的高度`));let Y=c(`div`,q);t(q,Y),e(Y,`mt-2 font-mono text-2xl`);let X=o(Y);t(Y,X),r(()=>{u(X,m.value)});let Z=c(`div`,K);t(K,Z),e(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=c(`div`,Z);t(Z,Q),e(Q,`text-sm text-base-content/60`),t(Q,i(`await nextTick() 后高度`));let ee=c(`div`,Z);t(Z,ee),e(ee,`mt-2 font-mono text-2xl text-success`);let te=o(ee);t(ee,te),r(()=>{u(te,v.value)});let ne=c(`div`,p);t(p,ne),e(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=c(`div`,ne);t(ne,$),e($,`text-sm font-medium text-base-content/70`),t($,i(`本轮步骤`));let re=c(`ul`,ne);t(ne,re),e(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=a(`rue:list:start`),ae=a(`rue:list:end`);t(re,ie),t(re,ae);let oe=new Map;return r(()=>{oe=C({items:T.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`panel-measure-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),ee=()=>{let{activeStatus:d,syncTarget:m,postTickTarget:v,logLines:T,viewportRef:E,applyFilter:D,reset:O,visibleOrders:k}=S(`useSetup:0:0`,()=>y(()=>{let e=S(`ref:1:0`,()=>p(`all`)),t=S(`ref:1:1`,()=>p(`尚未筛选`)),r=S(`ref:1:2`,()=>p(`尚未定位`)),i=S(`ref:1:3`,()=>p([...Y])),a=S(`useRef:1:4`,()=>n());return{activeStatus:e,syncTarget:t,postTickTarget:r,logLines:i,viewportRef:a,applyFilter:async n=>{e.value=n,t.value=(a.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,r.value=`等待 flush...`,i.value=[`筛选条件切换为：${X[n]}`,`同步读取首条结果：${t.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await f();let o=a.current?.querySelector(`[data-first-visible="true"]`);o?.scrollIntoView({block:`nearest`}),r.value=o?.getAttribute(`data-order-no`)??`当前筛选没有结果`,i.value=[`筛选条件切换为：${X[n]}`,`同步读取首条结果：${t.value}`,`nextTick() 后首条结果：${r.value}，并已滚动到可视区域`]},reset:()=>{e.value=`all`,t.value=`尚未筛选`,r.value=`尚未定位`,i.value=[...Y],a.current&&(a.current.scrollTop=0)},visibleOrders:Q(e.value)}}));return h(n=>{let f=c(`div`,n);e(f,`card bg-base-100 shadow`);let p=c(`div`,f);t(f,p),e(p,`card-body gap-5`);let y=c(`p`,p);t(p,y),e(y,`text-base-content/70 leading-7`),t(y,i(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=c(`div`,p);t(p,S),e(S,`flex flex-wrap gap-2`);let A=a(`rue:list:start`),j=a(`rue:list:end`);t(S,A),t(S,j);let M=new Map;r(()=>{M=C({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:M,parent:S,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(n,i,o,u,f)=>{_(h(()=>{let i=s(),o=c(`button`,i);t(i,o),r(()=>{l(o,`key`,String(n))}),r(()=>{e(o,String(`btn btn-sm ${d.value===n?`btn-primary`:`btn-ghost`}`))}),x(o,`click`,()=>void D(n));let u=a(`rue:slot:anchor`);return t(o,u),r(()=>{let e=X[n];b(()=>_(e,o,u))}),i}),i,o)}})});let N=c(`button`,S);t(S,N),e(N,`btn btn-sm btn-outline`),x(N,`click`,O),t(N,i(`重置`));let P=c(`div`,p);t(p,P);let F=w(P,()=>E);g(()=>{F()}),e(P,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let I=c(`table`,P);t(P,I),e(I,`table table-pin-rows table-sm`);let L=c(`thead`,I);t(I,L);let R=c(`tr`,L);t(L,R);let z=c(`th`,R);t(R,z),t(z,i(`订单号`));let B=c(`th`,R);t(R,B),t(B,i(`客户`));let V=c(`th`,R);t(R,V),t(V,i(`状态`));let H=c(`th`,R);t(R,H),t(H,i(`金额`));let U=c(`th`,R);t(R,U),t(U,i(`备注`));let W=c(`tbody`,I);t(I,W);let G=a(`rue:slot:anchor`);t(W,G),r(()=>{let n=k.length>0?h(()=>{let n=s(),i=a(`rue:list:start`),o=a(`rue:list:end`);t(n,i),t(n,o);let u=new Map;return r(()=>{u=C({items:k||[],getKey:(e,t)=>e.id,elements:u,parent:i.parentNode,before:o,singleRoot:!0,start:i,renderItem:(n,i,o,u,d)=>{_(h(()=>{let i=s(),o=c(`tr`,i);t(i,o),r(()=>{l(o,`key`,String(n.id))}),r(()=>{l(o,`data-first-visible`,String(d===0?`true`:`false`))}),r(()=>{l(o,`data-order-no`,String(n.orderNo))});let u=c(`td`,o);t(o,u),e(u,`font-medium`);let f=a(`rue:slot:anchor`);t(u,f),r(()=>{let e=n.orderNo;b(()=>_(e,u,f))});let p=c(`td`,o);t(o,p);let m=a(`rue:slot:anchor`);t(p,m),r(()=>{let e=n.customer;b(()=>_(e,p,m))});let h=c(`td`,o);t(o,h);let g=c(`span`,h);t(h,g),e(g,`badge badge-outline`);let v=a(`rue:slot:anchor`);t(g,v),r(()=>{let e=X[n.status];b(()=>_(e,g,v))});let y=c(`td`,o);t(o,y);let x=a(`rue:slot:anchor`);t(y,x),r(()=>{let e=n.amount;b(()=>_(e,y,x))});let S=c(`td`,o);t(o,S),e(S,`text-base-content/60`);let C=a(`rue:slot:anchor`);return t(S,C),r(()=>{let e=n.note;b(()=>_(e,S,C))}),i}),i,o)}})}),n}):h(()=>{let n=s(),r=c(`tr`,n);t(n,r);let a=c(`td`,r);return t(r,a),l(a,`colSpan`,`5`),e(a,`py-8 text-center text-base-content/60`),t(a,i(`当前筛选没有结果`)),n});b(()=>_(n,W,G))});let K=c(`div`,p);t(p,K),e(K,`grid gap-4 md:grid-cols-2`);let q=c(`div`,K);t(K,q),e(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=c(`div`,q);t(q,J),e(J,`text-sm text-base-content/60`),t(J,i(`同步读取到的首条结果`));let Y=c(`div`,q);t(q,Y),e(Y,`mt-2 font-mono text-2xl`);let Z=o(Y);t(Y,Z),r(()=>{u(Z,m.value)});let Q=c(`div`,K);t(K,Q),e(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=c(`div`,Q);t(Q,ee),e(ee,`text-sm text-base-content/60`),t(ee,i(`await nextTick() 后定位到`));let te=c(`div`,Q);t(Q,te),e(te,`mt-2 font-mono text-2xl text-success`);let ne=o(te);t(te,ne),r(()=>{u(ne,v.value)});let $=c(`div`,p);t(p,$),e($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=c(`div`,$);t($,re),e(re,`text-sm font-medium text-base-content/70`),t(re,i(`本轮步骤`));let ie=c(`ul`,$);t($,ie),e(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=a(`rue:list:start`),oe=a(`rue:list:end`);t(ie,ae),t(ie,oe);let se=new Map;return r(()=>{se=C({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(e,n,i,a,d)=>{_(h(()=>{let n=s(),i=c(`li`,n);t(n,i),r(()=>{l(i,`key`,String(`table-filter-log-${d}`))});let a=o(i);return t(i,a),r(()=>{u(a,e)}),n}),n,i)}})}),f})},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ne=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],$=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:te,Demo:ee},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],re=n=>{let{Demo:i}=S(`useSetup:0:0`,()=>y(()=>({Demo:n.scenario.Demo})));return h(d=>{let f=c(`section`,d);e(f,`rounded-box border border-base-300 bg-base-100 p-5`);let p=c(`div`,f);t(f,p),e(p,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let m=a(`rue:slot:anchor`);t(p,m),r(()=>{let e=n.eyebrow;b(()=>_(e,p,m))});let g=c(`div`,f);t(f,g),e(g,`mt-2 text-2xl font-semibold`);let y=a(`rue:slot:anchor`);t(g,y),r(()=>{let e=n.scenario.title;b(()=>_(e,g,y))});let x=c(`p`,f);t(f,x),e(x,`mt-2 text-base-content/70 leading-7`);let S=a(`rue:slot:anchor`);t(x,S),r(()=>{let e=n.scenario.summary;b(()=>_(e,x,S))});let w=c(`div`,f);t(f,w),e(w,`mt-4 flex flex-wrap gap-2`);let E=a(`rue:list:start`),D=a(`rue:list:end`);t(w,E),t(w,D);let O=new Map;r(()=>{O=C({items:n.scenario.businessCases||[],getKey:(e,t)=>e,elements:O,parent:w,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(n,i,a,d,f)=>{_(h(()=>{let i=s(),a=c(`span`,i);t(i,a),r(()=>{l(a,`key`,String(n))}),e(a,`badge badge-outline`);let d=o(a);return t(a,d),r(()=>{u(d,n)}),i}),i,a)}})});let k=c(`div`,f);t(f,k),e(k,`mt-4`);let A=a(`rue:slot:anchor`);return t(k,A),r(()=>{let o=n.activeTab.value===`preview`?h(()=>{let e=s(),n=a(`rue:component:anchor`);return t(e,n),_(v(i,{}),e,n),e}):h(()=>{let i=s(),o=c(`div`,i);t(i,o),e(o,`card bg-base-100 shadow overflow-auto`);let l=c(`div`,o);t(o,l),e(l,`card-body p-0`);let u=a(`rue:component:anchor`);return t(l,u),r(()=>{let e=v(T,{className:`h-full`,lang:`tsx`,code:n.scenario.source});b(()=>_(e,l,u))}),i});b(()=>_(o,k,A))}),f})},ie=()=>{let{activeTab:n}=S(`useSetup:0:0:dup1`,()=>y(()=>({activeTab:S(`ref:1:0`,()=>p(`preview`))})));return h(o=>{let u=s(),f=a(`rue:component:anchor`);return t(u,f),_(v(E,{children:h(()=>{let o=s(),u=c(`h1`,o);t(o,u),e(u,`text-5xl font-semibold mb-4 md:mb-4`),t(u,i(`nextTick 真实业务场景`));let f=c(`p`,o);t(o,f),e(f,`max-w-4xl text-base-content/70 leading-7`),t(f,i(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let p=c(`div`,o);t(o,p),l(p,`role`,`tablist`),e(p,`tabs tabs-box mt-6`);let m=c(`button`,p);t(p,m),l(m,`role`,`tab`),r(()=>{e(m,String(`tab ${n.value===`preview`?`tab-active`:``}`))}),x(m,`click`,()=>{n.value=`preview`}),t(m,i(`效果`));let h=c(`button`,p);t(p,h),l(h,`role`,`tab`),r(()=>{e(h,String(`tab ${n.value===`code`?`tab-active`:``}`))}),x(h,`click`,()=>{n.value=`code`}),t(h,i(`代码`));let g=c(`div`,o);t(o,g),e(g,`mt-4 grid gap-6`);let _=a(`rue:list:start`),y=a(`rue:list:end`);t(g,_),t(g,y);let b=new Map;r(()=>{b=C({items:ne||[],getKey:(e,t)=>e.title,elements:b,parent:g,before:y,start:_,renderItem:(e,t,r,i,a)=>{d(v(re,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:n}),t,r,i)}})});let S=c(`section`,g);t(g,S),e(S,`rounded-box border border-base-300 bg-base-100 p-5`);let w=c(`div`,S);t(S,w),e(w,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(w,i(`新增业务 demo`));let T=c(`div`,S);t(S,T),e(T,`mt-2 text-2xl font-semibold`),t(T,i(`真实业务里 nextTick 怎么用`));let E=c(`p`,S);t(S,E),e(E,`mt-2 text-base-content/70 leading-7`),t(E,i(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let D=a(`rue:list:start`),O=a(`rue:list:end`);t(g,D),t(g,O);let k=new Map;return r(()=>{k=C({items:$||[],getKey:(e,t)=>e.title,elements:k,parent:g,before:O,start:D,renderItem:(e,t,r,i,a)=>{d(v(re,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:n}),t,r,i)}})}),o})}),u,f),u})};export{ie as default};