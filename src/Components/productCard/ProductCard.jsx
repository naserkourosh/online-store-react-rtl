import React from 'react';
import './styleCard.css';
import { BiShoppingBag,BiHeart,BiShow } from "react-icons/bi";

export default function ProductCard({src1,src2 , title ='دامن جین' , price=20000}) {
    return (
        
                    <div className="">
            <div className="product-grid">
                <div className="product-image">
                    
                        <img className="pic-1 image-fluid" src={src1} alt="" />
                        <img className="pic-2 image-fluid" src={src2}  alt=""/>
                    
                    <ul className="social">
                        <li><a href="" data-tip="بررسی سریع"><BiShow/></a></li>
                        <li><a href="" data-tip="علاقه مندی"><BiHeart/></a></li>
                        <li><a href="" data-tip="اضافه کردن به سبد"><BiShoppingBag/></a></li>
                    </ul>
                    {/* <span className="product-new-label">Sale</span> */}
                    <span className="product-discount-label"> 20% -</span>
                </div>
        
                <div className="product-content">
                    <h3 className="title">{title}</h3>
                    <div className="price"> {price.toLocaleString()} تومان
                        {/* <span>{price.toLocaleString()}</span> */}
                    </div>
                    <button className=" btn btn-success" href="">اضافه کردن به سبد خرید</button>
                </div>
            </div>
        </div>
     
     )
    }
    // console.log(ProductCard.price ,ProductCard.price.toLocaleString() )
