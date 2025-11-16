import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="title">📞 Contact Us</h1>
      <p className="subtitle">
        We are here to help you! Reach out to us anytime and we will get back to you as soon as possible.
      </p>

      <div className="contact-grid">

        {/* Contact Details */}
        <div className="contact-box">
          <h2>📍 Our Location</h2>
          <p>Bhopal, Madhya Pradesh</p>

          <h2>📞 Phone</h2>
          <p>+91 98765 43210</p>

          <h2>📧 Email</h2>
          <p>support@foodiezone.com</p>

          <h2>🕒 Working Hours</h2>
          <p>Mon - Sun : 9:00 AM - 11:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea placeholder="Write your message here..." rows="5"></textarea>

          <button>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
