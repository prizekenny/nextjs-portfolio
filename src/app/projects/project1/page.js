"use client";

import ImageGallery from "../../components/ImageGallery";

export default function ProjectGallery() {
  const images = [
    { src: "/images/gallery/ft550/home.png", alt: "ft550 home page" },
    { src: "/images/gallery/ft550/login.png", alt: "ft550 login page" },
    { src: "/images/gallery/ft550/merge.png", alt: "ft550 merge page" },
  ];

  return (
    <main>
      <ImageGallery images={images} />
    </main>
  );
}
