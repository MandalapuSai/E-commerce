import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Image,
  Form,
  Modal,
} from "react-bootstrap";
import { BASE_URL, CATEGORY_API } from "../../../api/api";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import "./AdminCategories.css";

const AdminCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCategoryImage(file);
    }
  };

  // Reset the file input and image preview
  const resetForm = () => {
    setCategoryImage(null);
    // Reset file input using ref
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddCategory = async () => {
    if (!categoryName.trim() || !categoryImage) return;

    const formData = new FormData();
    formData.append("category_name", categoryName);
    formData.append("category_image", categoryImage);

    try {
      const apiResponse = await fetch(CATEGORY_API.ADD, {
        method: "POST",
        body: formData,
      });

      const categoriesData = await apiResponse.json();

      // console.log("Add Category API Response:", categoriesData);

      if (categoriesData.statusCode === 200) {
        const addedCategory = {
          id: categoriesData.category.category_id,
          name: categoriesData.category.category_name,
          image: `${BASE_URL}/${categoriesData.category.category_image}`,
        };

        setCategories([...categories, addedCategory]);
        setCategoryName("");
        resetForm();
      } else {
        alert("Failed to add category");
      }
    } catch (error) {
      console.error("Error while adding category:", error);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const response = await fetch(CATEGORY_API.GET_ALL);
      const fetchCategoriesData = await response.json();

      // console.log("Fetched categories:", fetchCategoriesData);

      if (fetchCategoriesData.statusCode === 200) {
        const allCategories = fetchCategoriesData.categories.map((cat) => ({
          id: cat.category_id,
          name: cat.category_name,
          image: `${BASE_URL}/${cat.category_image}`,
        }));

        setCategories(allCategories);
      } else {
        alert("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error while fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handleEditCategory = async () => {
    if (!editCategoryId || !categoryName.trim()) return;

    const formData = new FormData();
    formData.append("category_id", editCategoryId);
    formData.append("category_name", categoryName);
    if (categoryImage) {
      formData.append("category_image", categoryImage);
    }

    try {
      const response = await fetch(CATEGORY_API.UPDATE, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      // console.log("Update Result:", result);

      if (result.statusCode === 200) {
        const updatedCategory = {
          id: result.category.category_id,
          name: result.category.category_name,
          image: `${BASE_URL}/${result.category.category_image}`,
        };

        // Update the category list
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === updatedCategory.id ? updatedCategory : cat
          )
        );

        // Reset form and mode
        setEditMode(false);
        setEditCategoryId(null);
        setCategoryName("");
        setCategoryImage(null);
        fileInputRef.current.value = "";
      } else {
        alert("Failed to update category");
      }
    } catch (err) {
      console.error("Error updating category:", err);
    }
  };

  // Edit Category
  const handleEdit = (id, name, image) => {
    setEditMode(true);
    setEditCategoryId(id);
    setCategoryName(name);
    setCategoryImage(null);
    document.querySelector(".category-input-field").focus();
  };

  // Delete Category
  const handleDelete = async () => {
    if (!categoryToDelete) return;

    try {
      const response = await fetch(CATEGORY_API.DELETE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category_id: categoryToDelete }),
      });

      const result = await response.json();

      if (
        result.statusCode === 200 &&
        result.message === "Category deleted successfully"
      ) {
        const updatedCategories = categories.filter(
          (cat) => cat.id !== categoryToDelete
        );
        setCategories(updatedCategories);
        alert("Category deleted successfully!");
      } else {
        alert("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Something went wrong while deleting");
    } finally {
      setShowDeleteModal(false);
      setCategoryToDelete(null);
    }
  };

  // Cancel Delete
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  return (
    <Container fluid className="admin-categories-container">
      <h2 className="fw-bold">Categories</h2>
      <Row className="mt-4 mb-4">
        <Col md={4}>
          <label htmlFor="categoryName" className="category-label mb-2">
            Category Name:
          </label>
          <Form.Control
            id="categoryName"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="category-input-field"
          />
        </Col>
        <Col md={4}>
          <label className="category-label mb-2">Category Image:</label>
          <Form.Control
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="category-image-upload category-input-field"
            onChange={handleImageUpload}
          />
        </Col>
        <Col md={4}>
          <Button
            className="admin-category-button"
            onClick={editMode ? handleEditCategory : handleAddCategory}
            disabled={!categoryName.trim()}
          >
            {editMode ? "Update Category" : "Add Category"}
          </Button>
        </Col>
      </Row>

      <Table bordered className="category-table">
        <thead>
          <tr className="category-head">
            <th>S.No</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="admin-category-row">
              <td className="admin-category-serial">{index + 1}</td>
              <td className="admin-category-name">{category.name}</td>
              <td className="admin-category-image">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    thumbnail
                    className="category-table-img"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="pt-3">
                <FiEdit
                  onClick={() =>
                    handleEdit(category.id, category.name, category.image)
                  }
                  className="admin-category-action-icon admin-category-edit-icon me-3"
                />
                <FaTrashAlt
                  onClick={() => {
                    setCategoryToDelete(category.id);
                    setShowDeleteModal(true);
                  }}
                  className="admin-category-action-icon admin-category-delete-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete} centered>
        <Modal.Body>
          <h2 className="category-delete-model">
            Are you sure you want to delete this category?
          </h2>
        </Modal.Body>
        <Modal.Footer className="category-delete-model-buttons">
          <Button
            className="category-yes-delete-model-button"
            onClick={handleDelete}
          >
            Yes, Delete
          </Button>
          <Button
            className="category-cancel-delete-model-button"
            onClick={handleCancelDelete}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminCategories;
