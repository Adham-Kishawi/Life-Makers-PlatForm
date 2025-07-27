import React from "react";
import Switch from "./Switch";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow nav-logo">
    
      {/* <a className="navbar-brand brand-mobile" href="#">
        صناع الحياة
        <br />
        <span className="nav_ismailia">الإسماعيلية</span>
      </a> */}
       <Link className=" brand-mobile mr-1" to="/">
  <img src="/Images/logo.png" alt="ll" style={{ width: "120px", height: "auto", }} />
</Link>


     <li className="nav-item  mr-5"style={{ listStyle: "none" }}>
            <Link className="nav-link login-btn d-lg-none nav-log" to="/login"style={{ width: "100%" }}>  خليك صنعاوي </Link>
          </li>
      <div className="mr-auto  d-lg-none Switch-mobile">
        <Switch />
      </div>

     
          
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              الرئيسية <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">عن المؤسسة</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">تواصل معنا</a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              ملفاتنا
            </a>
            <div className="dropdown-menu custom-dropdown">
              <a className="dropdown-item" href="#"><i className="fas fa-file-alt mr-2"></i> الدعم و التواصل</a>
              <Link className="dropdown-item" to="Attraction"><i className="fas fa-chart-line mr-2"></i> الجذب</Link>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> هنوصلك</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> الميديا</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> أنشطة الاطفال</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> المعاض</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> ضبط العضويه</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> قدوة</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> تنمية</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> المنح و الشراكات</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> إداره الحالة</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> تمويل</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> تنفيذ</a>
              <a className="dropdown-item" href="#"><i className="fas fa-chart-line mr-2"></i> التوعية</a>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link login-btn d-none d-lg-block ml-2 " to="/login">خليك صنعاوي</Link>
          </li>
        </ul>

    
        <div className="d-none d-lg-block ml-2">
          <Switch />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
