import React from 'react';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { LanguageProvider, useLanguage } from '../Context/LanguageContext';

function LayoutInner({ children }) {
  const { isRtl } = useLanguage();

  return (
    <div className="site-wrapper footer-respons" dir={isRtl ? 'rtl' : 'ltr'}>
      <Header />
      <Nav />
      <main className="main-content grow" style={{ minHeight: 'calc(100vh - 120px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function MainLayout({ children }) {
  return <LayoutInner>{children}</LayoutInner>;
}
