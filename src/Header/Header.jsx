import React from 'react'
import Title from '../Title/Title'
import HeadMenuComp from './HeadMenuComp/HeadMenuComp'

export const Header = (props) => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__row">

          <HeadMenuComp />
        </div>
        <Title className="title" />
        <div className="header__text">
          <span>
            Agency provides a full service range including technical skills, design,<br/> business understanding.
          </span>
        </div>
      </div>
    </div>
  )
}


export default Header