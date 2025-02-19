import Products from "../Home/Products";
import ImagemApresentacaoPage from "../ApresentationImagePage";
import { useMemo, useState } from "react";
import Informacoes from "../Informations";
import filter from "../../assets/shop/filtering.png";
import vector from "../../assets/shop/vectorr.png";
import vector_1 from "../../assets/shop/vectorr_1.png";
import { useCarrinho } from "../../contexts/CartContext";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const quant = [8, 12, 16];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<number>(quant[0]);
  const [searchValue, setSearchValue] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>("");
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const PRODUCTS_PER_PAGE = search;
  const { products } = useCarrinho();
  const location = useLocation();
  const { array } = location.state || {};
  console.log(array);

  const categories = products.map((product) => product.category);
  const uniqueCategories = Array.from(new Set(categories));

  const filterProducts = useMemo(() => {
    if (categoria === "all") {
      return products;
    } else {
      return products.filter((product) =>
        product.category.toLowerCase().includes(categoria.toLowerCase())
      );
    }
  }, [categoria, products]);

  const greaterValue = Math.max(
    ...filterProducts.map((product) =>
      product.new ? product.normalPrice : product.salePrice
    )
  );
  const lowestValue = Math.min(
    ...filterProducts.map((product) =>
      product.new ? product.normalPrice : product.salePrice
    )
  );

  const getVisibleProducts = () => {
    const filteredProducts = categoria ? filterProducts : products;

    if (searchValue === greaterValue) {
      filteredProducts.sort((a, b) =>
      (b.new ? b.normalPrice : b.salePrice) -
      (a.new ? a.normalPrice : a.salePrice)
      ); 
    } else if (searchValue === lowestValue) {
      filteredProducts.sort((a, b) =>
      (a.new ? a.normalPrice : a.salePrice) -
      (b.new ? b.normalPrice : b.salePrice)
      ); 
    }

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  };

  const totalPages = Math.ceil(
    (categoria ? filterProducts.length : products.length) / PRODUCTS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const setPage = (pageNum: number) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const getPageButtons = () => {
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const handleCategory = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div>
      <ImagemApresentacaoPage title="Shop" />
      <section className="bg-orange-100 md:px-0 px-6 flex flex-wrap justify-around items-center mb-10 md:gap-32 w-full h-36">
        <div className="flex">
          <ul className="flex items-center gap-6 pr-8">
            <li className="flex gap-3 items-center font-medium text-lg cursor-pointer">
              <img
                onClick={() => handleCategory()}
                className="h-5"
                src={filter}
                alt="Logo filter"
              />
              Filter
              {openSelect && (
                <select
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-40"
                  name="categories"
                  id="categories"
                  title="Categories"
                >
                  <option value="all">All</option>
                  {uniqueCategories.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              )}
            </li>
            <li>
              <img className="cursor-pointer" src={vector} alt="logo vector" />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src={vector_1}
                alt="logo vector_1"
              />
            </li>
          </ul>
          <span className=" pl-8 pt-2 pb-2 border-l flex gap-0.5 items-center border-black text-sm font-medium">
            Showing 1–{search} of {products.length + 1} results
          </span>
        </div>
        <div className="flex gap-6 font-medium">
          <div className="flex gap-2">
            Show
            <select
              onChange={(e) => setSearch(Number(e.target.value))}
              name="amount"
              id="amount"
              title="Amount"
            >
              {quant.map((search) => (
                <option key={search} value={search}>
                  {search}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            Short by
            <select
              className="text-sm"
              onChange={(e) => setSearchValue(Number(e.target.value))}
              name="SeachValue"
              id="SeachValue"
              title="SeachValue"
            >
              <option value="default">Default</option>
              <option value={greaterValue}>Greater value - Lowest value</option>
              <option value={lowestValue}>Lowest value - Greater value</option>
            </select>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex items-center md:flex-wrap gap-6 flex-col md:h-1000 md:max-h-[1000px]">
          <Products products={array ? array : getVisibleProducts()} />
        </div>
      </section>
      <div className="flex gap-6 justify-center mt-8 mb-12">
        {currentPage !== 1 && (
          <button
            className="bg-pink_fundo px-4 rounded-md py-2 font-semibold"
            onClick={prevPage}
          >
            Previous
          </button>
        )}
        <div className="flex gap-4">
          {getPageButtons().map((page) => (
            <button
              key={page}
              className={`bg-pink_fundo px-4 rounded-md py-2 font-semibold ${
                currentPage === page ? "bg-yellow-600 text-white" : ""
              }`}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-pink_fundo px-4 rounded-md py-2 font-semibold"
        >
          Next
        </button>
      </div>
      <Informacoes />
    </div>
  );
};

export default Shop;
