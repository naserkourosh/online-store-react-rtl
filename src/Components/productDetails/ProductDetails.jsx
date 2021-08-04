import React from "react";

export default function ProductDetails() {
  return (
    <section className="container mb-5">
      <nav ariaLabel="breadcrumb" className="m-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-6  mb-2">
          <div className="mdb-lightbox">
            <div className="row product-gallery mx-1">
              <div className="col-12 mb-0 ">
                <figure className=" view overlay rounded z-depth-1 main-img ">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    data-size="710x823">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                      className="img-fluid w-100 h-auto rounded z-depth-1"
                    />
                  </a>
                </figure>
                <figure
                  className=" view overlay rounded z-depth-1"
                  style="display:none;">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    data-size="710x823">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                      className="img-fluid  rounded z-depth-1"
                    />
                  </a>
                </figure>
                <figure
                  className="view overlay rounded z-depth-1"
                  style="display: none;">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                    data-size="710x823">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                      className="img-fluid rounded z-depth-1"
                    />
                  </a>
                </figure>
                <figure
                  className="view overlay rounded z-depth-1"
                  style="display: none;">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    data-size="710x823">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                      className="img-fluid rounded z-depth-1"
                    />
                  </a>
                </figure>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <div className="view overlay rounded z-depth-1 gallery-item shadow">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                        className="img-fluid rounded"
                      />
                      <div className="mask rgba-white-slight"></div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="view overlay rounded z-depth-1 gallery-item shadow">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                        className="img-fluid rounded"
                      />
                      <div className="mask rgba-white-slight"></div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="view overlay rounded z-depth-1 gallery-item shadow">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                        className="img-fluid rounded"
                      />
                      <div className="mask rgba-white-slight"></div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="view overlay rounded z-depth-1 gallery-item shadow">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                        className="img-fluid rounded"
                      />
                      <div className="mask rgba-white-slight"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <h5>بلوز مردانه</h5>
          <p className="mb-4 text-muted text-uppercase small">
            توضیحات اجمالی و کوتاه
          </p>

          <p>
            <span className="mr-4 my-5 text-danger">
              <strong className=" fs-2">264,000 </strong>تومان
            </span>
          </p>
          <p className="pt-1 my-5">
            توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات
            و ویژگی های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی
            های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل
            محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل
            محصول توضیحات و ویژگی های کامل محصول
          </p>

          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>مدل</strong>
                  </th>
                  <td>Shirt 5407X</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>رنگ</strong>
                  </th>
                  <td>آبی</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>سایز</strong>
                  </th>
                  <td>Large</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className=" my-4">
            <div className="mt-1">
              <span>انتخاب سایز :</span>
              <div className="form-check form-check-inline pl-0">
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  for="small">
                  S
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="small"
                  name="materialExampleRadios"
                  checked
                />
              </div>

              <div className="form-check form-check-inline pl-0">
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  for="medium">
                  M
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="medium"
                  name="materialExampleRadios"
                />
              </div>

              <div className="form-check form-check-inline pl-0">
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  for="large">
                  L
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="large"
                  name="materialExampleRadios"
                />
              </div>
              <div className="form-check form-check-inline pl-0">
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  for="large">
                  XL
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="large"
                  name="materialExampleRadios"
                />
              </div>
              <div className="form-check form-check-inline pl-0">
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  for="large">
                  XXL
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="large"
                  name="materialExampleRadios"
                />
              </div>
            </div>
          </div>

          <div className=" my-4">
            <div className="row mt-1 ">
              <div className="col-2">انتخاب رنگ :</div>
              <div
                className="col-1 rounded-circle mx-2 bg-dark "
                style="width: 1.6rem; height: 1.6rem;"></div>
              <div
                className="col-1 rounded-circle mx-2 bg-info "
                style="width: 1.6rem; height: 1.6rem;"></div>
              <div
                className="col-1 rounded-circle mx-2 bg-danger "
                style="width: 1.6rem; height: 1.6rem;"></div>
              <div
                className="col-1 rounded-circle mx-2 bg-success "
                style="width: 1.6rem; height: 1.6rem;"></div>
              <div
                className="col-1 rounded-circle mx-2 bg-primary "
                style="width: 1.6rem; height: 1.6rem;"></div>
              <div
                className="col-1 rounded-circle mx-2 bg-warning "
                style="width: 1.6rem; height: 1.6rem;"></div>
            </div>
          </div>

          <button type="button" className="btn btn-primary btn-md mr-1 my-4">
            میخرم
          </button>
          <button type="button" className="btn btn-light btn-md my-4">
            <i className="fas fa-shopping-cart pr-2"></i>اضافه کردن به سبد خرید
          </button>
        </div>
      </div>





      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true">
            توضیحات محصول
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false">
            مشخصات کامل
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">
            نظرات کاربران
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab">
          <p className="pt-1 my-2">
            توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات
            و ویژگی های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی
            های کامل محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل
            محصول توضیحات و ویژگی های کامل محصول توضیحات و ویژگی های کامل
            محصول توضیحات و ویژگی های کامل محصول
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab">
          ...
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab">
          ...
        </div>
      </div>
    </section>
  );
}
