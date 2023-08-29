import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const ProfilePage = () => {
  return (
    <div className="justify-center flex items-start"><UserProfile /></div>
  )
}

export default ProfilePage