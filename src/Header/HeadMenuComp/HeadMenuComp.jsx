import React from 'react'
import Logo from '../../assets/Icon/logo.png'

export const HeadMenuComp = (props) => {
    return (
        <div className='header__top'>
            <div className="header__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="head__menu">
                <ul className="menu__list">
                    <li className="menu__item"><a href="#">About</a></li>
                    <li className="menu__item"><a href="#">Services</a></li>
                    <li className="menu__item"><a href="#">Pricing</a></li>
                    <li className="menu__item"><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="contact__button">
                <div className="button">
                    <a href="#">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default HeadMenuComp