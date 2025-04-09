import React, { useEffect, useState, useRef } from "react";
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
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [productName, setProductName] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [categoryName, setCategoryName] = useState(""); // Now stores category name
  const [categoryId, setCategoryId] = useState(""); // Stores category id for form submission
  const [categories, setCategories] = useState([]); // To store categories fetched from API
  const [variations, setVariations] = useState([{ grams: "", price: "" }]);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const imageInputRef = useRef(null);

  // Fetch categories from the API when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://3.6.40.101:5000/category/getallcategories"
        );
        const data = await response.json();
        if (data.statusCode === 200) {
          setCategories(data.categories);
          console.log("Fetched categories:", data);
        } else {
          alert("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  console.log("Categories state:", categories);

  // Handle file input and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Store the file for upload
      setImages(file);

      // Create a preview URL for the image
      setImagePreview(URL.createObjectURL(file));
    }
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

  const handleAddProduct = async () => {
    if (
      !productName ||
      !stock ||
      !categoryId ||
      !variations.length ||
      !description.trim() ||
      !images
    )
      return alert("Please fill all the required fields and select an image.");

    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("stock", stock + "kg");
    formData.append("description", description);
    formData.append("category_id", categoryId);
    if (images) formData.append("product_image", images);
    formData.append("price_grams", JSON.stringify(variations));

    try {
      const response = await fetch(
        "http://3.6.40.101:5000/products/addproduct",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("product", data);

      if (data.statusCode === 200) {
        const addedProduct = {
          productName: data.product.product_name,
          stock: data.product.stock,
          images: `http://3.6.40.101:5000/${data.product.product_image}`,
          categoryName:
            categories.find(
              (cat) => cat.category_id === data.product.category_id
            )?.category_name || "Unknown Category",

          variations: data.product.price_grams,
          description: data.product.description,
        };

        console.log("Found category name:", categoryName);

        setProducts((prev) =>
          Array.isArray(prev) ? [...prev, addedProduct] : [addedProduct]
        );

        // Reset form
        setProductName("");
        setStock("");
        setImages(null);
        setImagePreview("");
        setCategoryName("");
        setCategoryId(""); // Reset categoryId
        setVariations([{ grams: "", price: "" }]);
        setDescription("");

        if (imageInputRef.current) {
          imageInputRef.current.value = null;
        }

        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://3.6.40.101:5000/products/getallProduct"
      );
      const data = await response.json();
      if (data.statusCode === 200) {
        setProducts(data.data);
      } else {
        alert("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle deleting a product
  // Handle deleting a product
  const handleDeleteProduct = async () => {
    if (productToDelete !== null) {
      const product = products[productToDelete];
      try {
        // Send DELETE request to the API
        const response = await fetch(
          "http://3.6.40.101:5000/products/deleteProduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ product_id: product.product_id }), // Send product_id to the server
          }
        );

        const data = await response.json();

        if (data.statusCode === 200) {
          // Successfully deleted, now remove the product from state
          const updatedProducts = products.filter(
            (_, index) => index !== productToDelete
          );
          setProducts(updatedProducts);
          setShowDeleteModal(false);
          alert("Product deleted successfully!");
        } else {
          alert("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product");
      }
    }
  };

  const toggleHideProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].hidden = !updatedProducts[index].hidden;
    setProducts(updatedProducts);
  };

  return (
    <Container fluid className="admin-products-container">
      <h2 className="fw-bold">Product</h2>
      <Form className="mt-4">
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
                accept="image/*"
                onChange={handleImageChange}
                ref={imageInputRef}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Description:</Form.Label>
              <Form.Control
                className="product-input-field"
                type="text"
                placeholder="Enter Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label className="product-label">Category Name:</Form.Label>
              <Form.Select
                className="product-input-field"
                value={categoryName}
                onChange={(e) => {
                  setCategoryName(e.target.value);
                  setCategoryId(
                    categories.find(
                      (cat) => cat.category_name === e.target.value
                    )?.category_id
                  );
                }}
              >
                <option value="">Select Category</option>
                {Array.isArray(categories) && categories.length > 0 ? (
                  categories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  ))
                ) : (
                  <option>No categories available</option>
                )}
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
              onClick={handleAddProduct}
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
              {/* <th>S.No</th> */}
              <th>Product Name</th>
              <th>Stock (Kg)</th>
              <th>Description</th>
              <th>Category</th>
              <th>Grams & Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`product-row ${
                  product.product_status === "hidden" ? "hidden-product" : ""
                }`}
              >
                {/* <td className="p-3">{index + 1}</td> */}
                <td>{product.product_name}</td>
                <td>{product.stock}</td>
                <td className="product-description-column">
                  {product.description}
                </td>
                <td>{product.category_name}</td>
                <td>
                  {product.price_details.map((variation, idx) => (
                    <div key={idx}>
                      {variation.grams} - ₹{variation.price}
                    </div>
                  ))}
                </td>
                <td>
                  <Image
                    src={`http://3.6.40.101:5000/${product.product_image}`}
                    alt={product.product_name}
                    thumbnail
                    className="product-table-img"
                  />
                </td>
                <td className="pt-3">
                  <FiEdit
                    className="admin-product-action-icon admin-product-edit-icon me-3"
                    title="Edit"
                    onClick={() => {
                      setProductName(product.productName);
                      setStock(product.stock);
                      setCategoryName(product.categoryName);
                      setVariations(product.variations);
                      setImagePreview(product.images);
                      setDescription(product.description);
                      setEditIndex(index);
                    }}
                  />
                  <FaTrashAlt
                    className="admin-product-action-icon admin-product-delete-icon"
                    onClick={() => {
                      setProductToDelete(index);
                      setShowDeleteModal(true);
                    }}
                  />
                  <Button
                    onClick={() => toggleHideProduct(index)}
                    className="admin-product-toggle"
                  >
                    {product.hidden ? <MdVisibilityOff /> : <MdVisibility />}
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
        <Modal.Body>
          <h2 className="product-delete-model">
            Are you sure you want to delete this product ?
          </h2>
        </Modal.Body>
        <Modal.Footer className="product-delete-model-buttons">
          <Button
            className="product-yes-delete-model-button"
            onClick={handleDeleteProduct}
          >
            Yes, Delete
          </Button>
          <Button
            className="product-cancel-delete-model-button"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProducts;
