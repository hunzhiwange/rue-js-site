import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,ft as d,gt as f,l as p,lt as ee,pt as m,q as te,qt as h,s as g,st as _,t as ne}from"./vapor-runtime-iQZthBPQ.js";import{a as v,n as re}from"./vapor-helpers-vapor-BjKHCvOa.js";import{n as ie,r as y,t as b}from"./src-B35uAcNp.js";import{t as ae}from"./createHomeSplitExamplePage-C98rg19g.js";var oe=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],se=e=>new Promise(t=>setTimeout(t,e)),x=()=>ie({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await se(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),ce=t=>p(r=>{let i=a(`label`,r);_(i,`form-control gap-2`);let o=a(`span`,i);n(i,o),_(o,`label-text font-medium`),n(o,e(`用户名`));let c=a(`input`,i);return n(i,c),l(c,`data-testid`,`i18n-user-name-input`),_(c,`input input-bordered`),s(()=>{d(c,t.name.value)}),te(c,`input`,e=>{t.name.value=e.target.value}),l(c,`placeholder`,`Alice`),i}),S=r=>{let{_:i,d,n:ie,locale:b,availableLocales:ae,isLocaleLoading:se,loadLocaleMessages:x,currentLocale:S,currentName:le,japaneseLoaded:C}=v(`useSetup:0:0`,()=>h(()=>{let{_:e,d:t,n,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=y();return{_:e,d:t,n,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:v(`computed:1:0`,()=>f(()=>r.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),ue=async e=>{e===`ja-JP`&&!C&&await x(`ja-JP`),b.value=e},de=v(`computed:1:1`,()=>f(()=>[{source:`你好，{name}！`,rendered:i(`你好，{name}！`,{name:__rue_phase2_currentName.get()},S)},{source:`欢迎回来`,rendered:i(`欢迎回来`,void 0,S)},{source:`你有 {count} 条新的提醒。`,rendered:i(`你有 {count} 条新的提醒。`,{count:3},S)},{source:`立即结账`,rendered:i(`立即结账`,void 0,S)}])),fe=se(`ja-JP`)?`ja-JP 语言包加载中...`:C?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return p(f=>{let h=a(`div`,f);_(h,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let v=a(`div`,h);n(h,v),_(v,`card bg-base-100 shadow`);let y=a(`div`,v);n(v,y),_(y,`card-body gap-4`);let b=a(`div`,y);n(y,b);let x=a(`div`,b);n(b,x),_(x,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(x,e(`控制台`));let C=a(`h2`,b);n(b,C),_(C,`mt-2 text-2xl font-semibold`),n(C,e(`语言切换与懒加载`));let pe=a(`p`,b);n(b,pe),_(pe,`mt-2 text-sm leading-6 text-base-content/70`),n(pe,e("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let me=o(`rue:component:anchor`);n(y,me),s(()=>{let e=ne(ce,{name:r.name});t(()=>g(e,y,me))});let w=a(`div`,y);n(y,w),_(w,`grid gap-2`);let he=a(`span`,w);n(w,he),_(he,`label-text font-medium`),n(he,e(`切换语言`));let T=a(`div`,w);n(w,T),_(T,`grid gap-2`);let ge=o(`rue:list:start`),_e=o(`rue:list:end`);n(T,ge),n(T,_e);let ve=new Map;s(()=>{ve=re({items:oe||[],getKey:(e,t)=>e.id,elements:ve,parent:T,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(e,r,i,u,d)=>{g(p(()=>{let r=c(),i=S===e.id,u=e.id===`ja-JP`&&se(`ja-JP`),d=a(`button`,r);n(r,d),s(()=>{l(d,`key`,String(e.id))}),s(()=>{_(d,`btn justify-between ${i?`btn-primary`:`btn-outline`}`)}),s(()=>{ee(d,u)}),te(d,`click`,()=>{ue(e.id)});let f=a(`span`,d);n(d,f);let p=o(`rue:slot:anchor`);n(f,p),s(()=>{let n=e.label;t(()=>g(n,f,p))});let m=a(`span`,d);n(d,m),_(m,`text-xs opacity-70`);let h=o(`rue:slot:anchor`);return n(m,h),s(()=>{let n=u?`加载中...`:e.hint;t(()=>g(n,m,h))}),r}),r,i)}})});let E=a(`div`,y);n(y,E),_(E,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ye=a(`div`,E);n(E,ye),_(ye,`font-medium`),n(ye,e(`运行状态`));let D=a(`div`,E);n(E,D),_(D,`mt-2 text-base-content/70`);let be=o(`rue:slot:anchor`);n(D,be),s(()=>{let e=fe;t(()=>g(e,D,be))});let O=a(`div`,E);n(E,O),_(O,`mt-3 flex flex-wrap gap-2`);let xe=o(`rue:list:start`),Se=o(`rue:list:end`);n(O,xe),n(O,Se);let Ce=new Map;s(()=>{Ce=re({items:ae.value||[],getKey:(e,t)=>e,elements:Ce,parent:O,before:Se,singleRoot:!0,trackIndex:!1,start:xe,renderItem:(e,t,r,i,o)=>{g(p(()=>{let t=c(),r=a(`span`,t);n(t,r),s(()=>{l(r,`key`,String(e))}),_(r,`badge badge-outline`);let i=u(r);return n(r,i),s(()=>{m(i,e)}),t}),t,r)}})});let k=a(`div`,h);n(h,k),_(k,`grid gap-6`);let A=a(`div`,k);n(k,A),_(A,`card bg-base-100 shadow`);let j=a(`div`,A);n(A,j),_(j,`card-body gap-4`);let M=a(`div`,j);n(j,M),_(M,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let N=a(`span`,M);n(M,N),_(N,`badge badge-outline`),n(N,e(`当前 locale：`));let we=o(`rue:slot:anchor`);n(N,we),s(()=>{let e=S;t(()=>g(e,N,we))});let Te=a(`span`,M);n(M,Te),_(Te,`badge badge-outline`),n(Te,e(`fallback：en`));let P=a(`div`,j);n(j,P);let F=a(`div`,P);n(P,F),_(F,`text-3xl font-semibold`);let Ee=o(`rue:slot:anchor`);n(F,Ee),s(()=>{let e=i(`你好，{name}！`,{name:le.get()},S);t(()=>g(e,F,Ee))});let I=a(`div`,P);n(P,I),_(I,`mt-2 text-base-content/70`);let De=o(`rue:slot:anchor`);n(I,De),s(()=>{let e=i(`欢迎回来`,void 0,S);t(()=>g(e,I,De))});let Oe=o(`rue:slot:anchor`);n(P,Oe),s(()=>{let r=S===`ja-JP`?p(()=>{let t=c(),r=a(`div`,t);return n(t,r),_(r,`mt-2 text-xs text-base-content/50`),n(r,e(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),t}):``;t(()=>g(r,P,Oe))});let L=a(`div`,j);n(j,L),_(L,`grid gap-4 md:grid-cols-3`);let R=a(`div`,L);n(L,R),_(R,`rounded-box border border-base-300 bg-base-200/50 p-4`);let ke=a(`div`,R);n(R,ke),_(ke,`text-xs uppercase tracking-[0.24em] text-base-content/45`),n(ke,e(`提醒`));let z=a(`div`,R);n(R,z),_(z,`mt-2 text-lg font-medium`);let Ae=o(`rue:slot:anchor`);n(z,Ae),s(()=>{let e=i(`你有 {count} 条新的提醒。`,{count:3},S);t(()=>g(e,z,Ae))});let B=a(`div`,L);n(L,B),_(B,`rounded-box border border-base-300 bg-base-200/50 p-4`);let je=a(`div`,B);n(B,je),_(je,`text-xs uppercase tracking-[0.24em] text-base-content/45`),n(je,e(`日期格式`));let V=a(`div`,B);n(B,V),_(V,`mt-2 text-lg font-medium`);let Me=o(`rue:slot:anchor`);n(V,Me),s(()=>{let e=d(`2026-05-23T09:00:00.000Z`,`long`,S);t(()=>g(e,V,Me))});let H=a(`div`,L);n(L,H),_(H,`rounded-box border border-base-300 bg-base-200/50 p-4`);let U=a(`div`,H);n(H,U),_(U,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Ne=o(`rue:slot:anchor`);n(U,Ne),s(()=>{let e=i(`订单总计`,void 0,S);t(()=>g(e,U,Ne))});let W=a(`div`,H);n(H,W),_(W,`mt-2 text-lg font-medium`);let Pe=o(`rue:slot:anchor`);n(W,Pe),s(()=>{let e=ie(1299,`currency`,S);t(()=>g(e,W,Pe))});let G=a(`div`,j);n(j,G),_(G,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let K=a(`div`,G);n(G,K);let q=a(`div`,K);n(K,q),_(q,`text-sm font-medium`);let Fe=o(`rue:slot:anchor`);n(q,Fe),s(()=>{let e=i(`源文本就是 key。`,void 0,S);t(()=>g(e,q,Fe))});let Ie=a(`div`,K);n(K,Ie),_(Ie,`mt-1 text-sm text-base-content/65`),n(Ie,e(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let J=a(`button`,G);n(G,J),_(J,`btn btn-primary`);let Le=o(`rue:slot:anchor`);n(J,Le),s(()=>{let e=i(`立即结账`,void 0,S);t(()=>g(e,J,Le))});let Re=a(`div`,k);n(k,Re),_(Re,`card bg-base-100 shadow`);let Y=a(`div`,Re);n(Re,Y),_(Y,`card-body gap-3`);let ze=a(`h3`,Y);n(Y,ze),_(ze,`text-xl font-semibold`),n(ze,e(`源文本即 key`));let Be=a(`p`,Y);n(Y,Be),_(Be,`text-sm leading-6 text-base-content/70`),n(Be,e(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=a(`div`,Y);n(Y,X),_(X,`overflow-x-auto`);let Z=a(`table`,X);n(X,Z),_(Z,`table table-zebra`);let Ve=a(`thead`,Z);n(Z,Ve);let Q=a(`tr`,Ve);n(Ve,Q);let He=a(`th`,Q);n(Q,He),n(He,e(`源文本`));let Ue=a(`th`,Q);n(Q,Ue),n(Ue,e(`当前输出`));let $=a(`tbody`,Z);n(Z,$);let We=o(`rue:list:start`),Ge=o(`rue:list:end`);n($,We),n($,Ge);let Ke=new Map;return s(()=>{Ke=re({items:de.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(e,r,i,u,d)=>{g(p(()=>{let r=c(),i=a(`tr`,r);n(r,i),s(()=>{l(i,`key`,String(e.source))});let u=a(`td`,i);n(i,u),_(u,`font-mono text-xs md:text-sm`);let d=o(`rue:slot:anchor`);n(u,d),s(()=>{let n=e.source;t(()=>g(n,u,d))});let f=a(`td`,i);n(i,f);let p=o(`rue:slot:anchor`);return n(f,p),s(()=>{let n=e.rendered;t(()=>g(n,f,p))}),r}),r,i)}})}),h})},le=ae({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:e,nameRef:a,name:l}=v(`useSetup:0:0:dup1`,()=>h(()=>{let e=v(`useRef:1:2`,()=>r()),t=v(`useRef:1:3`,()=>r());return e.current||=x(),t.current||=v(`ref:1:4`,()=>i(`Alice`)),{i18nRef:e,nameRef:t,name:v(`computed:1:5`,()=>f(()=>t.current))}}));return p(r=>{let i=c(),a=o(`rue:component:anchor`);n(i,a);let u=ne(S,{name:l.get()});return s(()=>{let n=ne(b,{i18n:e.current,children:u});t(()=>g(n,i,a))}),i})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{le as default};