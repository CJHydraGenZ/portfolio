import React, { useRef, useLayoutEffect } from "react";

export const Navbar = () => {
  const navFix = useRef(null);

  const btn = useRef(null);
  const navMenu = useRef(null);
  useLayoutEffect(() => {
    const navBarFixed = () => {
      const fxNav = navFix.current.offsetTop;
      if (window.pageYOffset > fxNav) {
        navFix.current.classList.add("navbar-fixed");
      } else {
        navFix.current.classList.remove("navbar-fixed");
      }
    };
    window.addEventListener("scroll", navBarFixed);
    return () => window.removeEventListener("scroll", navBarFixed);
  });

  const hamburger = () => {
    btn.current.classList.toggle("hamburger-active");
    navMenu.current.classList.toggle("hidden");
  };
  return (
    <header
      ref={navFix}
      className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Gede Cahya
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={hamburger}
              ref={btn}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              ref={navMenu}
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex ">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
