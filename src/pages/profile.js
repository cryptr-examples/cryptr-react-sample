import React from 'react'
import { useCryptr } from '@cryptr/cryptr-react'

const Profile = () => {

  const {user: cryptrUser} = useCryptr()

  return (
    <div className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            This is a profile page
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">    
            {cryptrUser().email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile