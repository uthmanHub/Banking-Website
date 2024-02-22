import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", refLink: "/" },
    { name: "Features", refLink: "#features" },
    { name: "Testimonial", refLink: "#testimonial" },
    { name: "Pricing", refLink: "#pricing" },
    { name: "Blog", refLink: "#blog" },
    { name: "Contact", refLink: "#contact" },
  ];

  return (
    <>
        <nav className=' flex justify-between items-center   '>
          <div className='py-5 text-color-secondary font-bold text-3xl'>
            <Link href={"/"}>
              <span className='text-color-white'>Uthman</span>
              <span className='hidden md:inline'>Code.</span>
            </Link>
          </div>

          <div className='hidden lg:inline-block'>
            <ul className={` lg:flex items-center space-x-6`}>
              {links.map(({ name, refLink }, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={refLink}
                      className='hover:text-color-secondary ease-in duration-200 '
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button className='btn'>Free trial</button>
              </li>
            </ul>
          </div>

          {/* mobile */}
          <div className='lg:hidden'>
            <div
              id='hamburger'
              className={`lg:hidden ${showMenu ? "hidden" : ""}`}
            >
              <AiOutlineMenu
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              />
            </div>

            <div
              className={`lg:hidden cursor-pointer ${
                showMenu ? "" : "hidden"
              } bg-color-white w-fit p-5 pt-3 absolute right-8 top-4 z-50 rounded-lg text-color-primary`}
            >
              <div
                id='hamburger'
                className={`lg:hidden ${
                  showMenu ? "" : "hidden"
                } flex justify-end`}
              >
                <AiOutlineClose
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                />
              </div>
              <ul className='grid gap-10'>
                {links.map(({ name, refLink }) => {
                  return (
                    <li key={name}>
                      <Link
                        href={refLink}
                        onClick={() => setShowMenu(false)}
                        className='hover:text-color-secondary ease-in duration-200 '
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <button className='btn text-color-white'>Free trial</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default NavBar;
