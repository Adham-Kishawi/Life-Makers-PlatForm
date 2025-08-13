import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex justify-content-between align-items-center">

   
        <div className="d-flex align-items-center">
          <span className="d-flex align-items-center ml-3">
            <FaMapMarkerAlt className="text-white" />
            <span className="ml-1">العشريني بجوار كشري صبحي</span>
          </span>

          <span className="d-flex align-items-center ml-3">
            <FaPhone className="text-white" />
            <span className="ml-1">16563</span>
          </span>
        </div>


        <div className="d-flex align-items-center header-icon">
         <a href="https://www.instagram.com/life_makers_ismailia?igsh=dWxndHVoMDI5OXl2" target="_blank" rel="noreferrer"  className="text-white ml-3">
            <FaInstagram />
          </a>
            <a href="https://www.facebook.com/share/1Yc9JA2JEw/" target="_blank" rel="noreferrer"  className="text-white ml-2">
<FaFacebookF />
            </a>
          
            
         
        </div>

      </div>
    </header>
  );
}

export default Header;
