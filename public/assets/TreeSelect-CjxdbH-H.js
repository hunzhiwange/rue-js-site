import{$ as e,Gt as t,Jt as n,Kt as r,Lt as i,O as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,j as p,l as m,ot as h,s as g,t as _}from"./vapor-runtime-DHPuOjqh.js";import{a as v,n as y}from"./vapor-helpers-vapor-CJFAWine.js";import{a as b,i as x}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as C}from"./PreviewBlock-BYaG1RFO.js";var w=`SHOW_ALL`,T=`SHOW_PARENT`,ee=`SHOW_CHILD`,te={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},E={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},D=(...e)=>e.filter(Boolean).join(` `),O=e=>typeof e==`object`&&!!e&&!Array.isArray(e),k=e=>typeof e==`string`||typeof e==`number`,ne=e=>e==null?[]:Array.isArray(e)?e:[e],re=e=>`${typeof e}:${String(e)}`,ie=e=>{if(k(e))return e;if(O(e)&&k(e.value))return e.value},ae=e=>ne(e).flatMap(e=>{let t=ie(e);return t===void 0?[]:[t]}),A=(e,t,n)=>e[n?.[t]??E[t]],oe=(e,t)=>A(e,`label`,t)??e.title??e.label??A(e,`value`,t)??A(e,`key`,t),se=e=>typeof e==`string`||typeof e==`number`?String(e):``,ce=(e,t,n)=>{if(!t)return e;let r=O(t)?t:void 0,i=r?.id??n?.id??E.id,a=r?.pId??n?.pId??E.pId,o=r?.rootPId??0,s=n?.children??E.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},le=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=A(e,`children`,t),l=A(e,`value`,t),u=A(e,`key`,t),d=A(e,`isLeaf`,t),f=k(l)?l:k(u)?u:o,p=oe(e,t),m=re(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:se(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!A(e,`disabled`,t),selectable:A(e,`selectable`,t)!==!1,checkable:A(e,`checkable`,t)!==!1,disableCheckbox:!!A(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:A(e,`className`,t),icon:A(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},j=e=>{let t=[];return e.children.forEach(e=>{ue(e).forEach(e=>t.push(e))}),t},de=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=j(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},fe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},pe=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},M=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,me=(e,t,n)=>({value:e.value,key:e.value,label:M(e,n),halfChecked:t,disabled:e.disabled}),he=(e,t,n,r,i)=>{let a=n?e.map(e=>me(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},ge=(e,t,n)=>{let r=e.map(e=>M(e,n));return t?r:r[0]??null},_e=(e,t,n)=>String(t===`title`||t===`label`?M(e,n)??``:t===`value`?e.value:e.raw[t]??``),ve=(e,t)=>[String(e.value??``),String(M(e,t)??``)],ye=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},N=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(O(n)&&typeof n.root==`string`)return n.root},be=(e,t)=>{let n=e?.[t];if(O(n)&&!(`root`in n))return n;if(O(n?.root))return n.root},xe=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},P=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Se=(e,t)=>{O(t)&&Object.assign(e.style,t)},Ce=()=>x(`svg`,{viewBox:`0 0 20 20`,fill:`none`,className:`block h-4 w-4`,children:x(`path`,{d:`M6 6L14 14M14 6L6 14`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linecap":`round`})}),F=({value:e,defaultValue:r,treeData:o=[],fieldNames:s,treeDataSimpleMode:c,multiple:l,treeCheckable:u,treeCheckStrictly:d,showCheckedStrategy:f=ee,labelInValue:m,showSearch:h,searchValue:g,filterTreeNode:_,treeNodeFilterProp:v,placeholder:y,allowClear:S,clearLabel:C=`清空选择`,notFoundContent:w,disabled:T,loading:E,open:ne,defaultOpen:ie,onOpenChange:A,treeDefaultExpandAll:oe,treeDefaultExpandedKeys:se,treeExpandedKeys:j,treeLoadedKeys:F,onTreeExpand:we,loadData:I,maxCount:Te,maxTagCount:L,maxTagPlaceholder:Ee,maxTagTextLength:De,listHeight:Oe=320,placement:ke=`bottomLeft`,popupMatchSelectWidth:Ae=!0,size:je=`md`,status:Me,variant:Ne=`outlined`,prefix:Pe,suffix:Fe,suffixIcon:Ie,showArrow:Le=!0,switcherIcon:Re,treeTitleRender:ze,treeNodeLabelProp:R=`title`,treeLine:Be,onSearch:Ve,onChange:He,onSelect:Ue,onDeselect:We,onClear:Ge,onPopupScroll:Ke,className:qe,style:Je,selectorClassName:Ye,selectorStyle:Xe,popupClassName:Ze,popupStyle:Qe,dropdownClassName:$e,dropdownStyle:et,classNames:tt,styles:nt,tagRender:rt,children:it,...at})=>{let ot=t(),st=t(),ct=t(),lt=t(),ut=t(),dt=t(),ft=t(),pt=t(),z=i(0),mt=i(r??(u||l?[]:null)),ht=i(!!ie),gt=le(ce(o,c,s),s),_t=i(oe?gt.flat.filter(e=>e.children.length>0).map(e=>e.value):se??[]),vt=i([]),yt=i(``),bt=i([]),B=i(0),V=O(h)?h:void 0,xt=le(ce(o,c,s),s),St=t();St.current=xt;let H=!!l||!!u,Ct=!!m||!!d,U=!!T||!!E,wt=O(S)?S:S?{}:null,Tt=typeof h==`boolean`?h:h===void 0?H:!0,Et=N(tt,`selector`),Dt=be(nt,`selector`),Ot=N(tt,`popup`),kt=be(nt,`popup`),At=N(tt,`tree`),jt=be(nt,`tree`),Mt=N(tt,`search`),Nt=be(nt,`search`),Pt=N(tt,`tag`),Ft=be(nt,`tag`),It=N(tt,`root`),Lt=be(nt,`root`),Rt=()=>{let e=le(ce(o,c,s),s);return St.current=e,e},W=()=>St.current??xt,G=()=>V?.searchValue??g??(Tt?yt.value:``),K=()=>ne??ht.value,zt=()=>ae(j??_t.value),Bt=()=>new Set(zt().map(re)),Vt=()=>ae(F??vt.value),Ht=()=>new Set(Vt().map(re)),Ut=()=>{let t=W(),n=ae(e===void 0?mt.value:e).map(re),r=new Set(n),i=u?de(n,t.byValueKey,!!d):r,a=u?fe(t.roots,i,!!d):{checkedKeys:r,halfCheckedKeys:new Set,stateMap:Object.fromEntries(t.flat.map(e=>[e.valueKey,{checked:r.has(e.valueKey),halfChecked:!1,participates:!0}]))},o=u?pe(t.roots,a.stateMap,f):n.map(e=>t.byValueKey[e]).filter(Boolean);return{currentValueKeys:n,currentValueKeySet:r,derivedCheckState:a,displayNodes:o,displayNodeKeySet:new Set(o.map(e=>e.valueKey))}},Wt=V?.treeNodeFilterProp??v,Gt=V?.filterTreeNode??_??!0,Kt=(e,t)=>{if(!t)return!0;if(typeof Gt==`function`)return Gt(t,e);if(Gt===!1)return!0;let n=t.toLowerCase();return(Wt?[_e(e,Wt,R)]:ve(e,R)).some(e=>e.toLowerCase().includes(n))},qt=typeof L==`number`&&L>=0?Math.max(0,L):void 0,Jt=()=>{let e=W(),t=G();return ye(e.roots,Bt(),t,e=>Kt(e,t))},q=()=>{z.value+=1},Yt=()=>{let e=ft.current;if(!e)return;let t=K();e.hidden=!t,e.setAttribute(`aria-hidden`,t?`false`:`true`)},Xt=()=>{let e=st.current;e&&e.setAttribute(`aria-expanded`,K()?`true`:`false`)},Zt=()=>{let e=ct.current;e&&e.classList.toggle(`rotate-180`,K())},J=()=>{Xt(),Yt(),Zt()},Qt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(W().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},$t=e=>{let t=e?.length??Ut().displayNodes.length;return!!wt&&!U&&t>0},en=()=>{let e=pt.current;if(!e)return;let t=e.scrollHeight>0||e.clientHeight>0?Math.max(0,e.scrollHeight-e.clientHeight):B.value,n=Math.min(B.value,t);B.value=n,e.scrollTop!==n&&(e.scrollTop=n)},Y=e=>{let t=dt.current;if(!t)return;let n=$t(e);t.classList.toggle(`hidden`,!n),t.classList.toggle(`inline-flex`,n),t.disabled=!n},X=e=>{let t=lt.current;if(!t||typeof document>`u`)return;let n=Ut(),r=e??n.displayNodes,i=r.length>0,a=qt===void 0?r:r.slice(0,qt),o=qt===void 0?[]:r.slice(qt),s=G(),c=K(),l=Tt&&(H||u||c||!i);if(t.replaceChildren(),a.forEach(e=>{let n=xe(M(e,R),De),r=document.createElement(`span`);r.className=D(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,Pt),Se(r,Ft);let i=document.createElement(`span`);if(i.className=`truncate`,i.textContent=P(n),r.appendChild(i),!U){let t=document.createElement(`button`);t.type=`button`,t.className=`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`,t.setAttribute(`aria-label`,`移除 ${P(M(e,R)??e.value)}`),t.textContent=`×`,t.addEventListener(`click`,t=>{let n=sn(e,t);n&&(X(n.displayNodes),Y(n.displayNodes),Z(n),J())}),r.appendChild(t)}t.appendChild(r)}),o.length>0){let e=document.createElement(`span`);e.className=`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`,e.textContent=P(typeof Ee==`function`?Ee(o):Ee??`+${o.length}`),t.appendChild(e)}if(l){let e=document.createElement(`input`);e.value=s,e.disabled=U,e.placeholder=P(y??`请选择`),e.className=D(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Mt),Se(e,Nt),e.addEventListener(`click`,e=>e.stopPropagation()),e.addEventListener(`input`,e=>{$(!0),tn(e.target.value,{syncSelector:!1})}),ut.current=e,t.appendChild(e);return}ut.current=void 0;let d=document.createElement(`span`);d.className=i&&!H&&!u?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`,d.textContent=P(i&&!H&&!u?M(r[0],R):y??`请选择`),t.appendChild(d)},Z=e=>{let t=pt.current;if(!t||typeof document>`u`)return;let n=e??Ut(),r=Jt(),i=G(),a=Bt();if(t.replaceChildren(),!r.length){let e=document.createElement(`div`);e.className=`rounded-md px-3 py-8 text-center text-sm text-base-content/55`,e.textContent=P(w??`暂无匹配项`),t.appendChild(e),en();return}r.forEach(({node:e,matched:r})=>{let o=n.derivedCheckState.stateMap[e.valueKey]??{checked:!1,halfChecked:!1,participates:!0},s=u?o.checked:n.currentValueKeySet.has(e.valueKey),c=u?o.halfChecked:!1,l=i?!0:a.has(e.valueKey),d=bt.value.includes(e.valueKey),f=!!I||e.children.length>0||!e.isLeaf,p=document.createElement(`div`);p.dataset.rueTreeSelectNode=e.valueKey,p.className=D(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,r&&`bg-primary/8`,Be&&e.depth>0&&`border-l border-base-300/60`,e.className),p.style.paddingLeft=`${e.depth*16+4}px`;let m=document.createElement(`button`);if(m.type=`button`,m.className=`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`,m.disabled=!f||U||e.disabled,m.setAttribute(`aria-label`,l?`折叠节点`:`展开节点`),m.textContent=d?`…`:f?l?`▾`:`▸`:``,m.addEventListener(`click`,n=>{B.value=t.scrollTop,un(e,n),Z(),J()}),p.appendChild(m),u){let n=document.createElement(`button`);n.type=`button`,n.setAttribute(`role`,`checkbox`),n.setAttribute(`aria-checked`,c?`mixed`:o.checked?`true`:`false`),n.disabled=U||e.disabled||e.disableCheckbox||!e.checkable,n.className=D(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,o.checked||c?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,(U||e.disabled||e.disableCheckbox||!e.checkable)&&`opacity-45`),n.textContent=c?`−`:o.checked?`✓`:``,n.addEventListener(`click`,n=>{B.value=t.scrollTop;let r=ln(e,n);r&&(X(r.displayNodes),Y(r.displayNodes),Z(r),J())}),p.appendChild(n)}let h=document.createElement(`button`);h.type=`button`,h.className=D(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,s?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(U||e.disabled||!e.selectable)&&`cursor-not-allowed opacity-55`),h.disabled=U||e.disabled||!e.selectable,h.textContent=P(ze?ze(e):M(e,R)),h.addEventListener(`click`,n=>{B.value=t.scrollTop;let r=ln(e,n);r&&(X(r.displayNodes),Y(r.displayNodes),Z(r),J())}),p.appendChild(h),t.appendChild(p)}),en()},Q=()=>{X(),Y(),Z(),J()},$=(e,t)=>{let n=K()!==e;ne===void 0&&ht.value!==e&&(ht.value=e,q()),n&&X(t?.selectionOverride),J(),n&&A&&A(e),n&&e&&Tt&&Promise.resolve().then(()=>{ut.current?.focus()})},tn=(e,t)=>{if(V?.searchValue===void 0&&g===void 0){if(yt.value===e)return;yt.value=e,q()}t?.syncSelector===!1?(Y(),Z(),J()):Q(),V?.onSearch&&V.onSearch(e),Ve&&Ve(e)},nn=e=>{j===void 0&&(_t.value=e,q()),Z(),we&&we(e)},rn=e=>{F===void 0&&(vt.value=e,q()),Z()},an=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),a=new Set(t.map(e=>e.valueKey));We&&e.filter(e=>!a.has(e.valueKey)).forEach(e=>{We(Ct?me(e,r.has(e.valueKey),R):e.value,e,{...n,selected:!1,checked:!1})}),Ue&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{Ue(Ct?me(e,r.has(e.valueKey),R):e.value,e,{...n,selected:!0,checked:!0})})},on=(t,n,r)=>{let i=W(),a=Ut(),o=he(t,H,Ct,r,R),s=ge(t,H,R);e===void 0&&(mt.value=o,q()),X(t),Y(t),Z(),J(),an(a.displayNodes,t,{...n,displayNodes:t,halfCheckedKeys:Array.from(r).map(e=>i.byValueKey[e]?.value).filter(k)},r),He&&He(o,s,{...n,displayNodes:t,halfCheckedKeys:Array.from(r).map(e=>i.byValueKey[e]?.value).filter(k),checkedNodes:u?i.flat.filter(e=>t.some(t=>t.valueKey===e.valueKey)):t})},sn=(e,t)=>{t.preventDefault(),t.stopPropagation();let n=Ut(),r=W();if(u){let t=de(n.currentValueKeys,r.byValueKey,!!d);d?t.delete(e.valueKey):ue(e).forEach(e=>t.delete(e));let i=fe(r.roots,t,!!d),a=pe(r.roots,i.stateMap,f);return on(a,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),Qt(a,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return on(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Qt(i)},cn=e=>{e.preventDefault(),e.stopPropagation(),Ge&&Ge(e),G()&&tn(``),on([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set);let t=Qt([]);X(t.displayNodes),Y(t.displayNodes),Z(t),J()},ln=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),U||e.disabled)return null;let n=Ut(),r=W();if(u){let t=de(n.currentValueKeys,r.byValueKey,!!d),i=n.derivedCheckState.checkedKeys.has(e.valueKey);if(d)i?t.delete(e.valueKey):t.add(e.valueKey);else{let n=ue(e);i?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let a=fe(r.roots,t,!!d),o=pe(r.roots,a.stateMap,f);return!i&&Te&&o.length>Te?null:(on(o,{triggerNode:e,triggerValue:e.value,checked:!i,selected:!i},a.halfCheckedKeys),(V?.autoClearSearchValue??!0)&&G()&&tn(``),$(!0),Qt(o,a))}if(H){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&Te&&t.length>Te?null:(on(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(V?.autoClearSearchValue??!0)&&G()&&tn(``),$(!0),Qt(t))}return on([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),G()&&tn(``),$(!1,{selectionOverride:[e]}),Qt([e])},un=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),U||e.disabled||!I&&e.children.length===0&&e.isLeaf)return;let n=Bt(),r=Vt(),i=Ht(),a=G(),o=W(),s=new Set(n),c=!n.has(e.valueKey);c?s.add(e.valueKey):s.delete(e.valueKey),nn(Array.from(s).map(e=>o.byValueKey[e]?.value).filter(k)),c&&I&&!a&&!i.has(e.valueKey)&&!bt.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(bt.value=[...bt.value,e.valueKey],q(),Z(),Promise.resolve(I(e)).then(()=>{Rt(),rn(Array.from(new Set([...r,e.value]))),Q()}).finally(()=>{bt.value=bt.value.filter(t=>t!==e.valueKey),Rt(),q(),Z()}))},dn=e=>{U&&e.preventDefault()},fn=()=>{U||$(!K())};a(()=>{if(typeof document>`u`)return;Q();let e=e=>{let t=e.target;t&&(ot.current?.contains(t)||$(!1))},t=e=>{e.key===`Escape`&&$(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),p(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})}),n(()=>e,()=>{Q()}),n(()=>ne,()=>{Q()}),n(()=>g,()=>{Q()}),n(()=>o,()=>{Rt(),Q()}),n(()=>j,()=>{Q()}),n(()=>F,()=>{Q()});let pn=D(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,te[je]??``,Me===`error`&&`input-error`,Me===`warning`&&`input-warning`,Ne===`filled`&&`bg-base-200 border-base-300 shadow-none`,Ne===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,Ne===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,U?`cursor-not-allowed opacity-60`:`cursor-pointer`,Et,Ye),mn=D(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,ke.startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,ke.endsWith(`Right`)?`right-0`:`left-0`,Ot,Ze,$e),hn=Ae===!1?{minWidth:`18rem`}:typeof Ae==`number`?{width:`${Ae}px`}:{minWidth:`100%`},gn=wt?.clearIcon??x(Ce,{});return b(`div`,{...at,ref:ot,"data-rue-tree-select-root":`true`,"data-rue-tree-select-version":String(z.value),className:D(`relative`,It,qe),style:{...Lt,...Je},onMouseDown:dn,children:[b(`div`,{"data-rue-tree-select-selector":`true`,ref:st,className:pn,style:{...Dt,...Xe},role:`combobox`,"aria-expanded":(z.value,K()),"aria-disabled":U,"aria-haspopup":`tree`,onClick:fn,children:[Pe===void 0?null:x(`span`,{className:`flex shrink-0 items-center text-base-content/65`,children:Pe}),x(`div`,{ref:lt,className:`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`}),x(`button`,{ref:dt,type:`button`,className:D(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,(z.value,$t()?`inline-flex`:`hidden`)),"aria-label":C,disabled:(z.value,!$t()),onClick:cn,children:gn}),Fe===void 0?null:x(`span`,{className:`flex shrink-0 items-center text-base-content/65`,children:Fe}),Le?x(`span`,{className:`flex shrink-0 items-center`,children:Ie??x(`span`,{ref:ct,"data-rue-tree-select-arrow":`true`,"aria-hidden":`true`,className:D(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,(z.value,K())&&`rotate-180`),children:x(`svg`,{viewBox:`0 0 20 20`,fill:`none`,className:`h-4 w-4`,children:x(`path`,{d:`M5.5 7.5L10 12.5L14.5 7.5`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linecap":`round`,"stroke-linejoin":`round`})})})}):null]}),x(`div`,{ref:ft,"data-rue-tree-select-popup":`true`,"aria-hidden":(z.value,K()?`false`:`true`),className:mn,style:{...hn,...kt,...Qe,...et},children:x(`div`,{ref:pt,role:`tree`,className:D(`overflow-auto p-2`,At),style:{maxHeight:`${Oe}px`,...jt},onScroll:e=>{B.value=e.target.scrollTop,Ke&&Ke(e)}})}),it]})};F.SHOW_ALL=w,F.SHOW_PARENT=T,F.SHOW_CHILD=ee;var we=t=>m(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),d(i,`table table-zebra`);let a=e(`thead`,i);c(i,a);let p=e(`tr`,a);c(a,p);let _=e(`th`,p);c(p,_),c(_,f(`属性`));let v=e(`th`,p);c(p,v),c(v,f(`说明`));let b=e(`th`,p);c(p,b),c(b,f(`类型`));let x=e(`th`,p);c(p,x),c(x,f(`默认值`));let S=e(`tbody`,i);c(i,S);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{g(m(()=>{let n=o(),r=e(`tr`,n);c(n,r),l(()=>{h(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let a=e(`code`,i);c(i,a);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.prop;s(()=>g(e,a,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>g(e,f,p))});let m=e(`td`,r);c(r,m);let _=e(`code`,m);c(m,_);let v=u(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.type;s(()=>g(e,_,v))});let y=e(`td`,r);c(r,y);let b=e(`code`,y);c(y,b);let x=u(`rue:slot:anchor`);return c(b,x),l(()=>{let e=t.defaultValue;s(()=>g(e,b,x))}),n}),n,r)}})}),r}),I=e=>Array.isArray(e)?I(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Te=e=>{if(!Array.isArray(e)){let t=I(e);return t==null?[]:[t]}return e.map(e=>I(e)).filter(e=>e!=null)},L=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Ee=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],De=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Oe=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],ke=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const value = ref('docs')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDefaultExpandAll
  showSearch
  treeNodeFilterProp="title"
  allowClear
  placeholder="选择一个树节点"
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,Ae=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
]

const value = ref('docs')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDefaultExpandAll
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,je=`import { ref } from '@rue-js/rue'
import TreeSelect from '@rue-js/design'

const treeData = [
  { nodeId: 1, parentId: 0, code: 'workspace', name: 'Workspace' },
  { nodeId: 2, parentId: 1, code: 'workflow', name: 'Workflow board' },
  { nodeId: 3, parentId: 1, code: 'briefs', name: 'Briefs' },
  { nodeId: 4, parentId: 2, code: 'review', name: 'Design review' },
  { nodeId: 5, parentId: 2, code: 'release', name: 'Release checklist' },
]

const value = ref('workflow')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDataSimpleMode={{ id: 'nodeId', pId: 'parentId', rootPId: 0 }}
  fieldNames={{ value: 'code', label: 'name', key: 'code' }}
  treeDefaultExpandAll
  showSearch
  treeNodeFilterProp="title"
  allowClear
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,Me=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectValue, type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '协作面板',
    value: 'workspace',
    children: [
      { title: '日报汇总', value: 'daily' },
      { title: '设计交接', value: 'handoff' },
      { title: '会议纪要', value: 'minutes' },
    ],
  },
  {
    title: '数据服务',
    value: 'data',
    children: [
      { title: '分析订阅', value: 'analytics' },
      { title: '实验指标', value: 'metrics' },
      { title: '异常告警', value: 'alerts' },
    ],
  },
]

const values = ref<TreeSelectValue[]>(['analytics', 'minutes'])

<TreeSelect
  value={values.value}
  treeData={treeData}
  multiple
  treeDefaultExpandAll
  allowClear
  maxTagCount={2}
  placeholder="选择多个项目"
  onChange={nextValue => {
    values.value = Array.isArray(nextValue) ? nextValue.map(item => String(item)) : []
  }}
/>
`,Ne=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectValue, type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const values = ref<TreeSelectValue[]>(['build', 'quality'])

<TreeSelect
  value={values.value}
  treeData={treeData}
  treeCheckable
  maxTagCount={2}
  maxTagPlaceholder="..."
  allowClear
  treeDefaultExpandAll
  onChange={nextValue => {
    values.value = Array.isArray(nextValue) ? nextValue.map(item => String(item)) : []
  }}
/>
`,Pe=`import { ref } from '@rue-js/rue'
import TreeSelect, {
  type TreeSelectDataNode,
  type TreeSelectLabeledValue,
} from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const selected = ref<TreeSelectLabeledValue | null>(null)

<TreeSelect
  treeData={treeData}
  labelInValue
  treeDefaultExpandAll
  defaultValue="release"
  onChange={nextValue => {
    selected.value = (nextValue as TreeSelectLabeledValue | null) ?? null
  }}
/>
`,Fe=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const value = ref<string | null>(null)
const treeData = ref<TreeSelectDataNode[]>([
  { title: '按需加载目录', value: 'async-root', isLeaf: false },
])

const loadData = async (node: TreeSelectDataNode) => {
  if (node.value !== 'async-root') return

  treeData.value = [
    {
      title: '按需加载目录',
      value: 'async-root',
      isLeaf: false,
      children: [
        { title: '实验看板', value: 'async-dashboard' },
        { title: '巡检报告', value: 'async-report' },
        { title: '回归清单', value: 'async-checklist' },
      ],
    },
  ]
}

<TreeSelect
  value={value.value}
  treeData={treeData.value}
  allowClear
  loadData={loadData}
  onChange={nextValue => {
    value.value = nextValue == null ? null : String(nextValue)
  }}
/>
`,Ie=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '应用集群',
    value: 'apps',
    children: [
      { title: '生产环境', value: 'prod' },
      { title: '预发环境', value: 'stage' },
      { title: '开发环境', value: 'dev' },
    ],
  },
]

const value = ref('prod')

<TreeSelect
  value={value.value}
  treeData={treeData}
  prefix={<span className="badge badge-neutral badge-sm">ENV</span>}
  suffix={<span className="text-xs opacity-60">可清空</span>}
  variant="filled"
  status="warning"
  allowClear
  treeDefaultExpandAll
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,Le=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值升级为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`沿用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],Re=()=>{let{basicValue:t,noClearValue:n,simpleValue:a,multipleValue:p,checkableValue:h,semanticValue:y,shellValue:w,asyncValue:T,asyncTreeData:ee,loadAsyncTree:te,tabs:E}=v(`useSetup:0:0`,()=>r(()=>{let e=v(`ref:1:0`,()=>i(`docs`)),t=v(`ref:1:1`,()=>i(`docs`)),n=v(`ref:1:2`,()=>i(`workflow`)),r=v(`ref:1:3`,()=>i([`analytics`,`minutes`])),a=v(`ref:1:4`,()=>i([`build`,`quality`])),o=v(`ref:1:5`,()=>i(null)),s=v(`ref:1:6`,()=>i(`prod`)),c=v(`ref:1:7`,()=>i(null)),l=v(`ref:1:8`,()=>i([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:n,multipleValue:r,checkableValue:a,semanticValue:o,shellValue:s,asyncValue:c,asyncTreeData:l,loadAsyncTree:async e=>{e.value===`async-root`&&(l.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:v(`ref:1:9`,()=>i(`preview`)),noClear:v(`ref:1:10`,()=>i(`preview`)),simple:v(`ref:1:11`,()=>i(`preview`)),multiple:v(`ref:1:12`,()=>i(`preview`)),checkable:v(`ref:1:13`,()=>i(`preview`)),semantic:v(`ref:1:14`,()=>i(`preview`)),async:v(`ref:1:15`,()=>i(`preview`)),shell:v(`ref:1:16`,()=>i(`preview`))}}}));return m(r=>{let i=o(),v=u(`rue:component:anchor`);return c(i,v),g(_(S,{children:m(()=>{let r=o(),i=e(`div`,r);c(r,i),d(i,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`,i);c(i,m),c(m,f(`TreeSelect 树选择`));let v=e(`p`,i);c(i,v),d(v,`text-sm mt-3 mb-3`),c(v,f(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 这一版不照搬其他组件库的视觉，而是延续 Rue 的 input / badge / base 色阶体系，把 treeData、simple mode、多选、勾选、语义值、异步加载和 filled / warning 等核心面一次补齐。`));let S=e(`div`,i);c(i,S),d(S,`not-prose mt-8 space-y-2`);let D=e(`h2`,S);c(S,D),d(D,`text-2xl font-semibold`),c(D,f(`基础能力`));let O=e(`p`,S);c(S,O),d(O,`text-sm text-base-content/70`),c(O,f(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let k=u(`rue:component:anchor`);c(i,k),l(()=>{let e=_(C,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:E.basic,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-3`,children:[x(F,{value:t.value,treeData:L,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{t.value=String(I(e)??``)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,t.value||`未选择`]})]})}),code:ke});s(()=>g(e,i,k))});let ne=u(`rue:component:anchor`);c(i,ne),l(()=>{let e=_(C,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保留选择交互，不显示 selector 右侧的清空入口。`,tab:E.noClear,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-3`,children:[x(F,{value:n.value,treeData:L,treeDefaultExpandAll:!0,onChange:e=>{n.value=String(I(e)??``)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,n.value||`未选择`]})]})}),code:Ae});s(()=>g(e,i,ne))});let re=u(`rue:component:anchor`);c(i,re),l(()=>{let e=_(C,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:E.simple,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[b(`div`,{className:`grid gap-3`,children:[x(F,{value:a.value,treeData:Oe,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{a.value=String(I(e)??``)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,a.value||`未选择`]})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:je});s(()=>g(e,i,re))});let ie=u(`rue:component:anchor`);c(i,ie),l(()=>{let e=_(C,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:E.multiple,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-3`,children:[x(F,{value:p.value,treeData:Ee,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onChange:e=>{p.value=Te(e)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,p.value.join(` / `)||`未选择`]})]})}),code:Me});s(()=>g(e,i,ie))});let ae=u(`rue:component:anchor`);c(i,ae),l(()=>{let e=_(C,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:E.checkable,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[b(`div`,{className:`grid gap-3`,children:[x(F,{value:h.value,treeData:L,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{h.value=Te(e)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,h.value.join(` / `)||`未选择`]})]}),b(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[b(`li`,{className:`list-row`,children:[x(`span`,{className:`font-medium`,children:`策略`}),x(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),b(`li`,{className:`list-row`,children:[x(`span`,{className:`font-medium`,children:`切换`}),x(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),b(`li`,{className:`list-row`,children:[x(`span`,{className:`font-medium`,children:`回填`}),x(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:Ne});s(()=>g(e,i,ae))});let A=e(`div`,i);c(i,A),d(A,`not-prose mt-10 space-y-2`);let oe=e(`h2`,A);c(A,oe),d(oe,`text-2xl font-semibold`),c(oe,f(`高级能力`));let se=e(`p`,A);c(A,se),d(se,`text-sm text-base-content/70`),c(se,f(`语义值、异步加载和外观变体补到位之后，TreeSelect 就能覆盖绝大多数配置类面板的核心需求。`));let ce=u(`rue:component:anchor`);c(i,ce),l(()=>{let e=_(C,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:E.semantic,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[x(`div`,{className:`grid gap-3`,children:x(F,{treeData:L,labelInValue:!0,treeDefaultExpandAll:!0,defaultValue:`release`,onChange:e=>{y.value=e??null}})}),b(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,x(`code`,{children:JSON.stringify(y.value)})]})]})}),code:Pe});s(()=>g(e,i,ce))});let le=u(`rue:component:anchor`);c(i,le),l(()=>{let e=_(C,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:E.async,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[b(`div`,{className:`grid gap-3`,children:[x(F,{value:T.value,treeData:ee.value,allowClear:!0,loadData:te,onChange:e=>{T.value=String(I(e)??``)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,T.value||`尚未选择`]})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:Fe});s(()=>g(e,i,le))});let ue=u(`rue:component:anchor`);c(i,ue),l(()=>{let e=_(C,{title:`Variant and Status`,summary:`TreeSelect 也沿用 Rue 现有输入体系的 filled / warning 视觉语义。`,tab:E.shell,preview:x(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`grid gap-3`,children:[x(F,{value:w.value,treeData:De,prefix:x(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:x(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{w.value=String(I(e)??``)}}),b(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,w.value||`未选择`]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ie});s(()=>g(e,i,ue))});let j=e(`div`,i);c(i,j),d(j,`not-prose mt-10 space-y-4`);let de=e(`h2`,j);c(j,de),d(de,`text-2xl font-semibold`),c(de,f(`API`));let fe=u(`rue:component:anchor`);return c(j,fe),l(()=>{let e=_(we,{rows:Le});s(()=>g(e,j,fe))}),r})}),i,v),i})};export{Re as default};