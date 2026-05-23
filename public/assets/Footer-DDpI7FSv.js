import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h,y as g}from"./vapor-runtime-BAZOdMd8.js";import{a as _,n as v}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as y,t as b}from"./src-DZJ4J6sD.js";import{n as x}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as S}from"./Code-DY4Ua5uc.js";import{t as C}from"./tabs-Casd077O.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=({as:e=`h6`,className:t,children:n,content:r,...i})=>b(e,{...i,className:w(`footer-title`,t),children:r??n}),D=({as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s=!0,...c})=>{let l=e??(i?`a`:`button`),u=a===`_blank`&&!o?`noreferrer`:o;return l===`a`?b(`a`,{...c,href:i,target:a,rel:u,className:w(`link`,s&&`link-hover`,t),children:r??n}):l===`button`?b(`button`,{...c,type:c.type??`button`,className:w(`link`,s&&`link-hover`,t),children:r??n}):b(l,{...c,className:w(`link`,s&&`link-hover`,t),children:r??n})},ee=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,te=(e,t)=>{if(!T(e))return null;if(ee(e)){let{key:n,label:r,content:i,children:a,...o}=e;return b(D,{...o,children:i??a??r},n??`item-${t}`)}return b(D,{children:e},`item-${t}`)},O=({as:e=`aside`,className:t,children:n,content:r,...i})=>b(e,{...i,className:t,children:r??n}),k=({as:e=`nav`,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:s,contentClassName:c,...l})=>{let u=e,d=(o??[]).map((e,t)=>te(e,t)).filter(Boolean),f=T(a)||T(n)?a??n:s?b(`div`,{className:w(`grid grid-flow-col auto-cols-max gap-4`,c),children:d}):d;return y(u,{...l,className:t,children:[T(r)?b(E,{className:i,children:r}):null,f]})},A=Object.assign(({as:e=`footer`,direction:t,center:n,className:r,children:i,brand:a,sections:o,wrap:s,bordered:c,...l})=>{let u=e,d=T(i),f=T(a)||(o?.length??0)>0;return b(u,{...l,className:w(`footer`,t&&`footer-${t}`,n&&`footer-center`,s&&`gap-y-6`,c&&`border-t border-base-300`,r),children:d||!f?i:y(g,{children:[T(a)?b(O,{children:a}):null,(o??[]).map((e,t)=>{let{key:n,...r}=e;return b(k,{...r},n??`section-${t}`)})]})})},{Brand:O,Section:k,Title:E,Link:D}),j=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(S,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),ne=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let _=a(`th`,g);r(g,_),r(_,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),M=t=>c(n=>{let i=a(`svg`,n);l(()=>{e(i,`width`,String(t.size===void 0?40:t.size))}),l(()=>{e(i,`height`,String(t.size===void 0?40:t.size))}),e(i,`viewBox`,`0 0 24 24`),l(()=>{m(i,String(t.className??`fill-current`))});let o=a(`path`,i);return r(i,o),e(o,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),i}),N=[{key:`x`,Icon:()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`width`,`24`),e(n,`height`,`24`),e(n,`viewBox`,`0 0 24 24`),m(n,`fill-current`);let i=a(`path`,n);return r(n,i),e(i,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),n})},{key:`video`,Icon:()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`width`,`24`),e(n,`height`,`24`),e(n,`viewBox`,`0 0 24 24`),m(n,`fill-current`);let i=a(`path`,n);return r(n,i),e(i,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),n})},{key:`community`,Icon:()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`width`,`24`),e(n,`height`,`24`),e(n,`viewBox`,`0 0 24 24`),m(n,`fill-current`);let i=a(`path`,n);return r(n,i),e(i,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),n})}],P=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],F=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],I=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],L=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],R=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],z=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],B=[{key:`services`,title:`Services`,items:P},{key:`company`,title:`Company`,items:F},{key:`legal`,title:`Legal`,items:I}],re=[...B,{key:`social`,title:`Social`,items:L},{key:`explore`,title:`Explore`,items:R},{key:`apps`,title:`Apps`,items:z}],ie=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],V=()=>{let{tabRecommended:g,tabCompound:v,tabBasic:S,tabLogo:C,tabForm:w,tabSocial:T,tabLinks:E,tabLinks2:D,tabCenteredBrand:ee,tabCentered:te,tabTwo:O}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>s(`preview`)),tabCompound:_(`ref:1:1`,()=>s(`preview`)),tabBasic:_(`ref:1:2`,()=>s(`preview`)),tabLogo:_(`ref:1:3`,()=>s(`preview`)),tabForm:_(`ref:1:4`,()=>s(`preview`)),tabSocial:_(`ref:1:5`,()=>s(`preview`)),tabLinks:_(`ref:1:6`,()=>s(`preview`)),tabLinks2:_(`ref:1:7`,()=>s(`preview`)),tabCenteredBrand:_(`ref:1:8`,()=>s(`preview`)),tabCentered:_(`ref:1:9`,()=>s(`preview`)),tabTwo:_(`ref:1:10`,()=>s(`preview`))})));return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(x,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Footer 页脚`));let _=a(`p`,s);r(s,_),m(_,`text-sm mt-3 mb-3`),r(_,d(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let x=a(`code`,_);r(_,x),r(x,d(`nav`)),r(_,d(`、`));let k=a(`code`,_);r(_,k),r(k,d(`aside`)),r(_,d(`和 自定义 class，也可以改用`));let P=a(`code`,_);r(_,P),r(P,d(`brand`)),r(_,d(`、`));let F=a(`code`,_);r(_,F),r(F,d(`sections`));let I=i(_);r(_,I),f(I,` `),r(_,d(`与`));let L=a(`code`,_);r(_,L),r(L,d(`Footer.Section`)),r(_,d(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let R=a(`h2`,s);r(s,R),r(R,d(`何时使用`));let z=a(`ul`,s);r(s,z);let V=a(`li`,z);r(z,V),r(V,d(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let oe=a(`li`,z);r(z,oe),r(oe,d(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let se=o(`rue:component:anchor`);r(s,se),l(()=>{let e=p(j,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:g,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>u(e,s,se))});let ce=o(`rue:component:anchor`);r(s,ce),l(()=>{let e=p(j,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:v,preview:()=>y(A,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[y(A.Brand,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,b(`br`,{}),`Ship consistent experiences.`]})]}),y(A.Section,{title:`Product`,children:[b(A.Link,{children:`Overview`}),b(A.Link,{children:`Pricing`}),b(A.Link,{children:`Changelog`})]}),b(A.Section,{title:`Community`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});h(()=>u(e,s,ce))});let le=o(`rue:component:anchor`);r(s,le),l(()=>{let e=p(j,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:S,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>u(e,s,le))});let ue=o(`rue:component:anchor`);r(s,ue),l(()=>{let e=p(j,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:C,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:B}),code:`<Footer
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
/>`});h(()=>u(e,s,ue))});let de=o(`rue:component:anchor`);r(s,de),l(()=>{let e=p(j,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:w,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...B,{key:`newsletter`,title:`Newsletter`,as:`form`,content:y(`fieldset`,{className:`w-80`,children:[b(`label`,{children:`Enter your email address`}),y(`div`,{className:`join`,children:[b(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),b(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});h(()=>u(e,s,de))});let fe=o(`rue:component:anchor`);r(s,fe),l(()=>{let e=p(j,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:T,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}]}),code:`<Footer
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
/>`});h(()=>u(e,s,fe))});let pe=o(`rue:component:anchor`);r(s,pe),l(()=>{let e=p(j,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>y(A,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Services`}),b(`button`,{className:`link link-hover`,children:`Branding`}),b(`button`,{className:`link link-hover`,children:`Design`}),b(`button`,{className:`link link-hover`,children:`Marketing`}),b(`button`,{className:`link link-hover`,children:`Advertisement`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Company`}),b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Social`}),b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});h(()=>u(e,s,pe))});let me=o(`rue:component:anchor`);r(s,me),l(()=>{let e=p(j,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:re}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});h(()=>u(e,s,me))});let he=o(`rue:component:anchor`);r(s,he),l(()=>{let e=p(j,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:ee,preview:()=>y(A,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[y(`aside`,{children:[b(M,{size:50,className:`inline-block fill-current`}),y(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});h(()=>u(e,s,he))});let ge=o(`rue:component:anchor`);r(s,ge),l(()=>{let e=p(j,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:te,preview:()=>y(A,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[y(`nav`,{className:`grid grid-flow-col gap-4`,children:[b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}),b(`aside`,{children:y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});h(()=>u(e,s,ge))});let _e=o(`rue:component:anchor`);r(s,_e),l(()=>{let e=p(j,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:O,preview:()=>y(`div`,{className:`w-full`,children:[b(A,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:B}),y(A,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[y(`aside`,{className:`grid-flow-col items-center`,children:[b(M,{size:24}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),b(`nav`,{className:`md:place-self-center md:justify-self-end`,children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});h(()=>u(e,s,_e))});let H=a(`h2`,s);r(s,H),e(H,`id`,`footer-api`),r(H,d(`API`));let ve=a(`p`,s);r(s,ve),r(ve,d(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let ye=a(`h3`,s);r(s,ye),r(ye,d(`Footer`));let be=o(`rue:component:anchor`);r(s,be),l(()=>{let e=p(ne,{rows:ie});h(()=>u(e,s,be))});let U=a(`h3`,s);r(s,U),m(U,`mt-8`),r(U,d(`Footer.Section`));let xe=o(`rue:component:anchor`);r(s,xe),l(()=>{let e=p(ne,{rows:ae});h(()=>u(e,s,xe))});let W=a(`div`,s);r(s,W),m(W,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let G=a(`h3`,W);r(W,G),m(G,`mt-0 mb-3 text-base font-semibold`),r(G,d(`复合子组件`));let K=a(`div`,W);r(W,K),m(K,`grid gap-2 text-sm md:grid-cols-2`);let q=a(`div`,K);r(K,q);let Se=a(`code`,q);r(q,Se),r(Se,d(`Footer.Brand`)),r(q,d(`：品牌或版权信息容器，默认渲染`));let Ce=a(`code`,q);r(q,Ce),r(Ce,d(`aside`));let J=a(`div`,K);r(K,J);let we=a(`code`,J);r(J,we),r(we,d(`Footer.Title`)),r(J,d(`：带`));let Te=a(`code`,J);r(J,Te),r(Te,d(`footer-title`)),r(J,d(`类名的标题节点`));let Y=a(`div`,K);r(K,Y);let Ee=a(`code`,Y);r(Y,Ee),r(Ee,d(`Footer.Link`)),r(Y,d(`：默认输出带`));let De=a(`code`,Y);r(Y,De),r(De,d(`link link-hover`)),r(Y,d(`的文本链接`));let X=a(`div`,K);r(K,X);let Oe=a(`code`,X);r(X,Oe),r(Oe,d(`Footer.Section`)),r(X,d(`：单列容器，支持`));let ke=a(`code`,X);r(X,ke),r(ke,d(`title`)),r(X,d(`、`));let Ae=a(`code`,X);r(X,Ae),r(Ae,d(`items`)),r(X,d(`、`));let je=a(`code`,X);r(X,je),r(je,d(`content`));let Me=a(`h2`,s);r(s,Me),r(Me,d(`FAQ`));let Ne=a(`h3`,s);r(s,Ne),r(Ne,d(`什么时候用 sections，什么时候继续写 children？`));let Z=a(`p`,s);r(s,Z),r(Z,d(`列结构比较规则时，优先用`));let Pe=a(`code`,Z);r(Z,Pe),r(Pe,d(`sections`)),r(Z,d(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=a(`code`,Z);r(Z,Fe),r(Fe,d(`nav`)),r(Z,d(`/`));let Ie=a(`code`,Z);r(Z,Ie),r(Ie,d(`aside`)),r(Z,d(`模板，也可以继续直接写`));let Le=a(`code`,Z);r(Z,Le),r(Le,d(`children`)),r(Z,d(`。`));let Re=a(`h3`,s);r(s,Re),r(Re,d(`社交图标和订阅表单怎么放进去？`));let Q=a(`p`,s);r(s,Q),r(Q,d(`这类内容更适合放到`));let ze=a(`code`,Q);r(Q,ze),r(ze,d(`Footer.Section`)),r(Q,d(`的`));let Be=a(`code`,Q);r(Q,Be),r(Be,d(`content`));let Ve=i(Q);r(Q,Ve),f(Ve,` `),r(Q,d(`里；如果只是普通文本链接，再用`));let He=a(`code`,Q);r(Q,He),r(He,d(`items`)),r(Q,d(`会更省代码。`));let Ue=a(`h3`,s);r(s,Ue),r(Ue,d(`direction 和 center 还需要保留吗？`));let $=a(`p`,s);r(s,$),r($,d(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=a(`code`,$);r($,We),r(We,d(`sm:footer-horizontal`)),r($,d(`、`));let Ge=a(`code`,$);return r($,Ge),r(Ge,d(`footer-center`)),r($,d(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),t})}),s,_),s})};export{V as default};