import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../interceptor/axios.interceptor";
import Navbar from "../components/navbar/Navbar";
import "./Form.css";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/users", { name, email });
    navigate("/");
  };

  return (
    <div className="main-container">
      <Navbar />
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Add User</h2>
        
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
