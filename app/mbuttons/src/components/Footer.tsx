/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { GiDropletSplash } from 'react-icons/gi'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-gray-700 dark:bg-gray-600 text-white dark:text-white py-6 px-5 mt-3">
      <div className="container text-center mx-auto">
        <p>
          Made with <AiFillHeart className="align-middle inline text-red-600" size="1.3rem" /> and <GiDropletSplash className="align-middle inline text-blue-600" size="1.3rem"/> by
          <a href="https://tpmusic.dev" target="_blank" className="ml-1 align-middle underline underline-offset-4">A community of newbie developers.</a>
        </p>
        <p className="mt-4">
          <a href="https://github.com/sButtons/sbuttons" target="_blank" className="px-2 hover:opacity-50">
            <FiGithub className="align-middle inline" size="1.3rem" />
          </a>
          <a href="https://twitter.com/shahednasserr" target="_blank" className="px-2 hover:opacity-50">
            <FiTwitter className="align-middle inline" size="1.3rem" />
          </a>
          <a href="https://instagram.com/shahednasser95" target="_blank" className="px-2 hover:opacity-50">
            <FiInstagram className="align-middle inline" size="1.3rem" />
          </a>
          <a href="https://www.linkedin.com/in/shahed-nasser-7494b3140/" target="_blank" className="px-2 hover:opacity-50">
            <FiLinkedin className="align-middle inline" size="1.3rem" />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer