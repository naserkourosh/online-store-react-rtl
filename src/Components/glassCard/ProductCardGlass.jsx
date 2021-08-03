import React from 'react';
import './style.css';

export default function ProductCardGlass({src3="https://assets.codepen.io/4164355/shoes.png" , title ='کفش ورزشی' , price=20000}) {
    return (
        <div className="_container">
  <div className="_card">
    <div className="imgBx">
      <img className="image-fluid w-100 h-auto" src={src3} alt=""/>
    </div>
    <div className="contentBx">
      <h3>{title}</h3>
      <div className="size">
        <h3>Size :</h3>
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
      </div>
      <div className="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="#">خرید</a>
    </div>
  </div>
</div>
    )
}
