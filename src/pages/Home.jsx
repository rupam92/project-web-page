import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";


function Home() {

  const navigate=useNavigate()
  // Array of menu items
  const menuItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      description: "Creamy, spicy and full of flavours. Fresh paneer cooked in rich tomato gravy.",
      price: 169,
      img: "https://www.aline-made.com/wp-content/uploads/2024/12/Paneer-Butter-Masala-2-1024x1536.jpg"
    },
    {
      id: 2,
      name: "Cheese Pizza",
      description: "Hot & crispy cheese-loaded pizza with oregano.",
      price: 219,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_5ihlXYEe6ziYcPhKC-ASrM3T_-PiGH1qg&s"
    },
    {
      id: 3,
      name: "Butter Burger",
      description: "A hamburger topped with butter, either on the patty or toasted onto the bun.",
      price: 99,
      img: "https://i.pinimg.com/736x/ed/af/3f/edaf3f7ad6e1ad634cd1a0618bbcaac9.jpg"
    },
    {
      id:4,
      name:"Biryani",
      description:"Biryani is a royal, aromatic rice dish loved for its rich flavor and perfect blend of spices.",
      price:149,
      img:"https://i.pinimg.com/736x/0e/82/42/0e8242d34fd25bf7a5a6a51917ab0d03.jpg"
    },
    {
      id:5,
      name:"steamed momos",
      description:"Momos are soft, steamed dumplings filled with flavorful veggies, served with spicy chutney and loved for their light, delicious taste.",
      price:"169",
      img:"https://i.pinimg.com/1200x/13/65/20/136520991cd37af3dc2efb116dfd105e.jpg"
    },
  ];

  // State for quantities: use an object keyed by item id
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const increase = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decrease = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  return (
    <>

     <div className="hero-banner">
    <div className="hero-content">
      <h1>Welcome to Foodie Zone 🍽️</h1>
      <p>
        Delicious meals delivered fresh & fast. Order your favourite food from 
        top restaurants near you and enjoy amazing discounts.
      </p>

      {/* <button className="hero-btn">Order Now</button> */}
    </div>
  </div>
    <h1 style={{textAlign:'center', marginTop:'50px'}}>Explore Food Items</h1>
   <p style={{
  textAlign: "center",
  fontSize: "17px",
  color: "#555",
  marginTop: "10px",
  marginBottom: "30px"
}}>
  Discover a wide variety of delicious dishes, freshly prepared to satisfy your cravings. 
  From spicy meals to cheesy delights — we have something for everyone!
</p>

   <div className="home-container">
  {menuItems.map((item) => (
    <div className="menu" key={item.id}>
      <img src={item.img} className="dish-img" />
      <div className="left-content">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <h2>₹{item.price}</h2>

        <div className="quantity-box">
          <button onClick={() => decrease(item.id)}>-</button>
          <span>{quantities[item.id]}</span>
          <button onClick={() => increase(item.id)}>+</button>
        </div>

        <div className="buttons">
          <button className="cart">Add to Cart</button>
          <button className="buy">Buy Now</button>
        </div>
      </div>
    </div>
 ))}
</div>

<div className="offers-section ">
  <h2>🔥 Popular Offers Just for You</h2>

  <div className="offers-box">
    <div className="offer-card">
      <h3>Flat 20% OFF</h3>
      <p>On your first food order</p>
    </div>

    <div className="offer-card">
      <h3>Buy 1 Get 1 Free</h3>
      <p>On selected burgers</p>
    </div>

    <div className="offer-card">
      <h3>₹50 Cashback</h3>
      <p>On orders above ₹299</p>
    </div>
  </div>

  <button className="view-btn" onClick={()=>navigate("/offer")}>View All Offers</button>
</div>

</>
  );
}

export default Home;
