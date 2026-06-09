import{$ as e,Ht as t,J as n,Kt as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,_t as l,ct as u,et as d,l as f,mt as p,ot as m,pt as h,qt as g,s as _,t as v,tt as ee,ut as te}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as ne}from"./vapor-helpers-vapor-gtGwiIv0.js";import{n as re,r as b,t as x}from"./src-3_u4kCO0.js";import{t as ie}from"./createHomeSplitExamplePage-CJbW_xoB.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=t=>f(r=>{let i=e(`label`,r);u(i,`form-control gap-2`);let a=e(`span`,i);s(i,a),u(a,`label-text font-medium`),s(a,d(`用户名`));let c=e(`input`,i);return s(i,c),m(c,`data-testid`,`i18n-user-name-input`),u(c,`input input-bordered`),o(()=>{h(c,t.name.value)}),n(c,`input`,e=>{t.name.value=e.target.value}),m(c,`placeholder`,`Alice`),i}),C=r=>{let{_:a,d:h,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:w}=y(`useSetup:0:0`,()=>g(()=>{let{_:e,d:t,n,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=b();return{_:e,d:t,n,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:y(`computed:1:0`,()=>l(()=>r.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),le=async e=>{e===`ja-JP`&&!w&&await S(`ja-JP`),x.value=e},ue=y(`computed:1:1`,()=>l(()=>[{source:`你好，{name}！`,rendered:a(`你好，{name}！`,{name:__rue_phase2_currentName.get()},C)},{source:`欢迎回来`,rendered:a(`欢迎回来`,void 0,C)},{source:`你有 {count} 条新的提醒。`,rendered:a(`你有 {count} 条新的提醒。`,{count:3},C)},{source:`立即结账`,rendered:a(`立即结账`,void 0,C)}])),de=oe(`ja-JP`)?`ja-JP 语言包加载中...`:w?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return f(l=>{let g=e(`div`,l);u(g,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=e(`div`,g);s(g,y),u(y,`card bg-base-100 shadow`);let b=e(`div`,y);s(y,b),u(b,`card-body gap-4`);let x=e(`div`,b);s(b,x);let S=e(`div`,x);s(x,S),u(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(S,d(`控制台`));let w=e(`h2`,x);s(x,w),u(w,`mt-2 text-2xl font-semibold`),s(w,d(`语言切换与懒加载`));let fe=e(`p`,x);s(x,fe),u(fe,`mt-2 text-sm leading-6 text-base-content/70`),s(fe,d("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let pe=c(`rue:component:anchor`);s(b,pe),o(()=>{let e=v(se,{name:r.name});t(()=>_(e,b,pe))});let T=e(`div`,b);s(b,T),u(T,`grid gap-2`);let me=e(`span`,T);s(T,me),u(me,`label-text font-medium`),s(me,d(`切换语言`));let E=e(`div`,T);s(T,E),u(E,`grid gap-2`);let he=c(`rue:list:start`),ge=c(`rue:list:end`);s(E,he),s(E,ge);let _e=new Map;o(()=>{_e=ne({items:ae||[],getKey:(e,t)=>e.id,elements:_e,parent:E,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(r,a,l,d,p)=>{_(f(()=>{let a=i(),l=C===r.id,d=r.id===`ja-JP`&&oe(`ja-JP`),f=e(`button`,a);s(a,f),o(()=>{m(f,`key`,String(r.id))}),o(()=>{u(f,String(`btn justify-between ${l?`btn-primary`:`btn-outline`}`))}),o(()=>{te(f,d)}),n(f,`click`,()=>{le(r.id)});let p=e(`span`,f);s(f,p);let h=c(`rue:slot:anchor`);s(p,h),o(()=>{let e=r.label;t(()=>_(e,p,h))});let g=e(`span`,f);s(f,g),u(g,`text-xs opacity-70`);let v=c(`rue:slot:anchor`);return s(g,v),o(()=>{let e=d?`加载中...`:r.hint;t(()=>_(e,g,v))}),a}),a,l)}})});let D=e(`div`,b);s(b,D),u(D,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ve=e(`div`,D);s(D,ve),u(ve,`font-medium`),s(ve,d(`运行状态`));let O=e(`div`,D);s(D,O),u(O,`mt-2 text-base-content/70`);let ye=ee(O);s(O,ye),o(()=>{p(ye,de)});let k=e(`div`,D);s(D,k),u(k,`mt-3 flex flex-wrap gap-2`);let be=c(`rue:list:start`),xe=c(`rue:list:end`);s(k,be),s(k,xe);let Se=new Map;o(()=>{Se=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Se,parent:k,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(t,n,r,a,c)=>{_(f(()=>{let n=i(),r=e(`span`,n);s(n,r),o(()=>{m(r,`key`,String(t))}),u(r,`badge badge-outline`);let a=ee(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})});let A=e(`div`,g);s(g,A),u(A,`grid gap-6`);let j=e(`div`,A);s(A,j),u(j,`card bg-base-100 shadow`);let M=e(`div`,j);s(j,M),u(M,`card-body gap-4`);let N=e(`div`,M);s(M,N),u(N,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let P=e(`span`,N);s(N,P),u(P,`badge badge-outline`),s(P,d(`当前 locale：`));let Ce=ee(P);s(P,Ce),o(()=>{p(Ce,C)});let we=e(`span`,N);s(N,we),u(we,`badge badge-outline`),s(we,d(`fallback：en`));let F=e(`div`,M);s(M,F);let I=e(`div`,F);s(F,I),u(I,`text-3xl font-semibold`);let Te=c(`rue:slot:anchor`);s(I,Te),o(()=>{let e=a(`你好，{name}！`,{name:ce.get()},C);t(()=>_(e,I,Te))});let L=e(`div`,F);s(F,L),u(L,`mt-2 text-base-content/70`);let Ee=c(`rue:slot:anchor`);s(L,Ee),o(()=>{let e=a(`欢迎回来`,void 0,C);t(()=>_(e,L,Ee))});let De=c(`rue:slot:anchor`);s(F,De),o(()=>{let n=C===`ja-JP`?f(()=>{let t=i(),n=e(`div`,t);return s(t,n),u(n,`mt-2 text-xs text-base-content/50`),s(n,d(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),t}):``;t(()=>_(n,F,De))});let R=e(`div`,M);s(M,R),u(R,`grid gap-4 md:grid-cols-3`);let z=e(`div`,R);s(R,z),u(z,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Oe=e(`div`,z);s(z,Oe),u(Oe,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Oe,d(`提醒`));let B=e(`div`,z);s(z,B),u(B,`mt-2 text-lg font-medium`);let ke=c(`rue:slot:anchor`);s(B,ke),o(()=>{let e=a(`你有 {count} 条新的提醒。`,{count:3},C);t(()=>_(e,B,ke))});let V=e(`div`,R);s(R,V),u(V,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Ae=e(`div`,V);s(V,Ae),u(Ae,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Ae,d(`日期格式`));let H=e(`div`,V);s(V,H),u(H,`mt-2 text-lg font-medium`);let je=c(`rue:slot:anchor`);s(H,je),o(()=>{let e=h(`2026-05-23T09:00:00.000Z`,`long`,C);t(()=>_(e,H,je))});let U=e(`div`,R);s(R,U),u(U,`rounded-box border border-base-300 bg-base-200/50 p-4`);let W=e(`div`,U);s(U,W),u(W,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Me=c(`rue:slot:anchor`);s(W,Me),o(()=>{let e=a(`订单总计`,void 0,C);t(()=>_(e,W,Me))});let G=e(`div`,U);s(U,G),u(G,`mt-2 text-lg font-medium`);let Ne=c(`rue:slot:anchor`);s(G,Ne),o(()=>{let e=re(1299,`currency`,C);t(()=>_(e,G,Ne))});let K=e(`div`,M);s(M,K),u(K,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let q=e(`div`,K);s(K,q);let J=e(`div`,q);s(q,J),u(J,`text-sm font-medium`);let Pe=c(`rue:slot:anchor`);s(J,Pe),o(()=>{let e=a(`源文本就是 key。`,void 0,C);t(()=>_(e,J,Pe))});let Fe=e(`div`,q);s(q,Fe),u(Fe,`mt-1 text-sm text-base-content/65`),s(Fe,d(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=e(`button`,K);s(K,Ie),u(Ie,`btn btn-primary`);let Le=c(`rue:slot:anchor`);s(Ie,Le),o(()=>{let e=a(`立即结账`,void 0,C);t(()=>_(e,Ie,Le))});let Re=e(`div`,A);s(A,Re),u(Re,`card bg-base-100 shadow`);let Y=e(`div`,Re);s(Re,Y),u(Y,`card-body gap-3`);let ze=e(`h3`,Y);s(Y,ze),u(ze,`text-xl font-semibold`),s(ze,d(`源文本即 key`));let Be=e(`p`,Y);s(Y,Be),u(Be,`text-sm leading-6 text-base-content/70`),s(Be,d(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=e(`div`,Y);s(Y,X),u(X,`overflow-x-auto`);let Z=e(`table`,X);s(X,Z),u(Z,`table table-zebra`);let Ve=e(`thead`,Z);s(Z,Ve);let Q=e(`tr`,Ve);s(Ve,Q);let He=e(`th`,Q);s(Q,He),s(He,d(`源文本`));let Ue=e(`th`,Q);s(Q,Ue),s(Ue,d(`当前输出`));let $=e(`tbody`,Z);s(Z,$);let We=c(`rue:list:start`),Ge=c(`rue:list:end`);s($,We),s($,Ge);let Ke=new Map;return o(()=>{Ke=ne({items:ue.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(n,r,a,l,d)=>{_(f(()=>{let r=i(),a=e(`tr`,r);s(r,a),o(()=>{m(a,`key`,String(n.source))});let l=e(`td`,a);s(a,l),u(l,`font-mono text-xs md:text-sm`);let d=c(`rue:slot:anchor`);s(l,d),o(()=>{let e=n.source;t(()=>_(e,l,d))});let f=e(`td`,a);s(a,f);let p=c(`rue:slot:anchor`);return s(f,p),o(()=>{let e=n.rendered;t(()=>_(e,f,p))}),r}),r,a)}})}),g})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:e,nameRef:n,name:l}=y(`useSetup:0:0:dup1`,()=>g(()=>{let e=y(`useRef:1:2`,()=>r()),t=y(`useRef:1:3`,()=>r());return e.current||=S(),t.current||=y(`ref:1:4`,()=>a(`Alice`)),{i18nRef:e,nameRef:t,name:t.current}}));return f(n=>{let r=i(),a=c(`rue:component:anchor`);s(r,a);let u=v(C,{name:l});return o(()=>{let n=v(x,{i18n:e.current,children:u});t(()=>_(n,r,a))}),r})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};