import React from "react";

const Dashboard = () => {
  const Product_management = [
    { title: "Total Product Sale", count: "1000+", color: "success" },
    { title: "Total Product Count", count: "1500+", color: "secondary" },
    { title: "Total Category Count", count: "100+", color: "info" },
    { title: "Total Hidden Product", count: "50+", color: "danger" },
  ];

  const Coupons_Management = [
    { title: "Active Coupons Count", count: "1000+", color: "primary" },
    { title: "Inactive Coupons Count", count: "250+", color: "success" },
    { title: "Coupons Expiry Dates", count: "150+", color: "dark" },
    { title: "Coupons Usage by Users", count: "750+", color: "warning" },
    { title: "Expired Coupons Count", count: "150+", color: "danger" },
    { title: "Total Added Coupons", count: "2300+", color: "dark" },
  ];

  const Order_Management = [
    { title: "Total Order Placed", count: "1500+", color: "#00AEEF" },
    { title: "Orders in Delivery Phase", count: "100+", color: "#FFC107" },
    { title: "Successful Delivers", count: "1200+", color: "green" },
    { title: "CancelledOrders", count: "50+", color: "blue" },
    { title: "PendingOrders", count: "100+", color: "red" },
  ];

  return (
    <div>
      <section>
        <div className="container-fluid mt-5">
          <h4 className="fw-bold mb-4">Product Management</h4>
          <div className="row g-3">
            {Product_management.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className={`card text-white bg-${item.color} p-3 shadow`}>
                  <h6 style={{ textAlign: "center" }}>{item.title}</h6>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span>
                      <div>
                        {/* <img src={Img} alt="" style={{ width: "80px" }} /> */}
                      </div>
                    </span>
                    <span>
                      <h4>{item.count}</h4>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-bold mt-4 mb-4">Coupons Management</h4>
          <div className="row g-3">
            {Coupons_Management.map((item, index) => (
              <div key={index} className="col-md d-flex">
                <div
                  className="card d-flex flex-row align-items-center shadow w-100"
                  style={{
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <div className="d-flex align-items-stretch w-100 h-100">
                    <div
                      className={`text-white bg-${item.color} p-2 d-flex align-items-center justify-content-center`}
                      style={{ flex: "1", height: "100%" }}
                    >
                      <h6 className="m-0 text-center">{item.title}</h6>
                    </div>
                    <div
                      className="text-white p-2 d-flex align-items-center justify-content-center"
                      style={{
                        flex: "1",
                        height: "100%",
                        backgroundColor: "gray",
                      }}
                    >
                      <h6 className="m-0 text-center">{item.count}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-bold mt-4 mb-4">Order Management</h4>
          <div className="row g-3">
            {Order_Management.map((item, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center"
              >
                <div
                  className="card shadow text-center w-100"
                  style={{
                    height: "160px",
                    borderRadius: "12px",
                    border: `2px solid ${item.color}`,
                    backgroundColor: "white",
                    color: "black",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: item.color,
                      color: "white",
                      padding: "15px",
                      height: "110px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h4 className="fw-bold m-0 mb-2">{item.count}</h4>

                    <div
                      className="d-flex"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <h6 className="m-0">{item.title}</h6>
                      <span>{/* <img src={OrderImg} alt="" /> */}</span>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      height: "50px",
                      borderTop: `2px solid ${item.color}`,
                    }}
                  >
                    <a
                      href="l"
                      className="fw-bold text-dark d-flex align-items-center text-decoration-none"
                    >
                      More info&nbsp;&nbsp;
                      <span>{/* <img src={ViewImg} alt="" /> */}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-bold mt-4">Payment Management</h4>
          <div className="row g-3 mt-2">
            {[
              {
                title: "Pending Settlements",
                count: "Rs. 50,505.00",
                color: "#9b59b6",
                icon: "⏳",
                value: "10+",
              },
              {
                title: "Total Successful Payments",
                count: "Rs. 1,10,303.00",
                color: "#2ecc71",
                icon: "💰",
                value: "1000+",
              },
              {
                title: "Today's Settled Payments",
                count: "Rs. 75,707.00",
                color: "#3498db",
                icon: "🤲",
                value: "500+",
              },
              {
                title: "Failed Transactions",
                count: "Rs. 10,505.00",
                color: "#e74c3c",
                icon: "❌",
                value: "20+",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div
                  className="card shadow"
                  style={{
                    height: "130px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    border: `1px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: item.color,
                      padding: "10px",
                      color: "white",
                      textAlign: "center",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h5
                      className="fw-bold"
                      style={{ margin: "0", fontSize: "16px" }}
                    >
                      {item.count}
                    </h5>
                    <p style={{ margin: "0", fontSize: "14px" }}>
                      {item.title}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "0.5",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: item.color,
                        flex: 1,
                        textAlign: "center",
                      }}
                    >
                      {item.value}
                    </span>
                    <div
                      style={{
                        width: "1px",
                        height: "100%",
                        backgroundColor: item.color,
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "20px",
                        color: item.color,
                        flex: 1,
                        textAlign: "center",
                      }}
                    >
                      {item.icon}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
