import React from 'react'

export default function PayForm() {
    return (
        <>
        <div className="container">
        <header className="text-center py-5">
            <img src="https://cdn.dribbble.com/users/559871/screenshots/6750143/welt_drbl.png" width="240" height="140" className="mb-4 rounded" alt=""/>
            <h2>فرم پرداخت</h2>
           <p className="lead">
                مثال زیر به طور کامل با کنترل‌های فرم بوت استرپ ساخته شده است.
                هر بخش از فرم دارای حالت اعتبارسنجی است که با ارسال فرم، در صورت تکمیل نکردن آن فعال می‌شود.
            </p>
        </header>
        <main>
        <div className="row">
            <div className="col-md-4 order-md-2 mb-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">سبد خرید شما</span>
                    <span className="badge badge-pill badge-secondary">۳</span>
                </h4>
                <ul className="list-group mb-3 px-0">
                    <li className="list-group-item d-flex justify-content-between py-2">
                        <div>
                            <h6 className="mb-0">نام محصول</h6>
                            <small className="text-muted">توضیح کوتاه</small>
                        </div>
                        <span className="text-muted">۱۲ تومان</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between py-2">
                        <div>
                            <h6 className="mb-0">محصول دوم</h6>
                            <small className="text-muted">توضیح کوتاه</small>
                        </div>
                        <span className="text-muted">۸ تومان</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between py-2">
                        <div>
                            <h6 className="mb-0">محصول سوم</h6>
                            <small className="text-muted">توضیح کوتاه</small>
                        </div>
                        <span className="text-muted">۵ تومان</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between py-2 bg-light">
                        <div className="text-success">
                            <h6 className="mb-0">کد تخفیف</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">-۵ تومان</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between py-2">
                        <span>مجموع (تومان)</span>
                        <strong>۲۰ تومان</strong>
                    </li>
                </ul>
                <form className="p-2 card">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="کد تخفیف" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">اعمال</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-8">
                <h4 className="mb-3">آدرس صورتحساب</h4>
                <form>
                    <div className="row">
                        <div className="form-group col-md">
                            <label>نام</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md">
                            <label>نام خانوادگی</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>نام کاربری</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>ایمیل <span className="text-muted"> (اختیاری)</span></label>
                        <input type="email" className="form-control" placeholder="you@example.com" />
                    </div>
                    <div className="form-group">
                        <label>نشانی</label>
                        <input type="text" className="form-control" placeholder="خیابان اصلی ۱۲۳۴" />
                    </div>
                    <div className="form-group">
                        <label>نشانی ۲ <span className="text-muted"> (اختیاری)</span></label>
                        <input type="text" className="form-control" placeholder="آپارتمان یا واحد" />
                    </div>
                    <div className="row pt-3">
                                    <div className="form-group col-md-5">
                                       
                                        <select className="form-select">
                                            <option>انتخاب کشور ...</option>
                                            <option>ایران</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                       
                                        <select className="form-select">
                                            <option selected>انتخاب استان ...</option>
                                            <option>تهران</option>
                                            <option>اصفهان</option>
                                            <option>خراسان رضوی</option>
                                            <option>گلستان</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                    
                                        <input type="text" className="form-control" placeholder="کد پستی" />
                                    </div>
                                </div>
                    <hr className="mb-3" />
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="address" />
                        <label className="custom-control-label" for="address">نشانی حمل و نقل با نشانی صورتحساب من یکی است</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="save" />
                        <label className="custom-control-label" for="save">این اطلاعات را برای دفعه‌ی بعد ذخیره کن</label>
                    </div>
                    <hr className="mb-3" />
                    <h4 className="mb-3">روش پرداخت</h4>
                    <div className="mb-3">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="credit" name="method" checked />
                            <label className="custom-control-label" for="credit">پرداخت آنلاین</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="debit" name="method" />
                            <label className="custom-control-label" for="debit">پرداخت در محل</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="paypal" name="method" />
                            <label className="custom-control-label" for="paypal">واریز به حساب</label>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg btn-block">ادامه و پرداخت</button>
                </form>
            </div>
        </div>
    </main>
    </div>
    </>
    )
}
