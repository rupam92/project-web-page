import "./offer.css";

function Offers() {
  return (
    <div className="offers-container">
      <h1 className="title">🔥 Exclusive Offers & Deals</h1>
      <p className="subtitle">
        Save big on your favourite meals! Grab these limited-time discounts before they expire.
      </p>

      <div className="offers-grid">

        <div className="offer-card">
          <h2>💥 Flat 20% OFF</h2>
          <p>On your first order using code <b>WELCOME20</b></p>
          <button>Apply Code</button>
        </div>

        <div className="offer-card">
          <h2>🍔 Buy 1 Get 1 Free</h2>
          <p>On selected Burgers & Momos</p>
          <button>Grab Offer</button>
        </div>

        <div className="offer-card">
          <h2>⚡ ₹50 Cashback</h2>
          <p>On orders above ₹299 via UPI</p>
          <button>Redeem Now</button>
        </div>

        <div className="offer-card">
          <h2>🍕 Pizza Combo @ ₹199</h2>
          <p>Get Medium Pizza + Coke</p>
          <button>Order Combo</button>
        </div>

        <div className="offer-card">
          <h2>🥤 Free Beverage</h2>
          <p>With any meal above ₹249</p>
          <button>Claim Now</button>
        </div>

        <div className="offer-card">
          <h2>🔥 Super Saver</h2>
          <p>Flat ₹100 OFF on 3 orders weekly</p>
          <button>Activate Deal</button>
        </div>

      </div>

      <p className="footer-note">* Terms & conditions apply. Offers valid for limited time only.</p>
    </div>
  );
}

export default Offers;
