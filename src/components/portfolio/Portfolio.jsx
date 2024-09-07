import React from "react";
import "./portfolio.css";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import portfolio from "../../assets/portfolio.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import porfolio3 from "../../assets/porfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import porfolio5 from "../../assets/porfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: portfolio,
    title: "Deals and Discount A multi Vendor E-commerce Apps Android and IOS",
    appstore: "https://apps.apple.com/us/app/deals-and-discounts/id6503248591",
    playstore: "https://play.google.com/store/apps/details?id=com.dandd.app",
  },
  {
    id: 2,
    image: portfolio2,
    title:
      " I Concert Management System where I user can buy tickets, Artiest can upload musics, and Promotor can arrange an event and scan the tickets.",
    appstore: "https://apps.apple.com/in/app/music-event/id1637486648",
    playstore:
      "https://play.google.com/store/apps/details?id=app.musicevent.mobile",
  },
  {
    id: 3,
    image: porfolio3,
    title:
      "Petopia BD, where users can adopt any pet, buy pet accessories, and access pet treatment services.",
    appstore: null,
    playstore: null,
  },
  {
    id: 4,
    image: portfolio4,
    title: "Printer BD A service-related application.",
    appstore: null,
    playstore: null,
  },
];
const data2 = [
  {
    webbid: 1,
    images: porfolio5,
    titles: "Music Event Web Admin Panel.",
  },
  {
    webbid: 2,
    images: portfolio6,
    titles: "An office management Windows application.",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <h5 className="skills">My Recent Work</h5>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row gapp mt-4">
            {data.map(({ id, image, title, playstore, appstore }) => {
              return (
                <div key={id} className="col-lg-3 col-sm-6">
                  <div className="porfolio-img">
                    <img src={image} className="w-100" alt={title} />
                    <h5>{title}</h5>
                    <div className="app-store">
                      {playstore && (
                        <a className="btnn app" href={playstore}>
                          <IoLogoGooglePlaystore /> Play Store
                        </a>
                      )}
                      {appstore && (
                        <a className="btnn btnn-primary app" href={appstore}>
                          <FaAppStoreIos /> App Store
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {data2.map(({ webbid, images, titles }) => {
              return (
                <div key={webbid} className="col-lg-6 col-md-6">
                  <div className="porfolio-img-desktop">
                    <img src={images} className="w-100" alt={titles} />
                    <h5>{titles}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
