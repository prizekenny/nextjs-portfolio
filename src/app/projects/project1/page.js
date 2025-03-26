"use client";

import ImageGallery from "../../components/ImageGallery";

export default function ProjectGallery() {
  const ft550Images = [
    {
      src: "/images/gallery/ft550/home.png",
      alt: "ft550 home page",
      description:
        "FT550 home page shows two synchronized camera feeds, highlighting the LED mapping interface.",
    },
    {
      src: "/images/gallery/ft550/login.png",
      alt: "ft550 login page",
      description:
        "Login page for FT550 system with user authentication and simple UI design.",
    },
    {
      src: "/images/gallery/ft550/merge.png",
      alt: "ft550 merge page",
      description:
        "Merge page combines data from multiple cameras for enhanced sorting accuracy.",
    },
  ];

  return (
    <main>
      <ImageGallery
        images={ft550Images}
        title={"LED Mapping Sorter - FT550"}
        description={
          "FT550 is a high-precision LED mapping sorter system. The UI showcases live dual-camera feeds and supports real-time merge and login functionality."
        }
      />
    </main>
  );
}
