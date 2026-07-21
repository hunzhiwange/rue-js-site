import{Cn as e,Ct as t,Ht as n,Lt as r,Mt as i,Sn as a,Tt as o,dt as s,ft as c,ht as l,jt as u,mt as d,ot as f,pn as p,pt as m,st as h,tn as g,vn as _}from"./context-8lXZvIn-.js";import{l as v,n as y,o as b,s as x,t as S}from"./vapor-runtime-ygJWVcNn.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as T}from"./Code-DhoWkRkB.js";import{r as E}from"./SidebarPlaygroundExample-B78jsvoF.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:r,syncHeight:u,flushedHeight:x,logLines:S,listRef:T}=C(`useSetup:0:0`,()=>e(()=>({messages:C(`ref:1:0`,()=>p(O())),syncHeight:C(`ref:1:1`,()=>p(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>p(`尚未追加`)),logLines:C(`ref:1:3`,()=>p([...D])),listRef:C(`useRef:1:4`,()=>a())}))),E=async()=>{let e=r.value.length+1,t=String(19+e).padStart(2,`0`);r.value=[...r.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let i=T.current?.scrollHeight??0;u.value=`${i}px（旧高度）`,x.value=`等待 flush...`,S.value=[`消息数已变为 ${r.value.length}`,`同步读取 scrollHeight：${i}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=i),await n();let a=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=a),x.value=`${a}px（已包含新消息）`,S.value=[`消息数已变为 ${r.value.length}`,`同步读取 scrollHeight：${i}px`,`nextTick() 后 scrollHeight：${a}px，并已滚动到底部`]},k=()=>{r.value=O(),u.value=`尚未追加`,x.value=`尚未追加`,S.value=[...D],T.current&&(T.current.scrollTop=0)};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=m(`div`,a);h(a,C),o(C,`rounded-box border border-base-300 bg-base-100`);let D=m(`div`,C);h(C,D),o(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=m(`div`,D);h(D,O),o(O,`text-sm font-medium text-base-content/70`),h(O,d(`订单通知流`));let A=m(`div`,D);h(D,A),o(A,`badge badge-outline`);let j=s(`rue:slot:anchor`);h(A,j),g(()=>{let e=r.value.length;_(()=>b(e,A,j))}),h(A,d(` 条消息`));let M=m(`div`,C);h(C,M);let N=ee(M,()=>T);y(()=>{N()}),o(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=s(`rue:list:start`),F=s(`rue:list:end`);h(M,P),h(M,F);let I=new Map;g(()=>{I=w({items:r.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,n,r,i,a)=>{b(v(()=>{let n=c(),r=m(`div`,n);h(n,r),g(()=>{t(r,`key`,String(e.id))}),o(r,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let i=s(`rue:slot:anchor`);return h(r,i),g(()=>{let t=e.text;_(()=>b(t,r,i))}),n}),n,r)}})});let L=m(`div`,a);h(a,L),o(L,`flex flex-wrap gap-3`);let R=m(`button`,L);h(L,R),o(R,`btn btn-primary`),f(R,`click`,()=>void E()),h(R,d(`追加通知并滚动到底部`));let z=m(`button`,L);h(L,z),o(z,`btn btn-ghost`),f(z,`click`,k),h(z,d(`重置`));let B=m(`div`,a);h(a,B),o(B,`grid gap-4 md:grid-cols-2`);let V=m(`div`,B);h(B,V),o(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=m(`div`,V);h(V,H),o(H,`text-sm text-base-content/60`),h(H,d(`同步读取到的 scrollHeight`));let U=m(`div`,V);h(V,U),o(U,`mt-2 font-mono text-2xl`);let W=l(U);h(U,W),g(()=>{i(W,u.value)});let G=m(`div`,B);h(B,G),o(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=m(`div`,G);h(G,K),o(K,`text-sm text-base-content/60`),h(K,d(`await nextTick() 后的高度`));let q=m(`div`,G);h(G,q),o(q,`mt-2 font-mono text-2xl text-success`);let J=l(q);h(q,J),g(()=>{i(J,x.value)});let Y=m(`div`,a);h(a,Y),o(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=m(`div`,Y);h(Y,X),o(X,`text-sm font-medium text-base-content/70`),h(X,d(`本轮步骤`));let Z=m(`ul`,Y);h(Y,Z),o(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let te=s(`rue:list:start`),ne=s(`rue:list:end`);h(Z,te),h(Z,ne);let Q=new Map;return g(()=>{Q=w({items:S.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:Q,parent:Z,before:ne,singleRoot:!0,start:te,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`chat-scroll-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:r,beforeDomText:u,afterDomText:_,logLines:x,counterRef:S}=C(`useSetup:0:0`,()=>e(()=>({count:C(`ref:1:0`,()=>p(0)),beforeDomText:C(`ref:1:1`,()=>p(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>p(`尚未读取`)),logLines:C(`ref:1:3`,()=>p([...j])),counterRef:C(`useRef:1:4`,()=>a())}))),T=async()=>{r.value+=1;let e=S.current?.textContent??`(missing)`;u.value=e,_.value=`等待 flush...`,x.value=[`状态值已经改为 ${r.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await n();let t=S.current?.textContent??`(missing)`;_.value=t,x.value=[`状态值已经改为 ${r.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},E=()=>{r.value=0,u.value=`尚未读取`,_.value=`尚未读取`,x.value=[...j]};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=m(`div`,a);h(a,C),o(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=m(`div`,C);h(C,D),o(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),h(D,d(`当前 DOM 文本`));let O=m(`div`,C);h(C,O),o(O,`mt-3 text-4xl font-semibold text-primary`);let k=m(`span`,O);h(O,k);let A=ee(k,()=>S);y(()=>{A()});let j=l(k);h(k,j),g(()=>{i(j,r.value)});let M=m(`div`,a);h(a,M),o(M,`flex flex-wrap gap-3`);let N=m(`button`,M);h(M,N),o(N,`btn btn-primary`),f(N,`click`,()=>void T()),h(N,d(`自增并读取 DOM`));let P=m(`button`,M);h(M,P),o(P,`btn btn-ghost`),f(P,`click`,E),h(P,d(`重置`));let F=m(`div`,a);h(a,F),o(F,`grid gap-4 md:grid-cols-2`);let I=m(`div`,F);h(F,I),o(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=m(`div`,I);h(I,L),o(L,`text-sm text-base-content/60`),h(L,d(`同步读取到的 DOM 文本`));let R=m(`div`,I);h(I,R),o(R,`mt-2 font-mono text-2xl`);let z=l(R);h(R,z),g(()=>{i(z,u.value)});let B=m(`div`,F);h(F,B),o(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=m(`div`,B);h(B,V),o(V,`text-sm text-base-content/60`),h(V,d(`await nextTick() 后读取`));let H=m(`div`,B);h(B,H),o(H,`mt-2 font-mono text-2xl text-success`);let U=l(H);h(H,U),g(()=>{i(U,_.value)});let W=m(`div`,a);h(a,W),o(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=m(`div`,W);h(W,G),o(G,`text-sm font-medium text-base-content/70`),h(G,d(`本轮步骤`));let K=m(`ul`,W);h(W,K),o(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=s(`rue:list:start`),J=s(`rue:list:end`);h(K,q),h(K,J);let Y=new Map;return g(()=>{Y=w({items:x.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`dom-read-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:r,keyword:x,syncState:S,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>e(()=>({panelOpen:C(`ref:1:0`,()=>p(!1)),keyword:C(`ref:1:1`,()=>p(``)),syncState:C(`ref:1:2`,()=>p(`尚未打开`)),postTickState:C(`ref:1:3`,()=>p(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>p([...P])),inputRef:C(`useRef:1:5`,()=>a())}))),O=async()=>{r.value=!0,S.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,S.value,`等待 nextTick() 后执行 focus()`],await n(),D.current?.focus();let e=globalThis.document?.activeElement===D.current;T.value=e?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,S.value,T.value]},k=()=>{r.value=!1,x.value=``,S.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=m(`div`,a);h(a,C),o(C,`flex flex-wrap gap-3`);let A=m(`button`,C);h(C,A),o(A,`btn btn-primary`),f(A,`click`,()=>void O()),h(A,d(`打开高级筛选`));let j=m(`button`,C);h(C,j),o(j,`btn btn-ghost`),f(j,`click`,k),h(j,d(`关闭并重置`));let M=s(`rue:slot:anchor`);h(a,M),g(()=>{let e=r.value?v(()=>{let e=c(),n=m(`div`,e);h(e,n),o(n,`rounded-box border border-base-300 bg-base-100 p-5`);let r=m(`div`,n);h(n,r),o(r,`grid gap-4 md:grid-cols-2`);let i=m(`label`,r);h(r,i),o(i,`block`);let a=m(`div`,i);h(i,a),o(a,`text-sm text-base-content/60`),h(a,d(`关键词`));let s=m(`input`,i);h(i,s);let l=ee(s,()=>D);y(()=>{l()}),o(s,`input input-bordered mt-2 w-full`),g(()=>{u(s,x.value)}),t(s,`placeholder`,`订单号 / 用户名 / 手机号`),f(s,`input`,e=>{x.value=e.target.value});let p=m(`label`,r);h(r,p),o(p,`block`);let _=m(`div`,p);h(p,_),o(_,`text-sm text-base-content/60`),h(_,d(`订单状态`));let v=m(`select`,p);h(p,v),o(v,`select select-bordered mt-2 w-full`);let b=m(`option`,v);h(v,b),h(b,d(`全部`));let S=m(`option`,v);h(v,S),h(S,d(`待支付`));let C=m(`option`,v);h(v,C),h(C,d(`待发货`));let w=m(`option`,v);return h(v,w),h(w,d(`已完成`)),e}):``;_(()=>b(e,a,M))});let N=m(`div`,a);h(a,N),o(N,`grid gap-4 md:grid-cols-2`);let P=m(`div`,N);h(N,P),o(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=m(`div`,P);h(P,F),o(F,`text-sm text-base-content/60`),h(F,d(`同步阶段状态`));let I=m(`div`,P);h(P,I),o(I,`mt-2 font-mono text-xl`);let L=l(I);h(I,L),g(()=>{i(L,S.value)});let R=m(`div`,N);h(N,R),o(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=m(`div`,R);h(R,z),o(z,`text-sm text-base-content/60`),h(z,d(`await nextTick() 后状态`));let B=m(`div`,R);h(R,B),o(B,`mt-2 font-mono text-xl text-success`);let V=l(B);h(B,V),g(()=>{i(V,T.value)});let H=m(`div`,a);h(a,H),o(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=m(`div`,H);h(H,U),o(U,`text-sm font-medium text-base-content/70`),h(U,d(`本轮步骤`));let W=m(`ul`,H);h(H,W),o(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=s(`rue:list:start`),K=s(`rue:list:end`);h(W,G),h(W,K);let q=new Map;return g(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`filter-focus-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:r,phone:x,email:S,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>e(()=>{let e=C(`ref:1:0`,()=>p(``)),t=C(`ref:1:1`,()=>p(``)),n=C(`ref:1:2`,()=>p(``));return{receiver:e,phone:t,email:n,errors:C(`ref:1:3`,()=>p(z())),syncField:C(`ref:1:4`,()=>p(`尚未提交`)),postTickField:C(`ref:1:5`,()=>p(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>p([...L])),formRef:C(`useRef:1:7`,()=>a()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),t=Object.values(e).filter(Boolean).length;T.value=e;let r=k.current?.querySelector(`[data-invalid="true"]`);E.value=r?.name?`${R[r.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await n();let i=k.current?.querySelector(`[data-invalid="true"]`);i?.focus(),D.value=i?.name?`${R[i.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{r.value=`李四`,x.value=`13800001111`,S.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{r.value=``,x.value=``,S.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=m(`div`,a);h(a,C);let A=ee(C,()=>k);y(()=>{A()}),o(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=m(`label`,C);h(C,P),o(P,`block`);let F=m(`div`,P);h(P,F),o(F,`text-sm text-base-content/60`),h(F,d(`联系人`));let I=m(`input`,P);h(P,I),t(I,`name`,`receiver`),g(()=>{t(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),g(()=>{o(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),g(()=>{u(I,r.value)}),t(I,`placeholder`,`请输入联系人`),f(I,`input`,e=>{r.value=e.target.value});let L=s(`rue:slot:anchor`);h(P,L),g(()=>{let e=T.value.receiver?v(()=>{let e=c(),t=m(`div`,e);h(e,t),o(t,`mt-2 text-sm text-error`);let n=s(`rue:slot:anchor`);return h(t,n),g(()=>{let e=T.value.receiver;_(()=>b(e,t,n))}),e}):``;_(()=>b(e,P,L))});let R=m(`label`,C);h(C,R),o(R,`block`);let z=m(`div`,R);h(R,z),o(z,`text-sm text-base-content/60`),h(z,d(`手机号`));let B=m(`input`,R);h(R,B),t(B,`name`,`phone`),g(()=>{t(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),g(()=>{o(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),g(()=>{u(B,x.value)}),t(B,`placeholder`,`请输入 11 位手机号`),f(B,`input`,e=>{x.value=e.target.value});let V=s(`rue:slot:anchor`);h(R,V),g(()=>{let e=T.value.phone?v(()=>{let e=c(),t=m(`div`,e);h(e,t),o(t,`mt-2 text-sm text-error`);let n=s(`rue:slot:anchor`);return h(t,n),g(()=>{let e=T.value.phone;_(()=>b(e,t,n))}),e}):``;_(()=>b(e,R,V))});let H=m(`label`,C);h(C,H),o(H,`block`);let U=m(`div`,H);h(H,U),o(U,`text-sm text-base-content/60`),h(U,d(`邮箱`));let W=m(`input`,H);h(H,W),t(W,`name`,`email`),g(()=>{t(W,`data-invalid`,String(T.value.email?`true`:`false`))}),g(()=>{o(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),g(()=>{u(W,S.value)}),t(W,`placeholder`,`请输入邮箱`),f(W,`input`,e=>{S.value=e.target.value});let G=s(`rue:slot:anchor`);h(H,G),g(()=>{let e=T.value.email?v(()=>{let e=c(),t=m(`div`,e);h(e,t),o(t,`mt-2 text-sm text-error`);let n=s(`rue:slot:anchor`);return h(t,n),g(()=>{let e=T.value.email;_(()=>b(e,t,n))}),e}):``;_(()=>b(e,H,G))});let K=m(`div`,a);h(a,K),o(K,`flex flex-wrap gap-3`);let q=m(`button`,K);h(K,q),o(q,`btn btn-primary`),f(q,`click`,()=>void j()),h(q,d(`提交并定位错误字段`));let J=m(`button`,K);h(K,J),o(J,`btn btn-outline`),f(J,`click`,M),h(J,d(`填入合法示例`));let Y=m(`button`,K);h(K,Y),o(Y,`btn btn-ghost`),f(Y,`click`,N),h(Y,d(`重置`));let X=m(`div`,a);h(a,X),o(X,`grid gap-4 md:grid-cols-2`);let Z=m(`div`,X);h(X,Z),o(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=m(`div`,Z);h(Z,te),o(te,`text-sm text-base-content/60`),h(te,d(`同步阶段识别到的字段`));let ne=m(`div`,Z);h(Z,ne),o(ne,`mt-2 font-mono text-xl`);let Q=l(ne);h(ne,Q),g(()=>{i(Q,E.value)});let $=m(`div`,X);h(X,$),o($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=m(`div`,$);h($,re),o(re,`text-sm text-base-content/60`),h(re,d(`await nextTick() 后结果`));let ie=m(`div`,$);h($,ie),o(ie,`mt-2 font-mono text-xl text-success`);let ae=l(ie);h(ie,ae),g(()=>{i(ae,D.value)});let oe=m(`div`,a);h(a,oe),o(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=m(`div`,oe);h(oe,se),o(se,`text-sm font-medium text-base-content/70`),h(se,d(`本轮步骤`));let ce=m(`ul`,oe);h(oe,ce),o(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=s(`rue:list:start`),ue=s(`rue:list:end`);h(ce,le),h(ce,ue);let de=new Map;return g(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`focus-error-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:r,syncHeight:u,postTickHeight:x,layoutDecision:S,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>e(()=>({modalOpen:C(`ref:1:0`,()=>p(!1)),syncHeight:C(`ref:1:1`,()=>p(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>p(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>p(`等待测量`)),logLines:C(`ref:1:4`,()=>p([...H])),listRef:C(`useRef:1:5`,()=>a())}))),D=async()=>{r.value=!0;let e=E.current?.scrollHeight??0;u.value=`${e}px`,x.value=`等待 flush...`,S.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await n();let t=E.current?.scrollHeight??0;x.value=`${t}px`,S.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${S.value}`]},O=()=>{r.value=!1,u.value=`尚未打开`,x.value=`尚未测量`,S.value=`等待测量`,T.value=[...H]};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=m(`div`,a);h(a,C),o(C,`flex flex-wrap gap-3`);let k=m(`button`,C);h(C,k),o(k,`btn btn-primary`),f(k,`click`,()=>void D()),h(k,d(`打开批量发送弹窗`));let A=m(`button`,C);h(C,A),o(A,`btn btn-ghost`),f(A,`click`,O),h(A,d(`关闭并重置`));let j=s(`rue:slot:anchor`);h(a,j),g(()=>{let e=r.value?v(()=>{let e=c(),n=m(`div`,e);h(e,n),o(n,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let r=m(`div`,n);h(n,r),o(r,`flex items-start justify-between gap-4`);let i=m(`div`,r);h(r,i);let a=m(`div`,i);h(i,a),o(a,`text-sm uppercase tracking-[0.24em] text-base-content/50`),h(a,d(`批量发送预览`));let l=m(`div`,i);h(i,l),o(l,`mt-2 text-2xl font-semibold`),h(l,d(`确认接收人列表`));let u=m(`div`,r);h(r,u),o(u,`badge badge-outline`);let f=s(`rue:slot:anchor`);h(u,f),g(()=>{let e=U.length;_(()=>b(e,u,f))}),h(u,d(` 人`));let p=m(`div`,n);h(n,p);let x=ee(p,()=>E);y(()=>{x()}),o(p,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=s(`rue:list:start`),C=s(`rue:list:end`);h(p,S),h(p,C);let T=new Map;return g(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:p,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,r,i,a)=>{b(v(()=>{let n=c(),r=m(`div`,n);h(n,r),g(()=>{t(r,`key`,String(e.id))}),o(r,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let i=m(`div`,r);h(r,i),o(i,`font-medium`);let a=s(`rue:slot:anchor`);h(i,a),g(()=>{let t=e.name;_(()=>b(t,i,a))});let l=m(`div`,r);h(r,l),o(l,`text-base-content/60`);let u=s(`rue:slot:anchor`);h(l,u),g(()=>{let t=e.team;_(()=>b(t,l,u))}),h(l,d(` · `));let f=s(`rue:slot:anchor`);return h(l,f),g(()=>{let t=e.region;_(()=>b(t,l,f))}),n}),n,r)}})}),e}):``;_(()=>b(e,a,j))});let M=m(`div`,a);h(a,M),o(M,`grid gap-4 md:grid-cols-3`);let N=m(`div`,M);h(M,N),o(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=m(`div`,N);h(N,P),o(P,`text-sm text-base-content/60`),h(P,d(`同步读取到的高度`));let F=m(`div`,N);h(N,F),o(F,`mt-2 font-mono text-xl`);let I=l(F);h(F,I),g(()=>{i(I,u.value)});let L=m(`div`,M);h(M,L),o(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=m(`div`,L);h(L,R),o(R,`text-sm text-base-content/60`),h(R,d(`await nextTick() 后高度`));let z=m(`div`,L);h(L,z),o(z,`mt-2 font-mono text-xl text-success`);let B=l(z);h(z,B),g(()=>{i(B,x.value)});let V=m(`div`,M);h(M,V),o(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=m(`div`,V);h(V,H),o(H,`text-sm text-base-content/60`),h(H,d(`布局决策`));let W=m(`div`,V);h(V,W),o(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=l(W);h(W,G),g(()=>{i(G,S.value)});let K=m(`div`,a);h(a,K),o(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=m(`div`,K);h(K,q),o(q,`text-sm font-medium text-base-content/70`),h(q,d(`本轮步骤`));let J=m(`ul`,K);h(K,J),o(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=s(`rue:list:start`),X=s(`rue:list:end`);h(J,Y),h(J,X);let Z=new Map;return g(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`modal-measure-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:r,syncHeight:u,postTickHeight:x,logLines:S,panelRef:T}=C(`useSetup:0:0`,()=>e(()=>({expanded:C(`ref:1:0`,()=>p(!1)),syncHeight:C(`ref:1:1`,()=>p(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>p(`尚未测量`)),logLines:C(`ref:1:3`,()=>p([...K])),panelRef:C(`useRef:1:4`,()=>a())}))),E=async()=>{r.value=!r.value;let e=r.value?`展开`:`收起`,t=T.current?.offsetHeight??0;u.value=`${t}px`,x.value=`等待 flush...`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await n();let i=T.current?.offsetHeight??0;x.value=`${i}px`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${i}px`]},D=()=>{r.value=!1,u.value=`尚未测量`,x.value=`尚未测量`,S.value=[...K]};return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let a=m(`div`,n);h(n,a),o(a,`card-body gap-5`);let p=m(`p`,a);h(a,p),o(p,`text-base-content/70 leading-7`),h(p,d(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=m(`div`,a);h(a,C);let O=ee(C,()=>T);y(()=>{O()}),o(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=m(`div`,C);h(C,k),o(k,`flex items-center justify-between`);let A=m(`div`,k);h(k,A);let j=m(`div`,A);h(A,j),o(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),h(j,d(`订单详情卡片`));let M=m(`div`,A);h(A,M),o(M,`mt-2 text-2xl font-semibold`),h(M,d(`订单 #A1024`));let N=m(`div`,k);h(k,N),g(()=>{o(N,`badge ${r.value?`badge-primary`:`badge-outline`}`)});let P=l(N);h(N,P),g(()=>{i(P,r.value?`已展开`:`已收起`)});let F=m(`div`,C);h(C,F),o(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=m(`div`,F);h(F,I),o(I,`rounded-box bg-base-200/60 p-3 text-sm`),h(I,d(`支付状态：已支付`));let L=m(`div`,F);h(F,L),o(L,`rounded-box bg-base-200/60 p-3 text-sm`),h(L,d(`配送方式：同城急送`));let R=m(`div`,F);h(F,R),o(R,`rounded-box bg-base-200/60 p-3 text-sm`),h(R,d(`仓库：上海 3 号仓`));let z=m(`div`,F);h(F,z),o(z,`rounded-box bg-base-200/60 p-3 text-sm`),h(z,d(`下单时间：09:20`));let B=s(`rue:slot:anchor`);h(F,B),g(()=>{let e=r.value?v(()=>{let e=c();h(e,d(` `));let t=m(`div`,e);h(e,t),o(t,`rounded-box bg-base-200/60 p-3 text-sm`),h(t,d(`发票状态：电子发票已开具`)),h(e,d(` `));let n=m(`div`,e);h(e,n),o(n,`rounded-box bg-base-200/60 p-3 text-sm`),h(n,d(`风控结果：人工审核已通过`)),h(e,d(` `));let r=m(`div`,e);h(e,r),o(r,`rounded-box bg-base-200/60 p-3 text-sm`),h(r,d(`配送备注：优先联系收货人本人`)),h(e,d(` `));let i=m(`div`,e);return h(e,i),o(i,`rounded-box bg-base-200/60 p-3 text-sm`),h(i,d(`售后状态：暂无售后单`)),h(e,d(` `)),e}):``;_(()=>b(e,F,B))});let V=m(`div`,a);h(a,V),o(V,`flex flex-wrap gap-3`);let H=m(`button`,V);h(V,H),o(H,`btn btn-primary`),f(H,`click`,()=>void E());let U=l(H);h(H,U),g(()=>{i(U,r.value?`收起详情区并测量`:`展开详情区并测量`)});let W=m(`button`,V);h(V,W),o(W,`btn btn-ghost`),f(W,`click`,D),h(W,d(`重置`));let G=m(`div`,a);h(a,G),o(G,`grid gap-4 md:grid-cols-2`);let K=m(`div`,G);h(G,K),o(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=m(`div`,K);h(K,q),o(q,`text-sm text-base-content/60`),h(q,d(`同步读取到的高度`));let J=m(`div`,K);h(K,J),o(J,`mt-2 font-mono text-2xl`);let Y=l(J);h(J,Y),g(()=>{i(Y,u.value)});let X=m(`div`,G);h(G,X),o(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=m(`div`,X);h(X,Z),o(Z,`text-sm text-base-content/60`),h(Z,d(`await nextTick() 后高度`));let te=m(`div`,X);h(X,te),o(te,`mt-2 font-mono text-2xl text-success`);let ne=l(te);h(te,ne),g(()=>{i(ne,x.value)});let Q=m(`div`,a);h(a,Q),o(Q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=m(`div`,Q);h(Q,$),o($,`text-sm font-medium text-base-content/70`),h($,d(`本轮步骤`));let re=m(`ul`,Q);h(Q,re),o(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=s(`rue:list:start`),ae=s(`rue:list:end`);h(re,ie),h(re,ae);let oe=new Map;return g(()=>{oe=w({items:S.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`panel-measure-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],te=e=>e===`all`?Z:Z.filter(t=>t.status===e),ne=()=>{let{activeStatus:u,syncTarget:x,postTickTarget:S,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>e(()=>({activeStatus:C(`ref:1:0`,()=>p(`all`)),syncTarget:C(`ref:1:1`,()=>p(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>p(`尚未定位`)),logLines:C(`ref:1:3`,()=>p([...Y])),viewportRef:C(`useRef:1:4`,()=>a())}))),D=async e=>{u.value=e;let t=E.current?.querySelector(`[data-first-visible="true"]`);x.value=t?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,S.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${x.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await n();let r=E.current?.querySelector(`[data-first-visible="true"]`);r?.scrollIntoView({block:`nearest`}),S.value=r?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${x.value}`,`nextTick() 后首条结果：${S.value}，并已滚动到可视区域`]},O=()=>{u.value=`all`,x.value=`尚未筛选`,S.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>r(()=>te(u.value)));return v(e=>{let n=m(`div`,e);o(n,`card bg-base-100 shadow`);let r=m(`div`,n);h(n,r),o(r,`card-body gap-5`);let a=m(`p`,r);h(r,a),o(a,`text-base-content/70 leading-7`),h(a,d(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let p=m(`div`,r);h(r,p),o(p,`flex flex-wrap gap-2`);let C=s(`rue:list:start`),A=s(`rue:list:end`);h(p,C),h(p,A);let j=new Map;g(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:p,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,a)=>{b(v(()=>{let n=c(),r=m(`button`,n);h(n,r),g(()=>{t(r,`key`,String(e))}),g(()=>{o(r,`btn btn-sm ${u.value===e?`btn-primary`:`btn-ghost`}`)}),f(r,`click`,()=>void D(e));let i=s(`rue:slot:anchor`);return h(r,i),g(()=>{let t=X[e];_(()=>b(t,r,i))}),n}),n,r)}})});let M=m(`button`,p);h(p,M),o(M,`btn btn-sm btn-outline`),f(M,`click`,O),h(M,d(`重置`));let N=m(`div`,r);h(r,N);let P=ee(N,()=>E);y(()=>{P()}),o(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=m(`table`,N);h(N,F),o(F,`table table-pin-rows table-sm`);let I=m(`thead`,F);h(F,I);let L=m(`tr`,I);h(I,L);let R=m(`th`,L);h(L,R),h(R,d(`订单号`));let z=m(`th`,L);h(L,z),h(z,d(`客户`));let B=m(`th`,L);h(L,B),h(B,d(`状态`));let V=m(`th`,L);h(L,V),h(V,d(`金额`));let H=m(`th`,L);h(L,H),h(H,d(`备注`));let U=m(`tbody`,F);h(F,U);let W=s(`rue:slot:anchor`);h(U,W),g(()=>{let e=k.get().length>0?v(()=>{let e=c(),n=s(`rue:list:start`),r=s(`rue:list:end`);h(e,n),h(e,r);let i=new Map;return g(()=>{i=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:i,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(e,n,r,i,a)=>{b(v(()=>{let n=c(),r=m(`tr`,n);h(n,r),g(()=>{t(r,`key`,String(e.id))}),g(()=>{t(r,`data-first-visible`,String(a===0?`true`:`false`))}),g(()=>{t(r,`data-order-no`,String(e.orderNo))});let i=m(`td`,r);h(r,i),o(i,`font-medium`);let l=s(`rue:slot:anchor`);h(i,l),g(()=>{let t=e.orderNo;_(()=>b(t,i,l))});let u=m(`td`,r);h(r,u);let d=s(`rue:slot:anchor`);h(u,d),g(()=>{let t=e.customer;_(()=>b(t,u,d))});let f=m(`td`,r);h(r,f);let p=m(`span`,f);h(f,p),o(p,`badge badge-outline`);let v=s(`rue:slot:anchor`);h(p,v),g(()=>{let t=X[e.status];_(()=>b(t,p,v))});let y=m(`td`,r);h(r,y);let x=s(`rue:slot:anchor`);h(y,x),g(()=>{let t=e.amount;_(()=>b(t,y,x))});let S=m(`td`,r);h(r,S),o(S,`text-base-content/60`);let C=s(`rue:slot:anchor`);return h(S,C),g(()=>{let t=e.note;_(()=>b(t,S,C))}),n}),n,r)}})}),e}):v(()=>{let e=c(),n=m(`tr`,e);h(e,n);let r=m(`td`,n);return h(n,r),t(r,`colSpan`,`5`),o(r,`py-8 text-center text-base-content/60`),h(r,d(`当前筛选没有结果`)),e});_(()=>b(e,U,W))});let G=m(`div`,r);h(r,G),o(G,`grid gap-4 md:grid-cols-2`);let K=m(`div`,G);h(G,K),o(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=m(`div`,K);h(K,q),o(q,`text-sm text-base-content/60`),h(q,d(`同步读取到的首条结果`));let J=m(`div`,K);h(K,J),o(J,`mt-2 font-mono text-2xl`);let Y=l(J);h(J,Y),g(()=>{i(Y,x.value)});let Z=m(`div`,G);h(G,Z),o(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let te=m(`div`,Z);h(Z,te),o(te,`text-sm text-base-content/60`),h(te,d(`await nextTick() 后定位到`));let ne=m(`div`,Z);h(Z,ne),o(ne,`mt-2 font-mono text-2xl text-success`);let Q=l(ne);h(ne,Q),g(()=>{i(Q,S.value)});let $=m(`div`,r);h(r,$),o($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=m(`div`,$);h($,re),o(re,`text-sm font-medium text-base-content/70`),h(re,d(`本轮步骤`));let ie=m(`ul`,$);h($,ie),o(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=s(`rue:list:start`),oe=s(`rue:list:end`);h(ie,ae),h(ie,oe);let se=new Map;return g(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(e,n,r,a,o)=>{b(v(()=>{let n=c(),r=m(`li`,n);h(n,r),g(()=>{t(r,`key`,String(`table-filter-log-${o}`))});let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})}),n})},Q=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Q,Demo:ne},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=n=>{let{Demo:r}=C(`useSetup:0:0`,()=>e(()=>({Demo:n.scenario.Demo})));return v(e=>{let a=m(`section`,e);o(a,`rounded-box border border-base-300 bg-base-100 p-5`);let u=m(`div`,a);h(a,u),o(u,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let d=s(`rue:slot:anchor`);h(u,d),g(()=>{let e=n.eyebrow;_(()=>b(e,u,d))});let f=m(`div`,a);h(a,f),o(f,`mt-2 text-2xl font-semibold`);let p=s(`rue:slot:anchor`);h(f,p),g(()=>{let e=n.scenario.title;_(()=>b(e,f,p))});let y=m(`p`,a);h(a,y),o(y,`mt-2 text-base-content/70 leading-7`);let x=s(`rue:slot:anchor`);h(y,x),g(()=>{let e=n.scenario.summary;_(()=>b(e,y,x))});let C=m(`div`,a);h(a,C),o(C,`mt-4 flex flex-wrap gap-2`);let ee=s(`rue:list:start`),E=s(`rue:list:end`);h(C,ee),h(C,E);let D=new Map;g(()=>{D=w({items:n.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(e,n,r,a,s)=>{b(v(()=>{let n=c(),r=m(`span`,n);h(n,r),g(()=>{t(r,`key`,String(e))}),o(r,`badge badge-outline`);let a=l(r);return h(r,a),g(()=>{i(a,e)}),n}),n,r)}})});let O=m(`div`,a);h(a,O),o(O,`mt-4`);let k=s(`rue:slot:anchor`);return h(O,k),g(()=>{let e=n.activeTab.value===`preview`?v(()=>{let e=c(),t=s(`rue:component:anchor`);return h(e,t),b(S(r,{}),e,t),e}):v(()=>{let e=c(),t=m(`div`,e);h(e,t),o(t,`card bg-base-100 shadow overflow-auto`);let r=m(`div`,t);h(t,r),o(r,`card-body p-0`);let i=s(`rue:component:anchor`);return h(r,i),g(()=>{let e=S(T,{className:`h-full`,lang:`tsx`,code:n.scenario.source});_(()=>b(e,r,i))}),e});_(()=>b(e,O,k))}),a})},ae=()=>{let{activeTab:n}=C(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:C(`ref:1:0`,()=>p(`preview`))})));return v(e=>{let r=c(),i=s(`rue:component:anchor`);return h(r,i),b(S(E,{children:v(()=>{let e=c(),r=m(`h1`,e);h(e,r),o(r,`text-5xl font-semibold mb-4 md:mb-4`),h(r,d(`nextTick 真实业务场景`));let i=m(`p`,e);h(e,i),o(i,`max-w-4xl text-base-content/70 leading-7`),h(i,d(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let a=m(`div`,e);h(e,a),t(a,`role`,`tablist`),o(a,`tabs tabs-box mt-6`);let l=m(`button`,a);h(a,l),t(l,`role`,`tab`),g(()=>{o(l,`tab ${n.value===`preview`?`tab-active`:``}`)}),f(l,`click`,()=>{n.value=`preview`}),h(l,d(`效果`));let u=m(`button`,a);h(a,u),t(u,`role`,`tab`),g(()=>{o(u,`tab ${n.value===`code`?`tab-active`:``}`)}),f(u,`click`,()=>{n.value=`code`}),h(u,d(`代码`));let p=m(`div`,e);h(e,p),o(p,`mt-4 grid gap-6`);let _=s(`rue:list:start`),v=s(`rue:list:end`);h(p,_),h(p,v);let y=new Map;g(()=>{y=w({items:$||[],getKey:(e,t)=>e.title,elements:y,parent:p,before:v,start:_,renderItem:(e,t,r,i,a)=>{x(S(ie,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:n}),t,r,i)}})});let b=m(`section`,p);h(p,b),o(b,`rounded-box border border-base-300 bg-base-100 p-5`);let C=m(`div`,b);h(b,C),o(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),h(C,d(`新增业务 demo`));let ee=m(`div`,b);h(b,ee),o(ee,`mt-2 text-2xl font-semibold`),h(ee,d(`真实业务里 nextTick 怎么用`));let T=m(`p`,b);h(b,T),o(T,`mt-2 text-base-content/70 leading-7`),h(T,d(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=s(`rue:list:start`),D=s(`rue:list:end`);h(p,E),h(p,D);let O=new Map;return g(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:p,before:D,start:E,renderItem:(e,t,r,i,a)=>{x(S(ie,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:n}),t,r,i)}})}),e})}),r,i),r})};export{ae as default};