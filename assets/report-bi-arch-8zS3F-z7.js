import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,X as c,_t as l,d as u,l as d,ut as f,z as p}from"./vapor-runtime-Dfq7aA8z.js";import{n as m}from"./vapor-helpers-vapor-CpxsbTjB.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
.bi-scope.bi-page {
  --b-bg: var(--color-base-100);
  --b-bg2: var(--color-base-200);
  --b-bg3: var(--color-base-300);
  --b-c: var(--color-base-content);
  --b-p: var(--color-primary);
  --b-pc: var(--color-primary-content);
  --b-s: var(--color-secondary);
  --b-sc: var(--color-secondary-content);
  --b-a: var(--color-accent);
  --b-ac: var(--color-accent-content);
  --b-ok: oklch(0.72 0.19 155);
  --b-warn: oklch(0.75 0.18 75);
  --b-err: oklch(0.65 0.22 25);
  --b-mysql: oklch(0.65 0.2 250);
  --b-pg: oklch(0.6 0.18 165);
  --b-ch: oklch(0.72 0.2 300);
  --b-redis: oklch(0.65 0.24 15);
  --b-api: oklch(0.68 0.16 85);
  --b-gql: oklch(0.7 0.2 280);
  --b-glass: color-mix(in oklch, var(--b-bg2) 55%, transparent);
  --b-glass2: color-mix(in oklch, var(--b-bg3) 35%, transparent);

  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 24px;
  font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
}

@media (min-width: 768px) { .bi-scope.bi-page { padding: 0 36px; } }
@media (min-width: 1280px) { .bi-scope.bi-page { padding: 0 48px; } }

.bi-scope .bi-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--b-glass2);
  background:
    radial-gradient(ellipse 70% 50% at 100% -10%, color-mix(in oklch, var(--b-p) 12%, transparent), transparent),
    radial-gradient(ellipse 50% 60% at 0% 110%, color-mix(in oklch, var(--b-s) 8%, transparent), transparent),
    var(--b-glass);
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--b-bg3) 25%, transparent),
    0 16px 48px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent);
  backdrop-filter: blur(4px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bi-scope .bi-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--b-p) 25%, transparent),
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--b-a) 18%, transparent)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.bi-scope .bi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px color-mix(in oklch, var(--b-p) 10%, transparent), 0 24px 64px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent); }
.bi-scope .bi-card:hover::before { opacity: 1; }

.bi-scope .bi-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(340px, 0.85fr);
  gap: 32px;
  padding: 40px;
}

.bi-scope .bi-kicker {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-hero h1 {
  margin: 0;
  font-size: clamp(30px, 4.5vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  color: var(--b-c);
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, var(--b-c) 40%, var(--b-p));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bi-scope .bi-hero-desc {
  margin: 18px 0 0;
  max-width: 60ch;
  line-height: 1.8;
  color: color-mix(in oklch, var(--b-c) 65%, transparent);
}

.bi-scope .bi-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.bi-scope .bi-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  background: color-mix(in oklch, var(--b-p) 10%, transparent);
  color: var(--b-p);
  transition: all 0.3s ease;
}

.bi-scope .bi-tag:hover {
  background: color-mix(in oklch, var(--b-p) 20%, transparent);
  transform: translateY(-1px);
}

.bi-scope .bi-tag .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--b-ok);
  box-shadow: 0 0 8px color-mix(in oklch, var(--b-ok) 50%, transparent);
  animation: biPulse 2s ease-in-out infinite;
}

.bi-scope .bi-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.bi-scope .bi-metric-card {
  padding: 20px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-metric-card:hover {
  background: color-mix(in oklch, var(--b-bg3) 55%, var(--b-bg2));
  transform: translateY(-2px);
}

.bi-scope .bi-metric-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-metric-value {
  margin-top: 8px;
  font-size: clamp(24px, 2.5vw, 34px);
  font-weight: 800;
  color: var(--b-c);
  line-height: 1;
}

.bi-scope .bi-metric-delta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
}

.bi-scope .bi-metric-delta.up {
  color: var(--b-ok);
  background: color-mix(in oklch, var(--b-ok) 12%, transparent);
}

.bi-scope .bi-metric-delta.down {
  color: var(--b-err);
  background: color-mix(in oklch, var(--b-err) 12%, transparent);
}

.bi-scope .bi-section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.bi-scope .bi-section-title h2 {
  margin: 0;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-section-title p {
  margin: 0;
  font-size: 14px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  max-width: 36ch;
}

.bi-scope .bi-eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-sources-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 28px;
}

.bi-scope .bi-src {
  padding: 22px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg2) 35%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 30%, transparent);
  transition: all 0.35s ease;
  cursor: default;
}

.bi-scope .bi-src:hover {
  background: color-mix(in oklch, var(--b-bg2) 55%, var(--b-bg));
  border-color: color-mix(in oklch, var(--b-bg3) 55%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px color-mix(in oklch, var(--b-bg3) 25%, transparent);
}

.bi-scope .bi-src-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bi-scope .bi-src-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.bi-scope .bi-src-icon.mysql { background: linear-gradient(135deg, var(--b-mysql), oklch(0.5 0.15 250)); }
.bi-scope .bi-src-icon.pg { background: linear-gradient(135deg, var(--b-pg), oklch(0.45 0.12 165)); }
.bi-scope .bi-src-icon.ch { background: linear-gradient(135deg, var(--b-ch), oklch(0.55 0.15 300)); }
.bi-scope .bi-src-icon.redis { background: linear-gradient(135deg, var(--b-redis), oklch(0.5 0.18 15)); }
.bi-scope .bi-src-icon.api { background: linear-gradient(135deg, var(--b-api), oklch(0.5 0.12 85)); }
.bi-scope .bi-src-icon.gql { background: linear-gradient(135deg, var(--b-gql), oklch(0.55 0.15 280)); }

.bi-scope .bi-src-name {
  font-size: 17px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 999px;
  text-transform: uppercase;
}

.bi-scope .bi-src-type.sql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 12%, transparent); }
.bi-scope .bi-src-type.olap { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 12%, transparent); }
.bi-scope .bi-src-type.cache { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 12%, transparent); }
.bi-scope .bi-src-type.http { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 12%, transparent); }

.bi-scope .bi-src-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-src-stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-src-stat-value {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-stat-unit {
  font-size: 11px;
  font-weight: 600;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-src-conn-bar {
  width: 100%;
  height: 4px;
  border-radius: 999px;
  margin-top: 6px;
  background: color-mix(in oklch, var(--b-c) 8%, transparent);
  overflow: hidden;
}

.bi-scope .bi-src-conn-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.bi-scope .bi-src-conn-fill.mysql { background: var(--b-mysql); }
.bi-scope .bi-src-conn-fill.pg { background: var(--b-pg); }
.bi-scope .bi-src-conn-fill.ch { background: var(--b-ch); }
.bi-scope .bi-src-conn-fill.redis { background: var(--b-redis); }
.bi-scope .bi-src-conn-fill.api { background: var(--b-api); }
.bi-scope .bi-src-conn-fill.gql { background: var(--b-gql); }

.bi-scope .bi-src-dbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.bi-scope .bi-src-db {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 50%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.bi-scope .bi-status-dot.active { background: var(--b-ok); box-shadow: 0 0 10px color-mix(in oklch, var(--b-ok) 50%, transparent); }
.bi-scope .bi-status-dot.warning { background: var(--b-warn); box-shadow: 0 0 10px color-mix(in oklch, var(--b-warn) 50%, transparent); animation: biPulse 1.5s ease-in-out infinite; }

.bi-scope .bi-pipeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  padding: 28px;
  position: relative;
}

.bi-scope .bi-pipe-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 20px 12px;
  position: relative;
  z-index: 1;
}

.bi-scope .bi-pipe-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: linear-gradient(135deg, color-mix(in oklch, var(--b-p) 20%, var(--b-bg2)), color-mix(in oklch, var(--b-a) 15%, var(--b-bg3)));
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  box-shadow: 0 4px 16px color-mix(in oklch, var(--b-p) 12%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-pipe-stage:hover .bi-pipe-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 24px color-mix(in oklch, var(--b-p) 20%, transparent);
}

.bi-scope .bi-pipe-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-pipe-desc {
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  line-height: 1.6;
}

.bi-scope .bi-pipe-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.bi-scope .bi-pipe-item {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-pipe-arrow {
  position: absolute;
  top: 48px;
  right: -14px;
  width: 28px;
  height: 2px;
  z-index: 0;
}

.bi-scope .bi-pipe-arrow::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--b-p), var(--b-a));
  opacity: 0.4;
}

.bi-scope .bi-pipe-arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  border: 5px solid transparent;
  border-left: 7px solid var(--b-a);
  opacity: 0.4;
}

.bi-scope .bi-chart-section {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.85fr);
  gap: 20px;
}

.bi-scope .bi-chart-card {
  padding: 28px;
}

.bi-scope .bi-chart-shell {
  overflow: hidden;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  box-shadow: inset 0 2px 10px color-mix(in oklch, var(--b-bg3) 20%, transparent);
}

.bi-scope .bi-chart-svg {
  display: block;
  width: 100%;
  height: auto;
}

.bi-scope .bi-grid-line {
  stroke: color-mix(in oklch, var(--b-c) 8%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.bi-scope .bi-grid-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 40%, transparent);
}

.bi-scope .bi-axis-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-line-path {
  fill: none;
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bi-scope .bi-tp-card { padding: 28px; }

.bi-scope .bi-tp-bars {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  min-height: 180px;
  padding: 16px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 35%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
}

.bi-scope .bi-tp-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.bi-scope .bi-tp-bar-shell {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: flex-end;
}

.bi-scope .bi-tp-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 14px 14px 4px 4px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--b-p) 80%, var(--b-a)), color-mix(in oklch, var(--b-p) 20%, transparent));
  box-shadow: 0 6px 20px color-mix(in oklch, var(--b-p) 18%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-tp-fill:hover {
  filter: brightness(1.15);
  box-shadow: 0 8px 28px color-mix(in oklch, var(--b-p) 28%, transparent);
}

.bi-scope .bi-tp-val {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-tp-label {
  font-size: 11px;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-queries-card { padding: 28px; }

.bi-scope .bi-query-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1.2fr) auto auto auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-query-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-query-row + .bi-query-row {
  margin-top: 10px;
}

.bi-scope .bi-query-rank {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--b-c);
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
}

.bi-scope .bi-query-rank.top3 {
  background: linear-gradient(135deg, var(--b-p), var(--b-a));
  color: white;
}

.bi-scope .bi-query-sql {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-query-src {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-query-src.mysql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 10%, transparent); }
.bi-scope .bi-query-src.pg { color: var(--b-pg); background: color-mix(in oklch, var(--b-pg) 10%, transparent); }
.bi-scope .bi-query-src.ch { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 10%, transparent); }
.bi-scope .bi-query-src.redis { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 10%, transparent); }
.bi-scope .bi-query-src.api { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 10%, transparent); }
.bi-scope .bi-query-src.gql { color: var(--b-gql); background: color-mix(in oklch, var(--b-gql) 10%, transparent); }

.bi-scope .bi-query-freq {
  font-size: 12px;
  font-weight: 700;
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-query-ms {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.bi-scope .bi-query-ms.fast { color: var(--b-ok); }
.bi-scope .bi-query-ms.med { color: var(--b-warn); }
.bi-scope .bi-query-ms.slow { color: var(--b-err); }

.bi-scope .bi-alert-card { padding: 28px; }

.bi-scope .bi-alert-row {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-alert-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-alert-row + .bi-alert-row {
  margin-top: 10px;
}

.bi-scope .bi-alert-time {
  font-size: 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-alert-level {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-level.error { color: var(--b-err); background: color-mix(in oklch, var(--b-err) 12%, transparent); }
.bi-scope .bi-alert-level.warn { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 12%, transparent); }
.bi-scope .bi-alert-level.info { color: var(--b-p); background: color-mix(in oklch, var(--b-p) 12%, transparent); }

.bi-scope .bi-alert-msg {
  font-size: 13px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-alert-resolved {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-resolved.yes { color: var(--b-ok); background: color-mix(in oklch, var(--b-ok) 10%, transparent); }
.bi-scope .bi-alert-resolved.no { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 10%, transparent); }

.bi-scope .bi-bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
}

@keyframes biPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes biFloatIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.bi-scope .bi-card {
  animation: biFloatIn 0.6s ease both;
}

.bi-scope .bi-metric-card:nth-child(1) { animation: biFloatIn 0.5s ease both; animation-delay: 0ms; }
.bi-scope .bi-metric-card:nth-child(2) { animation: biFloatIn 0.5s ease both; animation-delay: 60ms; }
.bi-scope .bi-metric-card:nth-child(3) { animation: biFloatIn 0.5s ease both; animation-delay: 120ms; }
.bi-scope .bi-metric-card:nth-child(4) { animation: biFloatIn 0.5s ease both; animation-delay: 180ms; }
.bi-scope .bi-metric-card:nth-child(5) { animation: biFloatIn 0.5s ease both; animation-delay: 240ms; }
.bi-scope .bi-metric-card:nth-child(6) { animation: biFloatIn 0.5s ease both; animation-delay: 300ms; }

@media (max-width: 1100px) {
  .bi-scope .bi-hero { grid-template-columns: 1fr; }
  .bi-scope .bi-sources-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .bi-scope .bi-chart-section,
  .bi-scope .bi-bottom-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-metrics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .bi-scope.bi-page { padding: 0 12px; gap: 16px; }
  .bi-scope .bi-sources-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-metrics-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-hero { padding: 24px; }
  .bi-scope .bi-query-row { grid-template-columns: 28px minmax(0, 1fr) auto; }
  .bi-scope .bi-query-src, .bi-scope .bi-query-freq, .bi-scope .bi-query-ms { display: none; }
  .bi-scope .bi-alert-row { grid-template-columns: auto minmax(0, 1fr) auto; }
  .bi-scope .bi-alert-time { display: none; }
}
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>u(v=>{let T=t(),A=r(`style`,T);i(T,A),l(()=>{a(A,te)});let j=r(`div`,T);i(T,j),n(j,`bi-scope bi-page`);let M=r(`section`,j);i(j,M),n(M,`bi-hero bi-card`);let N=r(`div`,M);i(M,N);let P=r(`p`,N);i(N,P),n(P,`bi-kicker`),i(P,o(`BI Platform Architecture / Realtime Monitor`));let se=r(`h1`,N);i(N,se),i(se,o(`多源异构数据接入架构，实时驱动业务决策`));let F=r(`p`,N);i(N,F),n(F,`bi-hero-desc`),i(F,o(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=r(`div`,N);i(N,I),n(I,`bi-tags`);let L=r(`span`,I);i(I,L),n(L,`bi-tag`);let ce=r(`span`,L);i(L,ce),n(ce,`dot`),i(L,o(`6 数据源在线`));let R=r(`span`,I);i(I,R),n(R,`bi-tag`),i(R,o(`CDC 实时同步`));let z=r(`span`,I);i(I,z),n(z,`bi-tag`),i(z,o(`ETL 批处理`));let le=r(`span`,I);i(I,le),n(le,`bi-tag`),i(le,o(`四层仓储存档`));let ue=r(`span`,I);i(I,ue),n(ue,`bi-tag`),i(ue,o(`GraphQL + REST 双协议`));let B=r(`div`,M);i(M,B),n(B,`bi-metrics-grid`);let de=e(`rue:list:start`),fe=e(`rue:list:end`);i(B,de),i(B,fe);let pe=new Map;l(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(o,c,m,h,g)=>{d(u(()=>{let c=t(),u=r(`div`,c);i(c,u),l(()=>{s(u,`key`,String(o.label))}),n(u,`bi-metric-card`);let m=r(`div`,u);i(u,m),n(m,`bi-metric-label`);let h=e(`rue:slot:anchor`);i(m,h),l(()=>{let e=o.label;f(()=>d(e,m,h))});let g=r(`div`,u);i(u,g),n(g,`bi-metric-value`);let _=p(g);i(g,_),l(()=>{a(_,o.value)});let v=r(`span`,u);i(u,v),l(()=>{n(v,String(`bi-metric-delta ${o.delta.startsWith(`+`)&&o.label===`异常告警`?`down`:`up`}`))});let y=e(`rue:slot:anchor`);return i(v,y),l(()=>{let e=o.delta;f(()=>d(e,v,y))}),c}),c,m)}})});let V=r(`section`,j);i(j,V),n(V,`bi-card`);let me=r(`div`,V);i(V,me),c(me,{padding:`28px 28px 0`});let H=r(`div`,me);i(me,H),n(H,`bi-section-title`);let he=r(`div`,H);i(H,he);let ge=r(`p`,he);i(he,ge),n(ge,`bi-eyebrow`),i(ge,o(`Data Sources`));let _e=r(`h2`,he);i(he,_e),i(_e,o(`数据源连接池`));let ve=r(`p`,H);i(H,ve),i(ve,o(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=r(`div`,V);i(V,ye),n(ye,`bi-sources-grid`);let be=e(`rue:list:start`),xe=e(`rue:list:end`);i(ye,be),i(ye,xe);let Se=new Map;l(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{d(u(()=>{let g=t(),_=r(`div`,g);i(g,_),l(()=>{s(_,`key`,String(h.id))}),n(_,`bi-src`);let v=r(`div`,_);i(_,v),n(v,`bi-src-head`);let y=r(`div`,v);i(v,y),l(()=>{n(y,String(`bi-src-icon ${ie[h.id]}`))});let b=e(`rue:slot:anchor`);i(y,b),l(()=>{let e=h.icon;f(()=>d(e,y,b))});let x=r(`div`,v);i(v,x),c(x,{flex:1});let S=r(`div`,x);i(x,S),c(S,{display:`flex`,alignItems:`center`,gap:8});let C=r(`span`,S);i(S,C),n(C,`bi-src-name`);let w=e(`rue:slot:anchor`);i(C,w),l(()=>{let e=h.name;f(()=>d(e,C,w))});let T=r(`span`,S);i(S,T),l(()=>{n(T,String(`bi-status-dot ${h.status}`))});let E=r(`span`,x);i(x,E),l(()=>{n(E,String(`bi-src-type ${ae[h.id]}`))});let D=e(`rue:slot:anchor`);i(E,D),l(()=>{let e=h.type;f(()=>d(e,E,D))});let O=r(`div`,_);i(_,O),n(O,`bi-src-stats`);let k=r(`div`,O);i(O,k);let ee=r(`div`,k);i(k,ee),n(ee,`bi-src-stat-label`),i(ee,o(`QPS`));let te=r(`div`,k);i(k,te),n(te,`bi-src-stat-value`);let oe=e(`rue:slot:anchor`);i(te,oe),l(()=>{let e=ne(h.qps);f(()=>d(e,te,oe))});let A=r(`div`,O);i(O,A);let j=r(`div`,A);i(A,j),n(j,`bi-src-stat-label`),i(j,o(`延迟`));let M=r(`div`,A);i(A,M),n(M,`bi-src-stat-value`);let N=e(`rue:slot:anchor`);i(M,N),l(()=>{let e=re(h.latency);f(()=>d(e,M,N))});let P=r(`div`,O);i(O,P);let se=r(`div`,P);i(P,se),n(se,`bi-src-stat-label`),i(se,o(`可用率`));let F=r(`div`,P);i(P,F),n(F,`bi-src-stat-value`);let I=e(`rue:slot:anchor`);i(F,I),l(()=>{let e=h.uptime;f(()=>d(e,F,I))});let L=r(`div`,_);i(_,L),n(L,`bi-src-conn-bar`);let ce=r(`div`,L);i(L,ce),l(()=>{n(ce,String(`bi-src-conn-fill ${ie[h.id]}`))}),l(()=>{c(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=r(`div`,_);i(_,R),c(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=r(`span`,R);i(R,z),n(z,`bi-src-stat-unit`);let le=e(`rue:slot:anchor`);i(z,le),l(()=>{let e=h.connections;f(()=>d(e,z,le))}),i(z,o(` / `));let ue=e(`rue:slot:anchor`);i(z,ue),l(()=>{let e=h.maxConn;f(()=>d(e,z,ue))}),i(z,o(` 连接`));let B=r(`div`,_);i(_,B),n(B,`bi-src-dbs`);let de=e(`rue:list:start`),fe=e(`rue:list:end`);i(B,de),i(B,fe);let pe=new Map;return l(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(e,o,c,f,m)=>{d(u(()=>{let o=t(),c=r(`span`,o);i(o,c),l(()=>{s(c,`key`,String(e))}),n(c,`bi-src-db`);let u=p(c);return i(c,u),l(()=>{a(u,e)}),o}),o,c)}})}),g}),g,_)}})});let U=r(`section`,j);i(j,U),n(U,`bi-card`);let Ce=r(`div`,U);i(U,Ce),c(Ce,{padding:`28px 28px 0`});let W=r(`div`,Ce);i(Ce,W),n(W,`bi-section-title`);let we=r(`div`,W);i(W,we);let Te=r(`p`,we);i(we,Te),n(Te,`bi-eyebrow`),i(Te,o(`Data Pipeline`));let Ee=r(`h2`,we);i(we,Ee),i(Ee,o(`数据处理管线`));let De=r(`p`,W);i(W,De),i(De,o(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=r(`div`,U);i(U,Oe),n(Oe,`bi-pipeline`);let ke=e(`rue:list:start`),Ae=e(`rue:list:end`);i(Oe,ke),i(Oe,Ae);let je=new Map;l(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(o,c,h,_,v)=>{d(u(()=>{let c=t(),h=r(`div`,c);i(c,h),l(()=>{s(h,`key`,String(o.id))}),n(h,`bi-pipe-stage`);let _=r(`div`,h);i(h,_),n(_,`bi-pipe-icon`);let y=e(`rue:slot:anchor`);i(_,y),l(()=>{let e=o.icon;f(()=>d(e,_,y))});let b=r(`div`,h);i(h,b),n(b,`bi-pipe-name`);let x=e(`rue:slot:anchor`);i(b,x),l(()=>{let e=o.name;f(()=>d(e,b,x))});let S=r(`div`,h);i(h,S),n(S,`bi-pipe-desc`);let C=e(`rue:slot:anchor`);i(S,C),l(()=>{let e=o.desc;f(()=>d(e,S,C))});let w=r(`div`,h);i(h,w),n(w,`bi-pipe-items`);let T=e(`rue:list:start`),E=e(`rue:list:end`);i(w,T),i(w,E);let D=new Map;l(()=>{D=m({items:o.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,o,c,f,m)=>{d(u(()=>{let o=t(),c=r(`span`,o);i(o,c),l(()=>{s(c,`key`,String(e))}),n(c,`bi-pipe-item`);let u=p(c);return i(c,u),l(()=>{a(u,e)}),o}),o,c)}})});let O=e(`rue:slot:anchor`);return i(h,O),l(()=>{let e=v<g.length-1?u(()=>{let e=t(),a=r(`div`,e);return i(e,a),n(a,`bi-pipe-arrow`),e}):``;f(()=>d(e,h,O))}),c}),c,h)}})});let G=r(`section`,j);i(j,G),n(G,`bi-chart-section`);let K=r(`article`,G);i(G,K),n(K,`bi-card bi-chart-card`);let Me=r(`div`,K);i(K,Me),n(Me,`bi-section-title`);let Ne=r(`div`,Me);i(Me,Ne);let Pe=r(`p`,Ne);i(Ne,Pe),n(Pe,`bi-eyebrow`),i(Pe,o(`Latency Monitor`));let Fe=r(`h2`,Ne);i(Ne,Fe),i(Fe,o(`24H 延迟趋势`));let Ie=r(`div`,K);i(K,Ie),n(Ie,`bi-chart-shell`);let q=r(`svg`,Ie);i(Ie,q),l(()=>{s(q,`viewBox`,String(`0 0 ${S} ${C}`))}),n(q,`bi-chart-svg`),s(q,`role`,`img`),s(q,`aria-label`,`24小时延迟趋势图`);let Le=r(`defs`,q);i(q,Le);let J=r(`linearGradient`,Le);i(Le,J),s(J,`id`,`biLatMysql`),s(J,`x1`,`0`),s(J,`x2`,`0`),s(J,`y1`,`0`),s(J,`y2`,`1`);let Re=r(`stop`,J);i(J,Re),s(Re,`offset`,`0%`),s(Re,`stopColor`,`var(--b-mysql)`),s(Re,`stopOpacity`,`0.25`);let ze=r(`stop`,J);i(J,ze),s(ze,`offset`,`100%`),s(ze,`stopColor`,`var(--b-mysql)`),s(ze,`stopOpacity`,`0`);let Y=r(`linearGradient`,Le);i(Le,Y),s(Y,`id`,`biLatApi`),s(Y,`x1`,`0`),s(Y,`x2`,`0`),s(Y,`y1`,`0`),s(Y,`y2`,`1`);let Be=r(`stop`,Y);i(Y,Be),s(Be,`offset`,`0%`),s(Be,`stopColor`,`var(--b-api)`),s(Be,`stopOpacity`,`0.2`);let Ve=r(`stop`,Y);i(Y,Ve),s(Ve,`offset`,`100%`),s(Ve,`stopColor`,`var(--b-api)`),s(Ve,`stopOpacity`,`0`);let He=e(`rue:list:start`),Ue=e(`rue:list:end`);i(q,He),i(q,Ue);let We=new Map;l(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(e,c,f,m,h)=>{d(u(()=>{let c=t(),u=w.t+E-e*E,d=r(`g`,c);i(c,d),l(()=>{s(d,`key`,String(e))});let f=r(`line`,d);i(d,f),l(()=>{s(f,`x1`,String(w.l))}),l(()=>{s(f,`y1`,String(u))}),l(()=>{s(f,`x2`,String(S-w.r))}),l(()=>{s(f,`y2`,String(u))}),n(f,`bi-grid-line`);let m=r(`text`,d);i(d,m),l(()=>{s(m,`x`,String(w.l+4))}),l(()=>{s(m,`y`,String(u-6))}),n(m,`bi-grid-label`);let h=p(m);return i(m,h),l(()=>{a(h,(D*e).toFixed(0))}),i(m,o(`ms`)),c}),c,f)}})});let Ge=r(`path`,q);i(q,Ge),l(()=>{s(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),s(Ge,`fill`,`url(#biLatMysql)`);let Ke=r(`path`,q);i(q,Ke),l(()=>{s(Ke,`d`,String(k(`apiY`)))}),n(Ke,`bi-line-path`),s(Ke,`stroke`,`var(--b-api)`);let qe=r(`path`,q);i(q,qe),l(()=>{s(qe,`d`,String(k(`mysqlY`)))}),n(qe,`bi-line-path`),s(qe,`stroke`,`var(--b-mysql)`);let Je=r(`path`,q);i(q,Je),l(()=>{s(Je,`d`,String(k(`pgY`)))}),n(Je,`bi-line-path`),s(Je,`stroke`,`var(--b-pg)`);let Ye=r(`path`,q);i(q,Ye),l(()=>{s(Ye,`d`,String(k(`redisY`)))}),n(Ye,`bi-line-path`),s(Ye,`stroke`,`var(--b-redis)`);let Xe=e(`rue:list:start`),Ze=e(`rue:list:end`);i(q,Xe),i(q,Ze);let Qe=new Map;l(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(e,o,c,f,m)=>{d(u(()=>{let o=t(),c=r(`g`,o);i(o,c),l(()=>{s(c,`key`,String(e.label))});let u=r(`text`,c);i(c,u),l(()=>{s(u,`x`,String(e.x))}),l(()=>{s(u,`y`,String(C-8))}),s(u,`textAnchor`,`middle`),n(u,`bi-axis-label`);let d=p(u);i(u,d),l(()=>{a(d,e.label)});let f=r(`circle`,c);i(c,f),l(()=>{s(f,`cx`,String(e.x))}),l(()=>{s(f,`cy`,String(e.mysqlY))}),s(f,`r`,`3.5`),s(f,`fill`,`var(--b-mysql)`),s(f,`opacity`,`0.85`);let m=r(`circle`,c);i(c,m),l(()=>{s(m,`cx`,String(e.x))}),l(()=>{s(m,`cy`,String(e.pgY))}),s(m,`r`,`3.5`),s(m,`fill`,`var(--b-pg)`),s(m,`opacity`,`0.85`);let h=r(`circle`,c);i(c,h),l(()=>{s(h,`cx`,String(e.x))}),l(()=>{s(h,`cy`,String(e.redisY))}),s(h,`r`,`3.5`),s(h,`fill`,`var(--b-redis)`),s(h,`opacity`,`0.85`);let g=r(`circle`,c);return i(c,g),l(()=>{s(g,`cx`,String(e.x))}),l(()=>{s(g,`cy`,String(e.apiY))}),s(g,`r`,`3.5`),s(g,`fill`,`var(--b-api)`),s(g,`opacity`,`0.85`),o}),o,c)}})});let X=r(`g`,q);i(q,X),l(()=>{s(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=r(`circle`,X);i(X,$e),s($e,`cx`,`0`),s($e,`cy`,`0`),s($e,`r`,`4`),s($e,`fill`,`var(--b-mysql)`);let et=r(`text`,X);i(X,et),s(et,`x`,`10`),s(et,`y`,`4`),n(et,`bi-axis-label`),i(et,o(`MySQL`));let tt=r(`circle`,X);i(X,tt),s(tt,`cx`,`50`),s(tt,`cy`,`0`),s(tt,`r`,`4`),s(tt,`fill`,`var(--b-pg)`);let nt=r(`text`,X);i(X,nt),s(nt,`x`,`60`),s(nt,`y`,`4`),n(nt,`bi-axis-label`),i(nt,o(`PG`));let rt=r(`circle`,X);i(X,rt),s(rt,`cx`,`0`),s(rt,`cy`,`16`),s(rt,`r`,`4`),s(rt,`fill`,`var(--b-redis)`);let it=r(`text`,X);i(X,it),s(it,`x`,`10`),s(it,`y`,`20`),n(it,`bi-axis-label`),i(it,o(`Redis`));let at=r(`circle`,X);i(X,at),s(at,`cx`,`50`),s(at,`cy`,`16`),s(at,`r`,`4`),s(at,`fill`,`var(--b-api)`);let ot=r(`text`,X);i(X,ot),s(ot,`x`,`60`),s(ot,`y`,`20`),n(ot,`bi-axis-label`),i(ot,o(`API`));let Z=r(`article`,G);i(G,Z),n(Z,`bi-card bi-tp-card`);let st=r(`div`,Z);i(Z,st),n(st,`bi-section-title`);let ct=r(`div`,st);i(st,ct);let lt=r(`p`,ct);i(ct,lt),n(lt,`bi-eyebrow`),i(lt,o(`Weekly Throughput`));let ut=r(`h2`,ct);i(ct,ut),i(ut,o(`周吞吐量`));let dt=r(`div`,Z);i(Z,dt),n(dt,`bi-tp-bars`);let ft=e(`rue:list:start`),pt=e(`rue:list:end`);i(dt,ft),i(dt,pt);let mt=new Map;l(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{d(u(()=>{let u=t(),h=r(`div`,u);i(u,h),l(()=>{s(h,`key`,String(m.time))}),n(h,`bi-tp-group`);let g=r(`div`,h);i(h,g),n(g,`bi-tp-val`);let _=p(g);i(g,_),l(()=>{a(_,m.value.toFixed(1))}),i(g,o(`T`));let v=r(`div`,h);i(h,v),n(v,`bi-tp-bar-shell`);let y=r(`div`,v);i(v,y),n(y,`bi-tp-fill`),l(()=>{c(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=r(`div`,h);i(h,b),n(b,`bi-tp-label`);let x=e(`rue:slot:anchor`);return i(b,x),l(()=>{let e=m.time;f(()=>d(e,b,x))}),u}),h,g)}})});let Q=r(`section`,j);i(j,Q),n(Q,`bi-bottom-grid`);let $=r(`article`,Q);i(Q,$),n($,`bi-card bi-queries-card`);let ht=r(`div`,$);i($,ht),n(ht,`bi-section-title`);let gt=r(`div`,ht);i(ht,gt);let _t=r(`p`,gt);i(gt,_t),n(_t,`bi-eyebrow`),i(_t,o(`Top Queries`));let vt=r(`h2`,gt);i(gt,vt),i(vt,o(`高频查询排行`));let yt=r(`div`,$);i($,yt);let bt=e(`rue:list:start`),xt=e(`rue:list:end`);i(yt,bt),i(yt,xt);let St=new Map;l(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(a,c,p,m,h)=>{d(u(()=>{let c=t(),u=r(`div`,c);i(c,u),l(()=>{s(u,`key`,String(a.rank))}),n(u,`bi-query-row`);let p=r(`span`,u);i(u,p),l(()=>{n(p,String(`bi-query-rank ${a.rank<=3?`top3`:``}`))});let m=e(`rue:slot:anchor`);i(p,m),l(()=>{let e=a.rank;f(()=>d(e,p,m))});let h=r(`span`,u);i(u,h),n(h,`bi-query-sql`);let g=e(`rue:slot:anchor`);i(h,g),l(()=>{let e=a.sql;f(()=>d(e,h,g))});let _=r(`span`,u);i(u,_),l(()=>{n(_,String(`bi-query-src ${ie[a.source.toLowerCase().replace(` `,`-`)]||ie[a.source===`ClickHouse`?`ch`:a.source===`Redis`?`redis`:a.source===`MySQL`?`mysql`:a.source===`PostgreSQL`?`pg`:a.source===`GraphQL`?`gql`:`api`]}`))});let v=e(`rue:slot:anchor`);i(_,v),l(()=>{let e=a.source;f(()=>d(e,_,v))});let y=r(`span`,u);i(u,y),n(y,`bi-query-freq`);let b=e(`rue:slot:anchor`);i(y,b),l(()=>{let e=a.freq;f(()=>d(e,y,b))});let x=r(`span`,u);i(u,x),l(()=>{n(x,String(`bi-query-ms ${oe(a.avgMs)}`))});let S=e(`rue:slot:anchor`);return i(x,S),l(()=>{let e=a.avgMs;f(()=>d(e,x,S))}),i(x,o(`ms`)),c}),c,p)}})});let Ct=r(`article`,Q);i(Q,Ct),n(Ct,`bi-card bi-alert-card`);let wt=r(`div`,Ct);i(Ct,wt),n(wt,`bi-section-title`);let Tt=r(`div`,wt);i(wt,Tt);let Et=r(`p`,Tt);i(Tt,Et),n(Et,`bi-eyebrow`),i(Et,o(`Alert Center`));let Dt=r(`h2`,Tt);i(Tt,Dt),i(Dt,o(`告警事件`));let Ot=r(`div`,Ct);i(Ct,Ot);let kt=e(`rue:list:start`),At=e(`rue:list:end`);i(Ot,kt),i(Ot,At);let jt=new Map;return l(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(o,c,m,h,g)=>{d(u(()=>{let c=t(),u=r(`div`,c);i(c,u),l(()=>{s(u,`key`,String(g))}),n(u,`bi-alert-row`);let m=r(`span`,u);i(u,m),n(m,`bi-alert-time`);let h=e(`rue:slot:anchor`);i(m,h),l(()=>{let e=o.time;f(()=>d(e,m,h))});let _=r(`span`,u);i(u,_),l(()=>{n(_,String(`bi-alert-level ${o.level}`))});let v=e(`rue:slot:anchor`);i(_,v),l(()=>{let e=o.level;f(()=>d(e,_,v))});let y=r(`span`,u);i(u,y),n(y,`bi-alert-msg`);let b=e(`rue:slot:anchor`);i(y,b),l(()=>{let e=o.message;f(()=>d(e,y,b))});let x=r(`span`,u);i(u,x),l(()=>{n(x,String(`bi-alert-resolved ${o.resolved?`yes`:`no`}`))});let S=p(x);return i(x,S),l(()=>{a(S,o.resolved?`已恢复`:`处理中`)}),c}),c,m)}})}),T});export{A as default};