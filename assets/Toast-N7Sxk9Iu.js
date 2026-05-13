import{C as e,F as t,G as n,I as r,L as i,M as a,P as o,R as s,S as c,U as l,Z as u,_ as d,_t as f,bt as p,c as m,gt as h,lt as g,pt as _,t as v,u as y,vt as b,yt as x}from"./vapor-runtime-D3a-68js.js";import{a as S,n as ee}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as C,t as w}from"./src-BfQKH6_d.js";import{n as te}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as ne}from"./Code-2C2psoH3.js";import{t as re}from"./tabs-BgQmsOey.js";var T={"top-start":{horizontal:`start`,vertical:`top`},top:{horizontal:`center`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},middle:{horizontal:`center`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},bottom:{horizontal:`center`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`},start:{horizontal:`start`,vertical:`bottom`},center:{horizontal:`center`,vertical:`middle`},end:{horizontal:`end`,vertical:`bottom`}},E=e=>typeof e==`number`?`${e}px`:e,D=(...e)=>e.filter(Boolean).join(` `),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=e=>O(e).length>0,A=e=>{if(e==null)return null;if(typeof e==`object`){let t={},n=E(e.x),r=E(e.y);return n!=null&&(t.paddingInline=n),r!=null&&(t.paddingBlock=r),Object.keys(t).length?t:null}let t=E(e);return t==null?null:{padding:t}},ie=(e,t)=>e===`horizontal`?t?`flex-row-reverse`:`flex-row`:t?`flex-col-reverse`:``,ae=`pointer-events-auto w-full max-w-sm rounded-[1.25rem] border px-4 py-3 text-left text-sm backdrop-blur transition`,oe={soft:{neutral:`border-base-300 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,info:`border-info/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,success:`border-success/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,warning:`border-warning/30 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,error:`border-error/30 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,loading:`border-primary/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`},solid:{neutral:`border-neutral bg-neutral text-neutral-content shadow-lg`,info:`border-info bg-info text-info-content shadow-lg`,success:`border-success bg-success text-success-content shadow-lg`,warning:`border-warning bg-warning text-warning-content shadow-lg`,error:`border-error bg-error text-error-content shadow-lg`,loading:`border-primary bg-primary text-primary-content shadow-lg`},outline:{neutral:`border-neutral bg-base-100/90 text-base-content shadow-md`,info:`border-info bg-base-100/90 text-base-content shadow-md`,success:`border-success bg-base-100/90 text-base-content shadow-md`,warning:`border-warning bg-base-100/90 text-base-content shadow-md`,error:`border-error bg-base-100/90 text-base-content shadow-md`,loading:`border-primary bg-base-100/90 text-base-content shadow-md`}},se={soft:{neutral:`bg-base-200 text-base-content/70`,info:`bg-info/15 text-info`,success:`bg-success/15 text-success`,warning:`bg-warning/20 text-warning`,error:`bg-error/15 text-error`,loading:`bg-primary/15 text-primary`},solid:{neutral:`bg-neutral-content/10 text-neutral-content`,info:`bg-info-content/10 text-info-content`,success:`bg-success-content/10 text-success-content`,warning:`bg-warning-content/10 text-warning-content`,error:`bg-error-content/10 text-error-content`,loading:`bg-primary-content/10 text-primary-content`},outline:{neutral:`bg-base-200 text-base-content/70`,info:`bg-info/10 text-info`,success:`bg-success/10 text-success`,warning:`bg-warning/15 text-warning`,error:`bg-error/10 text-error`,loading:`bg-primary/10 text-primary`}},ce={soft:{neutral:`text-base-content/50 hover:bg-base-200 hover:text-base-content`,info:`text-info/75 hover:bg-info/10 hover:text-info`,success:`text-success/75 hover:bg-success/10 hover:text-success`,warning:`text-warning/80 hover:bg-warning/15 hover:text-warning`,error:`text-error/75 hover:bg-error/10 hover:text-error`,loading:`text-primary/75 hover:bg-primary/10 hover:text-primary`},solid:{neutral:`text-neutral-content/75 hover:bg-neutral-content/10 hover:text-neutral-content`,info:`text-info-content/75 hover:bg-info-content/10 hover:text-info-content`,success:`text-success-content/75 hover:bg-success-content/10 hover:text-success-content`,warning:`text-warning-content/75 hover:bg-warning-content/10 hover:text-warning-content`,error:`text-error-content/75 hover:bg-error-content/10 hover:text-error-content`,loading:`text-primary-content/75 hover:bg-primary-content/10 hover:text-primary-content`},outline:{neutral:`text-base-content/50 hover:bg-base-200 hover:text-base-content`,info:`text-info/75 hover:bg-info/10 hover:text-info`,success:`text-success/75 hover:bg-success/10 hover:text-success`,warning:`text-warning/80 hover:bg-warning/15 hover:text-warning`,error:`text-error/75 hover:bg-error/10 hover:text-error`,loading:`text-primary/75 hover:bg-primary/10 hover:text-primary`}},j=3,M=`top`,N=0,P=(e,t)=>typeof t!=`number`||t<=0||e.length<=t?e:e.slice(e.length-t),F=(e,t,n=!1)=>{if(typeof document>`u`)return null;let r=typeof e==`function`?e():e;return r===!1?t??null:typeof r==`string`?document.querySelector(r):r instanceof HTMLElement?r:n?document.body:null},I=({records:e,onDestroy:t,maxCount:n,duration:r=j,closable:i,pauseOnHover:a=!0,showIcon:o=!0,variant:s,type:c=`neutral`,placement:l=M,...u})=>e.length===0?w(`div`,{style:{display:`contents`}}):w(q,{placement:l,...u,children:e.map(e=>{let{key:n,content:l,children:u,type:d=c,variant:f=s,duration:p=r,closable:m=i,pauseOnHover:h=a,showIcon:g=o,onClose:_,onOpenChange:v,...y}=e.config,b=k(u)?u:l;return w(K,{...y,type:d,variant:f,duration:p,closable:m,pauseOnHover:h,showIcon:g,onClose:e=>{_&&_(e)},onOpenChange:(n,r)=>{n||t(e.key),v&&v(n,r)},children:b},e.key)})}),L=(t={})=>{let n=h(),r=h([]),i=h(),a=h(),o=h(t);o.current=t;let s=()=>{let e=F((o.current??{}).getContainer,i.current??null,!0);if(!e)return null;if(a.current==null){let e=document.createElement(`div`);e.style.display=`contents`,e.dataset.rueToastMessageViewport=`true`,a.current=e}return a.current.parentElement!==e&&e.appendChild(a.current),a.current},l=()=>{let t=s();if(!t)return;let n=o.current??{};e(w(I,{records:r.current??[],onDestroy:u,...n}),t)},u=e=>{let t=r.current??[];if(e==null){t.length>0&&(r.current=[],l());return}let n=t.filter(t=>t.key!==e);n.length!==t.length&&(r.current=n,l())},d=e=>{let t=e.key??`rue-toast-message-${N++}`,n={key:t,config:{...e,key:t}},i=r.current??[],a=i.findIndex(e=>e.key===t),s=a===-1?[...i,n]:[...i.slice(0,a),n,...i.slice(a+1)];return s=P(s,(o.current??{}).maxCount),r.current=s,l(),()=>{u(t)}};if(n.current==null){let e=(e,t)=>n=>d({...n,type:e,duration:n.duration??t});n.current={open:d,info:e(`info`),success:e(`success`),warning:e(`warning`),error:e(`error`),loading:e(`loading`,0),destroy:u}}c(()=>{r.current=[],a.current&&=(a.current.remove(),void 0),i.current=void 0});let f=w(`div`,{style:{display:`contents`},ref:e=>{i.current=e??void 0,o.current?.getContainer===!1&&e&&l()}});return[n.current,f]},le=e=>e===`warning`||e===`error`?`alert`:`status`,ue=e=>e===`warning`||e===`error`?`assertive`:`polite`,R=e=>typeof e!=`number`||e<=0?null:e*1e3,de=new WeakMap,z=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`M12 10v6`}),w(`path`,{d:`M12 7.5h.01`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),B=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`m8.5 12 2.5 2.5 4.5-5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),V=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`path`,{d:`M12 4 3.8 18.2a1 1 0 0 0 .87 1.5h14.66a1 1 0 0 0 .87-1.5z`,strokeLinejoin:`round`}),w(`path`,{d:`M12 9v4`,strokeLinecap:`round`}),w(`path`,{d:`M12 16.5h.01`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),H=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`m9 9 6 6`,strokeLinecap:`round`}),w(`path`,{d:`m15 9-6 6`,strokeLinecap:`round`})]}),U=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`path`,{d:`m7 7 10 10`,strokeLinecap:`round`}),w(`path`,{d:`M17 7 7 17`,strokeLinecap:`round`})]}),fe=e=>{let t=`h-5 w-5`;switch(e){case`info`:return w(z,{className:t});case`success`:return w(B,{className:t});case`warning`:return w(V,{className:t});case`error`:return w(H,{className:t});case`loading`:return w(`span`,{className:`loading loading-spinner loading-sm`,"aria-hidden":`true`});default:return null}},pe=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:D(`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl`,t),children:n}),me=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:D(`min-w-0 flex-1`,t),children:n}),he=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:D(`font-semibold leading-5`,t),children:n}),W=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:D(`mt-1 text-xs leading-5 opacity-80`,t),children:n}),ge=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:D(`flex shrink-0 items-center gap-2`,t),children:n}),G=({as:e=`button`,className:t,icon:n,label:r=`关闭提示`,children:i,...a})=>{let o=e,s={...a},c=s.onClick;return(e===`button`||e==null)&&s.type==null&&(s.type=`button`),s[`aria-label`]??=r,w(o,{...s,className:D(`inline-flex h-8 w-8 items-center justify-center rounded-xl transition`,t),onClick:e=>{if(typeof c==`function`&&c(e),e.defaultPrevented)return;let t=e.currentTarget?.closest(`[data-rue-toast-item-root="true"]`),n=t?de.get(t):null;n&&n(`close`,e)},children:k(i)?i:n??w(U,{className:`h-4 w-4`})})},K=({as:e=`div`,open:t,defaultOpen:n=!0,type:r=`neutral`,variant:i=`soft`,icon:a,showIcon:o=!0,title:s,description:l,action:u,closable:d,closeIcon:f,duration:p,pauseOnHover:m=!0,className:_,style:v,contentClassName:y,titleClassName:S,descriptionClassName:ee,iconClassName:te,actionClassName:ne,closeClassName:re,children:T,onClose:E,onOpenChange:O,...A})=>{let ie=e,j=g(n),M=g(!!n),N=typeof t==`boolean`,[P,F]=b(N?!!t:j.value,{kind:`ref`}),I=g(!1),L=h(),z=h(),B=h(R(p)),V={...A},H=V.onMouseEnter,G=V.onMouseLeave,K=null,q=N?!!t:P.value;`onMouseEnter`in V&&delete V.onMouseEnter,`onMouseLeave`in V&&delete V.onMouseLeave,V.role=V.role??le(r),V[`aria-live`]=V[`aria-live`]??ue(r),V[`data-rue-toast-item`]=V[`data-rue-toast-item`]??`true`,V[`data-rue-toast-type`]=V[`data-rue-toast-type`]??r,V[`data-rue-toast-item-root`]=V[`data-rue-toast-item-root`]??`true`;let J=V[`data-testid`],Y=V[`data-rue-toast-item`],_e=V[`data-rue-toast-type`];function X(e){if(K){if(K.style.display=e?``:`none`,e){K.removeAttribute(`aria-hidden`),K.setAttribute(`data-rue-toast-item`,String(Y)),K.setAttribute(`data-rue-toast-type`,String(_e)),J!=null&&K.setAttribute(`data-testid`,String(J));return}K.setAttribute(`aria-hidden`,`true`),K.removeAttribute(`data-rue-toast-item`),K.removeAttribute(`data-rue-toast-type`),J!=null&&K.removeAttribute(`data-testid`)}}let Z=(e=!1)=>{if(L.current!=null){if(e&&B.current!=null&&z.current!=null){let e=Date.now()-z.current;B.current=Math.max(0,B.current-e)}window.clearTimeout(L.current),L.current=void 0,z.current=void 0}},ve=()=>{Z(),P.value&&(m&&I.value||B.current==null||B.current<=0||(z.current=Date.now(),L.current=window.setTimeout(()=>{L.current=void 0,z.current=void 0,B.current=0,be(`timeout`)},B.current)))},ye=(e=!0)=>{Z(),e&&(B.current=R(p)),ve()},be=(e,t)=>{if(Z(),B.current=0,!P.value)return;F(!1),X(!1),N||(j.value=!1);let n={source:e,event:t};O&&O(!1,n),E&&E(n)};c(()=>{Z()}),x(()=>t,e=>{typeof e==`boolean`&&F(e)},{immediate:!0}),x(()=>n,e=>{let t=!!e;!N&&t!==M.value&&(M.value=t,j.value=t,F(t))},{immediate:!0}),x(()=>N?!!t:P.value,e=>{if(!e){Z(),X(!1);return}X(!0),ye(!0)},{immediate:!0}),x(()=>p,()=>{if(!P.value){B.current=R(p);return}ye(!0)}),x(()=>m,()=>{P.value&&ye(!1)});let xe=q;if(!xe)return null;let Se=oe[i][r],Ce=se[i][r],we=ce[i][r],Te=o===!1?null:a===void 0?fe(r):a,Ee=k(s),Q=k(l),De=k(T),$=k(u),Oe=k(Te);return w(`div`,{style:{display:`contents`},children:xe?w(ie,{...V,className:D(ae,Se,_),style:v,ref:e=>{K=e,e&&de.set(e,be),X(P.value)},onMouseEnter:e=>{I.value=!0,m&&Z(!0),typeof H==`function`&&H(e)},onMouseLeave:e=>{I.value=!1,m&&ve(),typeof G==`function`&&G(e)},children:C(`div`,{className:`flex items-start gap-3`,children:[Oe?w(pe,{className:D(Ce,te),children:Te}):null,C(me,{className:y,children:[Ee?w(he,{className:S,children:s}):null,Q?w(W,{className:ee,children:l}):null,De?w(`div`,{className:D(Ee||Q?`mt-2`:``),children:T}):null]}),$||d?C(ge,{className:D(`ml-3 items-start self-start`,ne),children:[u,d?w(`button`,{type:`button`,"aria-label":`关闭提示`,className:D(`inline-flex h-8 w-8 items-center justify-center rounded-xl transition`,we,re),onClick:e=>{be(`close`,e)},children:f??w(U,{className:`h-4 w-4`})}):null]}):null]})}):null})},q=({as:e=`div`,placement:t,horizontal:n,vertical:r,stack:i,reverse:a,inset:o,gap:s,zIndex:c,className:l,style:u,children:d,...f})=>{let p=e,m=t?T[t]:void 0,h=n??m?.horizontal,g=r??m?.vertical,_=ie(i,a),v=u?{...u}:{},y=A(o);s!=null&&(v.gap=E(s)),c!=null&&(v.zIndex=c),y&&Object.assign(v,y);let b=`toast`;return h&&(b+=` toast-${h}`),g&&(b+=` toast-${g}`),_&&(b+=` ${_}`),l&&(b+=` ${l}`),w(p,{...f,className:b,style:Object.keys(v).length?v:u,children:O(d)})},J=Object.assign(q,{Item:K,Icon:pe,Content:me,Title:he,Description:W,Action:ge,Close:G,useMessage:L}),Y=e=>y(()=>{let s=r(`div`);n(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=r(`div`);a(s,c),n(c,`flex flex-wrap items-start justify-between gap-3`);let l=r(`div`);a(c,l);let u=r(`h2`);a(l,u),n(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(u,i(`# `));let d=o(`rue:slot:anchor`);a(u,d),p(()=>{let t=e.title;_(()=>m(t,u,d))});let f=o(`rue:slot:anchor`);a(l,f),p(()=>{let i=e.summary?y(()=>{let i=t(),s=r(`p`);a(i,s),n(s,`m-0 text-sm opacity-70`);let c=o(`rue:slot:anchor`);return a(s,c),p(()=>{let t=e.summary;_(()=>m(t,s,c))}),i}):``;_(()=>m(i,l,f))});let h=o(`rue:component:anchor`);a(s,h),p(()=>{let t=v(re,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});_(()=>m(t,s,h))});let g=o(`rue:slot:anchor`);return a(s,g),p(()=>{let n=e.tab.value===`preview`?e.preview():y(()=>{let n=t(),r=o(`rue:component:anchor`);return a(n,r),p(()=>{let t=v(ne,{className:`mt-2`,lang:`tsx`,code:e.code});_(()=>m(t,n,r))}),n});_(()=>m(n,s,g))}),s}),_e=e=>Array.isArray(e)?e.flatMap(e=>_e(e)):e==null?[]:[e],X=e=>y(()=>{let s=r(`div`);n(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=r(`table`);a(s,c),n(c,`table table-zebra`);let u=r(`thead`);a(c,u);let d=r(`tr`);a(u,d);let f=r(`th`);a(d,f),a(f,i(`属性`));let h=r(`th`);a(d,h),a(h,i(`说明`));let g=r(`th`);a(d,g),a(g,i(`类型`));let v=r(`th`);a(d,v),a(v,i(`默认值`));let b=r(`tbody`);a(c,b);let x=o(`rue:list:start`),S=o(`rue:list:end`);a(b,x),a(b,S);let C=new Map;return p(()=>{C=ee({items:e.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,n,i,s,c)=>{m(y(()=>{let n=t(),i=r(`tr`);a(n,i),p(()=>{l(i,`key`,String(e.prop))});let s=r(`td`);a(i,s);let c=r(`code`);a(s,c);let u=o(`rue:slot:anchor`);a(c,u),p(()=>{let t=e.prop;_(()=>m(t,c,u))});let d=r(`td`);a(i,d);let f=o(`rue:slot:anchor`);a(d,f),p(()=>{let t=e.description;_(()=>m(t,d,f))});let h=r(`td`);a(i,h);let g=r(`code`);a(h,g);let v=o(`rue:slot:anchor`);a(g,v),p(()=>{let t=e.type;_(()=>m(t,g,v))});let y=r(`td`);a(i,y);let b=r(`code`);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),p(()=>{let t=e.defaultValue;_(()=>m(t,b,x))}),n}),n,i)}})}),s}),Z=e=>d(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`},d(`div`,{className:`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`,style:{minHeight:e.minHeight===void 0?`14rem`:e.minHeight}},..._e(e.children))),ve={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},ye=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],be=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],xe=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],Se=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],Ce=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],we=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Te=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],Ee=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Q=()=>{let{tabs:e,controlledOpen:c,controlledToastKey:d,autoToastKey:h,messageApi:b,messageContextHolder:x}=S(`useSetup:0:0`,()=>f(()=>{let e={items:S(`ref:1:0`,()=>g(`preview`)),variants:S(`ref:1:1`,()=>g(`preview`)),controlled:S(`ref:1:2`,()=>g(`preview`)),useMessage:S(`ref:1:3`,()=>g(`preview`)),compound:S(`ref:1:4`,()=>g(`preview`)),basic:S(`ref:1:5`,()=>g(`preview`)),placements:S(`ref:1:6`,()=>g(`preview`)),stacked:S(`ref:1:7`,()=>g(`preview`)),inset:S(`ref:1:8`,()=>g(`preview`)),host:S(`ref:1:9`,()=>g(`preview`))},t=S(`ref:1:10`,()=>g(!0)),n=S(`ref:1:11`,()=>g(0)),r=S(`ref:1:12`,()=>g(0)),[i,a]=J.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,controlledOpen:t,controlledToastKey:n,autoToastKey:r,messageApi:i,messageContextHolder:a}}));return y(()=>{let f=t(),g=o(`rue:component:anchor`);return a(f,g),m(v(te,{children:y(()=>{let f=t(),g=r(`div`);a(f,g),n(g,`max-w-none prose prose-sm md:prose-base`);let y=r(`h1`);a(g,y),a(y,i(`Toast 轻提示`));let S=r(`p`);a(g,S),n(S,`text-sm mt-3 mb-3`),a(S,i(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let ee=r(`code`);a(S,ee),a(ee,i(`Toast.Item`)),a(S,i(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let te=r(`code`);a(S,te),a(te,i(`Toast.useMessage()`)),a(S,i(`拿到`));let ne=r(`code`);a(S,ne),a(ne,i(`messageApi`)),a(S,i(`和`));let re=r(`code`);a(S,re),a(re,i(`contextHolder`)),a(S,i(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let T=s(S);a(S,T),u(T,` `);let E=r(`code`);a(S,E),a(E,i(`getContainer={false}`)),a(S,i(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let D=r(`div`);a(g,D),n(D,`text-sm flex flex-wrap gap-4`);let O=r(`a`);a(D,O),l(O,`href`,`https://daisyui.com/components/toast/`),l(O,`target`,`_blank`),a(O,i(`查看 Toast 静态样式`));let k=r(`h2`);a(g,k),a(k,i(`何时使用`));let A=r(`ul`);a(g,A);let ie=r(`li`);a(A,ie),a(ie,i(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let ae=r(`li`);a(A,ae),a(ae,i(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let oe=r(`li`);a(A,oe),a(oe,i(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let se=r(`li`);a(A,se),a(se,i(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let ce=o(`rue:component:anchor`);a(g,ce),p(()=>{let t=v(Y,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:e.items,preview:()=>C(Z,{minHeight:`19rem`,children:[w(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),w(J,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:be.slice(0,3).map(e=>w(J.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
  <Toast.Item
    type="info"
    title="Draft synced"
    description="The latest edits have been pushed to your shared workspace."
    closable
  />
  <Toast.Item
    type="success"
    title="Publish complete"
    description="The release has been deployed to production without errors."
    closable
  />
</Toast>`});_(()=>m(t,g,ce))});let j=o(`rue:component:anchor`);a(g,j),p(()=>{let t=v(Y,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:e.variants,preview:()=>w(`div`,{className:`grid gap-4`,children:xe.map(e=>C(Z,{minHeight:`11rem`,children:[w(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),w(J,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:w(J.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:w(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});_(()=>m(t,g,j))});let M=o(`rue:component:anchor`);a(g,M),p(()=>{let t=v(Y,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:e.controlled,preview:()=>C(Z,{minHeight:`19rem`,children:[C(`div`,{className:`absolute left-4 top-4 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm`,onClick:()=>{d.value+=1,c.value=!0},children:`重新显示受控提示`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{h.value+=1},children:`重新触发自动关闭`})]}),C(J,{className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,children:[w(J.Item,{open:c.value,type:`warning`,title:`Deployment paused`,description:`This one is controlled from the outside so you can coordinate with page state.`,closable:!0,onOpenChange:e=>{c.value=e}},d.value),w(J.Item,{type:`success`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4,closable:!0},h.value)]})]}),code:`const controlledOpen = ref(true)
const controlledToastKey = ref(0)
const autoToastKey = ref(0)

<button
  type="button"
  onClick={() => {
    controlledToastKey.value += 1
    controlledOpen.value = true
  }}
>
  重新显示受控提示
</button>

<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 56 }} gap={12}>
  <Toast.Item
    key={controlledToastKey.value}
    open={controlledOpen.value}
    type="warning"
    title="Deployment paused"
    description="This one is controlled from the outside."
    closable
    onOpenChange={nextOpen => {
      controlledOpen.value = nextOpen
    }}
  />
  <Toast.Item
    key={autoToastKey.value}
    type="success"
    title="Auto saved"
    description="This toast closes itself after 4 seconds."
    duration={4}
    closable
  />
</Toast>`});_(()=>m(t,g,M))});let N=o(`rue:component:anchor`);a(g,N),p(()=>{let t=v(Y,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:e.useMessage,preview:()=>C(Z,{minHeight:`18rem`,children:[C(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{b.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{b.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{b.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),w(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{b.destroy()},children:`清空当前消息`})]}),x]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
  placement: 'top-end',
  inset: { x: 16, y: 68 },
  gap: 12,
  maxCount: 3,
  zIndex: 80,
})

<button
  type="button"
  onClick={() => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    })
  }}
>
  Customized display duration
</button>

<button
  type="button"
  onClick={() => {
    messageApi.loading({
      key: 'publish',
      content: 'Publishing changes to preview...',
    })
  }}
>
  Start publish
</button>

<button
  type="button"
  onClick={() => {
    messageApi.open({
      key: 'publish',
      type: 'success',
      content: 'Published to preview. Same key, same slot, new state.',
      duration: 2,
    })
  }}
>
  Update same key
</button>

<button type="button" onClick={() => messageApi.destroy()}>
  Clear all
</button>

{contextHolder}

// keep it inside the current box instead:
// Toast.useMessage({
//   getContainer: false,
//   className: 'absolute',
//   placement: 'bottom-start',
//   inset: { x: 12, y: 12 },
// })`});_(()=>m(t,g,N))});let P=o(`rue:component:anchor`);a(g,P),p(()=>{let t=v(Y,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:e.compound,preview:()=>w(Z,{minHeight:`15rem`,children:w(J,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:C(J.Item,{variant:`outline`,className:`max-w-md`,children:[w(J.Icon,{className:`bg-secondary/12 text-secondary`,children:w(`span`,{className:`text-lg font-black`,children:`R`})}),C(J.Content,{children:[w(J.Title,{children:`Workspace synced`}),w(J.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),C(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),w(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),w(J.Action,{className:`ml-3 items-start self-start`,children:w(J.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
  <Toast.Item variant="outline" className="max-w-md">
    <Toast.Icon className="bg-secondary/12 text-secondary">
      <span className="text-lg font-black">R</span>
    </Toast.Icon>
    <Toast.Content>
      <Toast.Title>Workspace synced</Toast.Title>
      <Toast.Description>
        Compound API is useful when you need a custom icon and richer actions.
      </Toast.Description>
    </Toast.Content>
    <Toast.Action className="ml-3 items-start self-start">
      <Toast.Close className="text-base-content/50 hover:bg-base-200 hover:text-base-content" />
    </Toast.Action>
  </Toast.Item>
</Toast>`});_(()=>m(t,g,P))});let F=r(`h2`);a(g,F),a(F,i(`兼容旧写法`));let I=r(`p`);a(g,I),n(I,`text-sm mt-2 mb-4`),a(I,i(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let L=o(`rue:component:anchor`);a(g,L),p(()=>{let t=v(Y,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:e.basic,preview:()=>C(Z,{children:[w(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),w(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),w(J,{className:`absolute`,inset:16,gap:10,children:w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});_(()=>m(t,g,L))});let le=o(`rue:component:anchor`);a(g,le),p(()=>{let t=v(Y,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:e.placements,preview:()=>w(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:ye.map(e=>C(Z,{minHeight:`9.5rem`,children:[w(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),w(J,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:w(`div`,{role:`alert`,className:`${ve[e.tone]} shadow-sm`,children:w(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-info">
    <span>top-start</span>
  </div>
</Toast>

<Toast className="absolute" placement="center" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-success">
    <span>center</span>
  </div>
</Toast>

<Toast className="absolute" horizontal="end" vertical="bottom" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-warning">
    <span>bottom-end</span>
  </div>
</Toast>`});_(()=>m(t,g,le))});let ue=o(`rue:component:anchor`);a(g,ue),p(()=>{let t=v(Y,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:e.stacked,preview:()=>C(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[w(Z,{children:C(J,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`New mail arrived.`})}),w(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:w(`span`,{children:`Message sent successfully.`})})]})}),w(Z,{children:C(J,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[w(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:w(`span`,{children:`Rollback ready`})}),w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>New mail arrived.</span>
  </div>
  <div role="alert" className="alert alert-success shadow-sm">
    <span>Message sent successfully.</span>
  </div>
</Toast>

<Toast
  className="absolute"
  placement="bottom-start"
  stack="horizontal"
  reverse
  inset={{ x: 16, y: 16 }}
  gap={12}
>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>Rollback ready</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Deploy queued</span>
  </div>
</Toast>`});_(()=>m(t,g,ue))});let R=o(`rue:component:anchor`);a(g,R),p(()=>{let t=v(Y,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:e.inset,preview:()=>C(Z,{minHeight:`15rem`,children:[C(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[w(`div`,{className:`h-10 rounded-box bg-base-200/80`}),C(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[w(`div`,{className:`h-20 rounded-box bg-base-200/70`}),w(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),w(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),C(J,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[w(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:w(`span`,{children:`Layered above the card.`})}),w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
  className="absolute"
  placement="top-end"
  inset={{ x: 20, y: 20 }}
  gap={10}
  zIndex={30}
>
  <div role="alert" className="alert alert-success shadow-lg">
    <span>Layered above the card.</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Inset keeps it off the edge.</span>
  </div>
</Toast>`});_(()=>m(t,g,R))});let de=o(`rue:component:anchor`);a(g,de),p(()=>{let t=v(Y,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:e.host,preview:()=>w(Z,{children:C(J,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Auto save completed.`})}),w(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:w(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
  as="section"
  className="absolute"
  placement="top"
  inset={{ x: 16, y: 16 }}
  role="status"
  aria-live="polite"
  gap={10}
>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Auto save completed.</span>
  </div>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>1 draft still requires review.</span>
  </div>
</Toast>`});_(()=>m(t,g,de))});let z=r(`div`);a(g,z),n(z,`my-8 lg:my-12`);let B=r(`h2`);a(z,B),n(B,`mt-2 mb-4 text-lg font-semibold`),a(B,i(`API`));let V=r(`h3`);a(z,V),n(V,`mt-2 mb-3 text-base font-semibold`),a(V,i(`Toast.useMessage(options)`));let H=o(`rue:component:anchor`);a(z,H),p(()=>{let e=v(X,{rows:we});_(()=>m(e,z,H))});let U=r(`p`);a(z,U),n(U,`mt-4 text-sm opacity-70`),a(U,i(`返回值固定为`));let fe=r(`code`);a(U,fe),a(fe,i(`[messageApi, contextHolder]`)),a(U,i(`。为了保持这类 hook 的用法习惯，`));let pe=r(`code`);a(U,pe),a(pe,i(`contextHolder`)),a(U,i(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let me=r(`code`);a(U,me),a(me,i(`document.body`)),a(U,i(`，传`));let he=r(`code`);a(U,he),a(he,i(`getContainer={false}`)),a(U,i(`时才会回到 holder 内。`));let W=r(`h3`);a(z,W),n(W,`mt-8 mb-3 text-base font-semibold`),a(W,i(`messageApi`));let ge=o(`rue:component:anchor`);a(z,ge),p(()=>{let e=v(X,{rows:Te});_(()=>m(e,z,ge))});let G=r(`h3`);a(z,G),n(G,`mt-8 mb-3 text-base font-semibold`),a(G,i(`ToastMessageConfig`));let K=o(`rue:component:anchor`);a(z,K),p(()=>{let e=v(X,{rows:Ee});_(()=>m(e,z,K))});let q=r(`h3`);a(z,q),n(q,`mt-2 mb-3 text-base font-semibold`),a(q,i(`Toast 根容器`));let _e=o(`rue:component:anchor`);a(z,_e),p(()=>{let e=v(X,{rows:Se});_(()=>m(e,z,_e))});let Q=r(`h3`);a(z,Q),n(Q,`mt-8 mb-3 text-base font-semibold`),a(Q,i(`Toast.Item 单条提示`));let De=o(`rue:component:anchor`);a(z,De),p(()=>{let e=v(X,{rows:Ce});_(()=>m(e,z,De))});let $=r(`p`);a(z,$),n($,`mt-4 text-sm opacity-70`),a($,i(`Compound 子组件包括`));let Oe=r(`code`);a($,Oe),a(Oe,i(`Toast.Icon`)),a($,i(`、`));let ke=r(`code`);a($,ke),a(ke,i(`Toast.Content`)),a($,i(`、`));let Ae=r(`code`);a($,Ae),a(Ae,i(`Toast.Title`)),a($,i(`、`));let je=r(`code`);a($,je),a(je,i(`Toast.Description`)),a($,i(`、`));let Me=r(`code`);a($,Me),a(Me,i(`Toast.Action`)),a($,i(`和`));let Ne=s($);a($,Ne),u(Ne,` `);let Pe=r(`code`);return a($,Pe),a(Pe,i(`Toast.Close`)),a($,i(`。`)),f})}),f,g),f})};export{Q as default};