import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img src={logo} alt="logo vinted" className="logo" />
      <div className="buttondisplay">
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          S'inscrire
        </button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
