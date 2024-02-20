import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My E-cart
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                <i class="far fa-shopping-cart"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar