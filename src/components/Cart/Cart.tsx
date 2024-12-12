import ImagemApresentacaoPage from "../ApresentationImagePage";
import Informacoes from "../Informations";
import trash from "../../assets/cart/trash.png";
import { useCarrinho } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/AuthProvider";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const {
    amount,
    quantities,
    addQuantity,
    decreaseQuantity,
    cartProducts,
    removeCart,
  } = useCarrinho();
  const { user } = useAuthContext();

  const navigateCart = () => {
    navigate("/checkout");
  };

  if(!user){
    navigate('/')
  }

  return (
    <div>
      <ImagemApresentacaoPage title="Cart" />
      <section className="my-14 flex flex-col md:flex-row md:gap-8 justify-center w-full">
        <div className="flex flex-col w-full md:w-6/12">
          <div className="bg-orange-100 flex justify-center mb-12 py-4">
            <ul className="flex flex-col md:flex-row md:gap-12 gap-4">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>

          <div className=" md:flex-nowrap flex-wrap md:gap-0 md:flex-row px-8 md:px-0 mb-6 items-center">
            <ul className="flex flex-col overflow-y-auto h-96 md:gap-4 gap-10">
              {cartProducts.map((product) => (
                <li className="flex items-center" key={product.id}>
                  <img
                    className="h-20 rounded-lg bg-pink_fundo mb-4 md:mb-0 md:mr-6"
                    src={product.images.mainImage}
                    alt=""
                  />
                  <div className="flex flex-col md:flex-row items-center w-full md:gap-8 gap-4">
                    <span className="text-sm w-44 text-zinc-500">
                      {product.title}
                    </span>
                    <span className="text-sm text-zinc-500 w-20">
                      Rs {product.new ? product.normalPrice : product.salePrice}
                    </span>
                    <div className="border border-zinc-400 rounded-lg flex items-center gap-4 py-1.5 px-2">
                      <button onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>{" "}
                      {quantities[product.id] || 1}{" "}
                      <button onClick={() => addQuantity(product.id)}>+</button>
                    </div>
                    <span className="text-sm w-16">
                      Rs{" "}
                      {(
                        (product.new
                          ? product.normalPrice
                          : product.salePrice) * (quantities[product.id] || 1)
                      ).toFixed(2)}
                    </span>
                    <img
                      onClick={() => removeCart(product.id)}
                      className="h-4 cursor-pointer"
                      src={trash}
                      alt="logo lixo"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-orange-100 flex flex-col items-center w-full md:w-80 pt-5 pb-14 h-fit">
          <h2 className="font-semibold text-2xl mb-10">Cart Totals</h2>

          <div className="flex flex-col gap-5 mb-8">
            <div className="flex justify-between gap-6 w-full">
              <span className="">Subtotal</span>
              <span className="text-sm text-zinc-500">
                Rs {amount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between gap-6 w-full">
              <span className="">Total</span>
              <span className="text-lg font-semibold text-yellow-600">
                Rs. {amount.toFixed(2)}
              </span>
            </div>
          </div>
          {cartProducts.length === 0 ? (
            <button
              disabled
              className="py-2 px-10 border border-black rounded-xl opacity-50 cursor-not-allowed"
            >
              Check out
            </button>
          ) : (
            <button
              onClick={navigateCart}
              className="py-2 px-10 border border-black rounded-xl"
            >
              Check out
            </button>
          )}
        </div>
      </section>

      <Informacoes />
    </div>
  );
};

export default Cart;
