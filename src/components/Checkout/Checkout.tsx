import { useCarrinho } from "../../contexts/CartContext";
import ImagemApresentacaoPage from "../ApresentationImagePage";
import Informacoes from "../Informations";
import { FormEvent } from "react";
import { useState } from "react";
import { ValidateCheckout } from "../../utils/ValidateCheckout";
import { UserCheckout } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/AuthProvider";

const Checkout: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [zipCode, setZipcode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [emailAdress, setEmailAdress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [onAdress, setOnAdress] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<UserCheckout | null>(null);
  const [clicked, setClicked] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setCompany("");
    setZipcode("");
    setCountry("");
    setEmailAdress("");
    setCity("");
    setProvince("");
    setStreet("");
    setOnAdress("");
    setMessage("");

    const data: UserCheckout = {
      firstName,
      lastName,
      emailAdress,
      onAdress,
      zipCode,
      city,
      street,
      country,
      province,
    };
    const validadeErros = ValidateCheckout(data);

    if (Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros);
      return;
    }

    navigate("/home");
  };

  const { quantities, amount, cartProducts } = useCarrinho();
  const { user } = useAuthContext();

  if (!user) {
    navigate("/");
  }

  const handleClick = (id: string) => {
    setClicked(id);
  };

  return (
    <div>
      <ImagemApresentacaoPage title="Checkout" />
      <section className="my-16 flex md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:items-start items-center md:ml-36 md:flex-wrap md:h-[1320px]"
        >
          <h1 className="font-bold text-3xl mb-8">Billing details</h1>

          <div className="w-fit flex flex-col gap-8">
            <div className="flex gap-7">
              <div className="flex flex-col gap-3">
                <label className="font-semibold" htmlFor="firstname">
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 w-40 h-16"
                  type="text"
                  id="firstname"
                />
                {errors?.firstName && (
                  <small className="text-xs text-red-500 mt-1">
                    {errors?.firstName}
                  </small>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 w-40 h-16"
                  type="text"
                  id="lastname"
                />
                {errors?.lastName && (
                  <small className="text-xs text-red-500 mt-1">
                    {errors?.lastName}
                  </small>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="company">
                Company Name (optional)
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="company"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="zipcode">
                ZIP code
              </label>
              <input
                value={zipCode}
                onChange={(e) => setZipcode(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="zipcode"
              />
              {errors?.zipCode && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.zipCode}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="countryeregion">
                Country / Region
              </label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="countryeregion"
              />
              {errors?.country && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.country}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="street">
                Street address
              </label>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="street"
              />
              {errors?.street && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.street}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="townecity">
                Town / City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="townecity"
              />
              {errors?.city && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.city}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="province">
                Province
              </label>
              <input
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="province"
              />
              {errors?.province && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.province}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="addaddress">
                Add-on address
              </label>
              <input
                value={onAdress}
                onChange={(e) => setOnAdress(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="addaddress"
              />
              {errors?.onAdress && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.onAdress}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="address">
                Email address
              </label>
              <input
                value={emailAdress}
                onChange={(e) => setEmailAdress(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                type="text"
                id="address"
              />
              {errors?.emailAdress && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.emailAdress}
                </small>
              )}
            </div>
            <div>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full"
                placeholder="Digite uma mensagem aqui..."
                type="text"
                id="lastname"
              />
            </div>
          </div>

          <div className="w-5/12">
            <div className="flex py-9 flex-col gap-3 border-b border-zinc-300">
              <div className="flex justify-between gap-9 font-medium text-2xl">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className=" max-h-44 gap-16 mb-2 justify-between overflow-y-auto">
                <ul className="flex flex-col gap-2 overflow-y-auto">
                  {cartProducts.map((product) => (
                    <li className="flex justify-between items-center gap-3">
                      <span className="text-zinc-400 w-72">
                        {product.title}{" "}
                        <strong className="text-black">
                          x {quantities[product.id] || 1}
                        </strong>
                      </span>
                      <span>
                        {" "}
                        Rs.{" "}
                        {product.new ? product.salePrice : product.normalPrice}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-16 justify-between">
                <span className="font-medium">Subtotal</span>
                <span>Rs. {amount.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-16 justify-between">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold text-yellow-600">
                  Rs. {amount.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-7 flex items-center flex-col gap-4">
              <div className="flex flex-col gap-3 items-start">
                <div className="flex items-center gap-2 ">
                  <input
                    onClick={() => handleClick("bank")}
                    className="focus:font-medium appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none"
                    type="radio"
                    name="buy"
                    id="bank"
                  />
                  <label htmlFor="bank">Direct Bank Transfer</label>
                </div>
                <p
                  className={
                    clicked === "bank"
                      ? "text-zinc-400 text-justify"
                      : "text-black text-justify"
                  }
                >
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>

              <div className=" w-full flex justify-start flex-col gap-4 ">
                <div className="flex items-center gap-2 ">
                  <input
                    onClick={() => handleClick("cash")}
                    className="focus:font-medium appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none"
                    type="radio"
                    name="buy"
                    id="cash"
                  />
                  <label htmlFor="cash">Cash On Delivery</label>
                </div>
              </div>
              <p className="text-black mt-2 text-justify">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <strong className="text-black">privacy policy</strong>.
              </p>

              <button
                type="submit"
                className="w-fit md:py-3 py-2 md:px-24 px-12 mt-2 border border-black rounded-xl font-medium text-neutral-900"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </section>
      <Informacoes />
    </div>
  );
};

export default Checkout;
