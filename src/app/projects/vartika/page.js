"use client";

import ImageGallery from "../../components/ImageGallery";

export default function ProjectGallery() {
  const vartikaImages = [
    {
      src: "/images/gallery/vartika/main.png",
      alt: "Main dashboard",
      description:
        "The main dashboard shows an overview of the client's financial activities.",
    },
    {
      src: "/images/gallery/vartika/login.png",
      alt: "Login screen",
      description: "Login page with secure authentication for accountants.",
    },
    {
      src: "/images/gallery/vartika/google_login.png",
      alt: "Google login",
      description:
        "Google account login for accessing synced client files from Google Drive.",
    },
    {
      src: "/images/gallery/vartika/client.png",
      alt: "Client management",
      description:
        "Manage client profiles, view history, and organize documents.",
    },
    {
      src: "/images/gallery/vartika/user.png",
      alt: "User settings",
      description:
        "Account settings for the self-employed accountant managing the platform.",
    },
    {
      src: "/images/gallery/vartika/contracts.png",
      alt: "Contracts page",
      description: "Review and manage service contracts and agreements.",
    },
    {
      src: "/images/gallery/vartika/invoices.png",
      alt: "Invoices management",
      description:
        "Centralized view of invoice history, status, and downloads.",
    },
    {
      src: "/images/gallery/vartika/financial.png",
      alt: "Financial report",
      description:
        "Detailed financial summaries from integrated platforms like QuickBooks.",
    },
    {
      src: "/images/gallery/vartika/transactions.png",
      alt: "Transactions",
      description: "View and verify incoming and outgoing transactions.",
    },
    {
      src: "/images/gallery/vartika/logs.png",
      alt: "Activity logs",
      description: "Track changes and access logs across the platform.",
    },
    {
      src: "/images/gallery/vartika/settings_authorize.png",
      alt: "Integration settings",
      description:
        "Authorize and configure third-party services such as CarbonAI and Google.",
    },
  ];

  return (
    <main>
      <ImageGallery
        images={vartikaImages}
        title={"Vartika - Finance Management System"}
        description={
          "Vartika is a centralized finance management system built for a self-employed accountant. It integrates with QuickBooks, CarbonAI, and Google Drive to simplify daily tasks and streamline workflows across platforms."
        }
      />
    </main>
  );
}
