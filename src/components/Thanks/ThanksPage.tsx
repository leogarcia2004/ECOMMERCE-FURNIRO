import Informacoes from "../Informations";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/AuthProvider";
const ThanksPage = () => {

  const navigate = useNavigate();
  const { user } = useAuthContext();

  if(!user){
    navigate("/");
  }

  const navigateThankToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="grid grid-cols-2 h-[520px]">
        <section className="flex flex-col pl-10">
          <div className="flex flex-col mt-24 items-center">
            <h1 className="text-4xl font-bold text-center text-amber-600 mt-10">
              Thank you for your purchase!
            </h1>
            <p className="text-lg max-w-[540px] text-center mt-5">
              Thank you for choosing us! Click on the button below to return to the main page
            </p>
            <button className=" border-none p-3 mt-4 text-white bg-amber-600 rounded-full" onClick={navigateThankToHome}>Back to main page</button>
          </div>
        </section>
        <section className="bg-imagem_homepage bg-cover flex justify-center items-center">
          
        </section>
      </div>
      <Informacoes />
    </>
  );
};

export default ThanksPage;
