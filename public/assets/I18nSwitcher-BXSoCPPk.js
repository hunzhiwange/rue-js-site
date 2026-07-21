import{Cn as e,Ct as t,Dt as n,Lt as r,Mt as i,Sn as a,Tt as o,dt as s,ft as c,ht as l,jt as u,mt as d,ot as ee,pn as f,pt as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as te}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as ne}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as re,r as b,t as x}from"./src-A_F7cCK2.js";import{t as ie}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=e=>_(n=>{let r=p(`label`,n);o(r,`form-control gap-2`);let i=p(`span`,r);m(r,i),o(i,`label-text font-medium`),m(i,d(`用户名`));let a=p(`input`,r);return m(r,a),t(a,`data-testid`,`i18n-user-name-input`),o(a,`input input-bordered`),h(()=>{u(a,e.name.value)}),ee(a,`input`,t=>{e.name.value=t.target.value}),t(a,`placeholder`,`Alice`),r}),C=a=>{let{_:u,d:f,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:w}=y(`useSetup:0:0`,()=>e(()=>{let{_:e,d:t,n,locale:i,availableLocales:o,isLocaleLoading:s,loadLocaleMessages:c}=b();return{_:e,d:t,n,locale:i,availableLocales:o,isLocaleLoading:s,loadLocaleMessages:c,currentLocale:i.value,currentName:y(`computed:1:0`,()=>r(()=>a.name.value)),japaneseLoaded:o.value.includes(`ja-JP`)}})),le=async e=>{e===`ja-JP`&&!w&&await S(`ja-JP`),x.value=e},ue=y(`computed:1:1`,()=>r(()=>[{source:`你好，{name}！`,rendered:u(`你好，{name}！`,{name:__rue_phase2_currentName.get()},C)},{source:`欢迎回来`,rendered:u(`欢迎回来`,void 0,C)},{source:`你有 {count} 条新的提醒。`,rendered:u(`你有 {count} 条新的提醒。`,{count:3},C)},{source:`立即结账`,rendered:u(`立即结账`,void 0,C)}])),de=oe(`ja-JP`)?`ja-JP 语言包加载中...`:w?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return _(e=>{let r=p(`div`,e);o(r,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=p(`div`,r);m(r,y),o(y,`card bg-base-100 shadow`);let b=p(`div`,y);m(y,b),o(b,`card-body gap-4`);let x=p(`div`,b);m(b,x);let S=p(`div`,x);m(x,S),o(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),m(S,d(`控制台`));let w=p(`h2`,x);m(x,w),o(w,`mt-2 text-2xl font-semibold`),m(w,d(`语言切换与懒加载`));let fe=p(`p`,x);m(x,fe),o(fe,`mt-2 text-sm leading-6 text-base-content/70`),m(fe,d("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let pe=s(`rue:component:anchor`);m(b,pe),h(()=>{let e=te(se,{name:a.name});g(()=>v(e,b,pe))});let T=p(`div`,b);m(b,T),o(T,`grid gap-2`);let me=p(`span`,T);m(T,me),o(me,`label-text font-medium`),m(me,d(`切换语言`));let E=p(`div`,T);m(T,E),o(E,`grid gap-2`);let he=s(`rue:list:start`),ge=s(`rue:list:end`);m(E,he),m(E,ge);let _e=new Map;h(()=>{_e=ne({items:ae||[],getKey:(e,t)=>e.id,elements:_e,parent:E,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(e,r,i,a,l)=>{v(_(()=>{let r=c(),i=C===e.id,a=e.id===`ja-JP`&&oe(`ja-JP`),l=p(`button`,r);m(r,l),h(()=>{t(l,`key`,String(e.id))}),h(()=>{o(l,`btn justify-between ${i?`btn-primary`:`btn-outline`}`)}),h(()=>{n(l,a)}),ee(l,`click`,()=>{le(e.id)});let u=p(`span`,l);m(l,u);let d=s(`rue:slot:anchor`);m(u,d),h(()=>{let t=e.label;g(()=>v(t,u,d))});let f=p(`span`,l);m(l,f),o(f,`text-xs opacity-70`);let _=s(`rue:slot:anchor`);return m(f,_),h(()=>{let t=a?`加载中...`:e.hint;g(()=>v(t,f,_))}),r}),r,i)}})});let D=p(`div`,b);m(b,D),o(D,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ve=p(`div`,D);m(D,ve),o(ve,`font-medium`),m(ve,d(`运行状态`));let O=p(`div`,D);m(D,O),o(O,`mt-2 text-base-content/70`);let ye=s(`rue:slot:anchor`);m(O,ye),h(()=>{let e=de;g(()=>v(e,O,ye))});let k=p(`div`,D);m(D,k),o(k,`mt-3 flex flex-wrap gap-2`);let be=s(`rue:list:start`),xe=s(`rue:list:end`);m(k,be),m(k,xe);let Se=new Map;h(()=>{Se=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Se,parent:k,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(e,n,r,a,s)=>{v(_(()=>{let n=c(),r=p(`span`,n);m(n,r),h(()=>{t(r,`key`,String(e))}),o(r,`badge badge-outline`);let a=l(r);return m(r,a),h(()=>{i(a,e)}),n}),n,r)}})});let A=p(`div`,r);m(r,A),o(A,`grid gap-6`);let j=p(`div`,A);m(A,j),o(j,`card bg-base-100 shadow`);let M=p(`div`,j);m(j,M),o(M,`card-body gap-4`);let N=p(`div`,M);m(M,N),o(N,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let P=p(`span`,N);m(N,P),o(P,`badge badge-outline`),m(P,d(`当前 locale：`));let Ce=s(`rue:slot:anchor`);m(P,Ce),h(()=>{let e=C;g(()=>v(e,P,Ce))});let we=p(`span`,N);m(N,we),o(we,`badge badge-outline`),m(we,d(`fallback：en`));let F=p(`div`,M);m(M,F);let I=p(`div`,F);m(F,I),o(I,`text-3xl font-semibold`);let Te=s(`rue:slot:anchor`);m(I,Te),h(()=>{let e=u(`你好，{name}！`,{name:ce.get()},C);g(()=>v(e,I,Te))});let L=p(`div`,F);m(F,L),o(L,`mt-2 text-base-content/70`);let Ee=s(`rue:slot:anchor`);m(L,Ee),h(()=>{let e=u(`欢迎回来`,void 0,C);g(()=>v(e,L,Ee))});let De=s(`rue:slot:anchor`);m(F,De),h(()=>{let e=C===`ja-JP`?_(()=>{let e=c(),t=p(`div`,e);return m(e,t),o(t,`mt-2 text-xs text-base-content/50`),m(t,d(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),e}):``;g(()=>v(e,F,De))});let R=p(`div`,M);m(M,R),o(R,`grid gap-4 md:grid-cols-3`);let z=p(`div`,R);m(R,z),o(z,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Oe=p(`div`,z);m(z,Oe),o(Oe,`text-xs uppercase tracking-[0.24em] text-base-content/45`),m(Oe,d(`提醒`));let B=p(`div`,z);m(z,B),o(B,`mt-2 text-lg font-medium`);let ke=s(`rue:slot:anchor`);m(B,ke),h(()=>{let e=u(`你有 {count} 条新的提醒。`,{count:3},C);g(()=>v(e,B,ke))});let V=p(`div`,R);m(R,V),o(V,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Ae=p(`div`,V);m(V,Ae),o(Ae,`text-xs uppercase tracking-[0.24em] text-base-content/45`),m(Ae,d(`日期格式`));let H=p(`div`,V);m(V,H),o(H,`mt-2 text-lg font-medium`);let je=s(`rue:slot:anchor`);m(H,je),h(()=>{let e=f(`2026-05-23T09:00:00.000Z`,`long`,C);g(()=>v(e,H,je))});let U=p(`div`,R);m(R,U),o(U,`rounded-box border border-base-300 bg-base-200/50 p-4`);let W=p(`div`,U);m(U,W),o(W,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Me=s(`rue:slot:anchor`);m(W,Me),h(()=>{let e=u(`订单总计`,void 0,C);g(()=>v(e,W,Me))});let G=p(`div`,U);m(U,G),o(G,`mt-2 text-lg font-medium`);let Ne=s(`rue:slot:anchor`);m(G,Ne),h(()=>{let e=re(1299,`currency`,C);g(()=>v(e,G,Ne))});let K=p(`div`,M);m(M,K),o(K,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let q=p(`div`,K);m(K,q);let J=p(`div`,q);m(q,J),o(J,`text-sm font-medium`);let Pe=s(`rue:slot:anchor`);m(J,Pe),h(()=>{let e=u(`源文本就是 key。`,void 0,C);g(()=>v(e,J,Pe))});let Fe=p(`div`,q);m(q,Fe),o(Fe,`mt-1 text-sm text-base-content/65`),m(Fe,d(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=p(`button`,K);m(K,Ie),o(Ie,`btn btn-primary`);let Le=s(`rue:slot:anchor`);m(Ie,Le),h(()=>{let e=u(`立即结账`,void 0,C);g(()=>v(e,Ie,Le))});let Re=p(`div`,A);m(A,Re),o(Re,`card bg-base-100 shadow`);let Y=p(`div`,Re);m(Re,Y),o(Y,`card-body gap-3`);let ze=p(`h3`,Y);m(Y,ze),o(ze,`text-xl font-semibold`),m(ze,d(`源文本即 key`));let Be=p(`p`,Y);m(Y,Be),o(Be,`text-sm leading-6 text-base-content/70`),m(Be,d(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=p(`div`,Y);m(Y,X),o(X,`overflow-x-auto`);let Z=p(`table`,X);m(X,Z),o(Z,`table table-zebra`);let Ve=p(`thead`,Z);m(Z,Ve);let Q=p(`tr`,Ve);m(Ve,Q);let He=p(`th`,Q);m(Q,He),m(He,d(`源文本`));let Ue=p(`th`,Q);m(Q,Ue),m(Ue,d(`当前输出`));let $=p(`tbody`,Z);m(Z,$);let We=s(`rue:list:start`),Ge=s(`rue:list:end`);m($,We),m($,Ge);let Ke=new Map;return h(()=>{Ke=ne({items:ue.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(e,n,r,i,a)=>{v(_(()=>{let n=c(),r=p(`tr`,n);m(n,r),h(()=>{t(r,`key`,String(e.source))});let i=p(`td`,r);m(r,i),o(i,`font-mono text-xs md:text-sm`);let a=s(`rue:slot:anchor`);m(i,a),h(()=>{let t=e.source;g(()=>v(t,i,a))});let l=p(`td`,r);m(r,l);let u=s(`rue:slot:anchor`);return m(l,u),h(()=>{let t=e.rendered;g(()=>v(t,l,u))}),n}),n,r)}})}),r})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:t,nameRef:n,name:i}=y(`useSetup:0:0:dup1`,()=>e(()=>{let e=y(`useRef:1:2`,()=>a()),t=y(`useRef:1:3`,()=>a());return e.current||=S(),t.current||=y(`ref:1:4`,()=>f(`Alice`)),{i18nRef:e,nameRef:t,name:y(`computed:1:5`,()=>r(()=>t.current))}}));return _(e=>{let n=c(),r=s(`rue:component:anchor`);m(n,r);let a=te(C,{name:i.get()});return h(()=>{let e=te(x,{i18n:t.current,children:a});g(()=>v(e,n,r))}),n})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};