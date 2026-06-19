import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,dt as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,t as _,tt as v,vt as y,zt as ee}from"./vapor-runtime-CXIalONM.js";import{a as b,n as te}from"./vapor-helpers-vapor-CoXKrGmY.js";import{n as ne,r as x,t as S}from"./src-CgeB_Fyd.js";import{t as re}from"./createHomeSplitExamplePage-Br1mQ323.js";var ie=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],ae=e=>new Promise(t=>setTimeout(t,e)),C=()=>ne({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await ae(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),oe=e=>d(t=>{let n=l(`label`,t);f(n,`form-control gap-2`);let i=l(`span`,n);a(n,i),f(i,`label-text font-medium`),a(i,v(`用户名`));let s=l(`input`,n);return a(n,s),g(s,`data-testid`,`i18n-user-name-input`),f(s,`input input-bordered`),r(()=>{p(s,e.name.value)}),o(s,`input`,t=>{e.name.value=t.target.value}),g(s,`placeholder`,`Alice`),n}),w=t=>{let{_:p,d:ee,n:ne,locale:S,availableLocales:re,isLocaleLoading:ae,loadLocaleMessages:C,currentLocale:w,currentName:se,japaneseLoaded:T}=b(`useSetup:0:0`,()=>s(()=>{let{_:e,d:n,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=x();return{_:e,d:n,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:b(`computed:1:0`,()=>y(()=>t.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),ce=async e=>{e===`ja-JP`&&!T&&await C(`ja-JP`),S.value=e},le=b(`computed:1:1`,()=>y(()=>[{source:`你好，{name}！`,rendered:p(`你好，{name}！`,{name:__rue_phase2_currentName.get()},w)},{source:`欢迎回来`,rendered:p(`欢迎回来`,void 0,w)},{source:`你有 {count} 条新的提醒。`,rendered:p(`你有 {count} 条新的提醒。`,{count:3},w)},{source:`立即结账`,rendered:p(`立即结账`,void 0,w)}])),ue=ae(`ja-JP`)?`ja-JP 语言包加载中...`:T?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return d(s=>{let y=l(`div`,s);f(y,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let b=l(`div`,y);a(y,b),f(b,`card bg-base-100 shadow`);let x=l(`div`,b);a(b,x),f(x,`card-body gap-4`);let S=l(`div`,x);a(x,S);let C=l(`div`,S);a(S,C),f(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),a(C,v(`控制台`));let T=l(`h2`,S);a(S,T),f(T,`mt-2 text-2xl font-semibold`),a(T,v(`语言切换与懒加载`));let de=l(`p`,S);a(S,de),f(de,`mt-2 text-sm leading-6 text-base-content/70`),a(de,v("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let fe=n(`rue:component:anchor`);a(x,fe),r(()=>{let e=_(oe,{name:t.name});i(()=>h(e,x,fe))});let E=l(`div`,x);a(x,E),f(E,`grid gap-2`);let pe=l(`span`,E);a(E,pe),f(pe,`label-text font-medium`),a(pe,v(`切换语言`));let D=l(`div`,E);a(E,D),f(D,`grid gap-2`);let me=n(`rue:list:start`),he=n(`rue:list:end`);a(D,me),a(D,he);let ge=new Map;r(()=>{ge=te({items:ie||[],getKey:(e,t)=>e.id,elements:ge,parent:D,before:he,singleRoot:!0,trackIndex:!1,start:me,renderItem:(t,s,u,p,m)=>{h(d(()=>{let s=e(),u=w===t.id,d=t.id===`ja-JP`&&ae(`ja-JP`),p=l(`button`,s);a(s,p),r(()=>{g(p,`key`,String(t.id))}),r(()=>{f(p,`btn justify-between ${u?`btn-primary`:`btn-outline`}`)}),r(()=>{c(p,d)}),o(p,`click`,()=>{ce(t.id)});let m=l(`span`,p);a(p,m);let _=n(`rue:slot:anchor`);a(m,_),r(()=>{let e=t.label;i(()=>h(e,m,_))});let v=l(`span`,p);a(p,v),f(v,`text-xs opacity-70`);let y=n(`rue:slot:anchor`);return a(v,y),r(()=>{let e=d?`加载中...`:t.hint;i(()=>h(e,v,y))}),s}),s,u)}})});let O=l(`div`,x);a(x,O),f(O,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let _e=l(`div`,O);a(O,_e),f(_e,`font-medium`),a(_e,v(`运行状态`));let k=l(`div`,O);a(O,k),f(k,`mt-2 text-base-content/70`);let ve=n(`rue:slot:anchor`);a(k,ve),r(()=>{let e=ue;i(()=>h(e,k,ve))});let A=l(`div`,O);a(O,A),f(A,`mt-3 flex flex-wrap gap-2`);let ye=n(`rue:list:start`),be=n(`rue:list:end`);a(A,ye),a(A,be);let xe=new Map;r(()=>{xe=te({items:re.value||[],getKey:(e,t)=>e,elements:xe,parent:A,before:be,singleRoot:!0,trackIndex:!1,start:ye,renderItem:(t,n,i,o,s)=>{h(d(()=>{let n=e(),i=l(`span`,n);a(n,i),r(()=>{g(i,`key`,String(t))}),f(i,`badge badge-outline`);let o=m(i);return a(i,o),r(()=>{u(o,t)}),n}),n,i)}})});let j=l(`div`,y);a(y,j),f(j,`grid gap-6`);let M=l(`div`,j);a(j,M),f(M,`card bg-base-100 shadow`);let N=l(`div`,M);a(M,N),f(N,`card-body gap-4`);let P=l(`div`,N);a(N,P),f(P,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let F=l(`span`,P);a(P,F),f(F,`badge badge-outline`),a(F,v(`当前 locale：`));let Se=n(`rue:slot:anchor`);a(F,Se),r(()=>{let e=w;i(()=>h(e,F,Se))});let Ce=l(`span`,P);a(P,Ce),f(Ce,`badge badge-outline`),a(Ce,v(`fallback：en`));let I=l(`div`,N);a(N,I);let L=l(`div`,I);a(I,L),f(L,`text-3xl font-semibold`);let we=n(`rue:slot:anchor`);a(L,we),r(()=>{let e=p(`你好，{name}！`,{name:se.get()},w);i(()=>h(e,L,we))});let R=l(`div`,I);a(I,R),f(R,`mt-2 text-base-content/70`);let Te=n(`rue:slot:anchor`);a(R,Te),r(()=>{let e=p(`欢迎回来`,void 0,w);i(()=>h(e,R,Te))});let Ee=n(`rue:slot:anchor`);a(I,Ee),r(()=>{let t=w===`ja-JP`?d(()=>{let t=e(),n=l(`div`,t);return a(t,n),f(n,`mt-2 text-xs text-base-content/50`),a(n,v(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),t}):``;i(()=>h(t,I,Ee))});let z=l(`div`,N);a(N,z),f(z,`grid gap-4 md:grid-cols-3`);let B=l(`div`,z);a(z,B),f(B,`rounded-box border border-base-300 bg-base-200/50 p-4`);let De=l(`div`,B);a(B,De),f(De,`text-xs uppercase tracking-[0.24em] text-base-content/45`),a(De,v(`提醒`));let V=l(`div`,B);a(B,V),f(V,`mt-2 text-lg font-medium`);let Oe=n(`rue:slot:anchor`);a(V,Oe),r(()=>{let e=p(`你有 {count} 条新的提醒。`,{count:3},w);i(()=>h(e,V,Oe))});let H=l(`div`,z);a(z,H),f(H,`rounded-box border border-base-300 bg-base-200/50 p-4`);let ke=l(`div`,H);a(H,ke),f(ke,`text-xs uppercase tracking-[0.24em] text-base-content/45`),a(ke,v(`日期格式`));let U=l(`div`,H);a(H,U),f(U,`mt-2 text-lg font-medium`);let Ae=n(`rue:slot:anchor`);a(U,Ae),r(()=>{let e=ee(`2026-05-23T09:00:00.000Z`,`long`,w);i(()=>h(e,U,Ae))});let W=l(`div`,z);a(z,W),f(W,`rounded-box border border-base-300 bg-base-200/50 p-4`);let G=l(`div`,W);a(W,G),f(G,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let je=n(`rue:slot:anchor`);a(G,je),r(()=>{let e=p(`订单总计`,void 0,w);i(()=>h(e,G,je))});let K=l(`div`,W);a(W,K),f(K,`mt-2 text-lg font-medium`);let Me=n(`rue:slot:anchor`);a(K,Me),r(()=>{let e=ne(1299,`currency`,w);i(()=>h(e,K,Me))});let q=l(`div`,N);a(N,q),f(q,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let J=l(`div`,q);a(q,J);let Ne=l(`div`,J);a(J,Ne),f(Ne,`text-sm font-medium`);let Pe=n(`rue:slot:anchor`);a(Ne,Pe),r(()=>{let e=p(`源文本就是 key。`,void 0,w);i(()=>h(e,Ne,Pe))});let Fe=l(`div`,J);a(J,Fe),f(Fe,`mt-1 text-sm text-base-content/65`),a(Fe,v(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=l(`button`,q);a(q,Ie),f(Ie,`btn btn-primary`);let Le=n(`rue:slot:anchor`);a(Ie,Le),r(()=>{let e=p(`立即结账`,void 0,w);i(()=>h(e,Ie,Le))});let Re=l(`div`,j);a(j,Re),f(Re,`card bg-base-100 shadow`);let Y=l(`div`,Re);a(Re,Y),f(Y,`card-body gap-3`);let ze=l(`h3`,Y);a(Y,ze),f(ze,`text-xl font-semibold`),a(ze,v(`源文本即 key`));let Be=l(`p`,Y);a(Y,Be),f(Be,`text-sm leading-6 text-base-content/70`),a(Be,v(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=l(`div`,Y);a(Y,X),f(X,`overflow-x-auto`);let Z=l(`table`,X);a(X,Z),f(Z,`table table-zebra`);let Ve=l(`thead`,Z);a(Z,Ve);let Q=l(`tr`,Ve);a(Ve,Q);let He=l(`th`,Q);a(Q,He),a(He,v(`源文本`));let Ue=l(`th`,Q);a(Q,Ue),a(Ue,v(`当前输出`));let $=l(`tbody`,Z);a(Z,$);let We=n(`rue:list:start`),Ge=n(`rue:list:end`);a($,We),a($,Ge);let Ke=new Map;return r(()=>{Ke=te({items:le.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(t,o,s,c,u)=>{h(d(()=>{let o=e(),s=l(`tr`,o);a(o,s),r(()=>{g(s,`key`,String(t.source))});let c=l(`td`,s);a(s,c),f(c,`font-mono text-xs md:text-sm`);let u=n(`rue:slot:anchor`);a(c,u),r(()=>{let e=t.source;i(()=>h(e,c,u))});let d=l(`td`,s);a(s,d);let p=n(`rue:slot:anchor`);return a(d,p),r(()=>{let e=t.rendered;i(()=>h(e,d,p))}),o}),o,s)}})}),y})},se=re({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
import {
  I18nProvider,
  createI18n,
  useI18n,
  type I18n,
  type Locale,
} from '../../../../packages/i18n/src'

type ValueSignal<T> = { value: T }

const LOCALE_OPTIONS: Array<{ id: Locale; label: string; hint: string }> = [
  { id: 'zh-CN', label: '中文', hint: '内置' },
  { id: 'en', label: 'English', hint: '内置' },
  { id: 'ja-JP', label: '日本語', hint: '首次点击懒加载' },
]

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const createDemoI18n = (): I18n => {
  return createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'en',
    messages: {
      'zh-CN': {
        '你好，{name}！': '你好，{name}！',
        欢迎回来: '欢迎回来',
        '你有 {count} 条新的提醒。': '你有 {count} 条新的提醒。',
        订单总计: '订单总计',
        立即结账: '立即结账',
        '源文本就是 key。': '源文本就是 key。',
      },
      en: {
        '你好，{name}！': 'you hao, {name}!',
        欢迎回来: 'Welcome back',
        '你有 {count} 条新的提醒。': 'You have {count} new notifications.',
        订单总计: 'Order total',
        立即结账: 'Checkout now',
        '源文本就是 key。': 'The source text is the key.',
      },
    },
    datetimeFormats: {
      'zh-CN': {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
      en: {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
      'ja-JP': {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
    },
    numberFormats: {
      'zh-CN': {
        currency: {
          style: 'currency',
          currency: 'CNY',
        },
      },
      en: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
      'ja-JP': {
        currency: {
          style: 'currency',
          currency: 'JPY',
        },
      },
    },
    messageLoader: {
      // 首次点到日语时再加载，直观看到 lazy message loader 的行为。
      'ja-JP': async () => {
        await wait(420)

        return {
          default: {
            '你好，{name}！': 'こんにちは、{name}！',
            '你有 {count} 条新的提醒。': '{count} 件の新しい通知があります。',
            订单总计: '注文合計',
            立即结账: '今すぐ支払う',
            '源文本就是 key。': 'ソース文そのものが key です。',
          },
        }
      },
    },
  })
}

const UserNameInput: FC<{ name: ValueSignal<string> }> = props => {
  return (
    <label className="form-control gap-2">
      <span className="label-text font-medium">用户名</span>
      <input
        data-testid="i18n-user-name-input"
        className="input input-bordered"
        value={props.name.value}
        onInput={(event: Event) => {
          props.name.value = (event.target as HTMLInputElement).value
        }}
        placeholder="Alice"
      />
    </label>
  )
}

const DemoSurface: FC<{ name: ValueSignal<string> }> = props => {
  const { _, d, n, locale, availableLocales, isLocaleLoading, loadLocaleMessages } = useI18n()

  // 显式读取 locale.value，再传给 _()，更贴近 Rue 当前依赖追踪边界。
  const currentLocale = locale.value
  const currentName = props.name.value
  const japaneseLoaded = availableLocales.value.includes('ja-JP')

  const switchLocale = async (nextLocale: Locale) => {
    if (nextLocale === 'ja-JP' && !japaneseLoaded) {
      await loadLocaleMessages('ja-JP')
    }

    locale.value = nextLocale
  }

  const previewRows = [
    {
      source: '你好，{name}！',
      rendered: _('你好，{name}！', { name: currentName }, currentLocale),
    },
    {
      source: '欢迎回来',
      rendered: _('欢迎回来', undefined, currentLocale),
    },
    {
      source: '你有 {count} 条新的提醒。',
      rendered: _('你有 {count} 条新的提醒。', { count: 3 }, currentLocale),
    },
    {
      source: '立即结账',
      rendered: _('立即结账', undefined, currentLocale),
    },
  ]

  const localeStatus = isLocaleLoading('ja-JP')
    ? 'ja-JP 语言包加载中...'
    : japaneseLoaded
      ? 'ja-JP 已注册到当前 composer。'
      : 'ja-JP 将在首次点击时按需加载。'

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div>
            <h2 className="mt-2 text-2xl font-semibold">语言切换与懒加载</h2>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              这个 demo 直接演示新的 \`_()\` 模型：没有 \`common.hello\` 这类路径，源文本本身就是 key。
            </p>
          </div>

          <UserNameInput name={props.name} />

          <div className="grid gap-2">
            <span className="label-text font-medium">切换语言</span>
            <div className="grid gap-2">
              {LOCALE_OPTIONS.map(option => {
                const active = currentLocale === option.id
                const loading = option.id === 'ja-JP' && isLocaleLoading('ja-JP')

                return (
                  <button
                    key={option.id}
                    className={\`btn justify-between \${active ? 'btn-primary' : 'btn-outline'}\`}
                    disabled={loading}
                    onClick={() => {
                      void switchLocale(option.id)
                    }}
                  >
                    <span>{option.label}</span>
                    <span className="text-xs opacity-70">
                      {loading ? '加载中...' : option.hint}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6">
            <div className="font-medium">运行状态</div>
            <div className="mt-2 text-base-content/70">{localeStatus}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {availableLocales.value.map(item => (
                <span key={item} className="badge badge-outline">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/60">
              <span className="badge badge-outline">当前 locale：{currentLocale}</span>
              <span className="badge badge-outline">fallback：en</span>
            </div>

            <div>
              <div className="text-3xl font-semibold">
                {_('你好，{name}！', { name: currentName }, currentLocale)}
              </div>
              <div className="mt-2 text-base-content/70">
                {_('欢迎回来', undefined, currentLocale)}
              </div>
              {currentLocale === 'ja-JP' && (
                <div className="mt-2 text-xs text-base-content/50">
                  日语包故意没有“欢迎回来”，这里会自动回退到英文。
                </div>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div>
                <div className="mt-2 text-lg font-medium">
                  {_('你有 {count} 条新的提醒。', { count: 3 }, currentLocale)}
                </div>
              </div>
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">
                  日期格式
                </div>
                <div className="mt-2 text-lg font-medium">
                  {d('2026-05-23T09:00:00.000Z', 'long', currentLocale)}
                </div>
              </div>
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">
                  {_('订单总计', undefined, currentLocale)}
                </div>
                <div className="mt-2 text-lg font-medium">{n(1299, 'currency', currentLocale)}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4">
              <div>
                <div className="text-sm font-medium">
                  {_('源文本就是 key。', undefined, currentLocale)}
                </div>
                <div className="mt-1 text-sm text-base-content/65">
                  左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。
                </div>
              </div>
              <button className="btn btn-primary">{_('立即结账', undefined, currentLocale)}</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body gap-3">
            <h3 className="text-xl font-semibold">源文本即 key</h3>
            <p className="text-sm leading-6 text-base-content/70">
              这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。
            </p>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>源文本</th>
                    <th>当前输出</th>
                  </tr>
                </thead>
                <tbody>
                  {previewRows.map(row => (
                    <tr key={row.source}>
                      <td className="font-mono text-xs md:text-sm">{row.source}</td>
                      <td>{row.rendered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const I18nLocaleSwitcherDemo: FC = () => {
  const i18nRef = useRef<I18n>()
  const nameRef = useRef<ValueSignal<string>>()

  if (!i18nRef.current) {
    i18nRef.current = createDemoI18n()
  }

  if (!nameRef.current) {
    nameRef.current = ref('Alice')
  }

  const name = nameRef.current

  return (
    <I18nProvider i18n={i18nRef.current}>
      <DemoSurface name={name} />
    </I18nProvider>
  )
}

export default I18nLocaleSwitcherDemo
`,Demo:()=>{let{i18nRef:o,nameRef:c,name:l}=b(`useSetup:0:0:dup1`,()=>s(()=>{let e=b(`useRef:1:2`,()=>t()),n=b(`useRef:1:3`,()=>t());return e.current||=C(),n.current||=b(`ref:1:4`,()=>ee(`Alice`)),{i18nRef:e,nameRef:n,name:b(`computed:1:5`,()=>y(()=>n.current))}}));return d(t=>{let s=e(),c=n(`rue:component:anchor`);a(s,c);let u=_(w,{name:l.get()});return r(()=>{let e=_(S,{i18n:o.current,children:u});i(()=>h(e,s,c))}),s})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{se as default};