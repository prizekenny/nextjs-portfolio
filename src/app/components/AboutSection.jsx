"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

let introductionPara1 =
  "I am a software engineer with over 14 years of experience specializing in C++ " +
  "desktop development. My background includes creating high-performance desktop " +
  "applications and managing complex software projects. Currently, I am expanding " +
  "my skill set through the Software Development Program at SAIT, with a focus on " +
  "modern technologies.";
let introductionPara2 =
  "I am seeking part-time software development opportunities while also offering free " +
  "services to small businesses and startups, including the development of websites, " +
  "mobile apps, and desktop applications. I am eager to connect, contribute, and help " +
  "businesses grow their digital presence. If you're interested in collaborating or " +
  "have any opportunities, feel free to contact me!";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++/Qt/MFC</li>
        <li>Python</li>
        <li>React/Next.js</li>
        <li>C#</li>
        <li>Java</li>
        <li>SQL</li>
        <li>Machine Vision/Halcon/VisionPro/OpenCV</li>
        <li>Motion Control</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Southern Alberta Institute of Technology</li>
        <li>Wuhan University of Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Ultimate AWS Certified Cloud Practitioner CLF-C02</li>
        <li>The Ultimate React Course 2024: React, Redux&More </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {introductionPara1}
            <br></br>
            <br></br>
            {introductionPara2}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
