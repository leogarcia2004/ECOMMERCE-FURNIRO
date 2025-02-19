import selo_new from "../../assets/shop/selo_new.png";
import selo_desconto from "../../assets/shop/selo_descount.png";
import { useNavigate } from "react-router-dom";
import { IProduct, productsProps } from "../../components/PropsProduct";
import { useCarrinho } from "../../contexts/CartContext";

const Products: React.FC<productsProps> = ({ products }) => {
  const { handleBuy } = useCarrinho();
  const navigate = useNavigate();

  const handleBuyRelated = (product: IProduct) => {
    navigate(`/productselected/${product.id}`, { state: { product } });
  };

  const doubleFunc = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    handleBuy(id);
  };

  return (
    <>
      {products.map((product) =>
        product.new ? (
          <div
            onClick={() => handleBuyRelated(product)}
            className="card-father cursor-pointer"
            key={product.id}
          >
            <div         
              className="bg-slate-200 flex w-52 h-90 flex-col card-product"
            >
              <div className="w-full relative">
                <img
                  className="absolute top-4 right-4 h-10"
                  src={selo_new}
                  alt="Selo new"
                />
                <img
                  className="h-40 w-full"
                  src={product.images.mainImage}
                  alt={product.images.mainImage}
                />
              </div>
              <div className="flex flex-col px-2 gap-1 ">
                <span className="font-medium mt-1 text-base">
                  {product.title}
                </span>
                <span className="text-sm text-zinc-500 overflow-y-auto max-h-14 mb-1">
                  {product.description.short}
                </span>
                <span className="font-semibold text-base">
                  {" "}
                  Rp {product.normalPrice}
                </span>
              </div>
            </div>

            <div className=" bg-black hover:z-10 bg-opacity-70  flex-col gap-3 justify-center items-center w-52 h-90 card-add">
              <button
                onClick={(e) => doubleFunc(e, product.id)}
                className=' bg-slate-100 px-6 py-2 w-fit text-yellow-600 rounded-sm font-semibold md:mt-2 mt-6"'
              >
                Add to cart
              </button>
              <div className="flex justify-center gap-2 text-xs text-white font-semibold">
                <div className="flex items-center gap-1">
                  <i className="fas fa-share-alt "></i>
                  Share
                </div>
                <div className="flex items-center gap-1">
                  <i></i>
                  Compare
                </div>
                <div className="flex items-center gap-1">
                  <i className="far fa-heart"></i>
                  Like
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => handleBuyRelated(product)}
            className="card-father cursor-pointer"
            key={product.id}
          >
            <div             
              className="bg-slate-200 flex w-52 h-90 flex-col card-product"
            >
              <div className="w-full relative">
                <img
                  className="absolute top-4 right-4 h-10"
                  src={selo_desconto}
                  alt="Selo desconto"
                />
                <img
                  className="h-40 w-full"
                  src={product.images.mainImage}
                  alt={product.images.mainImage}
                />
              </div>
              <div className="flex flex-col px-2 gap-1 ">
                <span className="font-medium mt-1 text-base">
                  {product.title}
                </span>
                <span className="text-sm text-zinc-500 overflow-y-auto max-h-14 mb-1">
                  {product.description.short}
                </span>
                <div className="flex gap-6">
                  <span className="font-semibold text-base">
                    {" "}
                    Rp {product.salePrice}
                  </span>
                  <span className=" text-sm text-zinc-500 line-through">
                    {" "}
                    Rp {product.normalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className=" bg-black bg-opacity-70 flex flex-col gap-3 justify-center items-center w-52 h-90 card-add">
              <button
                onClick={(e) => doubleFunc(e, product.id)}
                className='bg-slate-100 px-6 py-2 w-fit text-yellow-600 rounded-sm font-semibold md:mt-2 mt-6"'
              >
                Add to cart
              </button>
              <div className="flex justify-center gap-2 text-xs text-white font-semibold">
                <div className="flex items-center gap-1">
                  <i className="fas fa-share-alt "></i>
                  Share
                </div>
                <div className="flex items-center gap-1">
                  <i></i>
                  Compare
                </div>
                <div className="flex items-center gap-1">
                  <i className="far fa-heart"></i>
                  Like
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Products;
