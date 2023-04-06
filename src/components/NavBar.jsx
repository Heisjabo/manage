import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className="relative mx-auto container p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        <ul className="hidden  space-x-6 md:flex">
          <li className="hover:text-darkGrayishBlue cursor-pointer">Pricing</li>
          <li className="hover:text-darkGrayishBlue cursor-pointer">Product</li>
          <li className="hover:text-darkGrayishBlue cursor-pointer">
            About Us
          </li>
          <li className="hover:text-darkGrayishBlue cursor-pointer">Careers</li>
          <li className="hover:text-darkGrayishBlue cursor-pointer">
            Community
          </li>
        </ul>
        <button className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
          Get Started
        </button>

        <button className={menu? 'open block hamburger md:hidden': 'block hamburger md:hidden'} onClick={handleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile menu */}

      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute ${menu? 'flex' : 'hidden'} flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md `}
        >
          <a className="hover:text-darkGrayishBlue cursor-pointer">Pricing</a>
          <a className="hover:text-darkGrayishBlue cursor-pointer">Product</a>
          <a className="hover:text-darkGrayishBlue cursor-pointer">
            About Us
          </a>
          <a className="hover:text-darkGrayishBlue cursor-pointer">Careers</a>
          <a className="hover:text-darkGrayishBlue cursor-pointer">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
