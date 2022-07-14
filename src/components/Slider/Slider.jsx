import { useState } from "react";
import { BtnSlider } from "../BtnSlider/BtnSlider";
import images from "./dataSlider";
import "./Slider.css";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }

      return prev - 1;
    });
  };

  const nextSlide = () => {
    setSlideIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const selectSlide = (idx) => {
    setSlideIndex(idx);
  };

  return (
    <div className="container-slider">
      <div className="container-image">
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.url}
            alt={`Photo by ${img.artist}`}
            className={`slider-img ${slideIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
      <BtnSlider handleClick={prevSlide} direction="prev" />
      <BtnSlider handleClick={nextSlide} direction="next" />

      <div className="container-dots">
        {Array.from({ length: images.length }).map((item, index) => (
          <button
            key={index}
            type="button"
            tabIndex={0}
            onClick={() => selectSlide(index)}
            className={`dot ${slideIndex === index ? "active" : ""}`}></button>
        ))}
      </div>
    </div>
  );
};
