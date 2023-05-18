import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo vinted" className="logo" />
      <div className="buttondisplay">
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
