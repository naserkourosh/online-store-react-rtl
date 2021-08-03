import React from 'react';
import { FaUserAlt, FaShoppingCart,FaAngleDown} from "react-icons/fa";
import Logo from './logo.png';

export default function MenuTop() {
    return (
        <header className="container ">
            
        <div className="row justify-content-between align-items-center menu-top">
            <div className="col-2 ">
                <span className="navbar-brand" >
                <img src={Logo} alt="" />
                </span>
            </div>


            <nav className="col-6 offset-2">
                  <ul className="d-flex flex-row justify-content-between navbar-nav">
                      <li className="nav-item"><span className="nav-link">خانه</span></li>
                      <li className="nav-item"><span className="nav-link">منو1</span></li>
                      <li className="nav-item"><span className="nav-link">منو2</span></li>
                      <li className="nav-item"><span className="nav-link">منو3 <FaAngleDown/></span></li>
                      <li className="nav-item"><span className="nav-link">منو4 <FaAngleDown/></span></li>
                  </ul>
              </nav>

   
            <div className="col-1 ">
                <div className="row flex-nowrap justify-content-center">
                    <div className="user">
                        <span><FaUserAlt/></span>
                    </div>
                    <div className="basket">
                        <span><FaShoppingCart/></span>
                    </div>
                </div>

            </div>
        </div>

       
    </header>
    )
}
