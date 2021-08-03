import React from 'react';
import Cat1 from './cat1.webp';
import Cat2 from './cat2.webp';
import Cat3 from './cat3.jpg';
import Cat4 from './cat4.webp';
import Cat5 from './cat5.jpg';
import Cat6 from './cat6.jpg';

export default function HomeSection() {
    return (
        <div class="container my-5">
        <div class="row">
            <div class="col-2">
                <div class="container ">
                  <img src={Cat1} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">کژوال</p>
            </div>
            <div class="col-2">
                <div class="container ">
                  <img src={Cat2} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">مردانه</p>
            </div>
            <div class="col-2">
                <div class="container ">
                  <img src={Cat3} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">اکسسوری</p>
            </div>
            <div class="col-2">
                <div class="container ">
                  <img src={Cat4} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">مجلسی</p>
            </div>
            <div class="col-2">
                <div class="container ">
                  <img src={Cat5} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">راحتی</p>
            </div>
            <div class="col-2">
                <div class="container ">
                  <img src={Cat6} alt="" className="img-fluid rounded"/>
                </div>
                <p className="text-center fw-bold mt-2">لباس زیر</p>
            </div>
        </div>
    </div>
    )
}
