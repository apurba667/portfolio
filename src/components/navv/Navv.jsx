import React, { useState, useEffect } from "react";
import "./navv.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navv = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
  
    const options = {
      root: null, // Use the viewport
      threshold: 0.2, // Trigger when 20% of the section is visible
      rootMargin: "0px 0px -50px 0px", // Adjust for smaller screens
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null, // Use the viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <IoHomeOutline />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaRegUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdOutlineMessage />
        </a>
      </nav>
    </>
  );
};

export default Navv;
