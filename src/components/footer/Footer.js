import React from 'react';
import 'tw-elements';

const Footer = () => {
  return(
    <div>
        <footer className="border-t border-gray-200">
      <div
        className="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div
          className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <div className="flex mt-4">
            <input
              type="text"
              className="
                h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
                rounded-l-lg
              "
              placeholder="Your email address"
            />
            <button className="h-auto p-3 text-xs text-white bg-black rounded-r-lg">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center mt-4 lg:mt-2">
            
            <a className="ml-4 mt-4" href="https://twitter.com/bennetts_" target="_blank">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-7 h-7 text-blue-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a className="ml-4 mt-4" href="https://www.instagram.com/bennetts_/" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-7 h-7 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
            BRANDS
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Yeezy</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Air Jordan</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Adidas</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Nike</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">New Balance</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
            COMPANY
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Careers</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">About Us</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Blogs</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Privacy Policy</a>
              </li>
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
            CONTACT
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a href="/#" className="text-black hover:text-darkGrayishBlue">help@bennetts.store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-base text-gray-400">
        All rights reserved by @2022 Bennetts
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer