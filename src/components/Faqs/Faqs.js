import React, { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faqs.css";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    document.title = "FAQ - Annapurna Farms";
  }, []);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { id: 1, question: "How does Nuziveedu Fruits ensure Products quality? ", answer: "We maintain quality by using fresh, natural ingredients sourced directly from farms. Each product undergoes strict quality checks." },
    { id: 2, question: "Are Nuziveedu Fruits Products free from additives?", answer: "Yes, our products are 100% natural, free from artificial colors, flavors, or preservatives." },
    { id: 3, question: "Is there a quality guarantee for Nuziveedu Fruits Products?", answer: "We stand by our commitment to quality. If you encounter any issues, please contact us for assistance." },
    { id: 4, question: "Are Nuziveedu Fruits  Products  made with natural ingredients?", answer: "Yes, all our products are 100% natural, free from artificial additives and preservatives." },
    { id: 5, question: "Are Nuziveedu Fruits Products Organic?", answer: "While our products are not certified organic, we use natural farming methods without synthetic chemicals." },
    { id: 6, question: "How quickly can I expect my order to arrive?", answer: "It takes 3-5 business days for delivery within India." },
    { id: 7, question: "Can I track my Order after Purchasing?", answer: "Yes, you’ll receive a tracking link via email after placing your order." },
    { id: 8, question: "Does Nuziveedu Fruits offer bulk Orders? ", answer: "Yes, we welcome bulk orders for businesses, retailers, and special events." },
    { id: 9, question: "How can I place bulk order?", answer: "Contact our customer service team with your requirements, and we’ll provide a custom quote." },
    { id: 10, question: "What Payment methods are available at Nuziveedu Fruits?", answer: "We offer online payments and Cash on Delivery (COD)." },
    { id: 11, question: "Which online payment options do you accept?", answer: "Credit/debit cards, net banking, UPI, and digital wallets." },
    { id: 12, question: "Does Nuziveedu Fruits offer free shipping?", answer: "Yes, we provide free shipping on all orders above ₹999." },
  ];

  return (
    <Container fluid className="faq-container px-5">
      <h3 className="faq-heading text-start">Any Question? We can help you</h3>
      <div className="faq-accordion">
        <Accordion>
          {faqs.map((faq) => (
            <Accordion.Item eventKey={faq.id.toString()} key={faq.id}   className={open === faq.id ? "active-faq" : ""}>
              <Accordion.Header onClick={() => toggleFAQ(faq.id)}>
                <span className="faq-symbol">{open === faq.id ? "-" : "+"}</span>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body>
                <p>{faq.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;