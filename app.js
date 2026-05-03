const MOCK_DATA = {
  filters: {
    categories: ["鲜食榴莲", "冷冻果肉", "榴莲制品"],
    origins: ["全部产地", "马来西亚", "泰国", "越南", "海南"],
    brands: ["全部品牌", "猫山王", "金枕", "黑刺", "苏丹王"],
  },
  kpis: [
    { title: "在售品牌", icon: "package", value: "128", unit: "", trend: "up", trendVal: "8.5%" },
    { title: "平均售价", icon: "trending-down", value: "89.6", unit: "元/500g", trend: "down", trendVal: "2.7%" },
    { title: "用户好评率", icon: "smile", value: "92.4%", unit: "", trend: "up", trendVal: "1.6%" },
    { title: "搜索热度", icon: "eye", value: "168,732", unit: "指数", trend: "up", trendVal: "12.3%" },
  ],
  competitors: [
    { name: "金枕", origin: "泰国", tag: "热销", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian_fruit.JPG?width=600", price: "69.3", sales: "85.7" },
    { name: "猫山王", origin: "马来西亚", tag: "高端", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20Musang%20King.jpg?width=600", price: "128.6", sales: "92.4" },
    { name: "黑刺", origin: "马来西亚", tag: "小众", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%202.jpg?width=600", price: "113.2", sales: "68.9" },
    { name: "苏丹王", origin: "马来西亚", tag: "经典", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%204.jpg?width=600", price: "96.4", sales: "74.1" },
  ],
  comparisonTable: [
    { metric: "出肉率", baseline: "32% - 35%", competitor: "35% - 40%" },
    { metric: "果核大小", baseline: "极小（焦核）", competitor: "中等 - 偏大" },
    { metric: "口感特征", baseline: "苦甜交织，层次丰富", competitor: "纯甜，质地偏干" },
    { metric: "冷链要求", baseline: "极高（液氮速冻）", competitor: "中等（鲜果直发）" },
  ],
  tags: [
    { text: "甜度", val: "28.6%", color: "#D4AF37" },
    { text: "果肉厚", val: "18.7%", color: "#2B3A2F" },
    { text: "核小", val: "16.3%", color: "#5C625E" },
    { text: "新鲜度", val: "12.4%", color: "#8C938E" },
  ],
  channels: [
    { name: "电商平台", val: "52.6%", icon: "shopping-bag" },
    { name: "社区团购", val: "18.3%", icon: "users" },
    { name: "线下商超", val: "16.7%", icon: "briefcase" },
    { name: "生鲜门店", val: "12.4%", icon: "truck" },
  ],
  regions: [
    { name: "广东", val: 100 },
    { name: "上海", val: 88 },
    { name: "北京", val: 76 },
    { name: "浙江", val: 72 },
  ],
  reports: [
    { title: "2024 Q1 中国高端榴莲生鲜市场洞察白皮书", date: "2024-04-15", size: "4.2 MB", tags: ["市场规模", "消费趋势"] },
    { title: "五一黄金周：金枕 vs 猫山王 销量复盘", date: "2024-05-10", size: "1.8 MB", tags: ["节假日", "销量对比"] },
  ],
};

const State = {
  currentRoute: "home",
  charts: [],
  filters: { category: "鲜食榴莲", origin: "全部产地", brand: "全部品牌" },
  syncText: "榴莲业务数据已同步，更新时间 08:30",
  activeSidebarCard: null,
};

function getCurrentViewData() {
  const f = State.filters;
  const view = structuredClone(MOCK_DATA);

  if (f.category === "冷冻果肉") {
    const allow = new Set(["金枕", "苏丹王"]);
    view.competitors = view.competitors.filter((c) => allow.has(c.name));
  } else if (f.category === "榴莲制品") {
    const allow = new Set(["猫山王", "黑刺"]);
    view.competitors = view.competitors.filter((c) => allow.has(c.name));
  }

  if (f.brand !== "全部品牌") {
    view.competitors = view.competitors.filter((c) => c.name === f.brand);
  }
  if (f.origin !== "全部产地") {
    view.competitors = view.competitors.filter((c) => c.origin === f.origin);
  }

  return view;
}

const Renderers = {
  sidebar: () => {
    const d = MOCK_DATA.filters;
    return `
      <div class="filter-group"><label class="filter-label"><i data-feather="sliders" class="icon-sm"></i> 核心筛选</label></div>
      <div class="filter-group">
        <label class="filter-label">品类</label>
        <select id="filterCategory" class="filter-select">${d.categories.map((c) => `<option ${State.filters.category === c ? "selected" : ""}>${c}</option>`).join("")}</select>
      </div>
      <div class="filter-group">
        <label class="filter-label">产地</label>
        <select id="filterOrigin" class="filter-select">${d.origins.map((c) => `<option ${State.filters.origin === c ? "selected" : ""}>${c}</option>`).join("")}</select>
      </div>
      <div class="filter-group">
        <label class="filter-label">品牌</label>
        <select id="filterBrand" class="filter-select">${d.brands.map((c) => `<option ${State.filters.brand === c ? "selected" : ""}>${c}</option>`).join("")}</select>
      </div>
      <div class="filter-group"><button id="applyFiltersBtn" class="btn-primary">应用筛选</button></div>

      <div class="report-card">
        <h4>Data Sync</h4>
        <p id="syncStatusText">${State.syncText}</p>
        <button id="manualSyncBtn" class="btn-text" style="color:var(--c-durian-green)"><i data-feather="refresh-ccw" class="icon-sm"></i> 手动同步</button>
      </div>
    `;
  },

  home: () => {
    const d = getCurrentViewData();
    return `
      <div class="filter-result-tip fade-in">当前筛选：${State.filters.category} / ${State.filters.origin} / ${State.filters.brand}</div>
      <div class="hero-banner fade-in">
        <div class="hero-text">
          <h1>全链路分析高端榴莲市场机会</h1>
          <p>聚焦价格波动、渠道结构和用户口碑，实时呈现竞品表现与趋势变化。</p>
          <button class="btn-primary" style="width:auto;padding:10px 24px;"><i data-feather="target" class="icon-sm"></i> 发现市场机会</button>
        </div>
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20Musang%20King.jpg?width=900" class="hero-img" alt="Durian market">
      </div>

      <div class="grid-4 fade-in">
        ${d.kpis.map((kpi) => `
          <div class="card kpi-card">
            <div class="kpi-top"><div class="kpi-icon"><i data-feather="${kpi.icon}"></i></div></div>
            <div class="kpi-value-wrapper">
              <div class="card-title">${kpi.title}</div>
              <div class="kpi-value">${kpi.value} <span style="font-size:14px;color:var(--c-text-tertiary);font-weight:normal;">${kpi.unit}</span></div>
              <div class="kpi-trend trend-${kpi.trend}">${kpi.trend === "up" ? "↑" : "↓"} ${kpi.trendVal}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="card fade-in" style="margin-bottom: var(--s-3);">
        <div class="card-header"><div class="card-title"><i data-feather="grid" class="icon-sm"></i> 竞品深度矩阵概览</div></div>
        <div class="grid-4" style="margin-bottom: 0;">
          ${d.competitors.length ? d.competitors.map((c) => `
            <div class="product-card">
              <div class="pc-header"><span class="pc-name">${c.name}</span><span class="pc-tag">${c.tag}</span></div>
              <div style="font-size:11px;color:var(--c-text-tertiary);text-align:left;margin-bottom:8px;">${c.origin}</div>
              <img src="${c.img}" class="pc-img" alt="${c.name}">
              <div class="pc-stats">
                <div class="pc-stat-item"><span class="pc-stat-label">均价(元)</span><span class="pc-stat-val">${c.price}</span></div>
                <div class="pc-stat-item"><span class="pc-stat-label">销量指数</span><span class="pc-stat-val">${c.sales}</span></div>
              </div>
            </div>
          `).join("") : `<div class="empty-placeholder">当前筛选下无竞品数据</div>`}
        </div>
      </div>
    `;
  },

  market: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">大盘宏观分析</h2>
      <p style="color:var(--c-text-secondary);font-size:13px;">观察市场规模与进口结构变化。</p>
    </div>
    <div class="grid-2 page-grid page-grid-market fade-in">
      <div class="card"><div class="card-header"><div class="card-title">进口规模趋势（万吨）</div></div><div id="marketAreaChart" style="height:320px;"></div></div>
      <div class="card"><div class="card-header"><div class="card-title">进口产地份额</div></div><div id="marketBarChart" style="height:320px;"></div></div>
    </div>
  `,

  compare: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">竞品深度对比矩阵</h2>
      <p style="color:var(--c-text-secondary);font-size:13px;">横向对比核心品种在价格与销量上的位置。</p>
    </div>
    <div class="grid-2 page-grid page-grid-compare fade-in">
      <div class="card chart-card">
        <div class="card-header"><div class="card-title"><i data-feather="crosshair" class="icon-sm"></i> 价格-销量散点生态位</div></div>
        <div id="scatterChart" style="height:320px;"></div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title"><i data-feather="list" class="icon-sm"></i> 核心参数对标</div></div>
        <div class="table-scroll">
          <table style="margin-top:12px;">
            <thead><tr><th>评测维度</th><th>猫山王(Baseline)</th><th>金枕(Competitor)</th></tr></thead>
            <tbody>${MOCK_DATA.comparisonTable.map((r) => `<tr><td>${r.metric}</td><td><strong>${r.baseline}</strong></td><td>${r.competitor}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>
  `,

  pricing: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">终端价格监测</h2>
    </div>
    <div class="grid-2 page-grid page-grid-pricing fade-in">
      <div class="card"><div class="card-header"><div class="card-title">平台均价分布</div></div><div id="pricingBarChart" style="height:300px;"></div></div>
      <div class="card"><div class="card-header"><div class="card-title">异常预警</div></div><div class="rank-list" style="margin-top:12px;"><div class="rank-item"><span>猫山王 @ 某鲜生</span><strong>+47%</strong></div><div class="rank-item"><span>金枕 @ 某多多</span><strong>-42%</strong></div></div></div>
    </div>
  `,

  insights: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">用户洞察</h2>
    </div>
    <div class="grid-2 fade-in">
      <div class="card"><div class="card-header"><div class="card-title">情感分布</div></div><div id="pieChart" style="height:260px;"></div></div>
      <div class="card"><div class="card-header"><div class="card-title">高频词云</div></div><div class="word-cloud-wrapper">${MOCK_DATA.tags.map((t) => `<span style="font-size:18px;color:${t.color};">${t.text}</span>`).join("")}</div></div>
    </div>
  `,

  channels: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">渠道拆解</h2>
    </div>
    <div class="grid-2 page-grid page-grid-channels fade-in">
      <div class="card"><div class="card-header"><div class="card-title">利润漏斗</div></div><div id="channelFunnelChart" style="height:320px;"></div></div>
      <div class="card"><div class="card-header"><div class="card-title">渠道占比</div></div><div class="channel-grid">${MOCK_DATA.channels.map((c) => `<div class="channel-card"><div class="channel-title"><i data-feather="${c.icon}" class="icon-sm"></i>${c.name}</div><div class="channel-val">${c.val}</div></div>`).join("")}</div></div>
    </div>
  `,

  reports: () => `
    <div class="page-header fade-in" style="margin-bottom:24px;">
      <h2 style="color:var(--c-durian-green);font-weight:600;">报告中心</h2>
    </div>
    <div class="fade-in">
      ${MOCK_DATA.reports.map((r) => `
        <div class="card fade-in" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:600;color:var(--c-durian-green);margin-bottom:4px;">${r.title}</div>
            <div style="font-size:12px;color:var(--c-text-tertiary);">${r.date} · ${r.size}</div>
          </div>
          <button class="btn-primary" style="width:auto;padding:8px 14px;background:transparent;border:1px solid var(--c-durian-green);color:var(--c-durian-green);">下载</button>
        </div>
      `).join("")}
    </div>
  `,
};

const ChartManager = {
  initCharts() {
    State.charts.forEach((c) => c.dispose());
    State.charts = [];

    if (typeof window.echarts === "undefined") {
      ["homeChart1", "homeChart2", "marketAreaChart", "marketBarChart", "scatterChart", "pricingBarChart", "pieChart", "channelFunnelChart"]
        .forEach((id) => {
          const dom = document.getElementById(id);
          if (dom) dom.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;color:#8C938E;font-size:13px;">图表库加载失败，请刷新重试</div>';
        });
      return;
    }

    if (State.currentRoute === "market") this.renderMarketCharts();
    if (State.currentRoute === "compare") this.renderCompareCharts();
    if (State.currentRoute === "pricing") this.renderPricingCharts();
    if (State.currentRoute === "insights") this.renderInsightsCharts();
    if (State.currentRoute === "channels") this.renderChannelsCharts();
  },

  renderMarketCharts() {
    const dom1 = document.getElementById("marketAreaChart");
    const dom2 = document.getElementById("marketBarChart");
    if (dom1) {
      const c1 = echarts.init(dom1);
      c1.setOption({
        color: ["#D4AF37"],
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["2019", "2020", "2021", "2022", "2023", "2024E"] },
        yAxis: { type: "value" },
        series: [{ type: "line", smooth: true, data: [60, 82, 105, 120, 142, 165] }],
      });
      State.charts.push(c1);
    }
    if (dom2) {
      const c2 = echarts.init(dom2);
      c2.setOption({
        color: ["#2B3A2F", "#D4AF37", "#8C938E"],
        legend: { data: ["泰国", "越南", "马来西亚"], bottom: 0 },
        xAxis: { type: "category", data: ["2022", "2023", "2024E"] },
        yAxis: { type: "value", max: 100 },
        series: [
          { name: "泰国", type: "bar", stack: "x", data: [85, 75, 68] },
          { name: "越南", type: "bar", stack: "x", data: [5, 15, 22] },
          { name: "马来西亚", type: "bar", stack: "x", data: [10, 10, 10] },
        ],
      });
      State.charts.push(c2);
    }
  },

  renderCompareCharts() {
    const dom = document.getElementById("scatterChart");
    if (!dom) return;
    const c = echarts.init(dom);
    c.setOption({
      color: ["#D4AF37", "#2B3A2F", "#8C938E", "#5C625E"],
      tooltip: { formatter: (p) => `${p.seriesName}<br/>均价: ¥${p.value[0]}<br/>销量指数: ${p.value[1]}` },
      legend: { data: ["猫山王", "金枕", "黑刺", "苏丹王"], bottom: 0 },
      xAxis: { name: "均价", type: "value" },
      yAxis: { name: "销量指数", type: "value" },
      series: [
        { name: "猫山王", type: "scatter", symbolSize: 20, data: [[128, 92]] },
        { name: "金枕", type: "scatter", symbolSize: 28, data: [[69, 85]] },
        { name: "黑刺", type: "scatter", symbolSize: 15, data: [[113, 68]] },
        { name: "苏丹王", type: "scatter", symbolSize: 22, data: [[96, 74]] },
      ],
    });
    State.charts.push(c);
  },

  renderPricingCharts() {
    const dom = document.getElementById("pricingBarChart");
    if (!dom) return;
    const c = echarts.init(dom);
    c.setOption({
      color: ["#2B3A2F"],
      xAxis: { type: "category", data: ["电商平台", "生鲜O2O", "线下商超", "社区团购"] },
      yAxis: { type: "value" },
      series: [{ type: "bar", data: [95, 110, 125, 85] }],
    });
    State.charts.push(c);
  },

  renderInsightsCharts() {
    const dom = document.getElementById("pieChart");
    if (!dom) return;
    const c = echarts.init(dom);
    c.setOption({
      color: ["#D4AF37", "#8C938E", "#2B3A2F"],
      legend: { bottom: 0 },
      series: [{ type: "pie", radius: ["45%", "70%"], data: [{ value: 72, name: "正向" }, { value: 18, name: "中性" }, { value: 10, name: "负向" }] }],
    });
    State.charts.push(c);
  },

  renderChannelsCharts() {
    const dom = document.getElementById("channelFunnelChart");
    if (!dom) return;
    const c = echarts.init(dom);
    c.setOption({
      series: [{
        type: "funnel",
        data: [
          { value: 100, name: "终端零售价" },
          { value: 65, name: "扣除零售商毛利" },
          { value: 40, name: "扣除物流仓储" },
          { value: 25, name: "原产地出库价" },
        ],
      }],
    });
    State.charts.push(c);
  },

  resize() { State.charts.forEach((c) => c.resize()); },
};

const App = {
  init() {
    this.bindMobileShell();
    this.renderSidebar();
    this.handleRoute();

    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("resize", () => {
      ChartManager.resize();
      if (window.innerWidth > 1024) this.closeMobilePanels();
    });
  },

  bindMobileShell() {
    const navToggle = document.getElementById("mobileNavToggle");
    const sidebarToggle = document.getElementById("mobileSidebarToggle");
    const overlay = document.getElementById("mobileOverlay");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        const open = document.body.classList.contains("mobile-nav-open");
        document.body.classList.toggle("mobile-nav-open", !open);
        document.body.classList.remove("mobile-sidebar-open");
      });
    }

    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        const open = document.body.classList.contains("mobile-sidebar-open");
        document.body.classList.toggle("mobile-sidebar-open", !open);
        document.body.classList.remove("mobile-nav-open");
      });
    }

    if (overlay) overlay.addEventListener("click", () => this.closeMobilePanels());
  },

  closeMobilePanels() {
    document.body.classList.remove("mobile-nav-open");
    document.body.classList.remove("mobile-sidebar-open");
  },

  renderSidebar() {
    const sidebar = document.getElementById("sidebar-root");
    if (!sidebar) return;
    sidebar.innerHTML = Renderers.sidebar();
    feather.replace();
    this.bindSidebarEvents();
  },

  bindSidebarEvents() {
    const category = document.getElementById("filterCategory");
    const origin = document.getElementById("filterOrigin");
    const brand = document.getElementById("filterBrand");
    const applyBtn = document.getElementById("applyFiltersBtn");
    const syncBtn = document.getElementById("manualSyncBtn");

    if (category) category.addEventListener("change", (e) => { State.filters.category = e.target.value; this.applyFilters(); });
    if (origin) origin.addEventListener("change", (e) => { State.filters.origin = e.target.value; this.applyFilters(); });
    if (brand) brand.addEventListener("change", (e) => { State.filters.brand = e.target.value; this.applyFilters(); });
    if (applyBtn) applyBtn.addEventListener("click", () => this.applyFilters());

    if (syncBtn) {
      syncBtn.addEventListener("click", () => {
        syncBtn.disabled = true;
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        State.syncText = `榴莲业务数据已同步，更新时间 ${hh}:${mm}`;
        this.renderSidebar();
      });
    }
  },

  applyFilters() {
    if (State.currentRoute !== "home") {
      window.location.hash = "#/home";
      return;
    }
    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash.slice(2) || "home";
    State.currentRoute = hash;

    document.querySelectorAll(".nav-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.route === hash);
    });

    const root = document.getElementById("app-root");
    root.innerHTML = Renderers[hash] ? Renderers[hash]() : Renderers.home();

    feather.replace();
    this.closeMobilePanels();
    setTimeout(() => {
      ChartManager.initCharts();
      setTimeout(() => ChartManager.resize(), 260);
    }, 40);
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
