import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,s as p,t as m,tt as h,vt as g,yt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{t as w}from"./tabs-Duzh3URW.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:l,rest:u,Component:f}=y(`useSetup:0:0`,()=>o(()=>{let{as:e,className:n,children:r,content:i,...a}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:t.as===void 0?`h6`:t.as}}));return c(r=>{let i=h(),o=a(`rue:component:anchor`);return n(i,o),v(()=>{let n=m(f,{...u,className:E(`footer-title`,t.className),children:t.content??t.children});e(()=>d(n,i,o))}),i})},k=t=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:f,__rue_rest_omit_2:p,__rue_rest_omit_3:g,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>o(()=>{let{as:e,className:n,children:i,content:a,href:o,target:s,rel:c,hover:l,...u}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,Component:y(`computed:1:0`,()=>r(()=>t.as??(t.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>r(()=>t.target===`_blank`&&!t.rel?`noreferrer`:t.rel))}}));return T.get()===`a`?c(r=>{let o=u(`a`,r);v(()=>{_(o,w)}),v(()=>{l(o,`href`,String(t.href))}),v(()=>{l(o,`target`,String(t.target))}),v(()=>{l(o,`rel`,String(D.get()))}),v(()=>{i(o,E(`link`,(t.hover===void 0?!0:t.hover)&&`link-hover`,t.className))});let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let n=t.content??t.children;e(()=>d(n,o,s))}),o}):T.get()===`button`?c(r=>{let o=u(`button`,r);v(()=>{_(o,w)}),v(()=>{l(o,`type`,String(w.type??`button`))}),v(()=>{i(o,E(`link`,(t.hover===void 0?!0:t.hover)&&`link-hover`,t.className))});let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let n=t.content??t.children;e(()=>d(n,o,s))}),o}):c(r=>{let i=h(),o=a(`rue:component:anchor`);return n(i,o),v(()=>{let n=m(T,{...w,className:E(`link`,(t.hover===void 0?!0:t.hover)&&`link-hover`,t.className),children:t.content??t.children});e(()=>d(n,i,o))}),i})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(t,r)=>{if(!D(t))return null;if(A(t)){let{key:i,label:o,content:s,children:l,...u}=t;return c(t=>{let c=h(),f=a(`rue:component:anchor`);return n(c,f),v(()=>{let t=m(k,{key:i??`item-${r}`,...u,children:s??l??o});e(()=>d(t,c,f))}),c})}return c(i=>{let o=h(),s=a(`rue:component:anchor`);return n(o,s),v(()=>{let n=m(k,{key:`item-${r}`,children:t});e(()=>d(n,o,s))}),o})},M=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:l,rest:u,Component:f}=y(`useSetup:0:0:dup2`,()=>o(()=>{let{as:e,className:n,children:r,content:i,...a}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:t.as===void 0?`aside`:t.as}}));return c(r=>{let i=h(),o=a(`rue:component:anchor`);return n(i,o),v(()=>{let n=m(f,{...u,className:t.className,children:t.content??t.children});e(()=>d(n,i,o))}),i})},N=t=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:l,__rue_rest_omit_2:g,__rue_rest_omit_3:_,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>o(()=>{let{as:e,className:n,children:i,title:a,titleClassName:o,content:s,items:c,inline:l,contentClassName:u,...d}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:t.as===void 0?`nav`:t.as,hasCustomContent:y(`computed:1:2`,()=>r(()=>D(t.content)||D(t.children)))}}));return c(r=>{let o=h(),s=a(`rue:component:anchor`);n(o,s);let l=c(()=>{let r=h(),o=a(`rue:slot:anchor`);n(r,o),v(()=>{let i=D(t.title)?c(()=>{let r=h(),i=a(`rue:component:anchor`);return n(r,i),v(()=>{let n=m(O,{className:t.titleClassName,children:t.title});e(()=>d(n,r,i))}),r}):``;e(()=>d(i,r,o))}),n(r,f(` `));let s=a(`rue:slot:anchor`);return n(r,s),v(()=>{let o=M.get()?t.content??t.children:t.inline?c(()=>{let e=h(),r=u(`div`,e);n(e,r),v(()=>{i(r,E(`grid grid-flow-col auto-cols-max gap-4`,t.contentClassName))});let o=a(`rue:list:start`),s=a(`rue:list:end`);n(r,o),n(r,s);let c=new Map;return v(()=>{c=b({items:(t.items??[])||[],getKey:(e,t)=>t,elements:c,parent:r,before:s,start:o,renderItem:(e,t,n,r,i)=>{p(j(e,i),t,n,r)}})}),e}):(t.items??[]).map((e,t)=>j(e,t));e(()=>d(o,r,s))}),r});return v(()=>{let n=m(A,{...k,className:t.className,children:l});e(()=>d(n,o,s))}),o})},P=Object.assign(t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:g,__rue_rest_omit_5:_,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>o(()=>{let{as:e,direction:n,center:i,className:a,children:o,brand:s,sections:c,wrap:l,bordered:u,...d}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:t.as===void 0?`footer`:t.as,hasChildren:y(`computed:1:3`,()=>r(()=>D(t.children))),hasStructuredContent:y(`computed:1:4`,()=>r(()=>D(t.brand)||(t.sections?.length??0)>0))}}));return c(r=>{let i=h(),o=a(`rue:component:anchor`);n(i,o);let s=c(()=>{let r=h(),i=a(`rue:slot:anchor`);return n(r,i),v(()=>{let o=O.get()||!k.get()?t.children:c(()=>{let r=h();n(r,f(` `));let i=a(`rue:slot:anchor`);n(r,i),v(()=>{let o=D(t.brand)?c(()=>{let e=h(),r=a(`rue:component:anchor`);return n(e,r),d(m(M,{children:t.brand}),e,r),e}):``;e(()=>d(o,r,i))}),n(r,f(` `));let o=a(`rue:list:start`),s=a(`rue:list:end`);n(r,o),n(r,s);let l=new Map;return v(()=>{l=b({items:(t.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:l,parent:o.parentNode,before:s,start:o,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;p(m(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),n(r,f(` `)),r});e(()=>d(o,r,i))}),r});return v(()=>{let n=m(T,{...w,className:E(`footer`,t.direction&&`footer-${t.direction}`,t.center&&`footer-center`,t.wrap&&`gap-y-6`,t.bordered&&`border-t border-base-300`,t.className),children:s});e(()=>d(n,i,o))}),i})},{Brand:M,Section:N,Title:O,Link:k}),F=t=>c(r=>{let o=u(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let p=u(`h2`,l);n(l,p),i(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,f(`# `));let g=a(`rue:slot:anchor`);n(p,g),v(()=>{let n=t.title;e(()=>d(n,p,g))});let _=a(`rue:slot:anchor`);n(l,_),v(()=>{let r=t.summary?c(()=>{let r=h(),o=u(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let n=t.summary;e(()=>d(n,o,s))}),r}):``;e(()=>d(r,l,_))});let y=a(`rue:component:anchor`);n(o,y),v(()=>{let n=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,o,y))});let b=a(`rue:slot:anchor`);return n(o,b),v(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=h(),i=a(`rue:component:anchor`);return n(r,i),v(()=>{let n=m(C,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,o,b))}),o}),ee=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let m=u(`tr`,p);n(p,m);let g=u(`th`,m);n(m,g),n(g,f(`属性`));let _=u(`th`,m);n(m,_),n(_,f(`说明`));let y=u(`th`,m);n(m,y),n(y,f(`类型`));let x=u(`th`,m);n(m,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=h(),i=u(`tr`,r);n(r,i),v(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),v(()=>{let n=t.description;e(()=>d(n,f,p))});let m=u(`td`,i);n(i,m);let g=u(`code`,m);n(m,g);let _=a(`rue:slot:anchor`);n(g,_),v(()=>{let n=t.type;e(()=>d(n,g,_))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),I=e=>c(t=>{let r=u(`svg`,t);v(()=>{l(r,`width`,String(e.size===void 0?40:e.size))}),v(()=>{l(r,`height`,String(e.size===void 0?40:e.size))}),l(r,`viewBox`,`0 0 24 24`),v(()=>{i(r,e.className??`fill-current`)});let a=u(`path`,r);return n(r,a),l(a,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),L=[{key:`x`,Icon:()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`width`,`24`),l(t,`height`,`24`),l(t,`viewBox`,`0 0 24 24`),i(t,`fill-current`);let r=u(`path`,t);return n(t,r),l(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),t})},{key:`video`,Icon:()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`width`,`24`),l(t,`height`,`24`),l(t,`viewBox`,`0 0 24 24`),i(t,`fill-current`);let r=u(`path`,t);return n(t,r),l(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),t})},{key:`community`,Icon:()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`width`,`24`),l(t,`height`,`24`),l(t,`viewBox`,`0 0 24 24`),i(t,`fill-current`);let r=u(`path`,t);return n(t,r),l(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),t})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后使用基础自定义结构，保持对基础写法的支持`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:r,tabCompound:p,tabBasic:_,tabLogo:b,tabForm:C,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>o(()=>({tabRecommended:y(`ref:1:0`,()=>t(`preview`)),tabCompound:y(`ref:1:1`,()=>t(`preview`)),tabBasic:y(`ref:1:2`,()=>t(`preview`)),tabLogo:y(`ref:1:3`,()=>t(`preview`)),tabForm:y(`ref:1:4`,()=>t(`preview`)),tabSocial:y(`ref:1:5`,()=>t(`preview`)),tabLinks:y(`ref:1:6`,()=>t(`preview`)),tabLinks2:y(`ref:1:7`,()=>t(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>t(`preview`)),tabCentered:y(`ref:1:9`,()=>t(`preview`)),tabTwo:y(`ref:1:10`,()=>t(`preview`))})));return c(t=>{let o=h(),y=a(`rue:component:anchor`);return n(o,y),d(m(T,{children:c(()=>{let t=h(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,o);n(o,c),n(c,f(`Footer 页脚`));let y=u(`p`,o);n(o,y),i(y,`text-sm mt-3 mb-3`),n(y,f(`Footer 现在同时支持两种组织方式：可以继续像直接写`));let T=u(`code`,y);n(y,T),n(T,f(`nav`)),n(y,f(`、`));let j=u(`code`,y);n(y,j),n(j,f(`aside`)),n(y,f(`和 自定义 class，也可以改用`));let M=u(`code`,y);n(y,M),n(M,f(`brand`)),n(y,f(`、`));let N=u(`code`,y);n(y,N),n(N,f(`sections`)),n(y,f(`与`));let R=s(y);n(y,R),g(R,` `);let z=u(`code`,y);n(y,z),n(z,f(`Footer.Section`)),n(y,f(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=u(`h2`,o);n(o,B),n(B,f(`何时使用`));let V=u(`ul`,o);n(o,V);let H=u(`li`,V);n(V,H),n(H,f(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=u(`li`,V);n(V,U),n(U,f(`希望使用 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=a(`rue:component:anchor`);n(o,ie),v(()=>{let t=m(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然提供当前视觉类名和响应式方向。`,tab:r,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});e(()=>d(t,o,ie))});let ae=a(`rue:component:anchor`);n(o,ae),v(()=>{let t=m(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:p,preview:()=>x(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[x(P.Brand,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,S(`br`,{}),`Ship consistent experiences.`]})]}),x(P.Section,{title:`Product`,children:[S(P.Link,{children:`Overview`}),S(P.Link,{children:`Pricing`}),S(P.Link,{children:`Changelog`})]}),S(P.Section,{title:`Community`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});e(()=>d(t,o,ae))});let oe=a(`rue:component:anchor`);n(o,oe),v(()=>{let t=m(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`基础示例 展示，这里改用 sections 表达同一个场景。`,tab:_,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});e(()=>d(t,o,oe))});let se=a(`rue:component:anchor`);n(o,se),v(()=>{let t=m(F,{title:`Footer with a logo section`,summary:`展示品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
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
/>`});e(()=>d(t,o,se))});let ce=a(`rue:component:anchor`);n(o,ce),v(()=>{let t=m(F,{title:`Footer with a form`,summary:`展示订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:x(`fieldset`,{className:`w-80`,children:[S(`label`,{children:`Enter your email address`}),x(`div`,{className:`join`,children:[S(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),S(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});e(()=>d(t,o,ce))});let le=a(`rue:component:anchor`);n(o,le),v(()=>{let t=m(F,{title:`Footer with logo and social icons`,summary:`展示品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}]}),code:`<Footer
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
/>`});e(()=>d(t,o,le))});let ue=a(`rue:component:anchor`);n(o,ue),v(()=>{let t=m(F,{title:`Footer with links and social icons`,summary:`展示混合场景；这里可以用 children 自由拼装，展示组合分支。`,tab:E,preview:()=>x(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Services`}),S(`button`,{className:`link link-hover`,children:`Branding`}),S(`button`,{className:`link link-hover`,children:`Design`}),S(`button`,{className:`link link-hover`,children:`Marketing`}),S(`button`,{className:`link link-hover`,children:`Advertisement`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Company`}),S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Social`}),S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});e(()=>d(t,o,ue))});let de=a(`rue:component:anchor`);n(o,de),v(()=>{let t=m(F,{title:`Links and social icons (two rows)`,summary:`展示两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});e(()=>d(t,o,de))});let fe=a(`rue:component:anchor`);n(o,fe),v(()=>{let t=m(F,{title:`Centered footer with logo and social icons`,summary:`展示居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>x(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[x(`aside`,{children:[S(I,{size:50,className:`inline-block fill-current`}),x(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});e(()=>d(t,o,fe))});let pe=a(`rue:component:anchor`);n(o,pe),v(()=>{let t=m(F,{title:`Centered footer with social icons`,summary:`展示居中导航与版权场景；展示基础的 children 写法。`,tab:k,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[x(`nav`,{className:`grid grid-flow-col gap-4`,children:[S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}),S(`aside`,{children:x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});e(()=>d(t,o,pe))});let me=a(`rue:component:anchor`);n(o,me),v(()=>{let t=m(F,{title:`Two footer`,summary:`双层 footer 场景展示；下半部分可配合 bordered 或直接使用原类名。`,tab:A,preview:()=>x(`div`,{className:`w-full`,children:[S(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),x(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[x(`aside`,{className:`grid-flow-col items-center`,children:[S(I,{size:24}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),S(`nav`,{className:`md:place-self-center md:justify-self-end`,children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});e(()=>d(t,o,me))});let he=u(`h2`,o);n(o,he),l(he,`id`,`footer-api`),n(he,f(`API`));let ge=u(`p`,o);n(o,ge),n(ge,f(`当前页展示的是语义化的 Footer API，基础的 children 写法仍然可用。`));let _e=u(`h3`,o);n(o,_e),n(_e,f(`Footer`));let ve=a(`rue:component:anchor`);n(o,ve),v(()=>{let t=m(ee,{rows:ne});e(()=>d(t,o,ve))});let ye=u(`h3`,o);n(o,ye),i(ye,`mt-8`),n(ye,f(`Footer.Section`));let be=a(`rue:component:anchor`);n(o,be),v(()=>{let t=m(ee,{rows:re});e(()=>d(t,o,be))});let G=u(`div`,o);n(o,G),i(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=u(`h3`,G);n(G,xe),i(xe,`mt-0 mb-3 text-base font-semibold`),n(xe,f(`复合子组件`));let K=u(`div`,G);n(G,K),i(K,`grid gap-2 text-sm md:grid-cols-2`);let q=u(`div`,K);n(K,q);let Se=u(`code`,q);n(q,Se),n(Se,f(`Footer.Brand`)),n(q,f(`：品牌或版权信息容器，默认渲染`));let Ce=u(`code`,q);n(q,Ce),n(Ce,f(`aside`));let J=u(`div`,K);n(K,J);let we=u(`code`,J);n(J,we),n(we,f(`Footer.Title`)),n(J,f(`：带`));let Te=u(`code`,J);n(J,Te),n(Te,f(`footer-title`)),n(J,f(`类名的标题节点`));let Y=u(`div`,K);n(K,Y);let Ee=u(`code`,Y);n(Y,Ee),n(Ee,f(`Footer.Link`)),n(Y,f(`：默认输出带`));let De=u(`code`,Y);n(Y,De),n(De,f(`link link-hover`)),n(Y,f(`的文本链接`));let X=u(`div`,K);n(K,X);let Oe=u(`code`,X);n(X,Oe),n(Oe,f(`Footer.Section`)),n(X,f(`：单列容器，支持`));let ke=u(`code`,X);n(X,ke),n(ke,f(`title`)),n(X,f(`、`));let Ae=u(`code`,X);n(X,Ae),n(Ae,f(`items`)),n(X,f(`、`));let je=u(`code`,X);n(X,je),n(je,f(`content`));let Me=u(`h2`,o);n(o,Me),n(Me,f(`FAQ`));let Ne=u(`h3`,o);n(o,Ne),n(Ne,f(`什么时候用 sections，什么时候可以写 children？`));let Z=u(`p`,o);n(o,Z),n(Z,f(`列结构比较规则时，优先用`));let Pe=u(`code`,Z);n(Z,Pe),n(Pe,f(`sections`)),n(Z,f(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=u(`code`,Z);n(Z,Fe),n(Fe,f(`nav`)),n(Z,f(`/`));let Ie=u(`code`,Z);n(Z,Ie),n(Ie,f(`aside`)),n(Z,f(`模板，也可以继续直接写`));let Le=u(`code`,Z);n(Z,Le),n(Le,f(`children`)),n(Z,f(`。`));let Re=u(`h3`,o);n(o,Re),n(Re,f(`社交图标和订阅表单怎么放进去？`));let Q=u(`p`,o);n(o,Q),n(Q,f(`这类内容更适合放到`));let ze=u(`code`,Q);n(Q,ze),n(ze,f(`Footer.Section`)),n(Q,f(`的`));let Be=u(`code`,Q);n(Q,Be),n(Be,f(`content`));let Ve=s(Q);n(Q,Ve),g(Ve,` `),n(Q,f(`里；如果只是普通文本链接，再用`));let He=u(`code`,Q);n(Q,He),n(He,f(`items`)),n(Q,f(`会更省代码。`));let Ue=u(`h3`,o);n(o,Ue),n(Ue,f(`direction 和 center 还需要保持吗？`));let $=u(`p`,o);n(o,$),n($,f(`需要。它们仍然是最轻量的布局开关，适合和当前的`));let We=u(`code`,$);n($,We),n(We,f(`sm:footer-horizontal`)),n($,f(`、`));let Ge=u(`code`,$);return n($,Ge),n(Ge,f(`footer-center`)),n($,f(`类名习惯一起工作，不会破坏项目页面的视觉结果。`)),t})}),o,y),o})};export{ie as default};