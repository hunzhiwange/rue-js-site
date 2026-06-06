import{$ as e,Gt as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,gt as f,l as p,mt as m,ot as h,pt as g,s as _,t as v,tt as ee,ut as te}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as ne}from"./vapor-helpers-vapor-CJFAWine.js";import{n as re,r as b,t as x}from"./src-DBVdLkuq.js";import{t as ie}from"./createHomeSplitExamplePage-BB_cTfze.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=t=>p(r=>{let i=e(`label`,r);u(i,`form-control gap-2`);let a=e(`span`,i);s(i,a),u(a,`label-text font-medium`),s(a,d(`用户名`));let o=e(`input`,i);return s(i,o),h(o,`data-testid`,`i18n-user-name-input`),u(o,`input input-bordered`),c(()=>{g(o,t.name.value)}),n(o,`input`,e=>{t.name.value=e.target.value}),h(o,`placeholder`,`Alice`),i}),C=t=>{let{_:i,d:g,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:w}=y(`useSetup:0:0`,()=>r(()=>{let{_:e,d:n,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=b();return{_:e,d:n,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:y(`computed:1:0`,()=>f(()=>t.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),le=async e=>{e===`ja-JP`&&!w&&await S(`ja-JP`),x.value=e},ue=y(`computed:1:1`,()=>f(()=>[{source:`你好，{name}！`,rendered:i(`你好，{name}！`,{name:__rue_phase2_currentName.get()},C)},{source:`欢迎回来`,rendered:i(`欢迎回来`,void 0,C)},{source:`你有 {count} 条新的提醒。`,rendered:i(`你有 {count} 条新的提醒。`,{count:3},C)},{source:`立即结账`,rendered:i(`立即结账`,void 0,C)}])),de=oe(`ja-JP`)?`ja-JP 语言包加载中...`:w?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return p(r=>{let f=e(`div`,r);u(f,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=e(`div`,f);s(f,y),u(y,`card bg-base-100 shadow`);let b=e(`div`,y);s(y,b),u(b,`card-body gap-4`);let x=e(`div`,b);s(b,x);let S=e(`div`,x);s(x,S),u(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(S,d(`控制台`));let w=e(`h2`,x);s(x,w),u(w,`mt-2 text-2xl font-semibold`),s(w,d(`语言切换与懒加载`));let fe=e(`p`,x);s(x,fe),u(fe,`mt-2 text-sm leading-6 text-base-content/70`),s(fe,d("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let pe=l(`rue:component:anchor`);s(b,pe),c(()=>{let e=v(se,{name:t.name});o(()=>_(e,b,pe))});let T=e(`div`,b);s(b,T),u(T,`grid gap-2`);let me=e(`span`,T);s(T,me),u(me,`label-text font-medium`),s(me,d(`切换语言`));let E=e(`div`,T);s(T,E),u(E,`grid gap-2`);let he=l(`rue:list:start`),ge=l(`rue:list:end`);s(E,he),s(E,ge);let _e=new Map;c(()=>{_e=ne({items:ae||[],getKey:(e,t)=>e.id,elements:_e,parent:E,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(t,r,i,d,f)=>{_(p(()=>{let r=a(),i=C===t.id,d=t.id===`ja-JP`&&oe(`ja-JP`),f=e(`button`,r);s(r,f),c(()=>{h(f,`key`,String(t.id))}),c(()=>{u(f,String(`btn justify-between ${i?`btn-primary`:`btn-outline`}`))}),c(()=>{te(f,d)}),n(f,`click`,()=>{le(t.id)});let p=e(`span`,f);s(f,p);let m=l(`rue:slot:anchor`);s(p,m),c(()=>{let e=t.label;o(()=>_(e,p,m))});let g=e(`span`,f);s(f,g),u(g,`text-xs opacity-70`);let v=l(`rue:slot:anchor`);return s(g,v),c(()=>{let e=d?`加载中...`:t.hint;o(()=>_(e,g,v))}),r}),r,i)}})});let D=e(`div`,b);s(b,D),u(D,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ve=e(`div`,D);s(D,ve),u(ve,`font-medium`),s(ve,d(`运行状态`));let O=e(`div`,D);s(D,O),u(O,`mt-2 text-base-content/70`);let ye=ee(O);s(O,ye),c(()=>{m(ye,de)});let k=e(`div`,D);s(D,k),u(k,`mt-3 flex flex-wrap gap-2`);let be=l(`rue:list:start`),xe=l(`rue:list:end`);s(k,be),s(k,xe);let Se=new Map;c(()=>{Se=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Se,parent:k,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(t,n,r,i,o)=>{_(p(()=>{let n=a(),r=e(`span`,n);s(n,r),c(()=>{h(r,`key`,String(t))}),u(r,`badge badge-outline`);let i=ee(r);return s(r,i),c(()=>{m(i,t)}),n}),n,r)}})});let A=e(`div`,f);s(f,A),u(A,`grid gap-6`);let j=e(`div`,A);s(A,j),u(j,`card bg-base-100 shadow`);let M=e(`div`,j);s(j,M),u(M,`card-body gap-4`);let N=e(`div`,M);s(M,N),u(N,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let P=e(`span`,N);s(N,P),u(P,`badge badge-outline`),s(P,d(`当前 locale：`));let Ce=ee(P);s(P,Ce),c(()=>{m(Ce,C)});let we=e(`span`,N);s(N,we),u(we,`badge badge-outline`),s(we,d(`fallback：en`));let F=e(`div`,M);s(M,F);let I=e(`div`,F);s(F,I),u(I,`text-3xl font-semibold`);let Te=l(`rue:slot:anchor`);s(I,Te),c(()=>{let e=i(`你好，{name}！`,{name:ce.get()},C);o(()=>_(e,I,Te))});let L=e(`div`,F);s(F,L),u(L,`mt-2 text-base-content/70`);let Ee=l(`rue:slot:anchor`);s(L,Ee),c(()=>{let e=i(`欢迎回来`,void 0,C);o(()=>_(e,L,Ee))});let De=l(`rue:slot:anchor`);s(F,De),c(()=>{let t=C===`ja-JP`?p(()=>{let t=a(),n=e(`div`,t);return s(t,n),u(n,`mt-2 text-xs text-base-content/50`),s(n,d(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),t}):``;o(()=>_(t,F,De))});let R=e(`div`,M);s(M,R),u(R,`grid gap-4 md:grid-cols-3`);let z=e(`div`,R);s(R,z),u(z,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Oe=e(`div`,z);s(z,Oe),u(Oe,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Oe,d(`提醒`));let B=e(`div`,z);s(z,B),u(B,`mt-2 text-lg font-medium`);let ke=l(`rue:slot:anchor`);s(B,ke),c(()=>{let e=i(`你有 {count} 条新的提醒。`,{count:3},C);o(()=>_(e,B,ke))});let V=e(`div`,R);s(R,V),u(V,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Ae=e(`div`,V);s(V,Ae),u(Ae,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Ae,d(`日期格式`));let H=e(`div`,V);s(V,H),u(H,`mt-2 text-lg font-medium`);let je=l(`rue:slot:anchor`);s(H,je),c(()=>{let e=g(`2026-05-23T09:00:00.000Z`,`long`,C);o(()=>_(e,H,je))});let U=e(`div`,R);s(R,U),u(U,`rounded-box border border-base-300 bg-base-200/50 p-4`);let W=e(`div`,U);s(U,W),u(W,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Me=l(`rue:slot:anchor`);s(W,Me),c(()=>{let e=i(`订单总计`,void 0,C);o(()=>_(e,W,Me))});let G=e(`div`,U);s(U,G),u(G,`mt-2 text-lg font-medium`);let Ne=l(`rue:slot:anchor`);s(G,Ne),c(()=>{let e=re(1299,`currency`,C);o(()=>_(e,G,Ne))});let K=e(`div`,M);s(M,K),u(K,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let q=e(`div`,K);s(K,q);let J=e(`div`,q);s(q,J),u(J,`text-sm font-medium`);let Pe=l(`rue:slot:anchor`);s(J,Pe),c(()=>{let e=i(`源文本就是 key。`,void 0,C);o(()=>_(e,J,Pe))});let Fe=e(`div`,q);s(q,Fe),u(Fe,`mt-1 text-sm text-base-content/65`),s(Fe,d(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=e(`button`,K);s(K,Ie),u(Ie,`btn btn-primary`);let Le=l(`rue:slot:anchor`);s(Ie,Le),c(()=>{let e=i(`立即结账`,void 0,C);o(()=>_(e,Ie,Le))});let Re=e(`div`,A);s(A,Re),u(Re,`card bg-base-100 shadow`);let Y=e(`div`,Re);s(Re,Y),u(Y,`card-body gap-3`);let ze=e(`h3`,Y);s(Y,ze),u(ze,`text-xl font-semibold`),s(ze,d(`源文本即 key`));let Be=e(`p`,Y);s(Y,Be),u(Be,`text-sm leading-6 text-base-content/70`),s(Be,d(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=e(`div`,Y);s(Y,X),u(X,`overflow-x-auto`);let Z=e(`table`,X);s(X,Z),u(Z,`table table-zebra`);let Ve=e(`thead`,Z);s(Z,Ve);let Q=e(`tr`,Ve);s(Ve,Q);let He=e(`th`,Q);s(Q,He),s(He,d(`源文本`));let Ue=e(`th`,Q);s(Q,Ue),s(Ue,d(`当前输出`));let $=e(`tbody`,Z);s(Z,$);let We=l(`rue:list:start`),Ge=l(`rue:list:end`);s($,We),s($,Ge);let Ke=new Map;return c(()=>{Ke=ne({items:ue.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(t,n,r,i,d)=>{_(p(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{h(r,`key`,String(t.source))});let i=e(`td`,r);s(r,i),u(i,`font-mono text-xs md:text-sm`);let d=l(`rue:slot:anchor`);s(i,d),c(()=>{let e=t.source;o(()=>_(e,i,d))});let f=e(`td`,r);s(r,f);let p=l(`rue:slot:anchor`);return s(f,p),c(()=>{let e=t.rendered;o(()=>_(e,f,p))}),n}),n,r)}})}),f})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:e,nameRef:n,name:u}=y(`useSetup:0:0:dup1`,()=>r(()=>{let e=y(`useRef:1:2`,()=>t()),n=y(`useRef:1:3`,()=>t());return e.current||=S(),n.current||=y(`ref:1:4`,()=>i(`Alice`)),{i18nRef:e,nameRef:n,name:n.current}}));return p(t=>{let n=a(),r=l(`rue:component:anchor`);s(n,r);let i=v(C,{name:u});return c(()=>{let t=v(x,{i18n:e.current,children:i});o(()=>_(t,n,r))}),n})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};