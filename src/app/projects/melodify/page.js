"use client";

import ImageGallery from "../../components/ImageGallery";

export default function ProjectGallery() {
  const melodifyImages = [
    {
      src: "/images/gallery/melodify/fav_list.png",
      alt: "Favorite list",
      description: "User's favorite songs are listed here for quick access.",
    },
    {
      src: "/images/gallery/melodify/forget_password.png",
      alt: "Forgot password",
      description: "Password recovery screen with email input field.",
    },
    {
      src: "/images/gallery/melodify/login.png",
      alt: "Login screen",
      description: "Melodify login screen with email and password inputs.",
    },
    {
      src: "/images/gallery/melodify/main_playing.png",
      alt: "Main playing screen",
      description:
        "Now playing screen with album art, playback controls, and lyrics.",
    },
    {
      src: "/images/gallery/melodify/main.png",
      alt: "Main screen",
      description:
        "Main screen with music categories and personalized recommendations.",
    },
    {
      src: "/images/gallery/melodify/music_playing.png",
      alt: "Music playing screen",
      description:
        "Detailed music playing UI with waveform and playback slider.",
    },
    {
      src: "/images/gallery/melodify/music.png",
      alt: "Music library",
      description: "Music library showing available tracks from the mock API.",
    },
    {
      src: "/images/gallery/melodify/profile.png",
      alt: "User profile",
      description: "Profile page with user info and account settings.",
    },
    {
      src: "/images/gallery/melodify/register.png",
      alt: "Register screen",
      description: "Register screen for new users to sign up.",
    },
    {
      src: "/images/gallery/melodify/search_keywords.png",
      alt: "Search by keywords",
      description: "Search results based on keywords with highlighted matches.",
    },
    {
      src: "/images/gallery/melodify/search.png",
      alt: "Search page",
      description: "Search interface with recent and suggested keywords.",
    },
  ];

  return (
    <main>
      <ImageGallery
        images={melodifyImages}
        title={"Melodify - Music Player App"}
        description={
          "Melodify is a React Native-based mobile music player using a mock API. It features song search, personalized playlists, user profile, and a clean, intuitive UI for music playback."
        }
      />
    </main>
  );
}
