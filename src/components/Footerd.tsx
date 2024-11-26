"use client";

import React from 'react'
import { Footer } from "flowbite-react";

function Footerd() {
  return (

    <Footer container className='shadow-md bg-gray-100 dark:bg-gray-800'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="../../public/icons/photo.avif"
            alt="Bhupendra Logo"
            name="Bhupendra"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Bhupendra" year={2024} />
      </div>
    </Footer>
  )
}

export default Footerd
