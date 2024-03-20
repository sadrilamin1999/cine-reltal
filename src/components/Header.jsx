import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import ShopongCart from "../assets/shopping-cart.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="/"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="/"
            >
              <img src={Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="/"
            >
              <img
                src={ShopongCart}
                width="24"
                height="24"
                alt="Shoping-cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
