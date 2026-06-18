import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,c as l,et as u,gt as d,l as f,mt as p,pt as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./tabs-BBuGEPV7.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,rest:u,Component:d}=y(`useSetup:0:0`,()=>h(()=>{let{as:t,className:n,children:r,content:i,...a}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:e.as===void 0?`h6`:e.as}}));return f(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=v(d,{...u,className:E(`footer-title`,e.className),children:e.content??e.children});t(()=>g(n,i,c))}),i})},k=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:m,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>h(()=>{let{as:t,className:n,children:r,content:i,href:a,target:o,rel:s,hover:c,...l}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:y(`computed:1:0`,()=>d(()=>e.as??(e.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>d(()=>e.target===`_blank`&&!e.rel?`noreferrer`:e.rel))}}));return T.get()===`a`?f(r=>{let s=i(`a`,r);o(()=>{p(s,w)}),o(()=>{c(s,`href`,String(e.href))}),o(()=>{c(s,`target`,String(e.target))}),o(()=>{c(s,`rel`,String(D.get()))}),o(()=>{_(s,E(`link`,(e.hover===void 0?!0:e.hover)&&`link-hover`,e.className))});let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let n=e.content??e.children;t(()=>g(n,s,l))}),s}):T.get()===`button`?f(r=>{let s=i(`button`,r);o(()=>{p(s,w)}),o(()=>{c(s,`type`,String(w.type??`button`))}),o(()=>{_(s,E(`link`,(e.hover===void 0?!0:e.hover)&&`link-hover`,e.className))});let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let n=e.content??e.children;t(()=>g(n,s,l))}),s}):f(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=v(T,{...w,className:E(`link`,(e.hover===void 0?!0:e.hover)&&`link-hover`,e.className),children:e.content??e.children});t(()=>g(n,i,c))}),i})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(e,r)=>{if(!D(e))return null;if(A(e)){let{key:i,label:c,content:l,children:u,...d}=e;return f(e=>{let f=s(),p=a(`rue:component:anchor`);return n(f,p),o(()=>{let e=v(k,{key:i??`item-${r}`,...d,children:l??u??c});t(()=>g(e,f,p))}),f})}return f(i=>{let c=s(),l=a(`rue:component:anchor`);return n(c,l),o(()=>{let n=v(k,{key:`item-${r}`,children:e});t(()=>g(n,c,l))}),c})},M=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,rest:u,Component:d}=y(`useSetup:0:0:dup2`,()=>h(()=>{let{as:t,className:n,children:r,content:i,...a}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:e.as===void 0?`aside`:e.as}}));return f(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=v(d,{...u,className:e.className,children:e.content??e.children});t(()=>g(n,i,c))}),i})},N=r=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>h(()=>{let{as:e,className:t,children:n,title:i,titleClassName:a,content:o,items:s,inline:c,contentClassName:l,...u}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:r.as===void 0?`nav`:r.as,hasCustomContent:y(`computed:1:2`,()=>d(()=>D(r.content)||D(r.children)))}}));return f(c=>{let u=s(),d=a(`rue:component:anchor`);n(u,d);let p=f(()=>{let c=s(),u=a(`rue:slot:anchor`);n(c,u),o(()=>{let e=D(r.title)?f(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(O,{className:r.titleClassName,children:r.title});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,c,u))}),n(c,e(` `));let d=a(`rue:slot:anchor`);return n(c,d),o(()=>{let e=M.get()?r.content??r.children:r.inline?f(()=>{let e=s(),t=i(`div`,e);n(e,t),o(()=>{_(t,E(`grid grid-flow-col auto-cols-max gap-4`,r.contentClassName))});let c=a(`rue:list:start`),u=a(`rue:list:end`);n(t,c),n(t,u);let d=new Map;return o(()=>{d=b({items:(r.items??[])||[],getKey:(e,t)=>t,elements:d,parent:t,before:u,start:c,renderItem:(e,t,n,r,i)=>{l(j(e,i),t,n,r)}})}),e}):(r.items??[]).map((e,t)=>j(e,t));t(()=>g(e,c,d))}),c});return o(()=>{let e=v(A,{...k,className:r.className,children:p});t(()=>g(e,u,d))}),u})},P=Object.assign(r=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:_,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>h(()=>{let{as:e,direction:t,center:n,className:i,children:a,brand:o,sections:s,wrap:c,bordered:l,...u}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:r.as===void 0?`footer`:r.as,hasChildren:y(`computed:1:3`,()=>d(()=>D(r.children))),hasStructuredContent:y(`computed:1:4`,()=>d(()=>D(r.brand)||(r.sections?.length??0)>0))}}));return f(i=>{let c=s(),u=a(`rue:component:anchor`);n(c,u);let d=f(()=>{let i=s(),c=a(`rue:slot:anchor`);return n(i,c),o(()=>{let u=O.get()||!k.get()?r.children:f(()=>{let i=s();n(i,e(` `));let c=a(`rue:slot:anchor`);n(i,c),o(()=>{let e=D(r.brand)?f(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),g(v(M,{children:r.brand}),e,t),e}):``;t(()=>g(e,i,c))}),n(i,e(` `));let u=a(`rue:list:start`),d=a(`rue:list:end`);n(i,u),n(i,d);let p=new Map;return o(()=>{p=b({items:(r.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:p,parent:u.parentNode,before:d,start:u,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;l(v(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),n(i,e(` `)),i});t(()=>g(u,i,c))}),i});return o(()=>{let e=v(T,{...w,className:E(`footer`,r.direction&&`footer-${r.direction}`,r.center&&`footer-center`,r.wrap&&`gap-y-6`,r.bordered&&`border-t border-base-300`,r.className),children:d});t(()=>g(e,c,u))}),c})},{Brand:M,Section:N,Title:O,Link:k}),F=r=>f(c=>{let l=i(`div`,c);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let d=i(`div`,u);n(u,d);let p=i(`h2`,d);n(d,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=a(`rue:slot:anchor`);n(d,h),o(()=>{let e=r.summary?f(()=>{let e=s(),c=i(`p`,e);n(e,c),_(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>g(e,c,l))}),e}):``;t(()=>g(e,d,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():f(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),ee=r=>f(l=>{let u=i(`div`,l);_(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,u);n(u,d),_(d,`table table-zebra`);let p=i(`thead`,d);n(d,p);let m=i(`tr`,p);n(p,m);let h=i(`th`,m);n(m,h),n(h,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,d);n(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,d)=>{g(f(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,l);n(l,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,l)}})}),u}),I=e=>f(t=>{let r=i(`svg`,t);o(()=>{c(r,`width`,String(e.size===void 0?40:e.size))}),o(()=>{c(r,`height`,String(e.size===void 0?40:e.size))}),c(r,`viewBox`,`0 0 24 24`),o(()=>{_(r,e.className??`fill-current`)});let a=i(`path`,r);return n(r,a),c(a,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),L=[{key:`x`,Icon:()=>f(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`width`,`24`),c(t,`height`,`24`),c(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let r=i(`path`,t);return n(t,r),c(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),t})},{key:`video`,Icon:()=>f(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`width`,`24`),c(t,`height`,`24`),c(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let r=i(`path`,t);return n(t,r),c(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),t})},{key:`community`,Icon:()=>f(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`width`,`24`),c(t,`height`,`24`),c(t,`viewBox`,`0 0 24 24`),_(t,`fill-current`);let r=i(`path`,t);return n(t,r),c(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),t})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:l,tabCompound:d,tabBasic:p,tabLogo:b,tabForm:C,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>h(()=>({tabRecommended:y(`ref:1:0`,()=>r(`preview`)),tabCompound:y(`ref:1:1`,()=>r(`preview`)),tabBasic:y(`ref:1:2`,()=>r(`preview`)),tabLogo:y(`ref:1:3`,()=>r(`preview`)),tabForm:y(`ref:1:4`,()=>r(`preview`)),tabSocial:y(`ref:1:5`,()=>r(`preview`)),tabLinks:y(`ref:1:6`,()=>r(`preview`)),tabLinks2:y(`ref:1:7`,()=>r(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>r(`preview`)),tabCentered:y(`ref:1:9`,()=>r(`preview`)),tabTwo:y(`ref:1:10`,()=>r(`preview`))})));return f(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(T,{children:f(()=>{let r=s(),f=i(`div`,r);n(r,f),_(f,`max-w-none prose prose-sm md:prose-base`);let h=i(`h1`,f);n(f,h),n(h,e(`Footer 页脚`));let y=i(`p`,f);n(f,y),_(y,`text-sm mt-3 mb-3`),n(y,e(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let T=i(`code`,y);n(y,T),n(T,e(`nav`)),n(y,e(`、`));let j=i(`code`,y);n(y,j),n(j,e(`aside`)),n(y,e(`和 自定义 class，也可以改用`));let M=i(`code`,y);n(y,M),n(M,e(`brand`)),n(y,e(`、`));let N=i(`code`,y);n(y,N),n(N,e(`sections`));let R=u(y);n(y,R),m(R,` `),n(y,e(`与`));let z=i(`code`,y);n(y,z),n(z,e(`Footer.Section`)),n(y,e(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=i(`h2`,f);n(f,B),n(B,e(`何时使用`));let V=i(`ul`,f);n(f,V);let H=i(`li`,V);n(V,H),n(H,e(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=i(`li`,V);n(V,U),n(U,e(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=a(`rue:component:anchor`);n(f,ie),o(()=>{let e=v(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:l,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});t(()=>g(e,f,ie))});let ae=a(`rue:component:anchor`);n(f,ae),o(()=>{let e=v(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:d,preview:()=>x(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[x(P.Brand,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,S(`br`,{}),`Ship consistent experiences.`]})]}),x(P.Section,{title:`Product`,children:[S(P.Link,{children:`Overview`}),S(P.Link,{children:`Pricing`}),S(P.Link,{children:`Changelog`})]}),S(P.Section,{title:`Community`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});t(()=>g(e,f,ae))});let oe=a(`rue:component:anchor`);n(f,oe),o(()=>{let e=v(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:p,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});t(()=>g(e,f,oe))});let se=a(`rue:component:anchor`);n(f,se),o(()=>{let e=v(F,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
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
/>`});t(()=>g(e,f,se))});let ce=a(`rue:component:anchor`);n(f,ce),o(()=>{let e=v(F,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:x(`fieldset`,{className:`w-80`,children:[S(`label`,{children:`Enter your email address`}),x(`div`,{className:`join`,children:[S(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),S(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});t(()=>g(e,f,ce))});let le=a(`rue:component:anchor`);n(f,le),o(()=>{let e=v(F,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}]}),code:`<Footer
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
/>`});t(()=>g(e,f,le))});let ue=a(`rue:component:anchor`);n(f,ue),o(()=>{let e=v(F,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>x(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Services`}),S(`button`,{className:`link link-hover`,children:`Branding`}),S(`button`,{className:`link link-hover`,children:`Design`}),S(`button`,{className:`link link-hover`,children:`Marketing`}),S(`button`,{className:`link link-hover`,children:`Advertisement`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Company`}),S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Social`}),S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});t(()=>g(e,f,ue))});let de=a(`rue:component:anchor`);n(f,de),o(()=>{let e=v(F,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});t(()=>g(e,f,de))});let fe=a(`rue:component:anchor`);n(f,fe),o(()=>{let e=v(F,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>x(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[x(`aside`,{children:[S(I,{size:50,className:`inline-block fill-current`}),x(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});t(()=>g(e,f,fe))});let pe=a(`rue:component:anchor`);n(f,pe),o(()=>{let e=v(F,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:k,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[x(`nav`,{className:`grid grid-flow-col gap-4`,children:[S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}),S(`aside`,{children:x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});t(()=>g(e,f,pe))});let me=a(`rue:component:anchor`);n(f,me),o(()=>{let e=v(F,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:A,preview:()=>x(`div`,{className:`w-full`,children:[S(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),x(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[x(`aside`,{className:`grid-flow-col items-center`,children:[S(I,{size:24}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),S(`nav`,{className:`md:place-self-center md:justify-self-end`,children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});t(()=>g(e,f,me))});let he=i(`h2`,f);n(f,he),c(he,`id`,`footer-api`),n(he,e(`API`));let ge=i(`p`,f);n(f,ge),n(ge,e(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let _e=i(`h3`,f);n(f,_e),n(_e,e(`Footer`));let ve=a(`rue:component:anchor`);n(f,ve),o(()=>{let e=v(ee,{rows:ne});t(()=>g(e,f,ve))});let ye=i(`h3`,f);n(f,ye),_(ye,`mt-8`),n(ye,e(`Footer.Section`));let be=a(`rue:component:anchor`);n(f,be),o(()=>{let e=v(ee,{rows:re});t(()=>g(e,f,be))});let G=i(`div`,f);n(f,G),_(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=i(`h3`,G);n(G,xe),_(xe,`mt-0 mb-3 text-base font-semibold`),n(xe,e(`复合子组件`));let K=i(`div`,G);n(G,K),_(K,`grid gap-2 text-sm md:grid-cols-2`);let q=i(`div`,K);n(K,q);let Se=i(`code`,q);n(q,Se),n(Se,e(`Footer.Brand`)),n(q,e(`：品牌或版权信息容器，默认渲染`));let Ce=i(`code`,q);n(q,Ce),n(Ce,e(`aside`));let J=i(`div`,K);n(K,J);let we=i(`code`,J);n(J,we),n(we,e(`Footer.Title`)),n(J,e(`：带`));let Te=i(`code`,J);n(J,Te),n(Te,e(`footer-title`)),n(J,e(`类名的标题节点`));let Y=i(`div`,K);n(K,Y);let Ee=i(`code`,Y);n(Y,Ee),n(Ee,e(`Footer.Link`)),n(Y,e(`：默认输出带`));let De=i(`code`,Y);n(Y,De),n(De,e(`link link-hover`)),n(Y,e(`的文本链接`));let X=i(`div`,K);n(K,X);let Oe=i(`code`,X);n(X,Oe),n(Oe,e(`Footer.Section`)),n(X,e(`：单列容器，支持`));let ke=i(`code`,X);n(X,ke),n(ke,e(`title`)),n(X,e(`、`));let Ae=i(`code`,X);n(X,Ae),n(Ae,e(`items`)),n(X,e(`、`));let je=i(`code`,X);n(X,je),n(je,e(`content`));let Me=i(`h2`,f);n(f,Me),n(Me,e(`FAQ`));let Ne=i(`h3`,f);n(f,Ne),n(Ne,e(`什么时候用 sections，什么时候继续写 children？`));let Z=i(`p`,f);n(f,Z),n(Z,e(`列结构比较规则时，优先用`));let Pe=i(`code`,Z);n(Z,Pe),n(Pe,e(`sections`)),n(Z,e(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=i(`code`,Z);n(Z,Fe),n(Fe,e(`nav`)),n(Z,e(`/`));let Ie=i(`code`,Z);n(Z,Ie),n(Ie,e(`aside`)),n(Z,e(`模板，也可以继续直接写`));let Le=i(`code`,Z);n(Z,Le),n(Le,e(`children`)),n(Z,e(`。`));let Re=i(`h3`,f);n(f,Re),n(Re,e(`社交图标和订阅表单怎么放进去？`));let Q=i(`p`,f);n(f,Q),n(Q,e(`这类内容更适合放到`));let ze=i(`code`,Q);n(Q,ze),n(ze,e(`Footer.Section`)),n(Q,e(`的`));let Be=i(`code`,Q);n(Q,Be),n(Be,e(`content`));let Ve=u(Q);n(Q,Ve),m(Ve,` `),n(Q,e(`里；如果只是普通文本链接，再用`));let He=i(`code`,Q);n(Q,He),n(He,e(`items`)),n(Q,e(`会更省代码。`));let Ue=i(`h3`,f);n(f,Ue),n(Ue,e(`direction 和 center 还需要保留吗？`));let $=i(`p`,f);n(f,$),n($,e(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=i(`code`,$);n($,We),n(We,e(`sm:footer-horizontal`)),n($,e(`、`));let Ge=i(`code`,$);return n($,Ge),n(Ge,e(`footer-center`)),n($,e(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),r})}),h,y),h})};export{ie as default};