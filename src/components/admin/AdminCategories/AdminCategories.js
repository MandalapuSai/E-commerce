import React, { useState } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import "./AdminCategories.css";

const AdminCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, name: "Fruits" },
    { id: 2, name: "Dry Fruits" },
    { id: 3, name: "Powders" },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Add or Update Category
  const handleAddOrUpdateCategory = () => {
    if (!categoryName.trim()) return;

    if (editMode) {
      setCategories(
        categories.map((category) =>
          category.id === editCategoryId
            ? { ...category, name: categoryName }
            : category
        )
      );
      setEditMode(false);
    } else {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: categoryName },
      ]);
    }

    setCategoryName("");
    setEditCategoryId(null);
  };

  // Edit Category
  const handleEdit = (id, name) => {
    setEditMode(true);
    setEditCategoryId(id);
    setCategoryName(name);
    document.querySelector(".category-input-field").focus();
  };

  // Delete Confirmation
  const handleDeleteConfirmation = (id) => {
    setCategoryToDelete(id);
    setShowDeleteModal(true);
  };

  // Delete Category
  const handleDelete = () => {
    setCategories(
      categories.filter((category) => category.id !== categoryToDelete)
    );
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  // Cancel Delete
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  return (
    <Container fluid className="admin-categories-container">
      <h2>Categories</h2>
      <div className="mt-5 mb-3 category-input-group">
        <label htmlFor="categoryName" className="category-label">
          Category Name:
        </label>
        <div className="category-input-wrapper">
        <Form.Control
          id="categoryName"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="category-input-field"
        />
        <Button
          className="category-button"
          onClick={handleAddOrUpdateCategory}
          disabled={!categoryName.trim()}
        >
          {editMode ? "Update Category" : "Add Category"}
        </Button>
        </div>
      </div>

      <Table bordered className="category-table" >
        <thead >
          <tr className="category-head">
            <th>S.No</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="category-row">
              <td className="category-serial">{index + 1}</td>
              <td className="category-name">{category.name}</td>
              <td>
                <Button
                  onClick={() => handleEdit(category.id, category.name)}
                  className="admin-category-edit"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteConfirmation(category.id)}
                  className="admin-category-delete"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminCategories;
