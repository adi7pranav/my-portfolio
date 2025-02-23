"use client";
import React from "react";
import {FaGithub } from "react-icons/fa";

interface AchievementProps {
  title: string;
  techStack: string;
  projectLink: string;
  desc: string;
  imageSrc: string;
}

const ProjectDetails: React.FC<AchievementProps> = ({
  title,
  techStack,
  projectLink,
  desc,
  imageSrc,
}) => {
  return (
    <div className="my-8 w-[80%] max-w-lg mx-auto flex flex-col justify-center">
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg flex justify-between max-w-[500px] ">
        <div className="flex  justify-center flex-col md:flex-col gap-1">
          {/* Image */}
          <div className="flex justify-center flex-col gap-2">
            <img
              src={imageSrc}
              className="w-auto h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            </div>
          

          {/* Text Content */}
          <div>
            <h3 className="capitalize font-bold text-xl flex items-center underline underline-offset-4">
              {title}
              
            </h3>
            {/* <a href={projectLink} target="_blank" rel="noopener noreferrer">
               {title}
              </a><br/> */}
            <span className="capitalize text-lg sm:text-lg text-dark/75 italic">
              {techStack}
            </span>
            

            {/* Work List */}
            {/* <ul className="list-disc pl-5 mt-2 space-y-2 text-xl">
          {work.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul> */}
            <p>{desc}</p>
            <a  href="https://drive.google.com/uc?export=download&id=1S7AZiGgHmBMOLLYEgdw_xyINgygdmfvK" 
  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md 
             hover:bg-blue-700 transition-all dark:bg-orange-600"
>
  <FaGithub /> View Github Link →
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <main className="relative min-h-screen transition-all duration-5000 dark:text-white pt-20 pb-20">
      <h2 className="font-bold text-6xl mb-8 w-full text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
          <ProjectDetails
            title="Zero Waste"
            techStack="Java, Android Studio, Firebase"
            projectLink="https://google.com"
            imageSrc="./awardSoty.jpg"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est sem, cursus at dapibus eu, elementum ac sem. Mauris eget massa semper libero lacinia posuere. Vivamus ultrices ex ornare est sagittis feugiat."          
            />
          <ProjectDetails
            title="Best Student of Institute"
            techStack="BMSIT & M"
            projectLink="https://google.com"
            imageSrc="./awardSoty.jpg"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est sem, cursus at dapibus eu, elementum ac sem. Mauris eget massa semper libero lacinia posuere. Vivamus ultrices ex ornare est sagittis feugiat."          
            />
          <ProjectDetails
            title="Best Student of Institute"
            techStack="BMSIT & M"
            projectLink="https://google.com"
            imageSrc="./awardSoty.jpg"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est sem, cursus at dapibus eu, elementum ac sem. Mauris eget massa semper libero lacinia posuere. Vivamus ultrices ex ornare est sagittis feugiat."          
            />
      </div>
    </main>
  );
}
