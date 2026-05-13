import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Y as c,Z as l,bt as u,c as d,pt as f,u as p}from"./vapor-runtime-D3a-68js.js";import{n as m}from"./vapor-helpers-vapor-DGjYaAZX.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>p(()=>{let v=e(),T=n(`style`);i(v,T),u(()=>{l(T,te)});let A=n(`div`);i(v,A),t(A,`bi-scope bi-page`);let j=n(`section`);i(A,j),t(j,`bi-hero bi-card`);let M=n(`div`);i(j,M);let N=n(`p`);i(M,N),t(N,`bi-kicker`),i(N,r(`BI Platform Architecture / Realtime Monitor`));let P=n(`h1`);i(M,P),i(P,r(`多源异构数据接入架构，实时驱动业务决策`));let F=n(`p`);i(M,F),t(F,`bi-hero-desc`),i(F,r(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=n(`div`);i(M,I),t(I,`bi-tags`);let L=n(`span`);i(I,L),t(L,`bi-tag`);let R=n(`span`);i(L,R),t(R,`dot`),i(L,r(`6 数据源在线`));let z=n(`span`);i(I,z),t(z,`bi-tag`),i(z,r(`CDC 实时同步`));let B=n(`span`);i(I,B),t(B,`bi-tag`),i(B,r(`ETL 批处理`));let V=n(`span`);i(I,V),t(V,`bi-tag`),i(V,r(`四层仓储存档`));let H=n(`span`);i(I,H),t(H,`bi-tag`),i(H,r(`GraphQL + REST 双协议`));let U=n(`div`);i(j,U),t(U,`bi-metrics-grid`);let W=a(`rue:list:start`),se=a(`rue:list:end`);i(U,W),i(U,se);let ce=new Map;u(()=>{ce=m({items:_||[],getKey:(e,t)=>e.label,elements:ce,parent:U,before:se,singleRoot:!0,trackIndex:!1,start:W,renderItem:(r,c,m,h,g)=>{d(p(()=>{let c=e(),p=n(`div`);i(c,p),u(()=>{s(p,`key`,String(r.label))}),t(p,`bi-metric-card`);let m=n(`div`);i(p,m),t(m,`bi-metric-label`);let h=a(`rue:slot:anchor`);i(m,h),u(()=>{let e=r.label;f(()=>d(e,m,h))});let g=n(`div`);i(p,g),t(g,`bi-metric-value`);let _=o(g);i(g,_),u(()=>{l(_,r.value)});let v=n(`span`);i(p,v),u(()=>{t(v,String(`bi-metric-delta ${r.delta.startsWith(`+`)&&r.label===`异常告警`?`down`:`up`}`))});let y=a(`rue:slot:anchor`);return i(v,y),u(()=>{let e=r.delta;f(()=>d(e,v,y))}),c}),c,m)}})});let G=n(`section`);i(A,G),t(G,`bi-card`);let le=n(`div`);i(G,le),c(le,{padding:`28px 28px 0`});let ue=n(`div`);i(le,ue),t(ue,`bi-section-title`);let de=n(`div`);i(ue,de);let fe=n(`p`);i(de,fe),t(fe,`bi-eyebrow`),i(fe,r(`Data Sources`));let pe=n(`h2`);i(de,pe),i(pe,r(`数据源连接池`));let me=n(`p`);i(ue,me),i(me,r(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let K=n(`div`);i(G,K),t(K,`bi-sources-grid`);let he=a(`rue:list:start`),ge=a(`rue:list:end`);i(K,he),i(K,ge);let _e=new Map;u(()=>{_e=m({items:h||[],getKey:(e,t)=>e.id,elements:_e,parent:K,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(h,g,_,v,y)=>{d(p(()=>{let g=e(),_=n(`div`);i(g,_),u(()=>{s(_,`key`,String(h.id))}),t(_,`bi-src`);let v=n(`div`);i(_,v),t(v,`bi-src-head`);let y=n(`div`);i(v,y),u(()=>{t(y,String(`bi-src-icon ${ie[h.id]}`))});let b=a(`rue:slot:anchor`);i(y,b),u(()=>{let e=h.icon;f(()=>d(e,y,b))});let x=n(`div`);i(v,x),c(x,{flex:1});let S=n(`div`);i(x,S),c(S,{display:`flex`,alignItems:`center`,gap:8});let C=n(`span`);i(S,C),t(C,`bi-src-name`);let w=a(`rue:slot:anchor`);i(C,w),u(()=>{let e=h.name;f(()=>d(e,C,w))});let T=n(`span`);i(S,T),u(()=>{t(T,String(`bi-status-dot ${h.status}`))});let E=n(`span`);i(x,E),u(()=>{t(E,String(`bi-src-type ${ae[h.id]}`))});let D=a(`rue:slot:anchor`);i(E,D),u(()=>{let e=h.type;f(()=>d(e,E,D))});let O=n(`div`);i(_,O),t(O,`bi-src-stats`);let k=n(`div`);i(O,k);let ee=n(`div`);i(k,ee),t(ee,`bi-src-stat-label`),i(ee,r(`QPS`));let te=n(`div`);i(k,te),t(te,`bi-src-stat-value`);let oe=a(`rue:slot:anchor`);i(te,oe),u(()=>{let e=ne(h.qps);f(()=>d(e,te,oe))});let A=n(`div`);i(O,A);let j=n(`div`);i(A,j),t(j,`bi-src-stat-label`),i(j,r(`延迟`));let M=n(`div`);i(A,M),t(M,`bi-src-stat-value`);let N=a(`rue:slot:anchor`);i(M,N),u(()=>{let e=re(h.latency);f(()=>d(e,M,N))});let P=n(`div`);i(O,P);let F=n(`div`);i(P,F),t(F,`bi-src-stat-label`),i(F,r(`可用率`));let I=n(`div`);i(P,I),t(I,`bi-src-stat-value`);let L=a(`rue:slot:anchor`);i(I,L),u(()=>{let e=h.uptime;f(()=>d(e,I,L))});let R=n(`div`);i(_,R),t(R,`bi-src-conn-bar`);let z=n(`div`);i(R,z),u(()=>{t(z,String(`bi-src-conn-fill ${ie[h.id]}`))}),u(()=>{c(z,{width:`${h.connections/h.maxConn*100}%`})});let B=n(`div`);i(_,B),c(B,{marginTop:6,display:`flex`,justifyContent:`space-between`});let V=n(`span`);i(B,V),t(V,`bi-src-stat-unit`);let H=a(`rue:slot:anchor`);i(V,H),u(()=>{let e=h.connections;f(()=>d(e,V,H))}),i(V,r(` / `));let U=a(`rue:slot:anchor`);i(V,U),u(()=>{let e=h.maxConn;f(()=>d(e,V,U))}),i(V,r(` 连接`));let W=n(`div`);i(_,W),t(W,`bi-src-dbs`);let se=a(`rue:list:start`),ce=a(`rue:list:end`);i(W,se),i(W,ce);let G=new Map;return u(()=>{G=m({items:h.databases||[],getKey:(e,t)=>e,elements:G,parent:W,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(r,a,c,f,m)=>{d(p(()=>{let a=e(),c=n(`span`);i(a,c),u(()=>{s(c,`key`,String(r))}),t(c,`bi-src-db`);let d=o(c);return i(c,d),u(()=>{l(d,r)}),a}),a,c)}})}),g}),g,_)}})});let ve=n(`section`);i(A,ve),t(ve,`bi-card`);let ye=n(`div`);i(ve,ye),c(ye,{padding:`28px 28px 0`});let be=n(`div`);i(ye,be),t(be,`bi-section-title`);let xe=n(`div`);i(be,xe);let Se=n(`p`);i(xe,Se),t(Se,`bi-eyebrow`),i(Se,r(`Data Pipeline`));let Ce=n(`h2`);i(xe,Ce),i(Ce,r(`数据处理管线`));let we=n(`p`);i(be,we),i(we,r(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let q=n(`div`);i(ve,q),t(q,`bi-pipeline`);let Te=a(`rue:list:start`),Ee=a(`rue:list:end`);i(q,Te),i(q,Ee);let De=new Map;u(()=>{De=m({items:g||[],getKey:(e,t)=>e.id,elements:De,parent:q,before:Ee,singleRoot:!0,start:Te,renderItem:(r,c,h,_,v)=>{d(p(()=>{let c=e(),h=n(`div`);i(c,h),u(()=>{s(h,`key`,String(r.id))}),t(h,`bi-pipe-stage`);let _=n(`div`);i(h,_),t(_,`bi-pipe-icon`);let y=a(`rue:slot:anchor`);i(_,y),u(()=>{let e=r.icon;f(()=>d(e,_,y))});let b=n(`div`);i(h,b),t(b,`bi-pipe-name`);let x=a(`rue:slot:anchor`);i(b,x),u(()=>{let e=r.name;f(()=>d(e,b,x))});let S=n(`div`);i(h,S),t(S,`bi-pipe-desc`);let C=a(`rue:slot:anchor`);i(S,C),u(()=>{let e=r.desc;f(()=>d(e,S,C))});let w=n(`div`);i(h,w),t(w,`bi-pipe-items`);let T=a(`rue:list:start`),E=a(`rue:list:end`);i(w,T),i(w,E);let D=new Map;u(()=>{D=m({items:r.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(r,a,c,f,m)=>{d(p(()=>{let a=e(),c=n(`span`);i(a,c),u(()=>{s(c,`key`,String(r))}),t(c,`bi-pipe-item`);let d=o(c);return i(c,d),u(()=>{l(d,r)}),a}),a,c)}})});let O=a(`rue:slot:anchor`);return i(h,O),u(()=>{let r=v<g.length-1?p(()=>{let r=e(),a=n(`div`);return i(r,a),t(a,`bi-pipe-arrow`),r}):``;f(()=>d(r,h,O))}),c}),c,h)}})});let Oe=n(`section`);i(A,Oe),t(Oe,`bi-chart-section`);let ke=n(`article`);i(Oe,ke),t(ke,`bi-card bi-chart-card`);let Ae=n(`div`);i(ke,Ae),t(Ae,`bi-section-title`);let je=n(`div`);i(Ae,je);let Me=n(`p`);i(je,Me),t(Me,`bi-eyebrow`),i(Me,r(`Latency Monitor`));let Ne=n(`h2`);i(je,Ne),i(Ne,r(`24H 延迟趋势`));let Pe=n(`div`);i(ke,Pe),t(Pe,`bi-chart-shell`);let J=n(`svg`);i(Pe,J),u(()=>{s(J,`viewBox`,String(`0 0 ${S} ${C}`))}),t(J,`bi-chart-svg`),s(J,`role`,`img`),s(J,`aria-label`,`24小时延迟趋势图`);let Fe=n(`defs`);i(J,Fe);let Y=n(`linearGradient`);i(Fe,Y),s(Y,`id`,`biLatMysql`),s(Y,`x1`,`0`),s(Y,`x2`,`0`),s(Y,`y1`,`0`),s(Y,`y2`,`1`);let Ie=n(`stop`);i(Y,Ie),s(Ie,`offset`,`0%`),s(Ie,`stopColor`,`var(--b-mysql)`),s(Ie,`stopOpacity`,`0.25`);let Le=n(`stop`);i(Y,Le),s(Le,`offset`,`100%`),s(Le,`stopColor`,`var(--b-mysql)`),s(Le,`stopOpacity`,`0`);let X=n(`linearGradient`);i(Fe,X),s(X,`id`,`biLatApi`),s(X,`x1`,`0`),s(X,`x2`,`0`),s(X,`y1`,`0`),s(X,`y2`,`1`);let Re=n(`stop`);i(X,Re),s(Re,`offset`,`0%`),s(Re,`stopColor`,`var(--b-api)`),s(Re,`stopOpacity`,`0.2`);let ze=n(`stop`);i(X,ze),s(ze,`offset`,`100%`),s(ze,`stopColor`,`var(--b-api)`),s(ze,`stopOpacity`,`0`);let Be=a(`rue:list:start`),Ve=a(`rue:list:end`);i(J,Be),i(J,Ve);let He=new Map;u(()=>{He=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:He,parent:J,before:Ve,singleRoot:!0,trackIndex:!1,start:Be,renderItem:(a,c,f,m,h)=>{d(p(()=>{let c=e(),d=w.t+E-a*E,f=n(`g`);i(c,f),u(()=>{s(f,`key`,String(a))});let p=n(`line`);i(f,p),u(()=>{s(p,`x1`,String(w.l))}),u(()=>{s(p,`y1`,String(d))}),u(()=>{s(p,`x2`,String(S-w.r))}),u(()=>{s(p,`y2`,String(d))}),t(p,`bi-grid-line`);let m=n(`text`);i(f,m),u(()=>{s(m,`x`,String(w.l+4))}),u(()=>{s(m,`y`,String(d-6))}),t(m,`bi-grid-label`);let h=o(m);return i(m,h),u(()=>{l(h,(D*a).toFixed(0))}),i(m,r(`ms`)),c}),c,f)}})});let Ue=n(`path`);i(J,Ue),u(()=>{s(Ue,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),s(Ue,`fill`,`url(#biLatMysql)`);let We=n(`path`);i(J,We),u(()=>{s(We,`d`,String(k(`apiY`)))}),t(We,`bi-line-path`),s(We,`stroke`,`var(--b-api)`);let Ge=n(`path`);i(J,Ge),u(()=>{s(Ge,`d`,String(k(`mysqlY`)))}),t(Ge,`bi-line-path`),s(Ge,`stroke`,`var(--b-mysql)`);let Ke=n(`path`);i(J,Ke),u(()=>{s(Ke,`d`,String(k(`pgY`)))}),t(Ke,`bi-line-path`),s(Ke,`stroke`,`var(--b-pg)`);let qe=n(`path`);i(J,qe),u(()=>{s(qe,`d`,String(k(`redisY`)))}),t(qe,`bi-line-path`),s(qe,`stroke`,`var(--b-redis)`);let Je=a(`rue:list:start`),Ye=a(`rue:list:end`);i(J,Je),i(J,Ye);let Xe=new Map;u(()=>{Xe=m({items:O||[],getKey:(e,t)=>e.label,elements:Xe,parent:J,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(r,a,c,f,m)=>{d(p(()=>{let a=e(),c=n(`g`);i(a,c),u(()=>{s(c,`key`,String(r.label))});let d=n(`text`);i(c,d),u(()=>{s(d,`x`,String(r.x))}),u(()=>{s(d,`y`,String(C-8))}),s(d,`textAnchor`,`middle`),t(d,`bi-axis-label`);let f=o(d);i(d,f),u(()=>{l(f,r.label)});let p=n(`circle`);i(c,p),u(()=>{s(p,`cx`,String(r.x))}),u(()=>{s(p,`cy`,String(r.mysqlY))}),s(p,`r`,`3.5`),s(p,`fill`,`var(--b-mysql)`),s(p,`opacity`,`0.85`);let m=n(`circle`);i(c,m),u(()=>{s(m,`cx`,String(r.x))}),u(()=>{s(m,`cy`,String(r.pgY))}),s(m,`r`,`3.5`),s(m,`fill`,`var(--b-pg)`),s(m,`opacity`,`0.85`);let h=n(`circle`);i(c,h),u(()=>{s(h,`cx`,String(r.x))}),u(()=>{s(h,`cy`,String(r.redisY))}),s(h,`r`,`3.5`),s(h,`fill`,`var(--b-redis)`),s(h,`opacity`,`0.85`);let g=n(`circle`);return i(c,g),u(()=>{s(g,`cx`,String(r.x))}),u(()=>{s(g,`cy`,String(r.apiY))}),s(g,`r`,`3.5`),s(g,`fill`,`var(--b-api)`),s(g,`opacity`,`0.85`),a}),a,c)}})});let Z=n(`g`);i(J,Z),u(()=>{s(Z,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let Ze=n(`circle`);i(Z,Ze),s(Ze,`cx`,`0`),s(Ze,`cy`,`0`),s(Ze,`r`,`4`),s(Ze,`fill`,`var(--b-mysql)`);let Qe=n(`text`);i(Z,Qe),s(Qe,`x`,`10`),s(Qe,`y`,`4`),t(Qe,`bi-axis-label`),i(Qe,r(`MySQL`));let $e=n(`circle`);i(Z,$e),s($e,`cx`,`50`),s($e,`cy`,`0`),s($e,`r`,`4`),s($e,`fill`,`var(--b-pg)`);let et=n(`text`);i(Z,et),s(et,`x`,`60`),s(et,`y`,`4`),t(et,`bi-axis-label`),i(et,r(`PG`));let Q=n(`circle`);i(Z,Q),s(Q,`cx`,`0`),s(Q,`cy`,`16`),s(Q,`r`,`4`),s(Q,`fill`,`var(--b-redis)`);let tt=n(`text`);i(Z,tt),s(tt,`x`,`10`),s(tt,`y`,`20`),t(tt,`bi-axis-label`),i(tt,r(`Redis`));let nt=n(`circle`);i(Z,nt),s(nt,`cx`,`50`),s(nt,`cy`,`16`),s(nt,`r`,`4`),s(nt,`fill`,`var(--b-api)`);let rt=n(`text`);i(Z,rt),s(rt,`x`,`60`),s(rt,`y`,`20`),t(rt,`bi-axis-label`),i(rt,r(`API`));let it=n(`article`);i(Oe,it),t(it,`bi-card bi-tp-card`);let at=n(`div`);i(it,at),t(at,`bi-section-title`);let ot=n(`div`);i(at,ot);let st=n(`p`);i(ot,st),t(st,`bi-eyebrow`),i(st,r(`Weekly Throughput`));let ct=n(`h2`);i(ot,ct),i(ct,r(`周吞吐量`));let $=n(`div`);i(it,$),t($,`bi-tp-bars`);let lt=a(`rue:list:start`),ut=a(`rue:list:end`);i($,lt),i($,ut);let dt=new Map;u(()=>{dt=m({items:y||[],getKey:(e,t)=>e.time,elements:dt,parent:$,before:ut,singleRoot:!0,trackIndex:!1,start:lt,renderItem:(m,h,g,_,v)=>{d(p(()=>{let p=e(),h=n(`div`);i(p,h),u(()=>{s(h,`key`,String(m.time))}),t(h,`bi-tp-group`);let g=n(`div`);i(h,g),t(g,`bi-tp-val`);let _=o(g);i(g,_),u(()=>{l(_,m.value.toFixed(1))}),i(g,r(`T`));let v=n(`div`);i(h,v),t(v,`bi-tp-bar-shell`);let y=n(`div`);i(v,y),t(y,`bi-tp-fill`),u(()=>{c(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=n(`div`);i(h,b),t(b,`bi-tp-label`);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=m.time;f(()=>d(e,b,x))}),p}),h,g)}})});let ft=n(`section`);i(A,ft),t(ft,`bi-bottom-grid`);let pt=n(`article`);i(ft,pt),t(pt,`bi-card bi-queries-card`);let mt=n(`div`);i(pt,mt),t(mt,`bi-section-title`);let ht=n(`div`);i(mt,ht);let gt=n(`p`);i(ht,gt),t(gt,`bi-eyebrow`),i(gt,r(`Top Queries`));let _t=n(`h2`);i(ht,_t),i(_t,r(`高频查询排行`));let vt=n(`div`);i(pt,vt);let yt=a(`rue:list:start`),bt=a(`rue:list:end`);i(vt,yt),i(vt,bt);let xt=new Map;u(()=>{xt=m({items:b||[],getKey:(e,t)=>e.rank,elements:xt,parent:vt,before:bt,singleRoot:!0,trackIndex:!1,start:yt,renderItem:(o,c,l,m,h)=>{d(p(()=>{let c=e(),l=n(`div`);i(c,l),u(()=>{s(l,`key`,String(o.rank))}),t(l,`bi-query-row`);let p=n(`span`);i(l,p),u(()=>{t(p,String(`bi-query-rank ${o.rank<=3?`top3`:``}`))});let m=a(`rue:slot:anchor`);i(p,m),u(()=>{let e=o.rank;f(()=>d(e,p,m))});let h=n(`span`);i(l,h),t(h,`bi-query-sql`);let g=a(`rue:slot:anchor`);i(h,g),u(()=>{let e=o.sql;f(()=>d(e,h,g))});let _=n(`span`);i(l,_),u(()=>{t(_,String(`bi-query-src ${ie[o.source.toLowerCase().replace(` `,`-`)]||ie[o.source===`ClickHouse`?`ch`:o.source===`Redis`?`redis`:o.source===`MySQL`?`mysql`:o.source===`PostgreSQL`?`pg`:o.source===`GraphQL`?`gql`:`api`]}`))});let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=o.source;f(()=>d(e,_,v))});let y=n(`span`);i(l,y),t(y,`bi-query-freq`);let b=a(`rue:slot:anchor`);i(y,b),u(()=>{let e=o.freq;f(()=>d(e,y,b))});let x=n(`span`);i(l,x),u(()=>{t(x,String(`bi-query-ms ${oe(o.avgMs)}`))});let S=a(`rue:slot:anchor`);return i(x,S),u(()=>{let e=o.avgMs;f(()=>d(e,x,S))}),i(x,r(`ms`)),c}),c,l)}})});let St=n(`article`);i(ft,St),t(St,`bi-card bi-alert-card`);let Ct=n(`div`);i(St,Ct),t(Ct,`bi-section-title`);let wt=n(`div`);i(Ct,wt);let Tt=n(`p`);i(wt,Tt),t(Tt,`bi-eyebrow`),i(Tt,r(`Alert Center`));let Et=n(`h2`);i(wt,Et),i(Et,r(`告警事件`));let Dt=n(`div`);i(St,Dt);let Ot=a(`rue:list:start`),kt=a(`rue:list:end`);i(Dt,Ot),i(Dt,kt);let At=new Map;return u(()=>{At=m({items:x||[],getKey:(e,t)=>t,elements:At,parent:Dt,before:kt,singleRoot:!0,start:Ot,renderItem:(r,c,m,h,g)=>{d(p(()=>{let c=e(),p=n(`div`);i(c,p),u(()=>{s(p,`key`,String(g))}),t(p,`bi-alert-row`);let m=n(`span`);i(p,m),t(m,`bi-alert-time`);let h=a(`rue:slot:anchor`);i(m,h),u(()=>{let e=r.time;f(()=>d(e,m,h))});let _=n(`span`);i(p,_),u(()=>{t(_,String(`bi-alert-level ${r.level}`))});let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=r.level;f(()=>d(e,_,v))});let y=n(`span`);i(p,y),t(y,`bi-alert-msg`);let b=a(`rue:slot:anchor`);i(y,b),u(()=>{let e=r.message;f(()=>d(e,y,b))});let x=n(`span`);i(p,x),u(()=>{t(x,String(`bi-alert-resolved ${r.resolved?`yes`:`no`}`))});let S=o(x);return i(x,S),u(()=>{l(S,r.resolved?`已恢复`:`处理中`)}),c}),c,m)}})}),v});export{A as default};