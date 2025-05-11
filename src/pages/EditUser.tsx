import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../interceptor/axios.interceptor";
import Navbar from "../components/navbar/Navbar";
import "./Form.css";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/users`).then((res) => {
      const user = res.data.find((u: any) => u.id.toString() === id);
      if (user) {
        setName(user.name);
        setEmail(user.email);
      }
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`users/${id}`, { name, email });
    navigate("/");
  };

  return (
    <div className="main-container">
      <Navbar />
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
