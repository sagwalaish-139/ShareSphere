

import ResourceCard from "./ResourceCard";

export default function ResourceList({ resources, watchlist, onDelete, onEdit, onWatchlist }) {
  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          isWatchlisted={watchlist.includes(resource.id)}
          onDelete={onDelete}
          onEdit={onEdit}
          onWatchlist={onWatchlist}
        />
      ))}
    </div>
  );
}
