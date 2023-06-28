/* eslint-disable import/no-absolute-path */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'

import logo from '../../assets/images/navbar/logo.svg'
import hamburger from '../../assets/images/navbar/menu.svg'

const Navbar = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <div className="mb-[32px] flex w-full flex-row items-center justify-between gap-[80px] px-[20px] py-[20px] md:mb-0 md:mb-[96px] md:px-[40px] lg:mb-[0px] lg:justify-center">
      <Link
        className="hidden max-w-[125px] flex-1 text-[24px] font-light tracking-widest lg:flex"
        to={'/Produtos'}
      >
        Produtos
      </Link>
      <Link to={'/'}>
        <img
          className=" max-w-[220px] flex-1 md:max-w-[300px] lg:max-w-[403px]"
          src={logo}
          alt="Kangen-Navbar-Logo"
        />
      </Link>
      <Link
        className="hidden max-w-[190px] flex-1 text-[24px] font-light tracking-widest lg:flex"
        to={'/AguaKangen'}
      >
        Água Kangen
      </Link>
      <img
        onClick={() => toggleMenu(!menu)}
        className="w-[40px] md:w-[50px] lg:hidden"
        src={hamburger}
        alt="Kangen-Navbar-Menu"
      />
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ translateX: 400 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ translateX: 400 }}
            className="fixed right-0 top-0 z-10 h-[100vh] w-[50%] glass-background menu-border md:w-[30%]"
          >
            <div className="relative flex h-full w-full flex-col gap-[32px] px-[24px] py-[48px] md:gap-[48px] md:py-[96px]">
              <Link className="text-[16px] font-medium md:text-[24px]" to={'/'}>
                Home
              </Link>
              <Link
                className="text-[16px] font-medium md:text-[24px]"
                to={'/Produtos'}
              >
                Produtos
              </Link>
              <Link
                className="text-[16px] font-medium md:text-[24px]"
                to={'/AguaKangen'}
              >
                Água Kangen
              </Link>
              <AiFillCloseCircle
                onClick={() => toggleMenu(!menu)}
                className="absolute right-[8px] top-[24px] w-[40px] scale-150 md:right-[16px] md:top-[32px] md:w-[50px] md:scale-[2] lg:hidden "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
