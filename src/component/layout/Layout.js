import React from 'react'
import Header from '.../header/Header'
import Footer from '../footer/Footer'

export default function Layouts({children}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
