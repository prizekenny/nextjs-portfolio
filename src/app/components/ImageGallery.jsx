"use-client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageGallery({ images }) {
  // React Slick 配置选项
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
            <p
              style={{
                position: "absolute",
                top: "20px",
                transform: "translateX(10)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {image.alt}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
