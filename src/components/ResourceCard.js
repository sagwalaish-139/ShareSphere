

export default function ResourceCard({ resource, isWatchlisted, onDelete, onEdit, onWatchlist }) {
  const { id, title, type, semester, category, description, uploadedBy, date } = resource;

  // Choose icon based on type
  const typeIcon = type === "PDF" ? "📄" : "🧰";

  // Choose color badge class based on category
  const categoryColors = {
    Notes: "badge-blue",
    Books: "badge-green",
    "Question Bank": "badge-purple",
    Equipment: "badge-orange",
    Other: "badge-gray",
  };
  const badgeClass = categoryColors[category] || "badge-gray";

  return (
    <div className="resource-card">
      {/* Card Header */}
      <div className="card-header">
        <div className="card-title-row">
          <span className="type-icon">{typeIcon}</span>
          <h3 className="card-title">{title}</h3>
        </div>
        <button
          className={`watchlist-btn ${isWatchlisted ? "watchlisted" : ""}`}
          onClick={() => onWatchlist(id)}
          title={isWatchlisted ? "Remove from watchlist" : "Save to watchlist"}
        >
          {isWatchlisted ? "⭐" : "☆"}
        </button>
      </div>

      
      <div className="card-badges">
        <span className={`badge ${badgeClass}`}>{category}</span>
        <span className="badge badge-semester">Sem {semester}</span>
        <span className="badge badge-type">{type}</span>
      </div>

      {/* Description */}
      <p className="card-description">{description}</p>

      {/* Footer */}
      <div className="card-footer">
        <div className="uploader-info">
          <span className="uploader-avatar">{uploadedBy[0]}</span>
          <span className="uploader-name">{uploadedBy}</span>
          <span className="upload-date">{date}</span>
        </div>

        <div className="card-actions">
          <button className="btn-edit" onClick={() => onEdit(resource)}>
            ✏️ Edit
          </button>
          <button className="btn-delete" onClick={() => onDelete(id)}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}
