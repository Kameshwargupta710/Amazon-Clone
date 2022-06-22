import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            key="1"
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
            rating={3}
          ></Product>
          <Product
            key="2"
            id="2"
            title="Portable Bluetooth Speaker, Wireless IP67 Waterproof Outdoor Speaker with Subwoofer, 16W Louder Volume, Longer Playtime, Bluetooth 5.0, Dual Pairing, Portable Speaker for Party Beach Camping, Black"
            price={39.99}
            image="https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_SY741_.jpg"
            rating={4}
          ></Product>
        </div>

        <div className="home__row">
          <Product
            key="3"
            id="3"
            title="ViewSonic OMNI VX2718-P-MHD 27 Inch 1080p 1ms 165Hz Gaming Monitor with Adaptive Sync, Eye Care, HDMI and DisplayPort"
            price={179}
            image="https://m.media-amazon.com/images/I/61w-B0nzVvL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          ></Product>
          <Product
            key="4"
            id="4"
            title="X9 Performance Multimedia USB Keyboard Wired - Take Control of Your Media - Full Size Keyboard with Wrist Rest and 114 Keys (10 Media and 14 Shortcut Keys) - Wired Computer Keyboard for Laptop and PC"
            price={33}
            image="https://m.media-amazon.com/images/I/71JP-KkjEcL._AC_SX679_.jpg"
            rating={4}
          ></Product>
          <Product
            key="5"
            id="5"
            title="SUHSAI External Hard Drive, 2.0 USB Slim and Light Weight Portable Hardrive for Computer, Laptop, PC, Games, Mac, Chromebook (320GB, White)"
            price={17.99}
            image="https://m.media-amazon.com/images/I/51R83sknAXL._AC_SX679_.jpg"
            rating={3}
          ></Product>
        </div>

        <div className="home__row">
          <Product
            key="6"
            id="6"
            title="Insignia 55-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-55F301NA22, 2021 Model)"
            price={300}
            image="https://m.media-amazon.com/images/I/81j8q14PMGL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
