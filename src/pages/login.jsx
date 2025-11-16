import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || number.length !== 10) {
      alert("Please enter valid details");
      return;
    }
  };

  return (
    <div className="login-container">
      <h2 className="login">Login Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Full Name" 
          onChange={(e) => setName(e.target.value)}
         />
        <input
          type="number"
          placeholder="Enter Phone Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
