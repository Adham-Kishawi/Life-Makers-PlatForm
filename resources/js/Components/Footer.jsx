import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHandHoldingHeart
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="main-footer text-white pt-5">
      <div className="container">
        <div className="row">

        
          <div className="col-md-4 mb-4">
            <img src="/Images/logowhite.png" alt="logo" className="img-fluid mb-3" />
            <p className="text-center">
              مؤسسة صناع الحياة الإسماعيلية
              <br />
              نسعى لصناعة الأمل و بناء مجتمع أفضل
            </p>
          </div>

        
          <div className="col-md-4 mb-4 text-center">
            <h5 className="font-weight-bold mb-4">التبرع</h5>

            <div className="d-flex flex-column align-items-center mb-3">
              <FaHandHoldingHeart className="footer-icon mb-2" />
              <a href="#" className="footer-link">التبرع عبر الموقع</a>
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
              <FaHandHoldingHeart className="footer-icon mb-2" />
              <a href="#" className="footer-link">التبرع البنكي</a>
            </div>

            <div className="d-flex flex-column align-items-center">
              <FaHandHoldingHeart className="footer-icon mb-2" />
              <a href="#" className="footer-link">تبرع عيني</a>
            </div>
          </div>

          {/* تواصل معنا */}
          <div className="col-md-4 text-center">
            <h5 className="font-weight-bold mb-4">تواصل معنا</h5>

            <div className="d-flex flex-column align-items-center mb-3">
              <FaPhone className="footer-icon mb-2" />
              <span>16563</span>
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
              <FaEnvelope className="footer-icon mb-2" />
              <span>info@life.org</span>
            </div>

            <div className="d-flex flex-column align-items-center">
              <FaMapMarkerAlt className="footer-icon mb-2" />
              <span className="text-center">العشريني - بجوار كشري صبحي - الإسماعيلية</span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <a
            href="https://www.facebook.com/share/1Yc9JA2JEw/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon-link mx-3"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/life_makers_ismailia"
            target="_blank"
            rel="noreferrer"
            className="footer-icon-link mx-3"
          >
            <FaInstagram />
          </a>
        </div>

  
        <div className="text-center mt-4 pt-3 border-top border-light">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} صناع الحياة الإسماعيلية - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
