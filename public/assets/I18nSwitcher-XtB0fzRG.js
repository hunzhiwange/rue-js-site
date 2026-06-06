import{$ as e,Et as t,G as n,H as r,J as i,K as a,Tt as o,V as s,W as c,_t as l,d as u,dt as d,kt as f,l as p,ot as m,q as h,rt as ee,st as g,t as te,tt as _,xt as v}from"./vapor-runtime-ACs_OvwU.js";import{a as y,n as ne}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as re,r as b,t as x}from"./src-BtvYa1TZ.js";import{t as ie}from"./createHomeSplitExamplePage-DOBN78Vl.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=t=>u(n=>{let i=a(`label`,n);_(i,`form-control gap-2`);let o=a(`span`,i);r(i,o),_(o,`label-text font-medium`),r(o,h(`用户名`));let c=a(`input`,i);return r(i,c),e(c,`data-testid`,`i18n-user-name-input`),_(c,`input input-bordered`),f(()=>{m(c,t.name.value)}),s(c,`input`,e=>{t.name.value=e.target.value}),e(c,`placeholder`,`Alice`),i}),C=o=>{let{_:l,d:m,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:le,switchLocale:ue,previewRows:de,localeStatus:fe}=y(`useSetup:0:0`,()=>t(()=>{let{_:e,d:t,n,locale:r,availableLocales:i,isLocaleLoading:a,loadLocaleMessages:s}=b(),c=r.value,l=y(`computed:1:0`,()=>d(()=>o.name.value)),u=l,f=i.value.includes(`ja-JP`);return{_:e,d:t,n,locale:r,availableLocales:i,isLocaleLoading:a,loadLocaleMessages:s,currentLocale:c,currentName:l,japaneseLoaded:f,switchLocale:async e=>{e===`ja-JP`&&!f&&await s(`ja-JP`),r.value=e},previewRows:y(`computed:1:1`,()=>d(()=>[{source:`你好，{name}！`,rendered:e(`你好，{name}！`,{name:u.get()},c)},{source:`欢迎回来`,rendered:e(`欢迎回来`,void 0,c)},{source:`你有 {count} 条新的提醒。`,rendered:e(`你有 {count} 条新的提醒。`,{count:3},c)},{source:`立即结账`,rendered:e(`立即结账`,void 0,c)}])),localeStatus:a(`ja-JP`)?`ja-JP 语言包加载中...`:f?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`}}));return u(t=>{let d=a(`div`,t);_(d,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=a(`div`,d);r(d,y),_(y,`card bg-base-100 shadow`);let b=a(`div`,y);r(y,b),_(b,`card-body gap-4`);let x=a(`div`,b);r(b,x);let S=a(`div`,x);r(x,S),_(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(S,h(`控制台`));let le=a(`h2`,x);r(x,le),_(le,`mt-2 text-2xl font-semibold`),r(le,h(`语言切换与懒加载`));let pe=a(`p`,x);r(x,pe),_(pe,`mt-2 text-sm leading-6 text-base-content/70`),r(pe,h("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let me=c(`rue:component:anchor`);r(b,me),f(()=>{let e=te(se,{name:o.name});v(()=>p(e,b,me))});let w=a(`div`,b);r(b,w),_(w,`grid gap-2`);let he=a(`span`,w);r(w,he),_(he,`label-text font-medium`),r(he,h(`切换语言`));let T=a(`div`,w);r(w,T),_(T,`grid gap-2`);let ge=c(`rue:list:start`),_e=c(`rue:list:end`);r(T,ge),r(T,_e);let ve=new Map;f(()=>{ve=ne({items:ae||[],getKey:(e,t)=>e.id,elements:ve,parent:T,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,i,o,l,d)=>{p(u(()=>{let i=n(),o=C===t.id,l=t.id===`ja-JP`&&oe(`ja-JP`),u=a(`button`,i);r(i,u),f(()=>{e(u,`key`,String(t.id))}),f(()=>{_(u,String(`btn justify-between ${o?`btn-primary`:`btn-outline`}`))}),f(()=>{ee(u,l)}),s(u,`click`,()=>{ue(t.id)});let d=a(`span`,u);r(u,d);let m=c(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.label;v(()=>p(e,d,m))});let h=a(`span`,u);r(u,h),_(h,`text-xs opacity-70`);let g=c(`rue:slot:anchor`);return r(h,g),f(()=>{let e=l?`加载中...`:t.hint;v(()=>p(e,h,g))}),i}),i,o)}})});let E=a(`div`,b);r(b,E),_(E,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ye=a(`div`,E);r(E,ye),_(ye,`font-medium`),r(ye,h(`运行状态`));let D=a(`div`,E);r(E,D),_(D,`mt-2 text-base-content/70`);let be=i(D);r(D,be),f(()=>{g(be,fe)});let O=a(`div`,E);r(E,O),_(O,`mt-3 flex flex-wrap gap-2`);let xe=c(`rue:list:start`),Se=c(`rue:list:end`);r(O,xe),r(O,Se);let Ce=new Map;f(()=>{Ce=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Ce,parent:O,before:Se,singleRoot:!0,trackIndex:!1,start:xe,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`span`,o);r(o,s),f(()=>{e(s,`key`,String(t))}),_(s,`badge badge-outline`);let c=i(s);return r(s,c),f(()=>{g(c,t)}),o}),o,s)}})});let k=a(`div`,d);r(d,k),_(k,`grid gap-6`);let A=a(`div`,k);r(k,A),_(A,`card bg-base-100 shadow`);let j=a(`div`,A);r(A,j),_(j,`card-body gap-4`);let M=a(`div`,j);r(j,M),_(M,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let N=a(`span`,M);r(M,N),_(N,`badge badge-outline`),r(N,h(`当前 locale：`));let we=i(N);r(N,we),f(()=>{g(we,C)});let Te=a(`span`,M);r(M,Te),_(Te,`badge badge-outline`),r(Te,h(`fallback：en`));let P=a(`div`,j);r(j,P);let F=a(`div`,P);r(P,F),_(F,`text-3xl font-semibold`);let Ee=c(`rue:slot:anchor`);r(F,Ee),f(()=>{let e=l(`你好，{name}！`,{name:ce.get()},C);v(()=>p(e,F,Ee))});let I=a(`div`,P);r(P,I),_(I,`mt-2 text-base-content/70`);let De=c(`rue:slot:anchor`);r(I,De),f(()=>{let e=l(`欢迎回来`,void 0,C);v(()=>p(e,I,De))});let Oe=c(`rue:slot:anchor`);r(P,Oe),f(()=>{let e=C===`ja-JP`?u(()=>{let e=n(),t=a(`div`,e);return r(e,t),_(t,`mt-2 text-xs text-base-content/50`),r(t,h(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),e}):``;v(()=>p(e,P,Oe))});let L=a(`div`,j);r(j,L),_(L,`grid gap-4 md:grid-cols-3`);let R=a(`div`,L);r(L,R),_(R,`rounded-box border border-base-300 bg-base-200/50 p-4`);let ke=a(`div`,R);r(R,ke),_(ke,`text-xs uppercase tracking-[0.24em] text-base-content/45`),r(ke,h(`提醒`));let z=a(`div`,R);r(R,z),_(z,`mt-2 text-lg font-medium`);let Ae=c(`rue:slot:anchor`);r(z,Ae),f(()=>{let e=l(`你有 {count} 条新的提醒。`,{count:3},C);v(()=>p(e,z,Ae))});let B=a(`div`,L);r(L,B),_(B,`rounded-box border border-base-300 bg-base-200/50 p-4`);let je=a(`div`,B);r(B,je),_(je,`text-xs uppercase tracking-[0.24em] text-base-content/45`),r(je,h(`日期格式`));let V=a(`div`,B);r(B,V),_(V,`mt-2 text-lg font-medium`);let Me=c(`rue:slot:anchor`);r(V,Me),f(()=>{let e=m(`2026-05-23T09:00:00.000Z`,`long`,C);v(()=>p(e,V,Me))});let H=a(`div`,L);r(L,H),_(H,`rounded-box border border-base-300 bg-base-200/50 p-4`);let U=a(`div`,H);r(H,U),_(U,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Ne=c(`rue:slot:anchor`);r(U,Ne),f(()=>{let e=l(`订单总计`,void 0,C);v(()=>p(e,U,Ne))});let W=a(`div`,H);r(H,W),_(W,`mt-2 text-lg font-medium`);let Pe=c(`rue:slot:anchor`);r(W,Pe),f(()=>{let e=re(1299,`currency`,C);v(()=>p(e,W,Pe))});let G=a(`div`,j);r(j,G),_(G,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let K=a(`div`,G);r(G,K);let q=a(`div`,K);r(K,q),_(q,`text-sm font-medium`);let Fe=c(`rue:slot:anchor`);r(q,Fe),f(()=>{let e=l(`源文本就是 key。`,void 0,C);v(()=>p(e,q,Fe))});let Ie=a(`div`,K);r(K,Ie),_(Ie,`mt-1 text-sm text-base-content/65`),r(Ie,h(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let J=a(`button`,G);r(G,J),_(J,`btn btn-primary`);let Le=c(`rue:slot:anchor`);r(J,Le),f(()=>{let e=l(`立即结账`,void 0,C);v(()=>p(e,J,Le))});let Re=a(`div`,k);r(k,Re),_(Re,`card bg-base-100 shadow`);let Y=a(`div`,Re);r(Re,Y),_(Y,`card-body gap-3`);let ze=a(`h3`,Y);r(Y,ze),_(ze,`text-xl font-semibold`),r(ze,h(`源文本即 key`));let Be=a(`p`,Y);r(Y,Be),_(Be,`text-sm leading-6 text-base-content/70`),r(Be,h(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=a(`div`,Y);r(Y,X),_(X,`overflow-x-auto`);let Z=a(`table`,X);r(X,Z),_(Z,`table table-zebra`);let Ve=a(`thead`,Z);r(Z,Ve);let Q=a(`tr`,Ve);r(Ve,Q);let He=a(`th`,Q);r(Q,He),r(He,h(`源文本`));let Ue=a(`th`,Q);r(Q,Ue),r(Ue,h(`当前输出`));let $=a(`tbody`,Z);r(Z,$);let We=c(`rue:list:start`),Ge=c(`rue:list:end`);r($,We),r($,Ge);let Ke=new Map;return f(()=>{Ke=ne({items:de.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`tr`,i);r(i,o),f(()=>{e(o,`key`,String(t.source))});let s=a(`td`,o);r(o,s),_(s,`font-mono text-xs md:text-sm`);let l=c(`rue:slot:anchor`);r(s,l),f(()=>{let e=t.source;v(()=>p(e,s,l))});let u=a(`td`,o);r(o,u);let d=c(`rue:slot:anchor`);return r(u,d),f(()=>{let e=t.rendered;v(()=>p(e,u,d))}),i}),i,o)}})}),d})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:e,nameRef:i,name:a}=y(`useSetup:0:0:dup1`,()=>t(()=>{let e=y(`useRef:1:2`,()=>o()),t=y(`useRef:1:3`,()=>o());return e.current||=S(),t.current||=y(`ref:1:4`,()=>l(`Alice`)),{i18nRef:e,nameRef:t,name:t.current}}));return u(t=>{let i=n(),o=c(`rue:component:anchor`);r(i,o);let s=te(C,{name:a});return f(()=>{let t=te(x,{i18n:e.current,children:s});v(()=>p(t,i,o))}),i})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};