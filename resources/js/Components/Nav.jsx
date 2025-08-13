import React from "react";
import Switch from "./Switch";
import { Link, usePage } from "@inertiajs/react";

function Nav() {
  const { committee } = usePage().props

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow nav-logo">

      {/* <a className="navbar-brand brand-mobile" href="#">
        صناع الحياة
        <br />
        <span className="nav_ismailia">الإسماعيلية</span>
      </a> */}
      <Link className=" brand-mobile mr-1" href="/">
        <img src="/Images/logo.png" alt="ll" style={{ width: "120px", height: "auto", }} />
      </Link>


      <li className="nav-item  mr-5" style={{ listStyle: "none" }}>
        <Link className="nav-link login-btn d-lg-none nav-log" href="/login" style={{ width: "100%" }}>  خليك صنعاوي </Link>
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
            <Link className="nav-link" href="/">
              الرئيسية <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/About">عن المؤسسة</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Contact">تواصل معنا</Link>
          </li>

          {committee ?
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
                {committee.map((item, index) =>
                  <Link key={index} className="dropdown-item" href={`/committee/${item.name}`}>{item.name}</Link>
                )}
              </div>
            </li>
            : null}

          <li className="nav-item">
            <Link className="nav-link login-btn d-none d-lg-block ml-2" href="/Login">خليك صنعاوي</Link>
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
