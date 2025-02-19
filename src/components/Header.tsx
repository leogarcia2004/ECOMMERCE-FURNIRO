import { Link } from "react-router-dom";
import logo from "../assets/logo_header.png";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/auth/AuthProvider";

const Header = () => {
  const { setCarrinhoOpen, cartProducts} = useCarrinho();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const navigateClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-white flex flex-col gap-4 items-center justify-center md:justify-between font-semibold md:items-center md:flex-row py-6 w-full md:h-20 h-fit top-0 sticky z-10 shadow-md shadow-neutral-300">
      <img
        className="pl-10 cursor-pointer"
        onClick={navigateClick}
        src={logo}
        alt="Logo loja"
      />

      <nav>
        <ul className="flex gap-16 justify-center">
          <li className="cursor-pointer font-semibold">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="cursor-pointer font-semibold">
            <Link to={"/shop"}>Shop</Link>
          </li>

          <li className="cursor-pointer font-semibold">
            <Link to={"/contact"}>About</Link>
          </li>

          <li className="cursor-pointer font-semibold">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center md:pr-20 gap-8">
        <nav>
          <button>
            <Link to={"/login"}>
              {user ? (
                <i className="fas fa-user fa-lg cursor-pointer"></i>
              ) : (
                <div className="p-3 font-normal text-white text-xs bg-amber-600">
                  Faça seu login
                </div>
              )}
            </Link>
          </button>
        </nav>
        {user ? (
          cartProducts.length > 0 ? (
            <button onClick={() => setCarrinhoOpen(true)} className="relative">
              <div className="rounded-full h-4 w-4 absolute bottom-4 left-3 flex text-xs justify-center items-center text-white bg-red-600">
                {cartProducts.length}
              </div>
              <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
            </button>
          ) : (
            <button onClick={() => setCarrinhoOpen(true)}>
              <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
            </button>
          )
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
