import AmostraFotos from "../../assets/home/Images.png";
import CarrosselProducts from "./CarouselProducts";
import Products from "./Products";
import ButtonShowMore from "../ButtonShowMore";
import { useNavigate } from "react-router-dom";
import dining from "../../assets/home/image_dining.png";
import living from "../../assets/home/image_living.png";
import bedroom from "../../assets/home/image_bedroom.png";
import { useCarrinho } from "../../contexts/CartContext";

const HomePage = () => {
  const { products, handleCategory, filteredHomeProductsRoom } = useCarrinho();
  const navigate = useNavigate();

  const navigateClick = () => {
    navigate("/shop");
  };

  console.log(filteredHomeProductsRoom);

  return (
    <>
      <section className="bg-slate-200 bg-imagem_homepage bg-cover bg-center h-180 flex justify-end items-center pr-20">
        <div className="bg-orange-100 md:w-5/12 h-fit pl-5 pt-10 pb-6 ">
          <span className="font-semibold mb-6">new arrival</span>
          <h1 className="text-4xl font-bold text-amber-600 mb-6">
            Discover Our <br /> New Collection
          </h1>
          <p className="font-medium mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            omnis iure corporis, ratione ipsum laborum.
          </p>
          <button
            onClick={navigateClick}
            className="bg-amber-600 text-white px-14 py-4 font-semibold"
          >
            Buy now
          </button>
        </div>
      </section>

      <section className=" mt-10 flex flex-col  items-center">
        <h2 className="text-xl font-bold mb-1">Browse The Range</h2>
        <p className="text-sm text-zinc-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex md:flex-row flex-col gap-4">
          <div
            onClick={() => handleCategory("Mesa")}
            className="flex flex-col items-center"
          >
            <img
              src={dining}
              className=" h-80 mb-5 cursor-pointer"
              alt="Imagem móveis"
            />
            <span className="text-neutral-800 font-bold">Dining</span>
          </div>

          <div
            onClick={() => handleCategory("Sala")}
            className="flex flex-col items-center"
          >
            <img
              src={living}
              className=" h-80 mb-5 cursor-pointer"
              alt="Imagem móveis"
            />
            <span className="text-neutral-800 font-bold">Living</span>
          </div>

          <div
            onClick={() => handleCategory("Quarto")}
            className="flex flex-col items-center"
          >
            <img
              src={bedroom}
              className=" h-80 mb-5 cursor-pointer"
              alt="Imagem móveis"
            />
            <span className="text-neutral-800 font-bold">Bedroom</span>
          </div>
        </div>
      </section>

      <section className=" mt-10 flex flex-col  items-center">
        <h2 className="text-xl font-bold mb-1">Our Products</h2>

        <div className="flex md:flex-wrap pt-6 gap-6 flex-col max-w-screen-xl md:h-[820px]">
          <Products
            products={
              filteredHomeProductsRoom
                ? filteredHomeProductsRoom.slice(0, 8)
                : products.slice(0, 8)
            }
          />
        </div>

        <ButtonShowMore />
      </section>

      <section className="bg-orange-100 mt-10 flex gap-8 items-center pl-16 py-8 ">
        <div className="w-1/3">
          <h1 className="text-3xl font-bold mb-1">
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p className="text-sm text-zinc-600 mb-4 font-semibold">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button
            onClick={navigateClick}
            className=" px-8 py-2 text-white bg-amber-600 border text-sm rounded-sm hover:bg-amber-300 hover:text-white font-semibold"
          >
            Explore More
          </button>
        </div>
        <CarrosselProducts />
      </section>

      <section className="mt-12 flex flex-col items-center">
        <span className="font-semibold text-zinc-600">
          Share your setup with
        </span>
        <h1 className="font-bold text-3xl">#FuniroFurniture</h1>
        <img className="mb-16" src={AmostraFotos} alt="Fotos" />
      </section>
    </>
  );
};

export default HomePage;
