import React from 'react'

function Footer() {
    const year=new Date().getFullYear();
  return (
      
    <>
    <footer>
        <p>Copyright © {year}.... Created By: You know who I am</p>
    </footer>
    </>
  );
}

export default Footer;