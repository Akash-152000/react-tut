import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userId} = useParams()
  return (
    <div>
        <div className='text-center w-full bg-violet-700 text-3xl py-5 text-white'>
            User:{userId}
        </div>
    </div>
  )
}

export default Users