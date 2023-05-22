import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handelEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup"
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name :</label>
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
        />

        <label htmlFor="email">Email :</label>
        <input
          placeholder="Votre email"
          type="text"
          name="email"
          value={email}
          onChange={handelEmailChange}
        />
        <label htmlFor="password">Password :</label>
        <input
          placeholder="Votre password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </form>
    </div>
  );
};

export default Signup;
