import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Table,
  Image,
  Modal,
} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [productName, setProductName] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [variations, setVariations] = useState([{ grams: "", price: "" }]);
  const [products, setProducts] = useState([
    {
      productName: "Apple",
      stock: "15",
      images:
        "http://localhost:3000/static/media/apple.f23b99415222c05e3195.png",
      categoryName: "Fruits",
      variations: [
        { grams: "500 g", price: "200" },
        { grams: "1 kg", price: "350" },
      ],
    },
    {
      productName: "Mango",
      stock: "25",
      images:
        "http://localhost:3000/static/media/mango.666e5fd768a8f4c50105.png",
      categoryName: "Fruits",
      variations: [
        { grams: "500 g", price: "250" },
        { grams: "1 kg", price: "400" },
      ],
    },
    {
      productName: "Grapes",
      stock: "20",
      images:
        "http://localhost:3000/static/media/grapes.7f839a32c769fce75c33.png",
      categoryName: "Fruits",
      variations: [
        { grams: "500 g", price: "100" },
        { grams: "1 kg", price: "180" },
      ],
    },
    {
      productName: "Walnuts",
      stock: "5",
      images:
        "http://localhost:3000/static/media/walnuts.1938165ce27b50d9c728.png",
      categoryName: "Dry Fruits",
      variations: [
        { grams: "500 g", price: "300" },
        { grams: "1 kg", price: "500" },
      ],
    },
    {
      productName: "Almonds",
      stock: "10",
      images:
        "http://localhost:3000/static/media/almonds.c58f1b276a9266d6b8d3.png",
      categoryName: "Dry Fruits",
      variations: [
        { grams: "500 g", price: "300" },
        { grams: "1 kg", price: "500" },
      ],
    },
    {
      productName: "Turmeric Powder",
      stock: "30",
      images:
        "http://localhost:3000/static/media/turmeric.af31b4c64e858a8e8866.png",
      categoryName: "Powders",
      variations: [
        { grams: "500 g", price: "300" },
        { grams: "1 kg", price: "500" },
      ],
    },
    {
      productName: "Coriander Powder",
      stock: "20",
      images:
        "http://localhost:3000/static/media/corianderpowder.7005c04183bfe5b547f8.png",
      categoryName: "Powders",
      variations: [
        { grams: "500 g", price: "300" },
        { grams: "1 kg", price: "500" },
      ],
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Dry Fruits" },
    { id: 3, name: "Powders" },
  ];

  // Handle file input and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);
    setImagePreview(URL.createObjectURL(file)); // Preview image
  };

  const handleVariationChange = (index, field, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][field] = value;
    setVariations(updatedVariations);
  };

  const handleAddVariation = () => {
    setVariations([...variations, { grams: "", price: "" }]);
  };

  const handleRemoveVariation = (index) => {
    const updatedVariations = variations.filter((_, idx) => idx !== index);
    setVariations(updatedVariations);
  };

  const handleAddOrEditProduct = () => {
    if (
      !productName ||
      !stock ||
      !images ||
      !categoryName ||
      !variations.length
    )
      return;

    const newProduct = {
      productName,
      stock,
      images: imagePreview,
      categoryName,
      variations,
    };

    if (editIndex !== null) {
      // If we are editing, replace the existing product at editIndex
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null); // Reset edit mode
    } else {
      // If adding a new product
      setProducts([...products, newProduct]);
    }

    // Reset form fields
    setProductName("");
    setStock("");
    setImages(null);
    setImagePreview("");
    setCategoryName("");
    setVariations([{ grams: "", price: "" }]);
  };

  // Handle deleting a product
  const handleDeleteProduct = () => {
    const updatedProducts = products.filter(
      (_, index) => index !== productToDelete
    );
    setProducts(updatedProducts);
    setShowDeleteModal(false); // Close the modal after deleting
  };

  return (
    <Container fluid className="admin-products-container">
      <h2>Product</h2>
      <Form className="mt-5">
        <Row className="gy-1 gx-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Product Name:</Form.Label>
              <Form.Control
                className="product-input-field"
                type="text"
                placeholder="Enter Product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Stock (Kg):</Form.Label>
              <Form.Control
                className="product-input-field"
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Images:</Form.Label>
              <Form.Control
                className="product-input-field"
                type="file"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Category Name:</Form.Label>
              <Form.Select
                className="product-input-field"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group>
              {variations.map((variation, index) => (
                <Row
                  key={index}
                  className="gy-1 gx-3 d-flex align-items-center"
                >
                  <Col md={5}>
                    <Form.Label className="product-label">Grams:</Form.Label>
                    <Form.Control
                      className="product-input-field"
                      type="text"
                      placeholder="Grams"
                      value={variation.grams}
                      onChange={(e) =>
                        handleVariationChange(index, "grams", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="product-label">Price:</Form.Label>
                    <Form.Control
                      className="product-input-field"
                      type="number"
                      placeholder="Price"
                      value={variation.price}
                      onChange={(e) =>
                        handleVariationChange(index, "price", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={1} className="mt-5">
                    {index !== 0 && (
                      <Button
                        variant="light"
                        onClick={() => handleRemoveVariation(index)}
                        className="remove-variation-btn"
                      >
                        <FaTimes />
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button
                variant="link"
                onClick={handleAddVariation}
                className="add-grams-price"
              >
                Add Grams & Price
              </Button>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Button
              onClick={handleAddOrEditProduct}
              className="add-product-button"
              disabled={!productName.trim()}
            >
              {editIndex !== null ? "Update Product" : "Add Product"}
            </Button>
          </Col>
        </Row>
      </Form>

      {products.length > 0 && (
        <Table bordered className="mt-4 product-table">
          <thead>
            <tr className="product-head">
              <th>S.No</th>
              <th>Product Name</th>
              <th>Stock (Kg)</th>
              <th>Category</th>
              <th>Grams & Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="product-row">
                <td className="p-3">{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.stock}</td>
                <td>{product.categoryName}</td>
                <td>
                  {product.variations.map((variation, idx) => (
                    <div key={idx}>
                      {variation.grams} - ₹{variation.price}
                    </div>
                  ))}
                </td>
                <td>
                  <Image
                    src={product.images}
                    thumbnail
                    style={{ width: "70px", height: "70px" }}
                  />
                </td>
                <td>
                  <Button
                    className="admin-product-edit"
                    onClick={() => {
                      setProductName(product.productName);
                      setStock(product.stock);
                      setCategoryName(product.categoryName);
                      setVariations(product.variations);
                      setImagePreview(product.images);
                      setEditIndex(index);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    className="admin-product-delete"
                    onClick={() => {
                      setProductToDelete(index);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteProduct}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProducts;
