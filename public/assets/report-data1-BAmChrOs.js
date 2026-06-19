import{$ as e,$t as t,Gt as n,Z as r,ct as i,et as a,gt as o,l as s,mt as c,nt as l,o as u,rt as d,tt as f,ut as p}from"./vapor-runtime-CKrmRMZX.js";import{n as m}from"./vapor-helpers-vapor-s6lMjTDZ.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
.report-data1-scope.report-page {
  --rp: var(--color-primary);
  --rp-c: var(--color-primary-content);
  --rs: var(--color-secondary);
  --rs-c: var(--color-secondary-content);
  --ra: var(--color-accent);
  --ra-c: var(--color-accent-content);
  --r-base: var(--color-base-100);
  --r-base2: var(--color-base-200);
  --r-base3: var(--color-base-300);
  --r-content: var(--color-base-content);
  --r-neutral: var(--color-neutral);
  --r-neutral-c: var(--color-neutral-content);

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .report-data1-scope.report-page {
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .report-data1-scope.report-page {
    padding: 0 48px;
  }
}

.report-data1-scope .report-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  background:
    radial-gradient(ellipse 60% 50% at 95% -10%, color-mix(in oklch, var(--rp) 14%, transparent), transparent),
    radial-gradient(ellipse 40% 60% at 5% 110%, color-mix(in oklch, var(--rs) 10%, transparent), transparent),
    color-mix(in oklch, var(--r-base2) 55%, var(--r-base));
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--r-base3) 30%, transparent),
    0 20px 60px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  backdrop-filter: blur(2px);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.report-data1-scope .report-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--rp) 30%, transparent) 0%,
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--ra) 20%, transparent) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.report-data1-scope .report-card:hover::before {
  opacity: 1;
}

.report-data1-scope .report-card:hover {
  box-shadow:
    0 4px 32px color-mix(in oklch, var(--rp) 12%, transparent),
    0 24px 80px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  transform: translateY(-2px);
}

.report-data1-scope .report-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 24px;
  padding: 36px;
}

.report-data1-scope .report-kicker,
.report-data1-scope .report-panel-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-hero-copy h1,
.report-data1-scope .report-panel-header h2,
.report-data1-scope .report-kpi-card h2,
.report-data1-scope .report-insight-item h3 {
  margin: 0;
}

.report-data1-scope .report-hero-copy h1 {
  max-width: 18ch;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.05;
  color: var(--r-content);
  letter-spacing: -0.02em;
}

.report-data1-scope .report-hero-text,
.report-data1-scope .report-board-copy,
.report-data1-scope .report-panel-summary,
.report-data1-scope .report-channel-item p,
.report-data1-scope .report-insight-item p,
.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span,
.report-data1-scope .report-kpi-card span {
  color: color-mix(in oklch, var(--r-content) 68%, transparent);
  line-height: 1.75;
}

.report-data1-scope .report-hero-text {
  max-width: 68ch;
  margin: 18px 0 0;
}

.report-data1-scope .report-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.report-data1-scope .report-tag {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--rp) 28%, transparent);
  background: color-mix(in oklch, var(--rp) 12%, transparent);
  color: var(--rp);
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.report-data1-scope .report-tag:hover {
  background: color-mix(in oklch, var(--rp) 22%, transparent);
  border-color: color-mix(in oklch, var(--rp) 45%, transparent);
  transform: translateY(-1px);
}

.report-data1-scope .report-hero-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(ellipse 80% 50% at 20% 5%, color-mix(in oklch, var(--rp) 18%, transparent), transparent),
    color-mix(in oklch, var(--r-base3) 60%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  box-shadow: 0 8px 32px color-mix(in oklch, var(--r-base3) 40%, transparent);
}

.report-data1-scope .report-board-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.report-data1-scope .report-board-label,
.report-data1-scope .report-board-date {
  font-size: 13px;
  font-weight: 700;
}

.report-data1-scope .report-board-label {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
}

.report-data1-scope .report-board-date {
  color: var(--rp);
}

.report-data1-scope .report-board-value {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800;
  line-height: 1;
  color: var(--r-content);
  background: linear-gradient(135deg, var(--r-content) 30%, var(--rp));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.report-data1-scope .report-board-copy {
  margin: 0;
}

.report-data1-scope .report-sparkline {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-bar {
  width: 100%;
  min-height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 85%, var(--ra)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 25px color-mix(in oklch, var(--rp) 22%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-spark-bar:hover {
  box-shadow: 0 10px 32px color-mix(in oklch, var(--rp) 38%, transparent);
  transform: scaleX(1.1);
}

.report-data1-scope .report-spark-bar.is-peak {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rs) 90%, var(--rp)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 28px color-mix(in oklch, var(--rs) 32%, transparent);
}

.report-data1-scope .report-spark-label,
.report-data1-scope .report-axis-label,
.report-data1-scope .report-grid-label {
  font-size: 11px;
  fill: color-mix(in oklch, var(--r-content) 50%, transparent);
  color: color-mix(in oklch, var(--r-content) 50%, transparent);
}

.report-data1-scope .report-kpi-grid,
.report-data1-scope .report-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.report-data1-scope .report-panel-grid-primary {
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
}

.report-data1-scope .report-kpi-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.report-data1-scope .report-kpi-card {
  padding: 22px 22px 20px;
}

.report-data1-scope .report-kpi-card p {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-kpi-card h2 {
  margin-top: 16px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  color: var(--r-content);
}

.report-data1-scope .report-kpi-card span {
  display: block;
  margin-top: 12px;
}

.report-data1-scope .report-chart-card,
.report-data1-scope .report-channel-card,
.report-data1-scope .report-insight-card,
.report-data1-scope .report-timeline-card {
  padding: 24px;
}

.report-data1-scope .report-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.report-data1-scope .report-panel-header h2 {
  font-size: 28px;
  color: var(--r-content);
}

.report-data1-scope .report-panel-summary {
  max-width: 28ch;
  font-size: 14px;
}

.report-data1-scope .report-chart-shell {
  overflow: hidden;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 50%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 50%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 30%, transparent);
}

.report-data1-scope .report-svg-chart {
  display: block;
  width: 100%;
  height: auto;
}

.report-data1-scope .report-grid-line {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.report-data1-scope .report-line-path {
  fill: none;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.report-data1-scope .report-point-outer {
  fill: var(--r-base2);
  stroke: color-mix(in oklch, var(--rp) 80%, var(--r-content));
  stroke-width: 2;
  transition: r 0.3s ease;
}

.report-data1-scope .report-point-inner {
  fill: var(--rp);
}

.report-data1-scope .report-channel-body {
  position: relative;
  display: grid;
  place-items: center;
  padding: 10px 0 20px;
}

.report-data1-scope .report-donut {
  width: min(100%, 220px);
  height: auto;
}

.report-data1-scope .report-donut-track,
.report-data1-scope .report-donut-admin,
.report-data1-scope .report-donut-self {
  fill: none;
  stroke-width: 16;
  transform: rotate(-90deg);
  transform-origin: 80px 80px;
  stroke-linecap: round;
}

.report-data1-scope .report-donut-track {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-donut-admin {
  stroke: var(--rp);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--rp) 40%, transparent));
}

.report-data1-scope .report-donut-self {
  stroke: var(--ra);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--ra) 40%, transparent));
}

.report-data1-scope .report-channel-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
}

.report-data1-scope .report-channel-center strong {
  font-size: 32px;
  color: var(--r-content);
}

.report-data1-scope .report-channel-center span {
  font-size: 13px;
  color: color-mix(in oklch, var(--r-content) 60%, transparent);
}

.report-data1-scope .report-channel-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-channel-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-channel-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-color: color-mix(in oklch, var(--r-base3) 50%, transparent);
  transform: translateX(4px);
}

.report-data1-scope .report-channel-item strong,
.report-data1-scope .report-timeline-main strong,
.report-data1-scope .report-timeline-metrics strong {
  display: block;
  color: var(--r-content);
}

.report-data1-scope .report-channel-item p {
  margin: 4px 0 0;
  font-size: 13px;
}

.report-data1-scope .report-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.report-data1-scope .report-dot-admin {
  background: var(--rp);
  box-shadow: 0 0 18px color-mix(in oklch, var(--rp) 42%, transparent);
}

.report-data1-scope .report-dot-self {
  background: var(--ra);
  box-shadow: 0 0 18px color-mix(in oklch, var(--ra) 42%, transparent);
}

.report-data1-scope .report-bars {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 14px;
  align-items: end;
  min-height: 280px;
  padding: 18px;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 40%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 45%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 25%, transparent);
}

.report-data1-scope .report-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 244px;
}

.report-data1-scope .report-bar-shell {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 0 4px;
}

.report-data1-scope .report-bar-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 18px 18px 6px 6px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--ra) 80%, var(--rs)), color-mix(in oklch, var(--ra) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--ra) 18%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-bar-fill:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--ra) 30%, transparent);
  filter: brightness(1.1);
}

.report-data1-scope .report-bar-fill.is-accent {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 80%, var(--ra)), color-mix(in oklch, var(--rp) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--rp) 18%, transparent);
}

.report-data1-scope .report-bar-fill.is-accent:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--rp) 30%, transparent);
}

.report-data1-scope .report-bar-group strong {
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-bar-group span {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
  font-size: 12px;
}

.report-data1-scope .report-insight-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-insight-item {
  padding: 18px 18px 16px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  border-left: 3px solid color-mix(in oklch, var(--rp) 50%, var(--rs));
  transition: all 0.3s ease;
}

.report-data1-scope .report-insight-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-left-color: var(--rp);
  transform: translateX(4px);
}

.report-data1-scope .report-insight-item h3 {
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-insight-item p {
  margin: 0;
}

.report-data1-scope .report-timeline-list {
  display: grid;
  gap: 12px;
}

.report-data1-scope .report-timeline-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.3fr) minmax(0, 1fr) minmax(220px, 0.55fr);
  gap: 18px;
  align-items: center;
  padding: 16px 18px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 25%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 25%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover {
  background: color-mix(in oklch, var(--r-base2) 45%, var(--r-base));
  transform: translateX(4px);
}

.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
}

.report-data1-scope .report-timeline-track {
  position: relative;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-timeline-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--rs), var(--ra));
  box-shadow: 0 0 12px color-mix(in oklch, var(--rp) 20%, transparent);
  transition: filter 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover .report-timeline-fill {
  filter: brightness(1.15);
}

.report-data1-scope .report-stop-area-top {
  stop-color: var(--rp);
  stop-opacity: 0.45;
}

.report-data1-scope .report-stop-area-bottom {
  stop-color: var(--rp);
  stop-opacity: 0;
}

.report-data1-scope .report-stop-line-start {
  stop-color: var(--rs);
}

.report-data1-scope .report-stop-line-end {
  stop-color: var(--ra);
}

@keyframes reportData1FloatIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.report-data1-scope .report-card,
.report-data1-scope .report-kpi-card {
  animation: reportData1FloatIn 0.6s ease both;
}

.report-data1-scope .report-kpi-card:nth-child(1) { animation-delay: 0ms; }
.report-data1-scope .report-kpi-card:nth-child(2) { animation-delay: 80ms; }
.report-data1-scope .report-kpi-card:nth-child(3) { animation-delay: 160ms; }
.report-data1-scope .report-kpi-card:nth-child(4) { animation-delay: 240ms; }

.report-data1-scope .report-timeline-row:nth-child(odd) {
  border-left: 3px solid color-mix(in oklch, var(--rp) 30%, var(--rs));
}

.report-data1-scope .report-timeline-row:nth-child(even) {
  border-left: 3px solid color-mix(in oklch, var(--ra) 30%, var(--rp));
}

@media (max-width: 1100px) {
  .report-data1-scope .report-kpi-grid,
  .report-data1-scope .report-panel-grid,
  .report-data1-scope .report-panel-grid-primary,
  .report-data1-scope .report-hero {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-panel-header {
    flex-direction: column;
  }

  .report-data1-scope .report-panel-summary {
    max-width: none;
  }

  .report-data1-scope .report-timeline-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .report-data1-scope .report-kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    gap: 8px;
  }
}

@media (max-width: 640px) {
  .report-data1-scope.report-page {
    padding: 0 12px;
    gap: 16px;
  }

  .report-data1-scope .report-hero,
  .report-data1-scope .report-chart-card,
  .report-data1-scope .report-channel-card,
  .report-data1-scope .report-insight-card,
  .report-data1-scope .report-timeline-card {
    padding: 20px;
  }

  .report-data1-scope .report-kpi-grid {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .report-data1-scope .report-channel-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .report-data1-scope .report-channel-item > span:last-child {
    grid-column: 2;
  }
}
`,N=()=>s(g=>{let D=a(),re=f(`style`,D);r(D,re),t(()=>{o(re,Se)});let k=f(`div`,D);r(D,k),p(k,`report-data1-scope report-page`);let A=f(`section`,k);r(k,A),p(A,`report-hero report-card`);let N=f(`div`,A);r(A,N),p(N,`report-hero-copy`);let Ce=f(`p`,N);r(N,Ce),p(Ce,`report-kicker`),r(Ce,l(`Data Pulse / March 2026`));let we=f(`h1`,N);r(N,we),r(we,l(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=f(`p`,N);r(N,P),p(P,`report-hero-text`),r(P,l(`统计区间为 `));let Te=e(`rue:slot:anchor`);r(P,Te),t(()=>{let e=ve;n(()=>u(e,P,Te))}),r(P,l(`。窗口总成交额达到 `));let Ee=e(`rue:slot:anchor`);r(P,Ee),t(()=>{let e=j(y);n(()=>u(e,P,Ee))}),r(P,l(`，共形成`));let De=d(P);r(P,De),o(De,` `),r(P,l(` `));let Oe=d(P);r(P,Oe),t(()=>{o(Oe,_.format(v))}),r(P,l(` 笔订单， 其中`));let ke=d(P);r(P,ke),o(ke,` `),r(P,l(` `));let Ae=e(`rue:slot:anchor`);r(P,Ae),t(()=>{let e=_e(w.sumDate);n(()=>u(e,P,Ae))}),r(P,l(` 单日贡献 `));let je=e(`rue:slot:anchor`);r(P,je),t(()=>{let e=he(T);n(()=>u(e,P,je))}),r(P,l(` ，而退货金额维持在 `));let Me=e(`rue:slot:anchor`);r(P,Me),t(()=>{let e=j(b);n(()=>u(e,P,Me))}),r(P,l(`。`));let F=f(`div`,N);r(N,F),p(F,`report-hero-tags`);let Ne=f(`span`,F);r(F,Ne),p(Ne,`report-tag`);let Pe=e(`rue:slot:anchor`);r(Ne,Pe),t(()=>{let e=S;n(()=>u(e,Ne,Pe))}),r(Ne,l(` 天静默期`));let Fe=f(`span`,F);r(F,Fe),p(Fe,`report-tag`);let Ie=e(`rue:slot:anchor`);r(Fe,Ie),t(()=>{let e=x;n(()=>u(e,Fe,Ie))}),r(Fe,l(` 天有效成交`));let Le=f(`span`,F);r(F,Le),p(Le,`report-tag`),r(Le,l(`客户记录 `));let Re=d(Le);r(Le,Re),t(()=>{o(Re,_.format(te))});let I=f(`div`,A);r(A,I),p(I,`report-hero-board`);let L=f(`div`,I);r(I,L),p(L,`report-board-header`);let ze=f(`span`,L);r(L,ze),p(ze,`report-board-label`),r(ze,l(`峰值日`));let Be=f(`span`,L);r(L,Be),p(Be,`report-board-date`);let Ve=e(`rue:slot:anchor`);r(Be,Ve),t(()=>{let e=_e(w.sumDate);n(()=>u(e,Be,Ve))});let He=f(`div`,I);r(I,He),p(He,`report-board-value`);let Ue=e(`rue:slot:anchor`);r(He,Ue),t(()=>{let e=M(w.allAmount);n(()=>u(e,He,Ue))});let R=f(`p`,I);r(I,R),p(R,`report-board-copy`),r(R,l(`单日完成 `));let We=d(R);r(R,We),t(()=>{o(We,_.format(w.ordersCount))}),r(R,l(` 笔订单，客户均额`));let Ge=d(R);r(R,Ge),o(Ge,` `),r(R,l(` `));let Ke=e(`rue:slot:anchor`);r(R,Ke),t(()=>{let e=M(w.avgClientPrice);n(()=>u(e,R,Ke))}),r(R,l(`。`));let qe=f(`div`,I);r(I,qe),p(qe,`report-sparkline`);let Je=e(`rue:list:start`),Ye=e(`rue:list:end`);r(qe,Je),r(qe,Ye);let Xe=new Map;t(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(o,l,d,m,h)=>{u(s(()=>{let s=a(),l=f(`div`,s);r(s,l),t(()=>{i(l,`key`,String(o.sumDate))}),p(l,`report-spark-item`);let d=f(`span`,l);r(l,d),t(()=>{p(d,`report-spark-bar ${o.sumDate===w.sumDate?`is-peak`:``}`)}),t(()=>{c(d,{height:`${Math.max(10,o.amountRatio*100)}%`})});let m=f(`span`,l);r(l,m),p(m,`report-spark-label`);let h=e(`rue:slot:anchor`);return r(m,h),t(()=>{let e=o.label;n(()=>u(e,m,h))}),s}),l,d)}})});let Ze=f(`section`,k);r(k,Ze),p(Ze,`report-kpi-grid`);let Qe=e(`rue:list:start`),$e=e(`rue:list:end`);r(Ze,Qe),r(Ze,$e);let et=new Map;t(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(c,l,m,h,g)=>{u(s(()=>{let s=a(),l=f(`article`,s);r(s,l),t(()=>{i(l,`key`,String(c.label))}),p(l,`report-kpi-card report-card`);let m=f(`p`,l);r(l,m);let h=e(`rue:slot:anchor`);r(m,h),t(()=>{let e=c.label;n(()=>u(e,m,h))});let g=f(`h2`,l);r(l,g);let _=d(g);r(g,_),t(()=>{o(_,c.value)});let v=f(`span`,l);r(l,v);let y=e(`rue:slot:anchor`);return r(v,y),t(()=>{let e=c.detail;n(()=>u(e,v,y))}),s}),l,m)}})});let z=f(`section`,k);r(k,z),p(z,`report-panel-grid report-panel-grid-primary`);let B=f(`article`,z);r(z,B),p(B,`report-card report-chart-card report-chart-wide`);let V=f(`div`,B);r(B,V),p(V,`report-panel-header`);let tt=f(`div`,V);r(V,tt);let nt=f(`p`,tt);r(tt,nt),p(nt,`report-panel-eyebrow`),r(nt,l(`GMV Trend`));let rt=f(`h2`,tt);r(tt,rt),r(rt,l(`成交金额波动`));let it=f(`div`,V);r(V,it),p(it,`report-panel-summary`),r(it,l(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=f(`div`,B);r(B,at),p(at,`report-chart-shell`);let H=f(`svg`,at);r(at,H),t(()=>{i(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),p(H,`report-svg-chart`),i(H,`role`,`img`),i(H,`aria-label`,`每日成交金额趋势图`);let ot=f(`defs`,H);r(H,ot);let U=f(`linearGradient`,ot);r(ot,U),i(U,`id`,`reportAreaGradient`),i(U,`x1`,`0`),i(U,`x2`,`0`),i(U,`y1`,`0`),i(U,`y2`,`1`);let st=f(`stop`,U);r(U,st),i(st,`offset`,`0%`),p(st,`report-stop-area-top`);let ct=f(`stop`,U);r(U,ct),i(ct,`offset`,`100%`),p(ct,`report-stop-area-bottom`);let W=f(`linearGradient`,ot);r(ot,W),i(W,`id`,`reportLineGradient`),i(W,`x1`,`0`),i(W,`x2`,`1`),i(W,`y1`,`0`),i(W,`y2`,`0`);let lt=f(`stop`,W);r(W,lt),i(lt,`offset`,`0%`),p(lt,`report-stop-line-start`);let ut=f(`stop`,W);r(W,ut),i(ut,`offset`,`100%`),p(ut,`report-stop-line-end`);let dt=e(`rue:list:start`),ft=e(`rue:list:end`);r(H,dt),r(H,ft);let pt=new Map;t(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(e,n,c,l,m)=>{u(s(()=>{let n=a(),s=f(`g`,n);r(n,s),t(()=>{i(s,`key`,String(e.step))});let c=f(`line`,s);r(s,c),t(()=>{i(c,`x1`,String(O.left))}),t(()=>{i(c,`y1`,String(e.y))}),t(()=>{i(c,`x2`,String(ie-O.right))}),t(()=>{i(c,`y2`,String(e.y))}),p(c,`report-grid-line`);let l=f(`text`,s);r(s,l),t(()=>{i(l,`x`,String(O.left+6))}),t(()=>{i(l,`y`,String(e.y-8))}),p(l,`report-grid-label`);let u=d(l);return r(l,u),t(()=>{o(u,M(oe*e.step))}),n}),n,c)}})});let mt=f(`path`,H);r(H,mt),t(()=>{i(mt,`d`,String(ue))}),i(mt,`fill`,`url(#reportAreaGradient)`);let ht=f(`path`,H);r(H,ht),t(()=>{i(ht,`d`,String(le))}),p(ht,`report-line-path`),i(ht,`stroke`,`url(#reportLineGradient)`);let gt=e(`rue:list:start`),_t=e(`rue:list:end`);r(H,gt),r(H,_t);let vt=new Map;t(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(e,n,c,l,m)=>{u(s(()=>{let n=a(),s=f(`g`,n);r(n,s),t(()=>{i(s,`key`,String(e.row.sumDate))});let c=f(`circle`,s);r(s,c),t(()=>{i(c,`cx`,String(e.x))}),t(()=>{i(c,`cy`,String(e.y))}),t(()=>{i(c,`r`,String(e.row.sumDate===w.sumDate?7:4.5))}),p(c,`report-point-outer`);let l=f(`circle`,s);r(s,l),t(()=>{i(l,`cx`,String(e.x))}),t(()=>{i(l,`cy`,String(e.y))}),i(l,`r`,`3.2`),p(l,`report-point-inner`);let u=f(`text`,s);r(s,u),t(()=>{i(u,`x`,String(e.x))}),t(()=>{i(u,`y`,String(ae-12))}),i(u,`text-anchor`,`middle`),p(u,`report-axis-label`);let m=d(u);return r(u,m),t(()=>{o(m,ge(e.row.sumDate))}),n}),n,c)}})});let G=f(`article`,z);r(z,G),p(G,`report-card report-channel-card`);let yt=f(`div`,G);r(G,yt),p(yt,`report-panel-header`);let bt=f(`div`,yt);r(yt,bt);let xt=f(`p`,bt);r(bt,xt),p(xt,`report-panel-eyebrow`),r(xt,l(`Channel Mix`));let St=f(`h2`,bt);r(bt,St),r(St,l(`下单渠道分布`));let K=f(`div`,G);r(G,K),p(K,`report-channel-body`);let q=f(`svg`,K);r(K,q),i(q,`viewBox`,`0 0 160 160`),p(q,`report-donut`),i(q,`role`,`img`),i(q,`aria-label`,`下单渠道占比图`);let Ct=f(`circle`,q);r(q,Ct),i(Ct,`cx`,`80`),i(Ct,`cy`,`80`),t(()=>{i(Ct,`r`,String(fe))}),p(Ct,`report-donut-track`);let J=f(`circle`,q);r(q,J),i(J,`cx`,`80`),i(J,`cy`,`80`),t(()=>{i(J,`r`,String(fe))}),p(J,`report-donut-admin`),t(()=>{i(J,`stroke-dasharray`,String(`${pe}`))}),i(J,`stroke-dashoffset`,`0`);let Y=f(`circle`,q);r(q,Y),i(Y,`cx`,`80`),i(Y,`cy`,`80`),t(()=>{i(Y,`r`,String(fe))}),p(Y,`report-donut-self`),t(()=>{i(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),t(()=>{i(Y,`stroke-dashoffset`,String(-me))});let X=f(`div`,K);r(K,X),p(X,`report-channel-center`);let wt=f(`strong`,X);r(X,wt);let Tt=e(`rue:slot:anchor`);r(wt,Tt),t(()=>{let e=he(E);n(()=>u(e,wt,Tt))});let Et=f(`span`,X);r(X,Et),r(Et,l(`后台代客`));let Dt=f(`div`,G);r(G,Dt),p(Dt,`report-channel-list`);let Z=f(`div`,Dt);r(Dt,Z),p(Z,`report-channel-item`);let Ot=f(`span`,Z);r(Z,Ot),p(Ot,`report-dot report-dot-admin`);let kt=f(`div`,Z);r(Z,kt);let At=f(`strong`,kt);r(kt,At),r(At,l(`后台代客下单`));let jt=f(`p`,kt);r(kt,jt);let Mt=e(`rue:slot:anchor`);r(jt,Mt),t(()=>{let e=j(ee);n(()=>u(e,jt,Mt))});let Nt=f(`span`,Z);r(Z,Nt);let Pt=e(`rue:slot:anchor`);r(Nt,Pt),t(()=>{let e=he(E);n(()=>u(e,Nt,Pt))});let Q=f(`div`,Dt);r(Dt,Q),p(Q,`report-channel-item`);let Ft=f(`span`,Q);r(Q,Ft),p(Ft,`report-dot report-dot-self`);let It=f(`div`,Q);r(Q,It);let Lt=f(`strong`,It);r(It,Lt),r(Lt,l(`客户自主下单`));let Rt=f(`p`,It);r(It,Rt);let zt=e(`rue:slot:anchor`);r(Rt,zt),t(()=>{let e=j(C);n(()=>u(e,Rt,zt))});let Bt=f(`span`,Q);r(Q,Bt);let Vt=e(`rue:slot:anchor`);r(Bt,Vt),t(()=>{let e=he(ne);n(()=>u(e,Bt,Vt))});let Ht=f(`section`,k);r(k,Ht),p(Ht,`report-panel-grid`);let Ut=f(`article`,Ht);r(Ht,Ut),p(Ut,`report-card report-chart-card`);let Wt=f(`div`,Ut);r(Ut,Wt),p(Wt,`report-panel-header`);let Gt=f(`div`,Wt);r(Wt,Gt);let Kt=f(`p`,Gt);r(Gt,Kt),p(Kt,`report-panel-eyebrow`),r(Kt,l(`Order Volume`));let qt=f(`h2`,Gt);r(Gt,qt),r(qt,l(`每日订单笔数`));let Jt=f(`div`,Wt);r(Wt,Jt),p(Jt,`report-panel-summary`),r(Jt,l(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=f(`div`,Ut);r(Ut,Yt),p(Yt,`report-bars`);let Xt=e(`rue:list:start`),Zt=e(`rue:list:end`);r(Yt,Xt),r(Yt,Zt);let Qt=new Map;t(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(l,m,h,g,v)=>{u(s(()=>{let s=a(),m=f(`div`,s);r(s,m),t(()=>{i(m,`key`,String(l.sumDate))}),p(m,`report-bar-group`);let h=f(`div`,m);r(m,h),p(h,`report-bar-shell`);let g=f(`div`,h);r(h,g),t(()=>{p(g,`report-bar-fill ${l.sumDate===w.sumDate?`is-accent`:``}`)}),t(()=>{c(g,{height:`${Math.max(8,l.ordersCount/se*100)}%`})});let v=f(`strong`,m);r(m,v);let y=d(v);r(v,y),t(()=>{o(y,_.format(l.ordersCount))});let b=f(`span`,m);r(m,b);let x=e(`rue:slot:anchor`);return r(b,x),t(()=>{let e=ge(l.sumDate);n(()=>u(e,b,x))}),s}),m,h)}})});let $t=f(`article`,Ht);r(Ht,$t),p($t,`report-card report-insight-card`);let en=f(`div`,$t);r($t,en),p(en,`report-panel-header`);let tn=f(`div`,en);r(en,tn);let nn=f(`p`,tn);r(tn,nn),p(nn,`report-panel-eyebrow`),r(nn,l(`Signals`));let rn=f(`h2`,tn);r(tn,rn),r(rn,l(`关键观察`));let an=f(`div`,$t);r($t,an),p(an,`report-insight-list`);let on=e(`rue:list:start`),sn=e(`rue:list:end`);r(an,on),r(an,sn);let cn=new Map;t(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(o,c,l,d,m)=>{u(s(()=>{let s=a(),c=f(`article`,s);r(s,c),t(()=>{i(c,`key`,String(o.title))}),p(c,`report-insight-item`);let l=f(`h3`,c);r(c,l);let d=e(`rue:slot:anchor`);r(l,d),t(()=>{let e=o.title;n(()=>u(e,l,d))});let m=f(`p`,c);r(c,m);let h=e(`rue:slot:anchor`);return r(m,h),t(()=>{let e=o.text;n(()=>u(e,m,h))}),s}),c,l)}})});let ln=f(`section`,k);r(k,ln),p(ln,`report-card report-timeline-card`);let $=f(`div`,ln);r(ln,$),p($,`report-panel-header`);let un=f(`div`,$);r($,un);let dn=f(`p`,un);r(un,dn),p(dn,`report-panel-eyebrow`),r(dn,l(`Daily Playback`));let fn=f(`h2`,un);r(un,fn),r(fn,l(`逐日回放`));let pn=f(`div`,$);r($,pn),p(pn,`report-panel-summary`),r(pn,l(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=f(`div`,ln);r(ln,mn),p(mn,`report-timeline-list`);let hn=e(`rue:list:start`),gn=e(`rue:list:end`);r(mn,hn),r(mn,gn);let _n=new Map;return t(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{u(s(()=>{let s=a(),h=f(`div`,s);r(s,h),t(()=>{i(h,`key`,String(m.sumDate))}),p(h,`report-timeline-row`);let g=f(`div`,h);r(h,g),p(g,`report-timeline-main`);let v=f(`strong`,g);r(g,v);let y=e(`rue:slot:anchor`);r(v,y),t(()=>{let e=m.label;n(()=>u(e,v,y))});let b=f(`span`,g);r(g,b);let x=e(`rue:slot:anchor`);r(b,x),t(()=>{let e=m.notes;n(()=>u(e,b,x))});let S=f(`div`,h);r(h,S),p(S,`report-timeline-track`);let ee=f(`span`,S);r(S,ee),p(ee,`report-timeline-fill`),t(()=>{c(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=f(`div`,h);r(h,C),p(C,`report-timeline-metrics`);let te=f(`strong`,C);r(C,te);let w=e(`rue:slot:anchor`);r(te,w),t(()=>{let e=M(m.allAmount);n(()=>u(e,te,w))});let T=f(`span`,C);r(C,T);let E=d(T);r(T,E),t(()=>{o(E,_.format(m.ordersCount))}),r(T,l(` 笔 / 客户均额`));let ne=d(T);r(T,ne),o(ne,` `),r(T,l(` `));let D=e(`rue:slot:anchor`);return r(T,D),t(()=>{let e=M(m.avgClientPrice);n(()=>u(e,T,D))}),s}),h,g)}})}),D});export{N as default};