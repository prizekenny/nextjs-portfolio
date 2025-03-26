"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageGallery({ images, title, description }) {
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
    <div style={{ width: "80%", margin: "0 auto", position: "relative" }}>
      {/* 顶部项目描述 */}
      {title && (
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <h2>{title}</h2>
          {description && (
            <p
              style={{
                maxWidth: "700px",
                margin: "10px auto",
                fontSize: "16px",
                color: "#444",
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* 样式调整箭头大小 */}
      <style>
        {`
          .slick-prev, .slick-next {
            width: 60px;
            height: 60px;
            z-index: 1;
          }
          .slick-prev:before, .slick-next:before {
            font-size: 40px;
          }
        `}
      </style>

      {/* 图集轮播 */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 的比例 = 9/16 = 0.5625
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "contain" }}
              />
              {/* 右上角的alt提示 */}
              <p
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {image.alt}
              </p>
            </div>
            {/* 下方描述文字 */}
            <div
              style={{
                fontSize: "15px",
                color: "#555",
                padding: "0 20px",
                marginBottom: "30px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {image.description}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
