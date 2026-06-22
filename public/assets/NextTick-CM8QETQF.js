import{Q as e,Vt as t,Xt as n,Z as r,an as i,at as a,bt as o,dt as s,it as c,kt as l,l as u,n as d,nt as f,o as p,on as m,pt as h,rt as g,s as _,t as v,tn as y,tt as b,wt as x,yt as S}from"./vapor-runtime-x7F5M-49.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as T}from"./Code-C5NjdoiC.js";import{r as E}from"./SidebarPlaygroundExample-DpItFif-.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:_,syncHeight:v,flushedHeight:x,logLines:S,listRef:T}=C(`useSetup:0:0`,()=>m(()=>({messages:C(`ref:1:0`,()=>n(O())),syncHeight:C(`ref:1:1`,()=>n(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>n(`尚未追加`)),logLines:C(`ref:1:3`,()=>n([...D])),listRef:C(`useRef:1:4`,()=>i())}))),E=async()=>{let e=_.value.length+1,t=String(19+e).padStart(2,`0`);_.value=[..._.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=T.current?.scrollHeight??0;v.value=`${n}px（旧高度）`,x.value=`等待 flush...`,S.value=[`消息数已变为 ${_.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=n),await l();let r=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=r),x.value=`${r}px（已包含新消息）`,S.value=[`消息数已变为 ${_.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},k=()=>{_.value=O(),v.value=`尚未追加`,x.value=`尚未追加`,S.value=[...D],T.current&&(T.current.scrollTop=0)};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=g(`div`,l);e(l,C),h(C,`rounded-box border border-base-300 bg-base-100`);let D=g(`div`,C);e(C,D),h(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=g(`div`,D);e(D,O),h(O,`text-sm font-medium text-base-content/70`),e(O,c(`订单通知流`));let A=g(`div`,D);e(D,A),h(A,`badge badge-outline`);let j=b(`rue:slot:anchor`);e(A,j),t(()=>{let e=_.value.length;y(()=>p(e,A,j))}),e(A,c(` 条消息`));let M=g(`div`,C);e(C,M);let N=ee(M,()=>T);d(()=>{N()}),h(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=b(`rue:list:start`),F=b(`rue:list:end`);e(M,P),e(M,F);let I=new Map;t(()=>{I=w({items:_.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,r,i,a,o)=>{p(u(()=>{let r=f(),i=g(`div`,r);e(r,i),t(()=>{s(i,`key`,String(n.id))}),h(i,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let a=b(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.text;y(()=>p(e,i,a))}),r}),r,i)}})});let L=g(`div`,l);e(l,L),h(L,`flex flex-wrap gap-3`);let R=g(`button`,L);e(L,R),h(R,`btn btn-primary`),r(R,`click`,()=>void E()),e(R,c(`追加通知并滚动到底部`));let z=g(`button`,L);e(L,z),h(z,`btn btn-ghost`),r(z,`click`,k),e(z,c(`重置`));let B=g(`div`,l);e(l,B),h(B,`grid gap-4 md:grid-cols-2`);let V=g(`div`,B);e(B,V),h(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=g(`div`,V);e(V,H),h(H,`text-sm text-base-content/60`),e(H,c(`同步读取到的 scrollHeight`));let U=g(`div`,V);e(V,U),h(U,`mt-2 font-mono text-2xl`);let W=a(U);e(U,W),t(()=>{o(W,v.value)});let G=g(`div`,B);e(B,G),h(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=g(`div`,G);e(G,K),h(K,`text-sm text-base-content/60`),e(K,c(`await nextTick() 后的高度`));let q=g(`div`,G);e(G,q),h(q,`mt-2 font-mono text-2xl text-success`);let J=a(q);e(q,J),t(()=>{o(J,x.value)});let Y=g(`div`,l);e(l,Y),h(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=g(`div`,Y);e(Y,X),h(X,`text-sm font-medium text-base-content/70`),e(X,c(`本轮步骤`));let Z=g(`ul`,Y);e(Y,Z),h(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let te=b(`rue:list:start`),ne=b(`rue:list:end`);e(Z,te),e(Z,ne);let Q=new Map;return t(()=>{Q=w({items:S.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:Q,parent:Z,before:ne,singleRoot:!0,start:te,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`chat-scroll-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:_,beforeDomText:v,afterDomText:y,logLines:x,counterRef:S}=C(`useSetup:0:0`,()=>m(()=>({count:C(`ref:1:0`,()=>n(0)),beforeDomText:C(`ref:1:1`,()=>n(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>n(`尚未读取`)),logLines:C(`ref:1:3`,()=>n([...j])),counterRef:C(`useRef:1:4`,()=>i())}))),T=async()=>{_.value+=1;let e=S.current?.textContent??`(missing)`;v.value=e,y.value=`等待 flush...`,x.value=[`状态值已经改为 ${_.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await l();let t=S.current?.textContent??`(missing)`;y.value=t,x.value=[`状态值已经改为 ${_.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},E=()=>{_.value=0,v.value=`尚未读取`,y.value=`尚未读取`,x.value=[...j]};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=g(`div`,l);e(l,C),h(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=g(`div`,C);e(C,D),h(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(D,c(`当前 DOM 文本`));let O=g(`div`,C);e(C,O),h(O,`mt-3 text-4xl font-semibold text-primary`);let k=g(`span`,O);e(O,k);let A=ee(k,()=>S);d(()=>{A()});let j=a(k);e(k,j),t(()=>{o(j,_.value)});let M=g(`div`,l);e(l,M),h(M,`flex flex-wrap gap-3`);let N=g(`button`,M);e(M,N),h(N,`btn btn-primary`),r(N,`click`,()=>void T()),e(N,c(`自增并读取 DOM`));let P=g(`button`,M);e(M,P),h(P,`btn btn-ghost`),r(P,`click`,E),e(P,c(`重置`));let F=g(`div`,l);e(l,F),h(F,`grid gap-4 md:grid-cols-2`);let I=g(`div`,F);e(F,I),h(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=g(`div`,I);e(I,L),h(L,`text-sm text-base-content/60`),e(L,c(`同步读取到的 DOM 文本`));let R=g(`div`,I);e(I,R),h(R,`mt-2 font-mono text-2xl`);let z=a(R);e(R,z),t(()=>{o(z,v.value)});let B=g(`div`,F);e(F,B),h(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=g(`div`,B);e(B,V),h(V,`text-sm text-base-content/60`),e(V,c(`await nextTick() 后读取`));let H=g(`div`,B);e(B,H),h(H,`mt-2 font-mono text-2xl text-success`);let U=a(H);e(H,U),t(()=>{o(U,y.value)});let W=g(`div`,l);e(l,W),h(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=g(`div`,W);e(W,G),h(G,`text-sm font-medium text-base-content/70`),e(G,c(`本轮步骤`));let K=g(`ul`,W);e(W,K),h(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=b(`rue:list:start`),J=b(`rue:list:end`);e(K,q),e(K,J);let Y=new Map;return t(()=>{Y=w({items:x.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`dom-read-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:_,keyword:v,syncState:x,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>m(()=>({panelOpen:C(`ref:1:0`,()=>n(!1)),keyword:C(`ref:1:1`,()=>n(``)),syncState:C(`ref:1:2`,()=>n(`尚未打开`)),postTickState:C(`ref:1:3`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>n([...P])),inputRef:C(`useRef:1:5`,()=>i())}))),O=async()=>{_.value=!0,x.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,x.value,`等待 nextTick() 后执行 focus()`],await l(),D.current?.focus(),T.value=globalThis.document?.activeElement===D.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,x.value,T.value]},k=()=>{_.value=!1,v.value=``,x.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=g(`div`,l);e(l,C),h(C,`flex flex-wrap gap-3`);let A=g(`button`,C);e(C,A),h(A,`btn btn-primary`),r(A,`click`,()=>void O()),e(A,c(`打开高级筛选`));let j=g(`button`,C);e(C,j),h(j,`btn btn-ghost`),r(j,`click`,k),e(j,c(`关闭并重置`));let M=b(`rue:slot:anchor`);e(l,M),t(()=>{let n=_.value?u(()=>{let n=f(),i=g(`div`,n);e(n,i),h(i,`rounded-box border border-base-300 bg-base-100 p-5`);let a=g(`div`,i);e(i,a),h(a,`grid gap-4 md:grid-cols-2`);let o=g(`label`,a);e(a,o),h(o,`block`);let l=g(`div`,o);e(o,l),h(l,`text-sm text-base-content/60`),e(l,c(`关键词`));let u=g(`input`,o);e(o,u);let p=ee(u,()=>D);d(()=>{p()}),h(u,`input input-bordered mt-2 w-full`),t(()=>{S(u,v.value)}),s(u,`placeholder`,`订单号 / 用户名 / 手机号`),r(u,`input`,e=>{v.value=e.target.value});let m=g(`label`,a);e(a,m),h(m,`block`);let _=g(`div`,m);e(m,_),h(_,`text-sm text-base-content/60`),e(_,c(`订单状态`));let y=g(`select`,m);e(m,y),h(y,`select select-bordered mt-2 w-full`);let b=g(`option`,y);e(y,b),e(b,c(`全部`));let x=g(`option`,y);e(y,x),e(x,c(`待支付`));let C=g(`option`,y);e(y,C),e(C,c(`待发货`));let w=g(`option`,y);return e(y,w),e(w,c(`已完成`)),n}):``;y(()=>p(n,l,M))});let N=g(`div`,l);e(l,N),h(N,`grid gap-4 md:grid-cols-2`);let P=g(`div`,N);e(N,P),h(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=g(`div`,P);e(P,F),h(F,`text-sm text-base-content/60`),e(F,c(`同步阶段状态`));let I=g(`div`,P);e(P,I),h(I,`mt-2 font-mono text-xl`);let L=a(I);e(I,L),t(()=>{o(L,x.value)});let R=g(`div`,N);e(N,R),h(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=g(`div`,R);e(R,z),h(z,`text-sm text-base-content/60`),e(z,c(`await nextTick() 后状态`));let B=g(`div`,R);e(R,B),h(B,`mt-2 font-mono text-xl text-success`);let V=a(B);e(B,V),t(()=>{o(V,T.value)});let H=g(`div`,l);e(l,H),h(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=g(`div`,H);e(H,U),h(U,`text-sm font-medium text-base-content/70`),e(U,c(`本轮步骤`));let W=g(`ul`,H);e(H,W),h(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=b(`rue:list:start`),K=b(`rue:list:end`);e(W,G),e(W,K);let q=new Map;return t(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`filter-focus-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:_,phone:v,email:x,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>m(()=>{let e=C(`ref:1:0`,()=>n(``)),t=C(`ref:1:1`,()=>n(``)),r=C(`ref:1:2`,()=>n(``));return{receiver:e,phone:t,email:r,errors:C(`ref:1:3`,()=>n(z())),syncField:C(`ref:1:4`,()=>n(`尚未提交`)),postTickField:C(`ref:1:5`,()=>n(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>n([...L])),formRef:C(`useRef:1:7`,()=>i()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),t=Object.values(e).filter(Boolean).length;T.value=e;let n=k.current?.querySelector(`[data-invalid="true"]`);E.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await l();let r=k.current?.querySelector(`[data-invalid="true"]`);r?.focus(),D.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{_.value=`李四`,v.value=`13800001111`,x.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{_.value=``,v.value=``,x.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=g(`div`,l);e(l,C);let A=ee(C,()=>k);d(()=>{A()}),h(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=g(`label`,C);e(C,P),h(P,`block`);let F=g(`div`,P);e(P,F),h(F,`text-sm text-base-content/60`),e(F,c(`联系人`));let I=g(`input`,P);e(P,I),s(I,`name`,`receiver`),t(()=>{s(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),t(()=>{h(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),t(()=>{S(I,_.value)}),s(I,`placeholder`,`请输入联系人`),r(I,`input`,e=>{_.value=e.target.value});let L=b(`rue:slot:anchor`);e(P,L),t(()=>{let n=T.value.receiver?u(()=>{let n=f(),r=g(`div`,n);e(n,r),h(r,`mt-2 text-sm text-error`);let i=b(`rue:slot:anchor`);return e(r,i),t(()=>{let e=T.value.receiver;y(()=>p(e,r,i))}),n}):``;y(()=>p(n,P,L))});let R=g(`label`,C);e(C,R),h(R,`block`);let z=g(`div`,R);e(R,z),h(z,`text-sm text-base-content/60`),e(z,c(`手机号`));let B=g(`input`,R);e(R,B),s(B,`name`,`phone`),t(()=>{s(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),t(()=>{h(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),t(()=>{S(B,v.value)}),s(B,`placeholder`,`请输入 11 位手机号`),r(B,`input`,e=>{v.value=e.target.value});let V=b(`rue:slot:anchor`);e(R,V),t(()=>{let n=T.value.phone?u(()=>{let n=f(),r=g(`div`,n);e(n,r),h(r,`mt-2 text-sm text-error`);let i=b(`rue:slot:anchor`);return e(r,i),t(()=>{let e=T.value.phone;y(()=>p(e,r,i))}),n}):``;y(()=>p(n,R,V))});let H=g(`label`,C);e(C,H),h(H,`block`);let U=g(`div`,H);e(H,U),h(U,`text-sm text-base-content/60`),e(U,c(`邮箱`));let W=g(`input`,H);e(H,W),s(W,`name`,`email`),t(()=>{s(W,`data-invalid`,String(T.value.email?`true`:`false`))}),t(()=>{h(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),t(()=>{S(W,x.value)}),s(W,`placeholder`,`请输入邮箱`),r(W,`input`,e=>{x.value=e.target.value});let G=b(`rue:slot:anchor`);e(H,G),t(()=>{let n=T.value.email?u(()=>{let n=f(),r=g(`div`,n);e(n,r),h(r,`mt-2 text-sm text-error`);let i=b(`rue:slot:anchor`);return e(r,i),t(()=>{let e=T.value.email;y(()=>p(e,r,i))}),n}):``;y(()=>p(n,H,G))});let K=g(`div`,l);e(l,K),h(K,`flex flex-wrap gap-3`);let q=g(`button`,K);e(K,q),h(q,`btn btn-primary`),r(q,`click`,()=>void j()),e(q,c(`提交并定位错误字段`));let J=g(`button`,K);e(K,J),h(J,`btn btn-outline`),r(J,`click`,M),e(J,c(`填入合法示例`));let Y=g(`button`,K);e(K,Y),h(Y,`btn btn-ghost`),r(Y,`click`,N),e(Y,c(`重置`));let X=g(`div`,l);e(l,X),h(X,`grid gap-4 md:grid-cols-2`);let Z=g(`div`,X);e(X,Z),h(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=g(`div`,Z);e(Z,te),h(te,`text-sm text-base-content/60`),e(te,c(`同步阶段识别到的字段`));let ne=g(`div`,Z);e(Z,ne),h(ne,`mt-2 font-mono text-xl`);let Q=a(ne);e(ne,Q),t(()=>{o(Q,E.value)});let $=g(`div`,X);e(X,$),h($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=g(`div`,$);e($,re),h(re,`text-sm text-base-content/60`),e(re,c(`await nextTick() 后结果`));let ie=g(`div`,$);e($,ie),h(ie,`mt-2 font-mono text-xl text-success`);let ae=a(ie);e(ie,ae),t(()=>{o(ae,D.value)});let oe=g(`div`,l);e(l,oe),h(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=g(`div`,oe);e(oe,se),h(se,`text-sm font-medium text-base-content/70`),e(se,c(`本轮步骤`));let ce=g(`ul`,oe);e(oe,ce),h(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=b(`rue:list:start`),ue=b(`rue:list:end`);e(ce,le),e(ce,ue);let de=new Map;return t(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`focus-error-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:_,syncHeight:v,postTickHeight:x,layoutDecision:S,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>m(()=>({modalOpen:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>n(`等待测量`)),logLines:C(`ref:1:4`,()=>n([...H])),listRef:C(`useRef:1:5`,()=>i())}))),D=async()=>{_.value=!0;let e=E.current?.scrollHeight??0;v.value=`${e}px`,x.value=`等待 flush...`,S.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await l();let t=E.current?.scrollHeight??0;x.value=`${t}px`,S.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${S.value}`]},O=()=>{_.value=!1,v.value=`尚未打开`,x.value=`尚未测量`,S.value=`等待测量`,T.value=[...H]};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=g(`div`,l);e(l,C),h(C,`flex flex-wrap gap-3`);let k=g(`button`,C);e(C,k),h(k,`btn btn-primary`),r(k,`click`,()=>void D()),e(k,c(`打开批量发送弹窗`));let A=g(`button`,C);e(C,A),h(A,`btn btn-ghost`),r(A,`click`,O),e(A,c(`关闭并重置`));let j=b(`rue:slot:anchor`);e(l,j),t(()=>{let n=_.value?u(()=>{let n=f(),r=g(`div`,n);e(n,r),h(r,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let i=g(`div`,r);e(r,i),h(i,`flex items-start justify-between gap-4`);let a=g(`div`,i);e(i,a);let o=g(`div`,a);e(a,o),h(o,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(o,c(`批量发送预览`));let l=g(`div`,a);e(a,l),h(l,`mt-2 text-2xl font-semibold`),e(l,c(`确认接收人列表`));let m=g(`div`,i);e(i,m),h(m,`badge badge-outline`);let _=b(`rue:slot:anchor`);e(m,_),t(()=>{let e=U.length;y(()=>p(e,m,_))}),e(m,c(` 人`));let v=g(`div`,r);e(r,v);let x=ee(v,()=>E);d(()=>{x()}),h(v,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=b(`rue:list:start`),C=b(`rue:list:end`);e(v,S),e(v,C);let T=new Map;return t(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,i,a,o)=>{p(u(()=>{let r=f(),i=g(`div`,r);e(r,i),t(()=>{s(i,`key`,String(n.id))}),h(i,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let a=g(`div`,i);e(i,a),h(a,`font-medium`);let o=b(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.name;y(()=>p(e,a,o))});let l=g(`div`,i);e(i,l),h(l,`text-base-content/60`);let u=b(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.team;y(()=>p(e,l,u))}),e(l,c(` · `));let d=b(`rue:slot:anchor`);return e(l,d),t(()=>{let e=n.region;y(()=>p(e,l,d))}),r}),r,i)}})}),n}):``;y(()=>p(n,l,j))});let M=g(`div`,l);e(l,M),h(M,`grid gap-4 md:grid-cols-3`);let N=g(`div`,M);e(M,N),h(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=g(`div`,N);e(N,P),h(P,`text-sm text-base-content/60`),e(P,c(`同步读取到的高度`));let F=g(`div`,N);e(N,F),h(F,`mt-2 font-mono text-xl`);let I=a(F);e(F,I),t(()=>{o(I,v.value)});let L=g(`div`,M);e(M,L),h(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=g(`div`,L);e(L,R),h(R,`text-sm text-base-content/60`),e(R,c(`await nextTick() 后高度`));let z=g(`div`,L);e(L,z),h(z,`mt-2 font-mono text-xl text-success`);let B=a(z);e(z,B),t(()=>{o(B,x.value)});let V=g(`div`,M);e(M,V),h(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=g(`div`,V);e(V,H),h(H,`text-sm text-base-content/60`),e(H,c(`布局决策`));let W=g(`div`,V);e(V,W),h(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=a(W);e(W,G),t(()=>{o(G,S.value)});let K=g(`div`,l);e(l,K),h(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=g(`div`,K);e(K,q),h(q,`text-sm font-medium text-base-content/70`),e(q,c(`本轮步骤`));let J=g(`ul`,K);e(K,J),h(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=b(`rue:list:start`),X=b(`rue:list:end`);e(J,Y),e(J,X);let Z=new Map;return t(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`modal-measure-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:_,syncHeight:v,postTickHeight:x,logLines:S,panelRef:T}=C(`useSetup:0:0`,()=>m(()=>({expanded:C(`ref:1:0`,()=>n(!1)),syncHeight:C(`ref:1:1`,()=>n(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>n(`尚未测量`)),logLines:C(`ref:1:3`,()=>n([...K])),panelRef:C(`useRef:1:4`,()=>i())}))),E=async()=>{_.value=!_.value;let e=_.value?`展开`:`收起`,t=T.current?.offsetHeight??0;v.value=`${t}px`,x.value=`等待 flush...`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await l();let n=T.current?.offsetHeight??0;x.value=`${n}px`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},D=()=>{_.value=!1,v.value=`尚未测量`,x.value=`尚未测量`,S.value=[...K]};return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=g(`div`,l);e(l,C);let O=ee(C,()=>T);d(()=>{O()}),h(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=g(`div`,C);e(C,k),h(k,`flex items-center justify-between`);let A=g(`div`,k);e(k,A);let j=g(`div`,A);e(A,j),h(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(j,c(`订单详情卡片`));let M=g(`div`,A);e(A,M),h(M,`mt-2 text-2xl font-semibold`),e(M,c(`订单 #A1024`));let N=g(`div`,k);e(k,N),t(()=>{h(N,`badge ${_.value?`badge-primary`:`badge-outline`}`)});let P=a(N);e(N,P),t(()=>{o(P,_.value?`已展开`:`已收起`)});let F=g(`div`,C);e(C,F),h(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=g(`div`,F);e(F,I),h(I,`rounded-box bg-base-200/60 p-3 text-sm`),e(I,c(`支付状态：已支付`));let L=g(`div`,F);e(F,L),h(L,`rounded-box bg-base-200/60 p-3 text-sm`),e(L,c(`配送方式：同城急送`));let R=g(`div`,F);e(F,R),h(R,`rounded-box bg-base-200/60 p-3 text-sm`),e(R,c(`仓库：上海 3 号仓`));let z=g(`div`,F);e(F,z),h(z,`rounded-box bg-base-200/60 p-3 text-sm`),e(z,c(`下单时间：09:20`));let B=b(`rue:slot:anchor`);e(F,B),t(()=>{let t=_.value?u(()=>{let t=f();e(t,c(` `));let n=g(`div`,t);e(t,n),h(n,`rounded-box bg-base-200/60 p-3 text-sm`),e(n,c(`发票状态：电子发票已开具`)),e(t,c(` `));let r=g(`div`,t);e(t,r),h(r,`rounded-box bg-base-200/60 p-3 text-sm`),e(r,c(`风控结果：人工审核已通过`)),e(t,c(` `));let i=g(`div`,t);e(t,i),h(i,`rounded-box bg-base-200/60 p-3 text-sm`),e(i,c(`配送备注：优先联系收货人本人`)),e(t,c(` `));let a=g(`div`,t);return e(t,a),h(a,`rounded-box bg-base-200/60 p-3 text-sm`),e(a,c(`售后状态：暂无售后单`)),e(t,c(` `)),t}):``;y(()=>p(t,F,B))});let V=g(`div`,l);e(l,V),h(V,`flex flex-wrap gap-3`);let H=g(`button`,V);e(V,H),h(H,`btn btn-primary`),r(H,`click`,()=>void E());let U=a(H);e(H,U),t(()=>{o(U,_.value?`收起详情区并测量`:`展开详情区并测量`)});let W=g(`button`,V);e(V,W),h(W,`btn btn-ghost`),r(W,`click`,D),e(W,c(`重置`));let G=g(`div`,l);e(l,G),h(G,`grid gap-4 md:grid-cols-2`);let K=g(`div`,G);e(G,K),h(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=g(`div`,K);e(K,q),h(q,`text-sm text-base-content/60`),e(q,c(`同步读取到的高度`));let J=g(`div`,K);e(K,J),h(J,`mt-2 font-mono text-2xl`);let Y=a(J);e(J,Y),t(()=>{o(Y,v.value)});let X=g(`div`,G);e(G,X),h(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=g(`div`,X);e(X,Z),h(Z,`text-sm text-base-content/60`),e(Z,c(`await nextTick() 后高度`));let te=g(`div`,X);e(X,te),h(te,`mt-2 font-mono text-2xl text-success`);let ne=a(te);e(te,ne),t(()=>{o(ne,x.value)});let Q=g(`div`,l);e(l,Q),h(Q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=g(`div`,Q);e(Q,$),h($,`text-sm font-medium text-base-content/70`),e($,c(`本轮步骤`));let re=g(`ul`,Q);e(Q,re),h(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=b(`rue:list:start`),ae=b(`rue:list:end`);e(re,ie),e(re,ae);let oe=new Map;return t(()=>{oe=w({items:S.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`panel-measure-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],te=e=>e===`all`?Z:Z.filter(t=>t.status===e),ne=()=>{let{activeStatus:_,syncTarget:v,postTickTarget:S,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>m(()=>({activeStatus:C(`ref:1:0`,()=>n(`all`)),syncTarget:C(`ref:1:1`,()=>n(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>n(`尚未定位`)),logLines:C(`ref:1:3`,()=>n([...Y])),viewportRef:C(`useRef:1:4`,()=>i())}))),D=async e=>{_.value=e,v.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,S.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await l();let t=E.current?.querySelector(`[data-first-visible="true"]`);t?.scrollIntoView({block:`nearest`}),S.value=t?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${v.value}`,`nextTick() 后首条结果：${S.value}，并已滚动到可视区域`]},O=()=>{_.value=`all`,v.value=`尚未筛选`,S.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>x(()=>te(_.value)));return u(n=>{let i=g(`div`,n);h(i,`card bg-base-100 shadow`);let l=g(`div`,i);e(i,l),h(l,`card-body gap-5`);let m=g(`p`,l);e(l,m),h(m,`text-base-content/70 leading-7`),e(m,c(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let x=g(`div`,l);e(l,x),h(x,`flex flex-wrap gap-2`);let C=b(`rue:list:start`),A=b(`rue:list:end`);e(x,C),e(x,A);let j=new Map;t(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:x,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,o,c)=>{p(u(()=>{let i=f(),a=g(`button`,i);e(i,a),t(()=>{s(a,`key`,String(n))}),t(()=>{h(a,`btn btn-sm ${_.value===n?`btn-primary`:`btn-ghost`}`)}),r(a,`click`,()=>void D(n));let o=b(`rue:slot:anchor`);return e(a,o),t(()=>{let e=X[n];y(()=>p(e,a,o))}),i}),i,a)}})});let M=g(`button`,x);e(x,M),h(M,`btn btn-sm btn-outline`),r(M,`click`,O),e(M,c(`重置`));let N=g(`div`,l);e(l,N);let P=ee(N,()=>E);d(()=>{P()}),h(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=g(`table`,N);e(N,F),h(F,`table table-pin-rows table-sm`);let I=g(`thead`,F);e(F,I);let L=g(`tr`,I);e(I,L);let R=g(`th`,L);e(L,R),e(R,c(`订单号`));let z=g(`th`,L);e(L,z),e(z,c(`客户`));let B=g(`th`,L);e(L,B),e(B,c(`状态`));let V=g(`th`,L);e(L,V),e(V,c(`金额`));let H=g(`th`,L);e(L,H),e(H,c(`备注`));let U=g(`tbody`,F);e(F,U);let W=b(`rue:slot:anchor`);e(U,W),t(()=>{let n=k.get().length>0?u(()=>{let n=f(),r=b(`rue:list:start`),i=b(`rue:list:end`);e(n,r),e(n,i);let a=new Map;return t(()=>{a=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:a,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(n,r,i,a,o)=>{p(u(()=>{let r=f(),i=g(`tr`,r);e(r,i),t(()=>{s(i,`key`,String(n.id))}),t(()=>{s(i,`data-first-visible`,String(o===0?`true`:`false`))}),t(()=>{s(i,`data-order-no`,String(n.orderNo))});let a=g(`td`,i);e(i,a),h(a,`font-medium`);let c=b(`rue:slot:anchor`);e(a,c),t(()=>{let e=n.orderNo;y(()=>p(e,a,c))});let l=g(`td`,i);e(i,l);let u=b(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.customer;y(()=>p(e,l,u))});let d=g(`td`,i);e(i,d);let m=g(`span`,d);e(d,m),h(m,`badge badge-outline`);let _=b(`rue:slot:anchor`);e(m,_),t(()=>{let e=X[n.status];y(()=>p(e,m,_))});let v=g(`td`,i);e(i,v);let x=b(`rue:slot:anchor`);e(v,x),t(()=>{let e=n.amount;y(()=>p(e,v,x))});let S=g(`td`,i);e(i,S),h(S,`text-base-content/60`);let C=b(`rue:slot:anchor`);return e(S,C),t(()=>{let e=n.note;y(()=>p(e,S,C))}),r}),r,i)}})}),n}):u(()=>{let t=f(),n=g(`tr`,t);e(t,n);let r=g(`td`,n);return e(n,r),s(r,`colSpan`,`5`),h(r,`py-8 text-center text-base-content/60`),e(r,c(`当前筛选没有结果`)),t});y(()=>p(n,U,W))});let G=g(`div`,l);e(l,G),h(G,`grid gap-4 md:grid-cols-2`);let K=g(`div`,G);e(G,K),h(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=g(`div`,K);e(K,q),h(q,`text-sm text-base-content/60`),e(q,c(`同步读取到的首条结果`));let J=g(`div`,K);e(K,J),h(J,`mt-2 font-mono text-2xl`);let Y=a(J);e(J,Y),t(()=>{o(Y,v.value)});let Z=g(`div`,G);e(G,Z),h(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=g(`div`,Z);e(Z,te),h(te,`text-sm text-base-content/60`),e(te,c(`await nextTick() 后定位到`));let ne=g(`div`,Z);e(Z,ne),h(ne,`mt-2 font-mono text-2xl text-success`);let Q=a(ne);e(ne,Q),t(()=>{o(Q,S.value)});let $=g(`div`,l);e(l,$),h($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=g(`div`,$);e($,re),h(re,`text-sm font-medium text-base-content/70`),e(re,c(`本轮步骤`));let ie=g(`ul`,$);e($,ie),h(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=b(`rue:list:start`),oe=b(`rue:list:end`);e(ie,ae),e(ie,oe);let se=new Map;return t(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`li`,r);e(r,i),t(()=>{s(i,`key`,String(`table-filter-log-${l}`))});let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})}),i})},Q=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Q,Demo:ne},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=n=>{let{Demo:r}=C(`useSetup:0:0`,()=>m(()=>({Demo:n.scenario.Demo})));return u(i=>{let c=g(`section`,i);h(c,`rounded-box border border-base-300 bg-base-100 p-5`);let l=g(`div`,c);e(c,l),h(l,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let d=b(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.eyebrow;y(()=>p(e,l,d))});let m=g(`div`,c);e(c,m),h(m,`mt-2 text-2xl font-semibold`);let _=b(`rue:slot:anchor`);e(m,_),t(()=>{let e=n.scenario.title;y(()=>p(e,m,_))});let x=g(`p`,c);e(c,x),h(x,`mt-2 text-base-content/70 leading-7`);let S=b(`rue:slot:anchor`);e(x,S),t(()=>{let e=n.scenario.summary;y(()=>p(e,x,S))});let C=g(`div`,c);e(c,C),h(C,`mt-4 flex flex-wrap gap-2`);let ee=b(`rue:list:start`),E=b(`rue:list:end`);e(C,ee),e(C,E);let D=new Map;t(()=>{D=w({items:n.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(n,r,i,c,l)=>{p(u(()=>{let r=f(),i=g(`span`,r);e(r,i),t(()=>{s(i,`key`,String(n))}),h(i,`badge badge-outline`);let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})});let O=g(`div`,c);e(c,O),h(O,`mt-4`);let k=b(`rue:slot:anchor`);return e(O,k),t(()=>{let i=n.activeTab.value===`preview`?u(()=>{let t=f(),n=b(`rue:component:anchor`);return e(t,n),p(v(r,{}),t,n),t}):u(()=>{let r=f(),i=g(`div`,r);e(r,i),h(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);e(i,a),h(a,`card-body p-0`);let o=b(`rue:component:anchor`);return e(a,o),t(()=>{let e=v(T,{className:`h-full`,lang:`tsx`,code:n.scenario.source});y(()=>p(e,a,o))}),r});y(()=>p(i,O,k))}),c})},ae=()=>{let{activeTab:i}=C(`useSetup:0:0:dup1`,()=>m(()=>({activeTab:C(`ref:1:0`,()=>n(`preview`))})));return u(n=>{let a=f(),o=b(`rue:component:anchor`);return e(a,o),p(v(E,{children:u(()=>{let n=f(),a=g(`h1`,n);e(n,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),e(a,c(`nextTick 真实业务场景`));let o=g(`p`,n);e(n,o),h(o,`max-w-4xl text-base-content/70 leading-7`),e(o,c(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let l=g(`div`,n);e(n,l),s(l,`role`,`tablist`),h(l,`tabs tabs-box mt-6`);let u=g(`button`,l);e(l,u),s(u,`role`,`tab`),t(()=>{h(u,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(u,`click`,()=>{i.value=`preview`}),e(u,c(`效果`));let d=g(`button`,l);e(l,d),s(d,`role`,`tab`),t(()=>{h(d,`tab ${i.value===`code`?`tab-active`:``}`)}),r(d,`click`,()=>{i.value=`code`}),e(d,c(`代码`));let p=g(`div`,n);e(n,p),h(p,`mt-4 grid gap-6`);let m=b(`rue:list:start`),y=b(`rue:list:end`);e(p,m),e(p,y);let x=new Map;t(()=>{x=w({items:$||[],getKey:(e,t)=>e.title,elements:x,parent:p,before:y,start:m,renderItem:(e,t,n,r,a)=>{_(v(ie,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:i}),t,n,r)}})});let S=g(`section`,p);e(p,S),h(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=g(`div`,S);e(S,C),h(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(C,c(`新增业务 demo`));let ee=g(`div`,S);e(S,ee),h(ee,`mt-2 text-2xl font-semibold`),e(ee,c(`真实业务里 nextTick 怎么用`));let T=g(`p`,S);e(S,T),h(T,`mt-2 text-base-content/70 leading-7`),e(T,c(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=b(`rue:list:start`),D=b(`rue:list:end`);e(p,E),e(p,D);let O=new Map;return t(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:p,before:D,start:E,renderItem:(e,t,n,r,a)=>{_(v(ie,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:i}),t,n,r)}})}),n})}),a,o),a})};export{ae as default};