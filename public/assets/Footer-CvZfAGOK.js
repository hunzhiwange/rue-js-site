import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,s as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./tabs-DRfs918f.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:d,rest:p,Component:m}=y(`useSetup:0:0`,()=>i(()=>{let{as:e,className:t,children:r,content:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:n.as===void 0?`h6`:n.as}}));return u(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=h(m,{...p,className:E(`footer-title`,n.className),children:n.content??n.children});r(()=>f(e,o,s))}),o})},k=n=>{let{__rue_rest_omit_0:l,__rue_rest_omit_1:d,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>i(()=>{let{as:e,className:t,children:r,content:i,href:a,target:o,rel:s,hover:c,...l}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:y(`computed:1:0`,()=>v(()=>n.as??(n.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>v(()=>n.target===`_blank`&&!n.rel?`noreferrer`:n.rel))}}));return T.get()===`a`?u(i=>{let c=g(`a`,i);t(()=>{o(c,w)}),t(()=>{s(c,`href`,String(n.href))}),t(()=>{s(c,`target`,String(n.target))}),t(()=>{s(c,`rel`,String(D.get()))}),t(()=>{_(c,E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className))});let l=e(`rue:slot:anchor`);return a(c,l),t(()=>{let e=n.content??n.children;r(()=>f(e,c,l))}),c}):T.get()===`button`?u(i=>{let c=g(`button`,i);t(()=>{o(c,w)}),t(()=>{s(c,`type`,String(w.type??`button`))}),t(()=>{_(c,E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className))});let l=e(`rue:slot:anchor`);return a(c,l),t(()=>{let e=n.content??n.children;r(()=>f(e,c,l))}),c}):u(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=h(T,{...w,className:E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className),children:n.content??n.children});r(()=>f(e,o,s))}),o})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(n,i)=>{if(!D(n))return null;if(A(n)){let{key:o,label:s,content:l,children:d,...p}=n;return u(n=>{let u=c(),m=e(`rue:component:anchor`);return a(u,m),t(()=>{let e=h(k,{key:o??`item-${i}`,...p,children:l??d??s});r(()=>f(e,u,m))}),u})}return u(o=>{let s=c(),l=e(`rue:component:anchor`);return a(s,l),t(()=>{let e=h(k,{key:`item-${i}`,children:n});r(()=>f(e,s,l))}),s})},M=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:d,rest:p,Component:m}=y(`useSetup:0:0:dup2`,()=>i(()=>{let{as:e,className:t,children:r,content:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:n.as===void 0?`aside`:n.as}}));return u(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=h(m,{...p,className:n.className,children:n.content??n.children});r(()=>f(e,o,s))}),o})},N=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:p,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>i(()=>{let{as:e,className:t,children:r,title:i,titleClassName:a,content:o,items:s,inline:c,contentClassName:l,...u}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:n.as===void 0?`nav`:n.as,hasCustomContent:y(`computed:1:2`,()=>v(()=>D(n.content)||D(n.children)))}}));return u(i=>{let o=c(),s=e(`rue:component:anchor`);a(o,s);let l=u(()=>{let i=c(),o=e(`rue:slot:anchor`);a(i,o),t(()=>{let s=D(n.title)?u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(O,{className:n.titleClassName,children:n.title});r(()=>f(e,i,o))}),i}):``;r(()=>f(s,i,o))}),a(i,d(` `));let s=e(`rue:slot:anchor`);return a(i,s),t(()=>{let o=M.get()?n.content??n.children:n.inline?u(()=>{let r=c(),i=g(`div`,r);a(r,i),t(()=>{_(i,E(`grid grid-flow-col auto-cols-max gap-4`,n.contentClassName))});let o=e(`rue:list:start`),s=e(`rue:list:end`);a(i,o),a(i,s);let l=new Map;return t(()=>{l=b({items:(n.items??[])||[],getKey:(e,t)=>t,elements:l,parent:i,before:s,start:o,renderItem:(e,t,n,r,i)=>{m(j(e,i),t,n,r)}})}),r}):(n.items??[]).map((e,t)=>j(e,t));r(()=>f(o,i,s))}),i});return t(()=>{let e=h(A,{...k,className:n.className,children:l});r(()=>f(e,o,s))}),o})},P=Object.assign(n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:p,__rue_rest_omit_4:g,__rue_rest_omit_5:_,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>i(()=>{let{as:e,direction:t,center:r,className:i,children:a,brand:o,sections:s,wrap:c,bordered:l,...u}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:n.as===void 0?`footer`:n.as,hasChildren:y(`computed:1:3`,()=>v(()=>D(n.children))),hasStructuredContent:y(`computed:1:4`,()=>v(()=>D(n.brand)||(n.sections?.length??0)>0))}}));return u(i=>{let o=c(),s=e(`rue:component:anchor`);a(o,s);let l=u(()=>{let i=c(),o=e(`rue:slot:anchor`);return a(i,o),t(()=>{let s=O.get()||!k.get()?n.children:u(()=>{let i=c();a(i,d(` `));let o=e(`rue:slot:anchor`);a(i,o),t(()=>{let t=D(n.brand)?u(()=>{let t=c(),r=e(`rue:component:anchor`);return a(t,r),f(h(M,{children:n.brand}),t,r),t}):``;r(()=>f(t,i,o))}),a(i,d(` `));let s=e(`rue:list:start`),l=e(`rue:list:end`);a(i,s),a(i,l);let p=new Map;return t(()=>{p=b({items:(n.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:p,parent:s.parentNode,before:l,start:s,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;m(h(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),a(i,d(` `)),i});r(()=>f(s,i,o))}),i});return t(()=>{let e=h(T,{...w,className:E(`footer`,n.direction&&`footer-${n.direction}`,n.center&&`footer-center`,n.wrap&&`gap-y-6`,n.bordered&&`border-t border-base-300`,n.className),children:l});r(()=>f(e,o,s))}),o})},{Brand:M,Section:N,Title:O,Link:k}),F=n=>u(i=>{let o=g(`div`,i);_(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,o);a(o,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);a(s,l);let p=g(`h2`,l);a(l,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(p,d(`# `));let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.title;r(()=>f(e,p,m))});let v=e(`rue:slot:anchor`);a(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),o=g(`p`,i);a(i,o),_(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>f(e,o,s))}),i}):``;r(()=>f(i,l,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?n.preview():u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,o))}),i});r(()=>f(i,o,b))}),o}),ee=n=>u(i=>{let o=g(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,o);a(o,l),_(l,`table table-zebra`);let p=g(`thead`,l);a(l,p);let m=g(`tr`,p);a(p,m);let h=g(`th`,m);a(m,h),a(h,d(`属性`));let v=g(`th`,m);a(m,v),a(v,d(`说明`));let y=g(`th`,m);a(m,y),a(y,d(`类型`));let x=g(`th`,m);a(m,x),a(x,d(`默认值`));let S=g(`tbody`,l);a(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,l,d)=>{f(u(()=>{let i=c(),o=g(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=g(`td`,o);a(o,l);let u=g(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=g(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let h=g(`td`,o);a(o,h);let _=g(`code`,h);a(h,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=g(`td`,o);a(o,y);let b=g(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),I=e=>u(n=>{let r=g(`svg`,n);t(()=>{s(r,`width`,String(e.size===void 0?40:e.size))}),t(()=>{s(r,`height`,String(e.size===void 0?40:e.size))}),s(r,`viewBox`,`0 0 24 24`),t(()=>{_(r,e.className??`fill-current`)});let i=g(`path`,r);return a(r,i),s(i,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),L=[{key:`x`,Icon:()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let n=g(`path`,t);return a(t,n),s(n,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),t})},{key:`video`,Icon:()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let n=g(`path`,t);return a(t,n),s(n,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),t})},{key:`community`,Icon:()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let n=g(`path`,t);return a(t,n),s(n,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),t})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:o,tabCompound:m,tabBasic:v,tabLogo:b,tabForm:C,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>i(()=>({tabRecommended:y(`ref:1:0`,()=>n(`preview`)),tabCompound:y(`ref:1:1`,()=>n(`preview`)),tabBasic:y(`ref:1:2`,()=>n(`preview`)),tabLogo:y(`ref:1:3`,()=>n(`preview`)),tabForm:y(`ref:1:4`,()=>n(`preview`)),tabSocial:y(`ref:1:5`,()=>n(`preview`)),tabLinks:y(`ref:1:6`,()=>n(`preview`)),tabLinks2:y(`ref:1:7`,()=>n(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>n(`preview`)),tabCentered:y(`ref:1:9`,()=>n(`preview`)),tabTwo:y(`ref:1:10`,()=>n(`preview`))})));return u(n=>{let i=c(),y=e(`rue:component:anchor`);return a(i,y),f(h(T,{children:u(()=>{let n=c(),i=g(`div`,n);a(n,i),_(i,`max-w-none prose prose-sm md:prose-base`);let u=g(`h1`,i);a(i,u),a(u,d(`Footer 页脚`));let y=g(`p`,i);a(i,y),_(y,`text-sm mt-3 mb-3`),a(y,d(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let T=g(`code`,y);a(y,T),a(T,d(`nav`)),a(y,d(`、`));let j=g(`code`,y);a(y,j),a(j,d(`aside`)),a(y,d(`和 自定义 class，也可以改用`));let M=g(`code`,y);a(y,M),a(M,d(`brand`)),a(y,d(`、`));let N=g(`code`,y);a(y,N),a(N,d(`sections`));let R=p(y);a(y,R),l(R,` `),a(y,d(`与`));let z=g(`code`,y);a(y,z),a(z,d(`Footer.Section`)),a(y,d(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=g(`h2`,i);a(i,B),a(B,d(`何时使用`));let V=g(`ul`,i);a(i,V);let H=g(`li`,V);a(V,H),a(H,d(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=g(`li`,V);a(V,U),a(U,d(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=e(`rue:component:anchor`);a(i,ie),t(()=>{let e=h(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:o,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
  {
    key: 'services',
    title: 'Services',
    items: [
      { label: 'Branding' },
      { label: 'Design' },
      { label: 'Marketing' },
      { label: 'Advertisement' },
    ],
  },
  {
    key: 'company',
    title: 'Company',
    items: [
      { label: 'About us' },
      { label: 'Contact' },
      { label: 'Jobs' },
      { label: 'Press kit' },
    ],
  },
  {
    key: 'legal',
    title: 'Legal',
    items: [{ label: 'Terms of use' }, { label: 'Privacy policy' }, { label: 'Cookie policy' }],
  },
]

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});r(()=>f(e,i,ie))});let ae=e(`rue:component:anchor`);a(i,ae),t(()=>{let e=h(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:m,preview:()=>x(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[x(P.Brand,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,S(`br`,{}),`Ship consistent experiences.`]})]}),x(P.Section,{title:`Product`,children:[S(P.Link,{children:`Overview`}),S(P.Link,{children:`Pricing`}),S(P.Link,{children:`Changelog`})]}),S(P.Section,{title:`Community`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
  <Footer.Brand>
    <BrandGlyph />
    <p className="text-sm mt-3 mb-3">
      Rue Design System
      <br />
      Ship consistent experiences.
    </p>
  </Footer.Brand>

  <Footer.Section title="Product">
    <Footer.Link>Overview</Footer.Link>
    <Footer.Link>Pricing</Footer.Link>
    <Footer.Link>Changelog</Footer.Link>
  </Footer.Section>

  <Footer.Section
    title="Community"
    content={
      <div className="grid grid-flow-col gap-4">
        <button type="button"><XIcon /></button>
        <button type="button"><VideoIcon /></button>
        <button type="button"><CommunityIcon /></button>
      </div>
    }
  />
</Footer>`});r(()=>f(e,i,ae))});let oe=e(`rue:component:anchor`);a(i,oe),t(()=>{let e=h(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:v,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});r(()=>f(e,i,oe))});let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=h(F,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </div>
  }
  sections={sections}
/>`});r(()=>f(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=h(F,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:x(`fieldset`,{className:`w-80`,children:[S(`label`,{children:`Enter your email address`}),x(`div`,{className:`join`,children:[S(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),S(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  sections={[
    ...sections,
    {
      key: 'newsletter',
      title: 'Newsletter',
      as: 'form',
      content: (
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
            <button type="button" className="join-item btn btn-primary">Subscribe</button>
          </div>
        </fieldset>
      ),
    },
  ]}
/>`});r(()=>f(e,i,ce))});let le=e(`rue:component:anchor`);a(i,le),t(()=>{let e=h(F,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}]}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
    </div>
  }
  sections={[
    {
      key: 'social',
      title: 'Social',
      content: (
        <div className="grid grid-flow-col gap-4">
          <button type="button"><XIcon /></button>
          <button type="button"><VideoIcon /></button>
          <button type="button"><CommunityIcon /></button>
        </div>
      ),
    },
  ]}
/>`});r(()=>f(e,i,le))});let ue=e(`rue:component:anchor`);a(i,ue),t(()=>{let e=h(F,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>x(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Services`}),S(`button`,{className:`link link-hover`,children:`Branding`}),S(`button`,{className:`link link-hover`,children:`Design`}),S(`button`,{className:`link link-hover`,children:`Marketing`}),S(`button`,{className:`link link-hover`,children:`Advertisement`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Company`}),S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Social`}),S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
</Footer>`});r(()=>f(e,i,ue))});let de=e(`rue:component:anchor`);a(i,de),t(()=>{let e=h(F,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});r(()=>f(e,i,de))});let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=h(F,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>x(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[x(`aside`,{children:[S(I,{size:50,className:`inline-block fill-current`}),x(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
  <aside>
    <BrandGlyph size={50} className="inline-block fill-current" />
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><XIcon /></a>
      <a><VideoIcon /></a>
      <a><CommunityIcon /></a>
    </div>
  </nav>
</Footer>`});r(()=>f(e,i,fe))});let pe=e(`rue:component:anchor`);a(i,pe),t(()=>{let e=h(F,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:k,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[x(`nav`,{className:`grid grid-flow-col gap-4`,children:[S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}),S(`aside`,{children:x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
  <nav className="grid grid-flow-col gap-4">
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
  <aside>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</Footer>`});r(()=>f(e,i,pe))});let me=e(`rue:component:anchor`);a(i,me),t(()=>{let e=h(F,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:A,preview:()=>x(`div`,{className:`w-full`,children:[S(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),x(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[x(`aside`,{className:`grid-flow-col items-center`,children:[S(I,{size:24}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),S(`nav`,{className:`md:place-self-center md:justify-self-end`,children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]})]}),code:`<div className="w-full">
  <Footer className="bg-base-200 text-base-content p-10 sm:footer-horizontal" sections={sections} />

  <Footer className="bg-base-200 text-base-content px-10 py-4 border-t border-base-300">
    <aside className="grid-flow-col items-center">
      <BrandGlyph size={24} />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </aside>
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a><XIcon /></a>
        <a><VideoIcon /></a>
        <a><CommunityIcon /></a>
      </div>
    </nav>
  </Footer>
</div>`});r(()=>f(e,i,me))});let he=g(`h2`,i);a(i,he),s(he,`id`,`footer-api`),a(he,d(`API`));let ge=g(`p`,i);a(i,ge),a(ge,d(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let _e=g(`h3`,i);a(i,_e),a(_e,d(`Footer`));let ve=e(`rue:component:anchor`);a(i,ve),t(()=>{let e=h(ee,{rows:ne});r(()=>f(e,i,ve))});let ye=g(`h3`,i);a(i,ye),_(ye,`mt-8`),a(ye,d(`Footer.Section`));let be=e(`rue:component:anchor`);a(i,be),t(()=>{let e=h(ee,{rows:re});r(()=>f(e,i,be))});let G=g(`div`,i);a(i,G),_(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=g(`h3`,G);a(G,xe),_(xe,`mt-0 mb-3 text-base font-semibold`),a(xe,d(`复合子组件`));let K=g(`div`,G);a(G,K),_(K,`grid gap-2 text-sm md:grid-cols-2`);let q=g(`div`,K);a(K,q);let Se=g(`code`,q);a(q,Se),a(Se,d(`Footer.Brand`)),a(q,d(`：品牌或版权信息容器，默认渲染`));let Ce=g(`code`,q);a(q,Ce),a(Ce,d(`aside`));let J=g(`div`,K);a(K,J);let we=g(`code`,J);a(J,we),a(we,d(`Footer.Title`)),a(J,d(`：带`));let Te=g(`code`,J);a(J,Te),a(Te,d(`footer-title`)),a(J,d(`类名的标题节点`));let Y=g(`div`,K);a(K,Y);let Ee=g(`code`,Y);a(Y,Ee),a(Ee,d(`Footer.Link`)),a(Y,d(`：默认输出带`));let De=g(`code`,Y);a(Y,De),a(De,d(`link link-hover`)),a(Y,d(`的文本链接`));let X=g(`div`,K);a(K,X);let Oe=g(`code`,X);a(X,Oe),a(Oe,d(`Footer.Section`)),a(X,d(`：单列容器，支持`));let ke=g(`code`,X);a(X,ke),a(ke,d(`title`)),a(X,d(`、`));let Ae=g(`code`,X);a(X,Ae),a(Ae,d(`items`)),a(X,d(`、`));let je=g(`code`,X);a(X,je),a(je,d(`content`));let Me=g(`h2`,i);a(i,Me),a(Me,d(`FAQ`));let Ne=g(`h3`,i);a(i,Ne),a(Ne,d(`什么时候用 sections，什么时候继续写 children？`));let Z=g(`p`,i);a(i,Z),a(Z,d(`列结构比较规则时，优先用`));let Pe=g(`code`,Z);a(Z,Pe),a(Pe,d(`sections`)),a(Z,d(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=g(`code`,Z);a(Z,Fe),a(Fe,d(`nav`)),a(Z,d(`/`));let Ie=g(`code`,Z);a(Z,Ie),a(Ie,d(`aside`)),a(Z,d(`模板，也可以继续直接写`));let Le=g(`code`,Z);a(Z,Le),a(Le,d(`children`)),a(Z,d(`。`));let Re=g(`h3`,i);a(i,Re),a(Re,d(`社交图标和订阅表单怎么放进去？`));let Q=g(`p`,i);a(i,Q),a(Q,d(`这类内容更适合放到`));let ze=g(`code`,Q);a(Q,ze),a(ze,d(`Footer.Section`)),a(Q,d(`的`));let Be=g(`code`,Q);a(Q,Be),a(Be,d(`content`));let Ve=p(Q);a(Q,Ve),l(Ve,` `),a(Q,d(`里；如果只是普通文本链接，再用`));let He=g(`code`,Q);a(Q,He),a(He,d(`items`)),a(Q,d(`会更省代码。`));let Ue=g(`h3`,i);a(i,Ue),a(Ue,d(`direction 和 center 还需要保留吗？`));let $=g(`p`,i);a(i,$),a($,d(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=g(`code`,$);a($,We),a(We,d(`sm:footer-horizontal`)),a($,d(`、`));let Ge=g(`code`,$);return a($,Ge),a(Ge,d(`footer-center`)),a($,d(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),n})}),i,y),i})};export{ie as default};