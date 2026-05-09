import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,q as d,u as f}from"./vapor-runtime-BZZbPG7x.js";import{n as p}from"./vapor-helpers-vapor-DuGQh50d.js";var m=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),h=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),g=new Intl.NumberFormat(`zh-CN`),_=m.reduce((e,t)=>e+t.ordersCount,0),v=m.reduce((e,t)=>e+t.allAmount,0),ee=m.reduce((e,t)=>e+t.returnsTotal,0),y=m.filter(e=>e.ordersCount>0).length,b=m.length-y,x=m.reduce((e,t)=>e+t.adminOrderTotal,0),S=m.reduce((e,t)=>e+t.selfOrderTotal,0),te=m.reduce((e,t)=>e+t.ordersClients,0),C=m.reduce((e,t)=>t.allAmount>e.allAmount?t:e),w=v>0?C.allAmount/v:0,T=v>0?x/v:0,ne=v>0?S/v:0,E=y>0?v/y:0,D=_>0?v/_:0,re=760,O=300,k={top:24,right:18,bottom:42,left:18},A=re-k.left-k.right,j=O-k.top-k.bottom,ie=Math.max(...m.map(e=>e.allAmount),1),ae=Math.max(...m.map(e=>e.ordersCount),1),oe=m.map((e,t)=>({row:e,x:k.left+A/Math.max(m.length-1,1)*t,y:k.top+j-e.allAmount/ie*j})),se=oe.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ce=`${se} L ${oe[oe.length-1]?.x??0} ${O-k.bottom} L ${oe[0]?.x??0} ${O-k.bottom} Z`,le=[0,.25,.5,.75,1].map(e=>({step:e,y:k.top+j-e*j})),ue=52,de=2*Math.PI*ue,fe=de*(1-T),M=e=>h.format(e),N=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:M(e),P=e=>`${(e*100).toFixed(1)}%`,pe=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},F=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},me=`${F(m[0]?.sumDate??``)} - ${F(m[m.length-1]?.sumDate??``)}`,he=[{label:`窗口成交额`,value:N(v),detail:`总金额 ${M(v)}`},{label:`成交笔数`,value:g.format(_),detail:`活跃交易日 ${y} 天`},{label:`渠道结构`,value:P(T),detail:`后台代客下单占比`},{label:`笔均成交`,value:N(D),detail:`活跃日均 ${N(E)}`}],ge=[{title:`启动前半段静默明显`,text:`前 ${b} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${F(C.sumDate)} 贡献 ${P(w)} 的窗口成交额，金额达到 ${M(C.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],_e=m.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===C.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:pe(e.sumDate),amountRatio:ie>0?e.allAmount/ie:0,notes:t.join(` / `)||`无波动`}}),ve=`
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
`,ye=()=>f(()=>{let h=a(),E=e(`style`);l(h,E),u(()=>{s(E,ve)});let D=e(`div`);l(h,D),o(D,`report-data1-scope report-page`);let A=e(`section`);l(D,A),o(A,`report-hero report-card`);let j=e(`div`);l(A,j),o(j,`report-hero-copy`);let ye=e(`p`);l(j,ye),o(ye,`report-kicker`),l(ye,n(`Data Pulse / March 2026`));let be=e(`h1`);l(j,be),l(be,n(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let I=e(`p`);l(j,I),o(I,`report-hero-text`),l(I,n(`统计区间为 `));let xe=r(I);l(I,xe),u(()=>{s(xe,me)}),l(I,n(`。窗口总成交额达到 `));let Se=r(I);l(I,Se),u(()=>{s(Se,M(v))}),l(I,n(`，共形成`));let Ce=r(I);l(I,Ce),s(Ce,` `),l(I,n(` `));let we=r(I);l(I,we),u(()=>{s(we,g.format(_))}),l(I,n(` 笔订单， 其中`));let Te=r(I);l(I,Te),s(Te,` `),l(I,n(` `));let Ee=r(I);l(I,Ee),u(()=>{s(Ee,F(C.sumDate))}),l(I,n(` 单日贡献 `));let De=r(I);l(I,De),u(()=>{s(De,P(w))}),l(I,n(` ，而退货金额维持在 `));let Oe=r(I);l(I,Oe),u(()=>{s(Oe,M(ee))}),l(I,n(`。`));let L=e(`div`);l(j,L),o(L,`report-hero-tags`);let R=e(`span`);l(L,R),o(R,`report-tag`);let ke=r(R);l(R,ke),u(()=>{s(ke,b)}),l(R,n(` 天静默期`));let z=e(`span`);l(L,z),o(z,`report-tag`);let Ae=r(z);l(z,Ae),u(()=>{s(Ae,y)}),l(z,n(` 天有效成交`));let B=e(`span`);l(L,B),o(B,`report-tag`),l(B,n(`客户记录 `));let je=r(B);l(B,je),u(()=>{s(je,g.format(te))});let V=e(`div`);l(A,V),o(V,`report-hero-board`);let Me=e(`div`);l(V,Me),o(Me,`report-board-header`);let Ne=e(`span`);l(Me,Ne),o(Ne,`report-board-label`),l(Ne,n(`峰值日`));let Pe=e(`span`);l(Me,Pe),o(Pe,`report-board-date`);let Fe=r(Pe);l(Pe,Fe),u(()=>{s(Fe,F(C.sumDate))});let Ie=e(`div`);l(V,Ie),o(Ie,`report-board-value`);let Le=r(Ie);l(Ie,Le),u(()=>{s(Le,N(C.allAmount))});let H=e(`p`);l(V,H),o(H,`report-board-copy`),l(H,n(`单日完成 `));let Re=r(H);l(H,Re),u(()=>{s(Re,g.format(C.ordersCount))}),l(H,n(` 笔订单，客户均额`));let ze=r(H);l(H,ze),s(ze,` `),l(H,n(` `));let Be=r(H);l(H,Be),u(()=>{s(Be,N(C.avgClientPrice))}),l(H,n(`。`));let U=e(`div`);l(V,U),o(U,`report-sparkline`);let Ve=i(`rue:list:start`),He=i(`rue:list:end`);l(U,Ve),l(U,He);let Ue=new Map;u(()=>{Ue=p({items:_e||[],getKey:(e,t)=>e.sumDate,elements:Ue,parent:U,before:He,singleRoot:!0,start:Ve,renderItem:(n,r,s,p,m)=>{c(f(()=>{let r=a(),s=e(`div`);l(r,s),u(()=>{t(s,`key`,String(n.sumDate))}),o(s,`report-spark-item`);let f=e(`span`);l(s,f),u(()=>{o(f,String(`report-spark-bar ${n.sumDate===C.sumDate?`is-peak`:``}`))}),u(()=>{d(f,{height:`${Math.max(10,n.amountRatio*100)}%`})});let p=e(`span`);l(s,p),o(p,`report-spark-label`);let m=i(`rue:slot:anchor`);return l(p,m),u(()=>{let e=n.label;c(e,p,m)}),r}),r,s)}})});let W=e(`section`);l(D,W),o(W,`report-kpi-grid`);let We=i(`rue:list:start`),Ge=i(`rue:list:end`);l(W,We),l(W,Ge);let Ke=new Map;u(()=>{Ke=p({items:he||[],getKey:(e,t)=>e.label,elements:Ke,parent:W,before:Ge,singleRoot:!0,start:We,renderItem:(n,d,p,m,h)=>{c(f(()=>{let d=a(),f=e(`article`);l(d,f),u(()=>{t(f,`key`,String(n.label))}),o(f,`report-kpi-card report-card`);let p=e(`p`);l(f,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.label;c(e,p,m)});let h=e(`h2`);l(f,h);let g=r(h);l(h,g),u(()=>{s(g,n.value)});let _=e(`span`);l(f,_);let v=i(`rue:slot:anchor`);return l(_,v),u(()=>{let e=n.detail;c(e,_,v)}),d}),d,p)}})});let qe=e(`section`);l(D,qe),o(qe,`report-panel-grid report-panel-grid-primary`);let Je=e(`article`);l(qe,Je),o(Je,`report-card report-chart-card report-chart-wide`);let Ye=e(`div`);l(Je,Ye),o(Ye,`report-panel-header`);let Xe=e(`div`);l(Ye,Xe);let Ze=e(`p`);l(Xe,Ze),o(Ze,`report-panel-eyebrow`),l(Ze,n(`GMV Trend`));let Qe=e(`h2`);l(Xe,Qe),l(Qe,n(`成交金额波动`));let $e=e(`div`);l(Ye,$e),o($e,`report-panel-summary`),l($e,n(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let et=e(`div`);l(Je,et),o(et,`report-chart-shell`);let G=e(`svg`);l(et,G),u(()=>{t(G,`viewBox`,String(`0 0 ${re} ${O}`))}),o(G,`report-svg-chart`),t(G,`role`,`img`),t(G,`aria-label`,`每日成交金额趋势图`);let tt=e(`defs`);l(G,tt);let K=e(`linearGradient`);l(tt,K),t(K,`id`,`reportAreaGradient`),t(K,`x1`,`0`),t(K,`x2`,`0`),t(K,`y1`,`0`),t(K,`y2`,`1`);let nt=e(`stop`);l(K,nt),t(nt,`offset`,`0%`),o(nt,`report-stop-area-top`);let rt=e(`stop`);l(K,rt),t(rt,`offset`,`100%`),o(rt,`report-stop-area-bottom`);let q=e(`linearGradient`);l(tt,q),t(q,`id`,`reportLineGradient`),t(q,`x1`,`0`),t(q,`x2`,`1`),t(q,`y1`,`0`),t(q,`y2`,`0`);let it=e(`stop`);l(q,it),t(it,`offset`,`0%`),o(it,`report-stop-line-start`);let at=e(`stop`);l(q,at),t(at,`offset`,`100%`),o(at,`report-stop-line-end`);let ot=i(`rue:list:start`),st=i(`rue:list:end`);l(G,ot),l(G,st);let ct=new Map;u(()=>{ct=p({items:le||[],getKey:(e,t)=>e.step,elements:ct,parent:G,before:st,singleRoot:!0,start:ot,renderItem:(n,i,d,p,m)=>{c(f(()=>{let i=a(),c=e(`g`);l(i,c),u(()=>{t(c,`key`,String(n.step))});let d=e(`line`);l(c,d),u(()=>{t(d,`x1`,String(k.left))}),u(()=>{t(d,`y1`,String(n.y))}),u(()=>{t(d,`x2`,String(re-k.right))}),u(()=>{t(d,`y2`,String(n.y))}),o(d,`report-grid-line`);let f=e(`text`);l(c,f),u(()=>{t(f,`x`,String(k.left+6))}),u(()=>{t(f,`y`,String(n.y-8))}),o(f,`report-grid-label`);let p=r(f);return l(f,p),u(()=>{s(p,N(ie*n.step))}),i}),i,d)}})});let lt=e(`path`);l(G,lt),u(()=>{t(lt,`d`,String(ce))}),t(lt,`fill`,`url(#reportAreaGradient)`);let ut=e(`path`);l(G,ut),u(()=>{t(ut,`d`,String(se))}),o(ut,`report-line-path`),t(ut,`stroke`,`url(#reportLineGradient)`);let dt=i(`rue:list:start`),ft=i(`rue:list:end`);l(G,dt),l(G,ft);let pt=new Map;u(()=>{pt=p({items:oe||[],getKey:(e,t)=>e.row.sumDate,elements:pt,parent:G,before:ft,singleRoot:!0,start:dt,renderItem:(n,i,d,p,m)=>{c(f(()=>{let i=a(),c=e(`g`);l(i,c),u(()=>{t(c,`key`,String(n.row.sumDate))});let d=e(`circle`);l(c,d),u(()=>{t(d,`cx`,String(n.x))}),u(()=>{t(d,`cy`,String(n.y))}),u(()=>{t(d,`r`,String(n.row.sumDate===C.sumDate?7:4.5))}),o(d,`report-point-outer`);let f=e(`circle`);l(c,f),u(()=>{t(f,`cx`,String(n.x))}),u(()=>{t(f,`cy`,String(n.y))}),t(f,`r`,`3.2`),o(f,`report-point-inner`);let p=e(`text`);l(c,p),u(()=>{t(p,`x`,String(n.x))}),u(()=>{t(p,`y`,String(O-12))}),t(p,`text-anchor`,`middle`),o(p,`report-axis-label`);let m=r(p);return l(p,m),u(()=>{s(m,pe(n.row.sumDate))}),i}),i,d)}})});let J=e(`article`);l(qe,J),o(J,`report-card report-channel-card`);let mt=e(`div`);l(J,mt),o(mt,`report-panel-header`);let ht=e(`div`);l(mt,ht);let gt=e(`p`);l(ht,gt),o(gt,`report-panel-eyebrow`),l(gt,n(`Channel Mix`));let _t=e(`h2`);l(ht,_t),l(_t,n(`下单渠道分布`));let vt=e(`div`);l(J,vt),o(vt,`report-channel-body`);let Y=e(`svg`);l(vt,Y),t(Y,`viewBox`,`0 0 160 160`),o(Y,`report-donut`),t(Y,`role`,`img`),t(Y,`aria-label`,`下单渠道占比图`);let X=e(`circle`);l(Y,X),t(X,`cx`,`80`),t(X,`cy`,`80`),u(()=>{t(X,`r`,String(ue))}),o(X,`report-donut-track`);let Z=e(`circle`);l(Y,Z),t(Z,`cx`,`80`),t(Z,`cy`,`80`),u(()=>{t(Z,`r`,String(ue))}),o(Z,`report-donut-admin`),u(()=>{t(Z,`stroke-dasharray`,String(`${de}`))}),t(Z,`stroke-dashoffset`,`0`);let Q=e(`circle`);l(Y,Q),t(Q,`cx`,`80`),t(Q,`cy`,`80`),u(()=>{t(Q,`r`,String(ue))}),o(Q,`report-donut-self`),u(()=>{t(Q,`stroke-dasharray`,String(`${de*ne} ${de}`))}),u(()=>{t(Q,`stroke-dashoffset`,String(-fe))});let yt=e(`div`);l(vt,yt),o(yt,`report-channel-center`);let bt=e(`strong`);l(yt,bt);let xt=r(bt);l(bt,xt),u(()=>{s(xt,P(T))});let St=e(`span`);l(yt,St),l(St,n(`后台代客`));let Ct=e(`div`);l(J,Ct),o(Ct,`report-channel-list`);let wt=e(`div`);l(Ct,wt),o(wt,`report-channel-item`);let Tt=e(`span`);l(wt,Tt),o(Tt,`report-dot report-dot-admin`);let Et=e(`div`);l(wt,Et);let Dt=e(`strong`);l(Et,Dt),l(Dt,n(`后台代客下单`));let Ot=e(`p`);l(Et,Ot);let kt=r(Ot);l(Ot,kt),u(()=>{s(kt,M(x))});let At=e(`span`);l(wt,At);let jt=r(At);l(At,jt),u(()=>{s(jt,P(T))});let Mt=e(`div`);l(Ct,Mt),o(Mt,`report-channel-item`);let Nt=e(`span`);l(Mt,Nt),o(Nt,`report-dot report-dot-self`);let Pt=e(`div`);l(Mt,Pt);let Ft=e(`strong`);l(Pt,Ft),l(Ft,n(`客户自主下单`));let It=e(`p`);l(Pt,It);let Lt=r(It);l(It,Lt),u(()=>{s(Lt,M(S))});let Rt=e(`span`);l(Mt,Rt);let zt=r(Rt);l(Rt,zt),u(()=>{s(zt,P(ne))});let Bt=e(`section`);l(D,Bt),o(Bt,`report-panel-grid`);let Vt=e(`article`);l(Bt,Vt),o(Vt,`report-card report-chart-card`);let Ht=e(`div`);l(Vt,Ht),o(Ht,`report-panel-header`);let Ut=e(`div`);l(Ht,Ut);let Wt=e(`p`);l(Ut,Wt),o(Wt,`report-panel-eyebrow`),l(Wt,n(`Order Volume`));let Gt=e(`h2`);l(Ut,Gt),l(Gt,n(`每日订单笔数`));let Kt=e(`div`);l(Ht,Kt),o(Kt,`report-panel-summary`),l(Kt,n(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let qt=e(`div`);l(Vt,qt),o(qt,`report-bars`);let Jt=i(`rue:list:start`),Yt=i(`rue:list:end`);l(qt,Jt),l(qt,Yt);let Xt=new Map;u(()=>{Xt=p({items:m||[],getKey:(e,t)=>e.sumDate,elements:Xt,parent:qt,before:Yt,singleRoot:!0,start:Jt,renderItem:(n,i,p,m,h)=>{c(f(()=>{let i=a(),c=e(`div`);l(i,c),u(()=>{t(c,`key`,String(n.sumDate))}),o(c,`report-bar-group`);let f=e(`div`);l(c,f),o(f,`report-bar-shell`);let p=e(`div`);l(f,p),u(()=>{o(p,String(`report-bar-fill ${n.sumDate===C.sumDate?`is-accent`:``}`))}),u(()=>{d(p,{height:`${Math.max(8,n.ordersCount/ae*100)}%`})});let m=e(`strong`);l(c,m);let h=r(m);l(m,h),u(()=>{s(h,g.format(n.ordersCount))});let _=e(`span`);l(c,_);let v=r(_);return l(_,v),u(()=>{s(v,pe(n.sumDate))}),i}),i,p)}})});let Zt=e(`article`);l(Bt,Zt),o(Zt,`report-card report-insight-card`);let Qt=e(`div`);l(Zt,Qt),o(Qt,`report-panel-header`);let $t=e(`div`);l(Qt,$t);let en=e(`p`);l($t,en),o(en,`report-panel-eyebrow`),l(en,n(`Signals`));let tn=e(`h2`);l($t,tn),l(tn,n(`关键观察`));let nn=e(`div`);l(Zt,nn),o(nn,`report-insight-list`);let rn=i(`rue:list:start`),an=i(`rue:list:end`);l(nn,rn),l(nn,an);let on=new Map;u(()=>{on=p({items:ge||[],getKey:(e,t)=>e.title,elements:on,parent:nn,before:an,singleRoot:!0,start:rn,renderItem:(n,r,s,d,p)=>{c(f(()=>{let r=a(),s=e(`article`);l(r,s),u(()=>{t(s,`key`,String(n.title))}),o(s,`report-insight-item`);let d=e(`h3`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.title;c(e,d,f)});let p=e(`p`);l(s,p);let m=i(`rue:slot:anchor`);return l(p,m),u(()=>{let e=n.text;c(e,p,m)}),r}),r,s)}})});let sn=e(`section`);l(D,sn),o(sn,`report-card report-timeline-card`);let cn=e(`div`);l(sn,cn),o(cn,`report-panel-header`);let ln=e(`div`);l(cn,ln);let un=e(`p`);l(ln,un),o(un,`report-panel-eyebrow`),l(un,n(`Daily Playback`));let dn=e(`h2`);l(ln,dn),l(dn,n(`逐日回放`));let fn=e(`div`);l(cn,fn),o(fn,`report-panel-summary`),l(fn,n(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let $=e(`div`);l(sn,$),o($,`report-timeline-list`);let pn=i(`rue:list:start`),mn=i(`rue:list:end`);l($,pn),l($,mn);let hn=new Map;return u(()=>{hn=p({items:_e||[],getKey:(e,t)=>e.sumDate,elements:hn,parent:$,before:mn,singleRoot:!0,start:pn,renderItem:(p,m,h,_,v)=>{c(f(()=>{let f=a(),m=e(`div`);l(f,m),u(()=>{t(m,`key`,String(p.sumDate))}),o(m,`report-timeline-row`);let h=e(`div`);l(m,h),o(h,`report-timeline-main`);let _=e(`strong`);l(h,_);let v=i(`rue:slot:anchor`);l(_,v),u(()=>{let e=p.label;c(e,_,v)});let ee=e(`span`);l(h,ee);let y=i(`rue:slot:anchor`);l(ee,y),u(()=>{let e=p.notes;c(e,ee,y)});let b=e(`div`);l(m,b),o(b,`report-timeline-track`);let x=e(`span`);l(b,x),o(x,`report-timeline-fill`),u(()=>{d(x,{width:`${Math.max(4,p.amountRatio*100)}%`})});let S=e(`div`);l(m,S),o(S,`report-timeline-metrics`);let te=e(`strong`);l(S,te);let C=r(te);l(te,C),u(()=>{s(C,N(p.allAmount))});let w=e(`span`);l(S,w);let T=r(w);l(w,T),u(()=>{s(T,g.format(p.ordersCount))}),l(w,n(` 笔 / 客户均额`));let ne=r(w);l(w,ne),s(ne,` `),l(w,n(` `));let E=r(w);return l(w,E),u(()=>{s(E,N(p.avgClientPrice))}),f}),m,h)}})}),h});export{ye as default};