import React, { useState } from "react";
import "css/slider.css";

// slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

const Image = ({ src }) => {
  return (
    <li>
      <img alt="슬라이드 이미지" src={src} />
    </li>
  );
};

const Button = ({ currnetIndex, setCurrnetIndex, maxLength }) => {
  const handlePrevBtn = () => {
    if (currnetIndex === 0) setCurrnetIndex(maxLength - 1);
    else setCurrnetIndex((prev) => --prev);
  };

  const handleNextBtn = () => {
    if (currnetIndex === maxLength - 1) {
      setCurrnetIndex(0);
    } else {
      setCurrnetIndex((prev) => ++prev);
    }
  };
  return (
    <p>
      <button type="button" onClick={handlePrevBtn}>
        Prev
      </button>
      <button type="button" onClick={handleNextBtn}>
        Next
      </button>
    </p>
  );
};

const Slider = () => {
  const [currnetIndex, setCurrnetIndex] = useState(0);
  const images = [
    { id: 1, src: "images/sadcat01.jpeg" },
    { id: 2, src: "images/sadcat02.jpeg" },
    { id: 3, src: "images/sadcat03.jpeg" },
    { id: 4, src: "images/sadcat04.png" },
    { id: 5, src: "images/sadcat05.jpeg" },
    { id: 6, src: "images/sadcat06.jpeg" },
    { id: 7, src: "images/sadcat07.png" },
  ];

  return (
    <div className="slideshow">
      <Image src={images[currnetIndex].src} />
      <Button
        currnetIndex={currnetIndex}
        setCurrnetIndex={setCurrnetIndex}
        maxLength={images.length}
      />
    </div>
  );
};

export default Slider;
