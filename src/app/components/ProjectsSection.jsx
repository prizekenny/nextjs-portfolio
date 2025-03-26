"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LED Chip Mapping Sorter",
    description:
      "FT550 is a high-precision LED chip mapping sorter for industrial automation.",
    image: "/images/gallery/ft550/home.png",
    tag: ["All", "Desktop"],
    gitUrl: "/projects/project1",
    previewUrl: "/projects/project1",
  },
  {
    id: 2,
    title: "Melodify - Music Player App",
    description:
      "Melodify is a React Native-based mobile music player using a mock API. It features song search, personalized playlists, user profile, and a clean, intuitive UI for music playback.",
    image: "/images/gallery/melodify/main.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/prizekenny/melodify",
    previewUrl: "/projects/melodify",
  },
  {
    id: 3,
    title: "Lingualens - AI Translation App",
    description:
      "Lingualens is a React Native mobile app that uses AI to detect objects in a photo and provides instant translations, helping users learn new vocabulary in context.",
    image: "/images/gallery/lingualens/objects.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/prizekenny/lingualens",
    previewUrl: "/projects/lingualens",
  },
  {
    id: 4,
    title: "Vartika - Finance Management App",
    description:
      "Vartika is a desktop finance management app developed for a small accounting firm. It centralizes tasks from QuickBooks, CarbonAI, and Google Drive to simplify daily workflows.",
    image: "/images/gallery/vartika/main.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prizekenny/vartika",
    previewUrl: "/projects/vartika",
  },
  {
    id: 5,
    title: "Quiz",
    description: "A simple quiz website",
    image: "/images/projects/quiz.png",
    tag: ["All", "Web"],
    gitUrl: "https://quiz-xi-lac.vercel.app/",
    previewUrl: "https://quiz-xi-lac.vercel.app/",
  },
  {
    id: 6,
    title: "Movie Search",
    description: "A movie search demo",
    image: "/images/projects/movie-search.png",
    tag: ["All", "Web"],
    gitUrl: "https://search-movie-six.vercel.app/",
    previewUrl: "https://search-movie-six.vercel.app/",
  },
  {
    id: 7,
    title: "Map View",
    description:
      "A map viewer to add some marks on map and record the location",
    image: "/images/projects/map-view.png",
    tag: ["All", "Web"],
    gitUrl: "https://map-view-phi.vercel.app/",
    previewUrl: "https://map-view-phi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
