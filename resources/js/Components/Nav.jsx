import React from "react";
import Switch from "./Switch";
import { Link, usePage } from "@inertiajs/react";

function Nav() {
  const { committee } = usePage().props;

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light shadow">
      {/* Logo */}
      <Link className="navbar-brand brand-mobile nav-logo" href="/">
        <img
          src="/Images/logo.png"
          alt="logo"
          style={{ width: "120px", height: "auto" }}
        />
      </Link>


      <div className="d-flex align-items-center order-lg-3 nav-actions">
        <Link className="btn login-btn" href="/Login">
          خليك صنعاوي
        </Link>
        <div className="switch-wrapper ml-2">
          <Switch />
        </div>
      </div>


      <button
        className="navbar-toggler order-lg-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>


      <div
        className="collapse navbar-collapse justify-content-center order-lg-1"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav text-center">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              الرئيسية <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/About">
              عن المؤسسة
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Contact">
              تواصل معنا
            </Link>
          </li>

          {committee ? (
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
              <div className="dropdown-menu custom-dropdown text-right">
                {committee.map((item, index) => (
                  <Link
                    key={index}
                    className="dropdown-item"
                    href={`/committee/${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
