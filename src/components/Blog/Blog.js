import React, { useState } from "react";
import "./Blog.css";

import first from "../../assets/mangopickle.png";
import second from "../../assets/apple.png";
import third from "../../assets/banana.png";
import fourth from "../../assets/grapes.png";
import five from "../../assets/almonds.png";

import blog1 from "../../assets/blog-1.png";
import blog2 from "../../assets/blog-2.png";
import blog3 from "../../assets/blog-3.png";

export default function Blog() {
  const productData = [
    {
      title: "Coconut Powder",
      image: first,
      description:
        "Nuziveedu Farms, we believe in bringing nature to your kitchen with our Coconut Powder, crafted from naturally sun dried and finely Coconut Powder. This versatile ingredient captures the richness and creamy flavor of fresh Products, offering unmatched convenience and quality. Whether you're cooking, baking, or enhancing a skincare routine, our Coconut powder is your ultimate companion for natural goodness.",
    },
    {
      title: "Chilly Powder",
      image: second,
      description: "Adds spice and flavor to your curries and snacks.",
    },
    {
      title: "Coriander Powder",
      image: third,
      description: "Aromatic and perfect for seasoning your dishes.",
    },
    {
      title: "Cardamom Powder",
      image: fourth,
      description: "Rich, sweet cardamom flavor for sweets and desserts.",
    },
    {
      title: "Cumin Powder",
      image: five,
      description: "Enhances taste with its earthy, warm flavor.",
    },
  ];

  const CardsData = [
    {
      id: "1",
      name: "Benefits of Coconut Powder",
      title: "Coconut Powder",
      image: blog1,
    },
    {
      id: "2",
      name: "Benefits of Coriander Powder",
      title: "Coriander Powder",
      image: blog2,
    },
    {
      id: "3",
      name: "Benefits of Tomato Powder",
      title: "Tomato Powder",
      image: blog3,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productData[0]);

  return (
    <div className="blog">
      <div className="blogpage"></div>
      <div className="container py-4 mt-5">
        <div className="row container">
          <div className="col-lg-8 mb-4 order-2 order-lg-1">
            <div className="fw-bold fs-5 mb-4">-Blog</div>
            <section>
              <h6 className="mb-3" style={{ fontSize: "24px" }}>
                {selectedProduct.title}: The Perfect Blend of Taste and
                Convenience
              </h6>
              <p style={{ textAlign: "justify" }}>
                {selectedProduct.description}
              </p>
              <h6 className="fw-bold mt-3 mb-4">
                Why Choose Nuziveedu Forms’ {selectedProduct.title}?
              </h6>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>100% Natural:</strong> Made from pure, sun-dried
                  coconut with no preservatives.
                </li>
                <li>
                  <strong>Rich in Flavor:</strong> Delivers the authentic,
                  creamy essence of coconut in every scoop.
                </li>
                <li>
                  <strong>Versatile:</strong> Perfect for cooking, baking, and
                  even DIY beauty treatments.
                </li>
                <li>
                  <strong>Easy to Use:</strong> Ready-to-use and long-lasting,
                  no grating or cracking required!
                </li>
              </ul>
              <h6 className="fw-bold mt-4 mb-4">
                How to Use Coconut Powder in Cooking
              </h6>

              <h6 className="fw-bold mt-4 mb-4">Savory Delights</h6>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>Curries:</strong> Add 2 tbsp Coriander powder to
                  chicken and enrich curries and gravie.
                </li>
                <li>
                  <strong>Soups:</strong> Stir into lentil soups or
                  Thai-inspired broths for a hint of coconut creaminess.
                </li>
                <li>
                  <strong>Rice Dishes:</strong> Mix 1 tbsp into biryanis or
                  coconut rice for enhanced flavor.
                </li>
              </ul>

              <h6 className="fw-bold mt-4 mb-4">Sweet Treats</h6>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>Cakes and Muffins:</strong> Replace a portion of your
                  flour with 2 tbsp coconut powder for a moist, flavorful
                  texture
                </li>
                <li>
                  <strong>Smoothies and Shakes:</strong> Blend 1 tbsp with milk,
                  banana, and vanilla for a tropical smoothie.
                </li>
                <li>
                  <strong>Traditional Sweets:</strong>Use in ladoos or barfis
                  for authentic Indian desserts with a coconut twist.
                </li>
              </ul>

              <h6 className="fw-bold mt-4 mb-4">
                How to Use Coconut Powder in Skincare
              </h6>

              <h6 className="fw-bold mt-4 mb-4">Nourishing Face Mask</h6>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong> 1 tbsp coconut powder</strong>
                </li>
                <li>
                  <strong>1 tbsp honey</strong>{" "}
                </li>
                <li>
                  <strong> 1 tsp turmeric</strong>
                </li>
                <p>
                  Massage onto your skin in circular motions, then rinse with
                  lukewarm water.
                </p>
              </ul>

              <h6 className="fw-bold mt-4 mb-4">
                Storing Coconut Powder the Right Way
              </h6>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <li> Transfer it to an airtight container after openingì</li>
                <li>Store in a cool, dry place away from humidityì </li>
                <li>
                  {" "}
                  If clumps form, break them apart with a spoon or blend gently
                </li>
              </ul>

              <h6 className="fw-bold mt-4 mb-4">
                Coconut Powder: A Kitchen and Beauty Must-Have
              </h6>

              <p>
                Whether you're whipping up a quick meal, crafting desserts, or
                pampering your skin, coconut powder is an indispensable
                ingredient. Its convenience and versatility make it a favorite
                for home cooks and DIY beauty enthusiasts alike.
              </p>

              <p>
                Bring home the tropical goodness with Annapurna Farms’ Coconut
                Powder, available in sizes to suit all your needs. It’s natural,
                pure, and ready to elevate your cooking and wellness routine.
              </p>

              <p>Discover the power of coconuts with Annapurna Farms today!</p>
            </section>
          </div>

          <div className="col-lg-4 order-1 order-lg-2">
            <div className="card mb-3">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="card-img-top img-fluid"
              />
            </div>

            <div className="mb-4">
              <h5 className="mb-3 text-danger">Products</h5>
              <ul className="list-group">
                {productData.map((product, index) => (
                  <li
                    key={index}
                    className={`list-group-item border-0`}
                    style={{
                      cursor: "pointer",
                      paddingLeft: "0px",
                      color:
                        product.title === selectedProduct.title
                          ? "red"
                          : "black",
                      fontWeight:
                        product.title === selectedProduct.title
                          ? "bold"
                          : "normal",
                    }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-3 text-danger">Share Content</h5>
              <div className="">
                <p className="fw-bold">Instagram</p>
                <p className="fw-bold">Facebook</p>
                <p className="fw-bold">Email</p>
                <p className="fw-bold">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {CardsData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{ backgroundColor: "#7be2e5", borderRadius: "8px", height: "250px" }}
              />
              <div className="text-center" style={{ marginTop: "-10px" }}>
                <span className="cardtxt mb-3">{item.title}</span>
                <h5 className="mt-2">
                  <b>{item.name}</b>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
