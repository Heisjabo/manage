import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/icon-facebook.svg";
import Youtube from "../assets/images/icon-youtube.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";


const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener">
              <img src={Youtube} alt="" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener">
              <img src={Twitter} alt="" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener">
              <img src={Pinterest} alt="" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brightRed">Home</a>
            <a href="" className="hover:text-brightRed">Pricing</a>
            <a href="" className="hover:text-brightRed">Products</a>
            <a href="" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brightRed">Careers</a>
            <a href="" className="hover:text-brightRed">Community</a>
            <a href="" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form className="space-x-3">
            <input type="text" className="flex-1 px-4 py-2 rounded-full focus:outline-none" 
            placeholder="Updated in your inbox"/>
            <button className="px-6 py-2 text-white rounded-full bg-brightRed">Go</button>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
