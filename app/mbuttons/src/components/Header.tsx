/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { FiCoffee, FiGithub, FiMoreVertical } from 'react-icons/fi'
import MenuToggler from './MenuToggler'
import vars from '../vars'

interface HeaderPropsType {
  activePage: string | null
  showMenuButton: boolean
}

function Header({
  activePage = null,
  showMenuButton = false,
}: HeaderPropsType) {
  return (
    <nav className="shadow-sm py-5 dark:bg-gray-600 bg-white dark:text-white transition-colors duration-100">
      <div className="container flex flex-row mx-auto px-4">
        {showMenuButton && <MenuToggler />}
        <Link
          href="/"
          className={`lg:w-2/12 ${showMenuButton ? 'w-4/12' : 'w-4/12'}`}
        >
          <img src={`${vars.path}/logo-colored.png`} alt="Logo" />
        </Link>
        <div className="md:flex hidden items-center lg:w-6/12">
          <Link
            href="/documentation"
            className={
              'block border-b-2 border-transparent hover:border-blue-600 mr-3 ml-4 text-xl text-gray-600 dark:text-white' +
              (activePage === 'documentation' ? ' border-blue-600' : '')
            }
          >
            Documentation
          </Link>
          <Link
            href="/examples"
            className={
              'block border-b-2 border-transparent hover:border-blue-600 mx-3 text-xl text-gray-600 dark:text-white' +
              (activePage === 'examples' ? ' border-blue-600' : '')
            }
          >
            Examples
          </Link>
        </div>
        <div className="justify-end flex items-center lg:w-4/12 md:w-2/12 w-4/12 md:mx-0 mr-0 ml-auto">
          <a
            href="https://github.com/sButtons/sbuttons"
            target="_blank"
            className="hover:opacity-100 opacity-40 px-3 transition-none"
          >
            <FiGithub size="1.5rem" />
          </a>
          <a
            href="https://www.buymeacoffee.com/shahednasser"
            target="_blank"
            className="hover:opacity-100 opacity-40 px-3 transition-none"
            title="Buy Me a Coffee"
          >
            <FiCoffee size="1.5rem" />
          </a>
          <button className="block group md:hidden px-3 relative focus:outline-none align-text-bottom">
            <FiMoreVertical
              size="1.5rem"
              className="hover:opacity-100 opacity-40 transition-none"
            />
            <div className="absolute bg-gray-100 w-52 dark:bg-gray-700 group-hover:block group-focus:block hidden right-1.5 shadow-md top-9">
              <Link
                className="block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left"
                href="/documentation"
              >
                Get Started
              </Link>
              <Link
                className="block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left"
                href="/examples"
              >
                Examples
              </Link>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
