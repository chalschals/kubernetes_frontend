import axios from "./interceptor/axios.interceptor";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await axios.get<User[]>("/users");
    setUsers(res.data);
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <div className="title-container">
          <h1>User List</h1>
          <button onClick={() => navigate("/add")} className="add-btn">
            Add User
          </button>
        </div>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div>
                <strong>{user.name}</strong> ({user.email})
              </div>
              <div>
                <button
                  className="action_button"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="action_button delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
