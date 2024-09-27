
import logoFacebook from '../assets/footer/facebook_1.png'
import logoInstagram from '../assets/footer/instagram_1.png'
import logoTwitter from '../assets/footer/twitter_1.png'
import logoLinkedIn from '../assets/footer/linkedin_1.png'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t border-slate-300 w-full h-fit ">

    <div className="flex md:flex-row flex-col gap-20 w-10/12 py-12">

      <div className="w-64 flex flex-col gap-10 mr-12 ">
        <h2 className="font-semibold text-2xl ">Funiro.</h2>
        <p className="text-gray-400 ">400 University Drive Suite 200 Coral Gables, <br />
        FL 33134 USA</p>
      
        <nav>
          <ul className="flex gap-3.5">
            <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white shadow-neutral-400 rounded-full cursor-pointer">
              <img src={logoFacebook} alt=" Icone Facebook" />
            </li>
            <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white shadow-neutral-400 rounded-full cursor-pointer">
              <img src={logoInstagram} alt="Icone Instagram" />
            </li>
            <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white shadow-neutral-400 rounded-full cursor-pointer">
              <img src={logoTwitter} alt="Icone Twitter" />
            </li>
            <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white shadow-neutral-400 rounded-full cursor-pointer">
              <img src={logoLinkedIn} alt="Icone LinkedIn" />
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex gap-28'>
        <div>
          <h4 className="text-gray-400 font-medium mb-12 mr-12">Links</h4>
          <ul className="flex flex-col gap-8">
            <li className="font-medium">Home</li>
            <li className="font-medium">Shop</li>
            <li className="font-medium">About</li>
            <li className="font-medium">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-400 font-medium mb-12">Help</h4>
          <ul className="flex flex-col gap-8">
            <li className="font-medium">Payment Options</li>
            <li className="font-medium">Returns</li>
            <li className="font-medium">Privacy Policies</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-gray-400 font-medium mb-12">Newsletter</h4>

        <form  className="flex gap-3.5">
          <input className=" border-b border-b-black" type="email" placeholder="Enter Your Email Adress" name="email" id="email" />
          <button className="font-medium border-b border-b-black">SUBSCRIBE</button>
        </form>
      </div>
    </div>

    <div className=""></div>

    <div className="border-t margin-0 border-slate-200 py-6 w-10/12">
      <p className="font-medium">2023 furino. All rights reverved</p>
    </div>
    </footer>
  )
}

export default Footer