import ImagemApresentacaoPage from "../ApresentationImagePage";
import Informacoes from "../Informations";
import { validateContact } from "../../utils/validateContact";
import { UserContact } from "../../types/User";
import { FormEvent, useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<UserContact | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: UserContact = { name, email };

    const validadeErros = validateContact(data);

    if (Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros);
      return;
    }

    setErrors(null);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <ImagemApresentacaoPage title="Contact" />
      <section className="flex flex-col my-16 items-center">
        <h1 className="text-2xl md:mb-3 mb-6">Get In Touch With Us</h1>
        <p className="text-sm text-center md:px-0 px-10 text-zinc-400">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>

        <div className="flex md:flex-row flex-col md:gap-40 gap-20 mt-20">
          <div className="flex items-center md:justify-normal flex-col gap-10">
            <div className="flex gap-5">
              <i className="fas fa-map-marker-alt focus:outline-none"></i>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-medium text-xl">Adress</h2>
                <p className="w-40 text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <i className="fas fa-phone-alt flip-horizontal mt-1.5"></i>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-medium text-xl">Phone</h2>
                <p className="w-40 text-sm">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <i className="fas fa-clock mt-1.5"></i>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-medium text-xl">Working Time</h2>
                <p className="w-40 text-sm">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                  21:00
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Your name</label>
              <input
                className="w-96 h-16 border border-zinc-400 rounded-md px-4 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="abc"
              />
              {errors?.name && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.name}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="">Email adress</label>
              <input
                className="w-96 h-16 border border-zinc-400 rounded-md px-4 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="person123@hotmail.com"
              />
              {errors?.email && (
                <small className="text-xs text-red-500 mt-1">
                  {errors?.email}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="">Subject</label>
              <input
                className="w-96 h-16 border border-zinc-400 rounded-md px-4 focus:outline-none"
                type="text"
                placeholder="this is a optional"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="">Message</label>
              <input
                type="text"
                className="w-96 h-20 border border-zinc-400 rounded-md px-4 focus:outline-none"
                placeholder="Your Message"
              ></input>
            </div>

            <button className="bg-yellow-600 w-48 py-2.5 text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Informacoes />
    </div>
  );
};

export default Contact;
