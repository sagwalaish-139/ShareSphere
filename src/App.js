import { useState } from "react";
import Navbar from "./components/Navbar";
import ResourceList from "./components/ResourceList";
import AddResource from "./components/AddResource";
import "./App.css";

// Sample initial data so the app looks good on first load
const initialResources = [
  {
    id: 1,
    title: "Data Structures Notes (Complete)",
    type: "PDF",
    semester: "3",
    category: "Notes",
    description: "Full handwritten + typed notes covering arrays, linked lists, trees, graphs. Very helpful for exams.",
    uploadedBy: "Aryan S.",
    date: "2025-05-01",
  },
  {
    id: 2,
    title: "Lab Coat (Size M)",
    type: "Physical",
    semester: "1",
    category: "Equipment",
    description: "White lab coat, size medium. Used once, in perfect condition. Available for borrowing.",
    uploadedBy: "Priya M.",
    date: "2025-04-28",
  },
  {
    id: 3,
    title: "Engineering Drawing Drafter Set",
    type: "Physical",
    semester: "2",
    category: "Equipment",
    description: "Complete drafter set with mini drafter, compass, and scales. Great for ED practicals.",
    uploadedBy: "Rahul K.",
    date: "2025-04-25",
  },
  {
    id: 4,
    title: "DBMS Question Bank",
    type: "PDF",
    semester: "4",
    category: "Question Bank",
    description: "Previous year questions + predicted questions for DBMS. Covers SQL, normalization, transactions.",
    uploadedBy: "Sneha P.",
    date: "2025-04-20",
  },
  {
    id: 5,
    title: "Operating Systems Textbook (Galvin)",
    type: "PDF",
    semester: "5",
    category: "Books",
    description: "PDF version of OS concepts by Galvin. All chapters included, good for semester exam prep.",
    uploadedBy: "Dev R.",
    date: "2025-04-18",
  },
];

export default function App() {
  const [resources, setResources] = useState(initialResources);
  const [watchlist, setWatchlist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingResource, setEditingResource] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // "all" or "watchlist"
  const [search, setSearch] = useState("");
  const [filterSemester, setFilterSemester] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  // Add a new resource
  function handleAdd(newResource) {
    const resourceWithId = {
      ...newResource,
      id: Date.now(),
      uploadedBy: "You",
      date: new Date().toISOString().split("T")[0],
    };
    setResources([resourceWithId, ...resources]);
    setShowForm(false);
  }

  // Update an existing resource
  function handleUpdate(updatedResource) {
    setResources(
      resources.map((r) => (r.id === updatedResource.id ? updatedResource : r))
    );
    setEditingResource(null);
    setShowForm(false);
  }

  // Delete a resource
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      setResources(resources.filter((r) => r.id !== id));
      setWatchlist(watchlist.filter((wId) => wId !== id));
    }
  }

  // Toggle watchlist
  function handleWatchlist(id) {
    if (watchlist.includes(id)) {
      setWatchlist(watchlist.filter((wId) => wId !== id));
    } else {
      setWatchlist([...watchlist, id]);
    }
  }

  // Open edit form
  function handleEdit(resource) {
    setEditingResource(resource);
    setShowForm(true);
  }

  // Cancel form
  function handleCancel() {
    setShowForm(false);
    setEditingResource(null);
  }

  // Filter resources based on search and filters
  const displayedResources = resources.filter((r) => {
    const matchesTab = activeTab === "all" || watchlist.includes(r.id);
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    const matchesSemester = filterSemester === "all" || r.semester === filterSemester;
    const matchesType = filterType === "all" || r.type === filterType;
    const matchesCategory = filterCategory === "all" || r.category === filterCategory;
    return matchesTab && matchesSearch && matchesSemester && matchesType && matchesCategory;
  });

  return (
    <div className="app">
      <Navbar
        watchlistCount={watchlist.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="main-content">
        {/* Hero / Top Bar */}
        <div className="top-bar">
          <div className="top-bar-text">
            <h1 className="page-title">
              {activeTab === "all" ? "All Resources" : "My Watchlist"}
            </h1>
            <p className="page-subtitle">
              {activeTab === "all"
                ? `${resources.length} resources shared by students`
                : `${watchlist.length} saved items`}
            </p>
          </div>
          <button className="btn-primary" onClick={() => { setEditingResource(null); setShowForm(true); }}>
            + Add Resource
          </button>
        </div>

        {/* Search and Filters */}
        <div className="filters-bar">
          <input
            type="text"
            className="search-input"
            placeholder="🔍  Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
            <option value="all">All Semesters</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <option key={s} value={String(s)}>Semester {s}</option>
            ))}
          </select>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="PDF">PDF</option>
            <option value="Physical">Physical</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="Notes">Notes</option>
            <option value="Books">Books</option>
            <option value="Question Bank">Question Bank</option>
            <option value="Equipment">Equipment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Add / Edit Form */}
        {showForm && (
          <AddResource
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            onCancel={handleCancel}
            editingResource={editingResource}
          />
        )}

        {/* Resource Cards */}
        <ResourceList
          resources={displayedResources}
          watchlist={watchlist}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onWatchlist={handleWatchlist}
        />

        {/* Empty State */}
        {displayedResources.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h2>No resources found</h2>
            <p>
              {activeTab === "watchlist"
                ? "You haven't saved any resources yet. Browse and click ⭐ to save."
                : "Try a different search or add a new resource!"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}