import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,pt as ee,rn as m,rt as h,t as g,tt as _,vt as te,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as ne}from"./vapor-helpers-vapor-Dg64FcpK.js";import{n as re,r as b,t as x}from"./src-BsFBV0L8.js";import{t as ie}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=e=>u(t=>{let r=f(`label`,t);o(r,`form-control gap-2`);let s=f(`span`,r);n(r,s),o(s,`label-text font-medium`),n(s,h(`用户名`));let c=f(`input`,r);return n(r,c),d(c,`data-testid`,`i18n-user-name-input`),o(c,`input input-bordered`),v(()=>{a(c,e.name.value)}),i(c,`input`,t=>{e.name.value=t.target.value}),d(c,`placeholder`,`Alice`),r}),C=t=>{let{_:a,d:m,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:w}=y(`useSetup:0:0`,()=>c(()=>{let{_:e,d:n,n:i,locale:a,availableLocales:o,isLocaleLoading:s,loadLocaleMessages:c}=b();return{_:e,d:n,n:i,locale:a,availableLocales:o,isLocaleLoading:s,loadLocaleMessages:c,currentLocale:a.value,currentName:y(`computed:1:0`,()=>r(()=>t.name.value)),japaneseLoaded:o.value.includes(`ja-JP`)}})),le=async e=>{e===`ja-JP`&&!w&&await S(`ja-JP`),x.value=e},ue=y(`computed:1:1`,()=>r(()=>[{source:`你好，{name}！`,rendered:a(`你好，{name}！`,{name:__rue_phase2_currentName.get()},C)},{source:`欢迎回来`,rendered:a(`欢迎回来`,void 0,C)},{source:`你有 {count} 条新的提醒。`,rendered:a(`你有 {count} 条新的提醒。`,{count:3},C)},{source:`立即结账`,rendered:a(`立即结账`,void 0,C)}])),de=oe(`ja-JP`)?`ja-JP 语言包加载中...`:w?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return u(r=>{let c=f(`div`,r);o(c,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=f(`div`,c);n(c,y),o(y,`card bg-base-100 shadow`);let b=f(`div`,y);n(y,b),o(b,`card-body gap-4`);let x=f(`div`,b);n(b,x);let S=f(`div`,x);n(x,S),o(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(S,h(`控制台`));let w=f(`h2`,x);n(x,w),o(w,`mt-2 text-2xl font-semibold`),n(w,h(`语言切换与懒加载`));let fe=f(`p`,x);n(x,fe),o(fe,`mt-2 text-sm leading-6 text-base-content/70`),n(fe,h("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let pe=s(`rue:component:anchor`);n(b,pe),v(()=>{let n=g(se,{name:t.name});e(()=>p(n,b,pe))});let T=f(`div`,b);n(b,T),o(T,`grid gap-2`);let me=f(`span`,T);n(T,me),o(me,`label-text font-medium`),n(me,h(`切换语言`));let E=f(`div`,T);n(T,E),o(E,`grid gap-2`);let he=s(`rue:list:start`),ge=s(`rue:list:end`);n(E,he),n(E,ge);let _e=new Map;v(()=>{_e=ne({items:ae||[],getKey:(e,t)=>e.id,elements:_e,parent:E,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(t,r,a,c,l)=>{p(u(()=>{let r=_(),a=C===t.id,c=t.id===`ja-JP`&&oe(`ja-JP`),l=f(`button`,r);n(r,l),v(()=>{d(l,`key`,String(t.id))}),v(()=>{o(l,`btn justify-between ${a?`btn-primary`:`btn-outline`}`)}),v(()=>{ee(l,c)}),i(l,`click`,()=>{le(t.id)});let u=f(`span`,l);n(l,u);let m=s(`rue:slot:anchor`);n(u,m),v(()=>{let n=t.label;e(()=>p(n,u,m))});let h=f(`span`,l);n(l,h),o(h,`text-xs opacity-70`);let g=s(`rue:slot:anchor`);return n(h,g),v(()=>{let n=c?`加载中...`:t.hint;e(()=>p(n,h,g))}),r}),r,a)}})});let D=f(`div`,b);n(b,D),o(D,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ve=f(`div`,D);n(D,ve),o(ve,`font-medium`),n(ve,h(`运行状态`));let O=f(`div`,D);n(D,O),o(O,`mt-2 text-base-content/70`);let ye=s(`rue:slot:anchor`);n(O,ye),v(()=>{let t=de;e(()=>p(t,O,ye))});let k=f(`div`,D);n(D,k),o(k,`mt-3 flex flex-wrap gap-2`);let be=s(`rue:list:start`),xe=s(`rue:list:end`);n(k,be),n(k,xe);let Se=new Map;v(()=>{Se=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Se,parent:k,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(e,t,r,i,a)=>{p(u(()=>{let t=_(),r=f(`span`,t);n(t,r),v(()=>{d(r,`key`,String(e))}),o(r,`badge badge-outline`);let i=l(r);return n(r,i),v(()=>{te(i,e)}),t}),t,r)}})});let A=f(`div`,c);n(c,A),o(A,`grid gap-6`);let j=f(`div`,A);n(A,j),o(j,`card bg-base-100 shadow`);let M=f(`div`,j);n(j,M),o(M,`card-body gap-4`);let N=f(`div`,M);n(M,N),o(N,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let P=f(`span`,N);n(N,P),o(P,`badge badge-outline`),n(P,h(`当前 locale：`));let Ce=s(`rue:slot:anchor`);n(P,Ce),v(()=>{let t=C;e(()=>p(t,P,Ce))});let we=f(`span`,N);n(N,we),o(we,`badge badge-outline`),n(we,h(`fallback：en`));let F=f(`div`,M);n(M,F);let I=f(`div`,F);n(F,I),o(I,`text-3xl font-semibold`);let Te=s(`rue:slot:anchor`);n(I,Te),v(()=>{let t=a(`你好，{name}！`,{name:ce.get()},C);e(()=>p(t,I,Te))});let L=f(`div`,F);n(F,L),o(L,`mt-2 text-base-content/70`);let Ee=s(`rue:slot:anchor`);n(L,Ee),v(()=>{let t=a(`欢迎回来`,void 0,C);e(()=>p(t,L,Ee))});let De=s(`rue:slot:anchor`);n(F,De),v(()=>{let t=C===`ja-JP`?u(()=>{let e=_(),t=f(`div`,e);return n(e,t),o(t,`mt-2 text-xs text-base-content/50`),n(t,h(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),e}):``;e(()=>p(t,F,De))});let R=f(`div`,M);n(M,R),o(R,`grid gap-4 md:grid-cols-3`);let z=f(`div`,R);n(R,z),o(z,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Oe=f(`div`,z);n(z,Oe),o(Oe,`text-xs uppercase tracking-[0.24em] text-base-content/45`),n(Oe,h(`提醒`));let B=f(`div`,z);n(z,B),o(B,`mt-2 text-lg font-medium`);let ke=s(`rue:slot:anchor`);n(B,ke),v(()=>{let t=a(`你有 {count} 条新的提醒。`,{count:3},C);e(()=>p(t,B,ke))});let V=f(`div`,R);n(R,V),o(V,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Ae=f(`div`,V);n(V,Ae),o(Ae,`text-xs uppercase tracking-[0.24em] text-base-content/45`),n(Ae,h(`日期格式`));let H=f(`div`,V);n(V,H),o(H,`mt-2 text-lg font-medium`);let je=s(`rue:slot:anchor`);n(H,je),v(()=>{let t=m(`2026-05-23T09:00:00.000Z`,`long`,C);e(()=>p(t,H,je))});let U=f(`div`,R);n(R,U),o(U,`rounded-box border border-base-300 bg-base-200/50 p-4`);let W=f(`div`,U);n(U,W),o(W,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Me=s(`rue:slot:anchor`);n(W,Me),v(()=>{let t=a(`订单总计`,void 0,C);e(()=>p(t,W,Me))});let G=f(`div`,U);n(U,G),o(G,`mt-2 text-lg font-medium`);let Ne=s(`rue:slot:anchor`);n(G,Ne),v(()=>{let t=re(1299,`currency`,C);e(()=>p(t,G,Ne))});let K=f(`div`,M);n(M,K),o(K,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let q=f(`div`,K);n(K,q);let J=f(`div`,q);n(q,J),o(J,`text-sm font-medium`);let Pe=s(`rue:slot:anchor`);n(J,Pe),v(()=>{let t=a(`源文本就是 key。`,void 0,C);e(()=>p(t,J,Pe))});let Fe=f(`div`,q);n(q,Fe),o(Fe,`mt-1 text-sm text-base-content/65`),n(Fe,h(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=f(`button`,K);n(K,Ie),o(Ie,`btn btn-primary`);let Le=s(`rue:slot:anchor`);n(Ie,Le),v(()=>{let t=a(`立即结账`,void 0,C);e(()=>p(t,Ie,Le))});let Re=f(`div`,A);n(A,Re),o(Re,`card bg-base-100 shadow`);let Y=f(`div`,Re);n(Re,Y),o(Y,`card-body gap-3`);let ze=f(`h3`,Y);n(Y,ze),o(ze,`text-xl font-semibold`),n(ze,h(`源文本即 key`));let Be=f(`p`,Y);n(Y,Be),o(Be,`text-sm leading-6 text-base-content/70`),n(Be,h(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=f(`div`,Y);n(Y,X),o(X,`overflow-x-auto`);let Z=f(`table`,X);n(X,Z),o(Z,`table table-zebra`);let Ve=f(`thead`,Z);n(Z,Ve);let Q=f(`tr`,Ve);n(Ve,Q);let He=f(`th`,Q);n(Q,He),n(He,h(`源文本`));let Ue=f(`th`,Q);n(Q,Ue),n(Ue,h(`当前输出`));let $=f(`tbody`,Z);n(Z,$);let We=s(`rue:list:start`),Ge=s(`rue:list:end`);n($,We),n($,Ge);let Ke=new Map;return v(()=>{Ke=ne({items:ue.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(t,r,i,a,c)=>{p(u(()=>{let r=_(),i=f(`tr`,r);n(r,i),v(()=>{d(i,`key`,String(t.source))});let a=f(`td`,i);n(i,a),o(a,`font-mono text-xs md:text-sm`);let c=s(`rue:slot:anchor`);n(a,c),v(()=>{let n=t.source;e(()=>p(n,a,c))});let l=f(`td`,i);n(i,l);let u=s(`rue:slot:anchor`);return n(l,u),v(()=>{let n=t.rendered;e(()=>p(n,l,u))}),r}),r,i)}})}),c})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:i,nameRef:a,name:o}=y(`useSetup:0:0:dup1`,()=>c(()=>{let e=y(`useRef:1:2`,()=>m()),n=y(`useRef:1:3`,()=>m());return e.current||=S(),n.current||=y(`ref:1:4`,()=>t(`Alice`)),{i18nRef:e,nameRef:n,name:y(`computed:1:5`,()=>r(()=>n.current))}}));return u(t=>{let r=_(),a=s(`rue:component:anchor`);n(r,a);let c=g(C,{name:o.get()});return v(()=>{let t=g(x,{i18n:i.current,children:c});e(()=>p(t,r,a))}),r})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};