"use client";

import ImageGallery from "../../components/ImageGallery";

export default function ProjectGallery() {
  const lingualensImages = [
    {
      src: "/images/gallery/lingualens/home.png",
      alt: "Home screen",
      description:
        "The home screen provides quick access to scan, upload, and view translations.",
    },
    {
      src: "/images/gallery/lingualens/objects.png",
      alt: "Object detection view",
      description:
        "AI detection view shows bounding boxes and labels of objects recognized from the photo.",
    },
    {
      src: "/images/gallery/lingualens/upload.png",
      alt: "Upload image",
      description:
        "Users can upload images from gallery for object detection and translation.",
    },
    {
      src: "/images/gallery/lingualens/search.png",
      alt: "Search feature",
      description:
        "Search interface allows users to look up words and view previous results.",
    },
    {
      src: "/images/gallery/lingualens/settings.png",
      alt: "Settings screen",
      description:
        "Settings page allows users to change language preferences and app configurations.",
    },
    {
      src: "/images/gallery/lingualens/favorites_list.png",
      alt: "Favorites list",
      description:
        "A list of saved translated items that the user marked as favorites.",
    },
    {
      src: "/images/gallery/lingualens/translation_card.png",
      alt: "Translation result card",
      description:
        "Detailed translation card showing detected object, original word, and translated meaning.",
    },
  ];

  return (
    <main>
      <ImageGallery
        images={lingualensImages}
        title={"Lingualens - AI Translation App"}
        description={
          "Lingualens is a React Native mobile app that uses AI to detect objects in a photo and provides instant translations. It helps users learn new words in context, through real-life images and a visual vocabulary experience."
        }
      />
    </main>
  );
}
