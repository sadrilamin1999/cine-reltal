import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";

import ShopongCart from "../assets/shopping-cart.svg";

import { useContext, useState } from "react";
import { MovieContext, ThemeContext } from "../contex";

import AddToCardModal from "./AddToCardModal";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { movieData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // handlers
  const handleCloseAddToCart = () => {
    setShowCart(false);
  };
  return (
    <header>
      {showCart && <AddToCardModal onClose={handleCloseAddToCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <button href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </button>

        <ul className="flex items-center space-x-5">
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="/"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="Moon"
              />
            </button>
          </li>
          <li className="relative">
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img
                src={ShopongCart}
                width="24"
                height="24"
                alt="Shoping-cart"
              />
            </button>
            {movieData?.length > 0 && (
              <span className=" absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex justify-center items-center text-green-50 text-md">
                {movieData.length}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
