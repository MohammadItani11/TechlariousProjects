import React, { useEffect, useState } from "react";

import Image from "next/image";

//widgets
import Layout from "../Layout";
import NavBarItem from "./NavBarItem";

//assets
import Logo from '../../../public/assets/Logo.png'

const NavBar = ({ elements }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`${
        isScroll
          ? "bg-[#2E875D] "
          : "bg-transparent  "
      } z-10 py-5 fixed top-0 left-[50%] -translate-x-[50%] w-full duration-[500ms]`}
    >
      <Layout>
        <section className="flex items-center justify-between">
          <Image alt="logo" className="max-w-[86px] h-auto" src={Logo}></Image>
          <div className="max-md:hidden">
            {typeof element === Array ? (
              elements.array.forEach((element) => {
                return (
                  <NavBarItem
                    key={element.id}
                    textColor={isScroll ? "text-[#000000]" : "text-white"}
                  ></NavBarItem>
                );
              })
            ) : (
              <div>
                <NavBarItem
                  textColor={isScroll ? "text-[#000000]" : "text-white"}
                >

                </NavBarItem>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </nav>
  );
};

export default NavBar;
