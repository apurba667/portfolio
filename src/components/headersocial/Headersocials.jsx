import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Headersocials = () => {
  return (
    <>
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/apurba-roy-4a7a871a0/" target='_blank'><FaLinkedin/></a>
        <a href="https://www.instagram.com/the_apurba" target='_blank'><FaInstagram/></a>
        <a href="https://github.com/apurba667" target='_blank'><FaGithub/></a>

    </div>
    </>
  )
}

export default Headersocials