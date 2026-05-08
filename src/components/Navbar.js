// Navbar.js - Top navigation bar

export default function Navbar({ watchlistCount, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🌐</span>
        <span className="brand-name">ShareSphere</span>
        <span className="brand-tag">Campus Resource Exchange</span>
      </div>

      <div className="navbar-tabs">
        <button
          className={`tab-btn ${activeTab === "all" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Resources
        </button>
        <button
          className={`tab-btn ${activeTab === "watchlist" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("watchlist")}
        >
          ⭐ Watchlist
          {watchlistCount > 0 && (
            <span className="watchlist-badge">{watchlistCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}
