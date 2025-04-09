import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Image,
  Modal,
} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import "./AdminCarousel.css";

import Img from "../../../assets/amlapickle.png";
import Img1 from "../../../assets/almonds.png";

const AdminCarousel = () => {
  const [images, setImages] = useState([
    { id: 1, src: Img },
    { id: 2, src: Img1 },
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [imageToDeleteId, setImageToDeleteId] = useState(null);
  const fileInputRef = useRef(null);

  // Handle image input
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: Math.random(),
      src: URL.createObjectURL(file),
      file: file,
    }));
    setSelectedFiles([...newImages]); // Replace instead of stacking
  };

  // Remove selected preview
  const removeSelectedFile = (id) => {
    setSelectedFiles(selectedFiles.filter((file) => file.id !== id));
  };

  // Add or update carousel images
  const addCarouselImages = () => {
    if (selectedFiles.length === 0) return;

    if (editMode) {
      const updatedImage = {
        id: currentEditId,
        src: selectedFiles[0].src,
      };
      setImages(
        images.map((img) => (img.id === currentEditId ? updatedImage : img))
      );
    } else {
      const newImages = selectedFiles.map((file) => ({
        id: Math.random(),
        src: file.src,
      }));
      setImages([...images, ...newImages]);
    }

    resetForm(); // Always reset after add or update
  };

  // Edit handler
  const handleEdit = (id) => {
    const imageToEdit = images.find((img) => img.id === id);
    setSelectedFiles([{ id, src: imageToEdit.src }]); // Only one for editing
    setEditMode(true);
    setCurrentEditId(id);
  };

  const confirmDelete = (id) => {
    setImageToDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setImages(images.filter((img) => img.id !== imageToDeleteId));
    setShowDeleteModal(false);
    setImageToDeleteId(null);
    resetForm();
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setImageToDeleteId(null);
  };

  // Reset all inputs
  const resetForm = () => {
    setSelectedFiles([]);
    setEditMode(false);
    setCurrentEditId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold">Carousel Management</h2>

      {/* File Upload */}
      <Row className="mb-3">
        <Col md={4}>
          <label htmlFor="carouselImages" className="carousel-label mb-2">
            Carousel Images:
          </label>
          <input
            id="carouselImages"
            type="file"
            className="form-control file-upload carousel-input-field"
            accept="image/*"
            multiple={!editMode}
            onChange={handleImageChange}
            ref={fileInputRef}
          />

          <small className="text-muted mt-2 d-block ">
            Note : Banner images should be 300px x 300px in size for optimal
            display.
          </small>
        </Col>
        <Col md={4}>
          <Button className="carousel-button" onClick={addCarouselImages}>
            {editMode ? "Update Carousel" : "Add Carousel"}
          </Button>
        </Col>
      </Row>

      {/* Selected Preview */}
      {selectedFiles.length > 0 && (
        <Row className="mt-3">
          <Col>
            <h4 className="mb-3">
              Selected Image{selectedFiles.length > 1 ? "s" : ""}
            </h4>
            <div className="d-flex flex-wrap gap-2">
              {selectedFiles.map((file) => (
                <div key={file.id} className="selected-file position-relative">
                  <img
                    src={file.src}
                    alt="Selected"
                    className="selected-img-preview"
                  />
                  <button
                    className="selected-img-icon-remove"
                    onClick={() => removeSelectedFile(file.id)}
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      )}

      {/* Images Table */}
      <Row className="mt-4">
        <Col>
          <div className="table-responsive">
            <Table bordered className="carousel-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {images.map((item, index) => (
                  <tr key={item.id} className="carousel-row">
                    <td className="pt-3 fw-bold">{index + 1}</td>
                    <td>
                      <Image
                        src={item.src}
                        alt="Uploaded"
                        thumbnail
                        className="carousel-table-img"
                      />
                    </td>
                    <td className="pt-3">
                      <FiEdit
                        className="admin-carousel-action-icon admin-carousel-edit-icon me-3"
                        onClick={() => handleEdit(item.id)}
                      />
                      <FaTrashAlt
                     className="admin-carousel-action-icon admin-carousel-delete-icon"
                        onClick={() => confirmDelete(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete} centered>
        <Modal.Body>
          <h2 className="carousel-delete-model">
            Are you sure you want to delete this category?
          </h2>
        </Modal.Body>
        <Modal.Footer className="carousel-delete-model-buttons">
          <Button
            className="carousel-yes-delete-model-button"
            onClick={handleDelete}
          >
            Yes, Delete
          </Button>
          <Button
            className="carousel-cancel-delete-model-button"
            onClick={handleCancelDelete}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminCarousel;
