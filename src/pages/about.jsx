
import "./about.css";


function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>About Foodie Zone</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Foodie Zone is your trusted online food delivery platform where you can
        order delicious meals from your favorite restaurants in just a few clicks.
        We aim to make food ordering simple, fast, and affordable for everyone.
      </p>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>🍕 What We Offer</h2>
      <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <li>Fast and reliable food delivery</li>
        <li>Fresh and hygienic meals from top restaurants</li>
        <li>Easy and secure online payment</li>
        <li>User-friendly interface with smooth navigation</li>
        <li>Exclusive offers and discounts</li>
      </ul>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>🎯 Our Mission</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Our mission is to deliver happiness to your doorstep by partnering with
        the best restaurants and home-chefs. We believe food is not just a need —
        it's an emotion!
      </p>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>👨‍🍳 Why Choose Us?</h2>
      <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <li>Wide variety of meals to choose from</li>
        <li>Fast delivery partners</li>
        <li>Affordable prices</li>
        <li>Real-time order tracking</li>
        <li>24/7 customer support</li>
      </ul>
    </div>
  );
}

export default About;
