import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <main
        className="my-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"
      >
        <div
          className="mb-3 flex flex-row justify-center lg:justify-start items-center"
        >
          <img
            className="h-8 mr-3 w-auto"
            src="https://cryptruserui.cdn.prismic.io/cryptruserui/6de0dd81-4722-4fa1-91f2-4c944ed6e346_React_full_color_logo.svg"
            alt="React logo"
          />
          <span style={{color: "#61DAFB"}} className="font-bold text-xs">
            Built with React
          </span>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h2
              className="mt-1 text-3xl tracking-tight text-gray-900 font-normal sm:leading-snug sm:text-5xl lg:text-3xl xl:text-4xl"
            >
              Cryptr authentication
              <br className="hidden md:inline" />
              <span className="capitalize font-black inline-block">Sample project </span>
            </h2>
            <p
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              This is a sample application that demonstrates an authentication with <a target="_blank" rel="noreferrer" className="underline text-blue-600 hover:text-blue-800" href="https://www.cryptr.co/">Cryptr</a>, using React
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <button
                className="cursor-pointer mx-auto sm:mx-0 sm:mr-8 md:mr-10 rounded-md shadow flex items-center justify-center px-8 py-3 border border-transparent text-sm leading-6 font-bold shadow-md rounded-md uppercase text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:border-yellow-500 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-3 md:text-base md:px-10"
              >
                Signup
              </button>
              <div className="mt-3 sm:mt-0">
                <a
                  href="mailto:hamid@sharkup.studio?subject=A propos de Shark academy&body=Bonjour Hamid,"
                  className="w-full flex justify-center lg:justify-start py-3 underline text-sm leading-6 font-bold uppercase text-gray-800 hover:text-gray-600 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-base"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full lg:max-w-md">
              <div type="button" className="relative block w-full overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.prismic.io/shark-academy%2Fd4e6dd24-d3bb-4a24-8f8c-c208bdc9d70e_home_page__illustration_header_home.svg?auto=compress,format"
                  alt="Shark academy home"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Available demos */} 
        <div className="w-full flex flex-col justify-center mt-8">
          <a href="https://www.cryptr.co/" className="mx-auto cursor-pointer">
            <img
              className="h-12"
              src="https://prismic-io.s3.amazonaws.com/cryptrfront/77a9da58-aed9-4db1-b625-8b289726e767_cryptr_logo_authentication.svg"
              alt="Cryptr logo authentication"
            />
          </a>
          <p className="text-center text-sm text-gray-500 mb-3 mt-4">
            Available SDKs for
          </p>
          <div className="flex flex-row justify-center space-x-8">
            <a target="_blank" rel="noreferrer" href="https://docs.cryptr.co/docs/getting-started/single-page-applications/react/authentication">
              <img
                className="h-6"
                src="https://prismic-io.s3.amazonaws.com/cryptrfront/474fe2f5-fae7-49f2-949f-37c158319aa7_react_gray_logo.svg"
                alt="React logo"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://docs.cryptr.co/docs/getting-started/single-page-applications/vue/authentication">
              <img
                className="h-6"
                src="https://prismic-io.s3.amazonaws.com/cryptrfront/beb75fb2-d750-4b11-ad9c-5cfc656a93c9_vue_gray_logo.svg"
                alt="Vue logo"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://docs.cryptr.co/docs/getting-started/single-page-applications/angular/authentication">
              <img
                className="h-6"
                src="https://prismic-io.s3.amazonaws.com/cryptrfront/5c22a6f6-6306-492b-bbdc-9bbcb9e54c08_angular_gray_logo.svg"
                alt="Angular logo"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home