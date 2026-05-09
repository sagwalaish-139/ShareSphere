import { useState, useEffect } from "react";


const emptyForm = {
  title: "",
  type: "PDF",
  semester: "1",
  category: "Notes",
  description: "",
};

export default function AddResource({ onAdd, onUpdate, onCancel, editingResource }) {
  const [form, setForm] = useState(emptyForm);
  const isEditing = !!editingResource;


  useEffect(() => {
    if (editingResource) {
      setForm({
        title: editingResource.title,
        type: editingResource.type,
        semester: editingResource.semester,
        category: editingResource.category,
        description: editingResource.description,
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingResource]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  function handleSubmit(e) {
    e.preventDefault();

  
    if (!form.title.trim() || !form.description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (isEditing) {
    
      onUpdate({
        ...editingResource,
        ...form,
      });
    } else {
      onAdd(form);
    }
  }

  return (
    <div className="form-overlay">
      <div className="form-card">
        <div className="form-header">
          <h2>{isEditing ? "Edit Resource" : " Add New Resource"}</h2>
          <button className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="resource-form">
       

          <div className="form-group">
            <label htmlFor="title">Resource Title *</label>
            <input
              id="title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Data Structures Notes Sem 3"
              required
            />
          </div>

          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Type *</label>
              <select id="type" name="type" value={form.type} onChange={handleChange}>
                <option value="PDF"> PDF</option>
                <option value="Physical"> Physical Item</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="semester">Semester *</label>
              <select id="semester" name="semester" value={form.semester} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={String(s)}>Semester {s}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select id="category" name="category" value={form.category} onChange={handleChange}>
                <option value="Notes">Notes</option>
                <option value="Books">Books</option>
                <option value="Question Bank">Question Bank</option>
                <option value="Equipment">Equipment</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

         
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the resource — what it covers, condition, etc."
              rows={3}
              required
            />
          </div>

          
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {isEditing ? " Save Changes" : " Add Resource"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}