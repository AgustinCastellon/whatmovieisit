import React from 'react'
import { FaStar } from 'react-icons/fa'

export const BackGroundWinGame = () => {
  return (
    <ul className="starIconBg px-15 py-10">
          {[...Array(20)].map((_, i) => (
            <li key={i}><FaStar className='filmItem' /></li>
          ))}
        </ul>

  )
}
