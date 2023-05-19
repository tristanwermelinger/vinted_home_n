import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const response = await axios.post(
  //       "https://lereacteur-vinted-api.herokuapp.com/user/signup"
  //     );

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form id="contactForm">
        <input
          type="text"
          id="username"
          value="username"
          placeholder="Nom d'utilisateur"
        />
      </form>
    </div>
  );
};

export default Signup;
