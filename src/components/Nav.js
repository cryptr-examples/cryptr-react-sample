import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-screen-xl pt-3 md:pt-4 lg:pt-5 px-4 sm:px-6">
        <div className="flex justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Link className="flex-shrink-0 flex items-center" to="/">
              <img
                className="h-12 w-auto"
                src="https://images.prismic.io/shark-academy%2F76b9fccf-b146-4c3d-a068-a96c07d61085_logo_shark_academy__no_spacing.svg?auto=compress,format"
                alt="Shark academy logo"
              />
              <div className="hidden lg:block">
                <div className="flex flex-wrap uppercase w-40 ml-3 text-base">
                  <span className="text-gray-900 font-bold">Shark academy</span>
                  <span className="text-gray-600">Tech bootcamp</span>
                </div>
              </div>
            </Link>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <Link
                to="/profile"
                className="ml-4 px-3 py-2 rounded-md text-base font-medium leading-5 text-red-200 hover:text-gray-900 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
                >Profile
              </Link>
            </div>
          </div>
          <button type="button"
            className="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out">
            Login
          </button>
          {/* <button type="button"
            className="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out">
            Logout
          </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav