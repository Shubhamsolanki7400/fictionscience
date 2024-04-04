import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <ul className='list-item'>
            <li>
                Home
            </li>
            <li>
                Genre
            </li>
            <li>
                Leader Board
            </li>
            <li>
                Daily Quiz
            </li>
            <li>
                Logout
            </li> 
        </ul>
    </div>
    <div className='navbar1'>
    <ul className='list-item1'>
            <li>
                Fantasy
            </li>
            <li>
                Adventure
            </li>
            <li>
                Mystery
            </li>
            <li>
                Science
            </li>
            <li>
                History
            </li> 
            <li>
                Sports
            </li> 
        </ul>
    </div>
    </>
    
    
  )
}

export default Navbar