import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Header() {
  return (
<header className="site-header">
  <div className="container d-flex justify-content-between align-items-center">
    <div className="header-left">
      <span>
        <FaMapMarkerAlt className="text-white" />
        <span>العشريني بجوار كشري صبحي</span>
      </span>

      <span>
        <FaPhone className="text-white" />
        <span>16563</span>
      </span>
    </div>

    <div className="header-right">
      <a href="https://www.instagram.com/life_makers_ismailia" target="_blank" rel="noreferrer" className="text-white">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/share/1Yc9JA2JEw/" target="_blank" rel="noreferrer" className="text-white">
        <FaFacebookF />
      </a>
    </div>
  </div>
</header>

  )
}

export default Header;
