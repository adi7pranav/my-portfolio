"use client";
import React from "react";
import {FaGithub } from "react-icons/fa";
import Image from "next/image";

interface AchievementProps {
  title: string;
  subtitle: string;
  techStack: string;
  projectLink: string;
  desc: string;
  imageSrc: string;
}

const ProjectDetails: React.FC<AchievementProps> = ({
  title,
  subtitle,
  techStack,
  projectLink,
  desc,
  imageSrc,
}) => {
  return (
    <div className="my-8 w-[80%] max-w-lg mx-auto flex flex-col justify-center">
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg flex justify-between max-w-[500px] ">
        <div className="flex  justify-center flex-col md:flex-col gap-1 w-full max-w-[300px]">
          {/* Image */}
          <div className="flex justify-center flex-col gap-2 w-full max-w-[300px]">
          <Image width={300} height={200}
          alt = "project preview"
          src={`https://opengraph.githubassets.com/1/adi7pranav/${imageSrc}`}
          className="h-auto aspect-[16/9] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
          />
            </div>
          

          {/* Text Content */}
          <div>
            <h3 className="capitalize font-bold text-xl flex items-center underline underline-offset-4">
              {title}<br/>
              
            </h3>
            <h4 className="capitalize font-bold text-base flex items-center">
            {subtitle}
            </h4>
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
            <p className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg">{desc}</p>
            <a  href={projectLink} target="_blank"
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
    <main className="relative min-h-screen transition-all duration-5000 text-black dark:text-white pt-24 pb-20">
      <h2 className="font-bold text-6xl w-full text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
          <ProjectDetails
            title="Zero Waste"
            subtitle="Request and Donation App"
            techStack="Java, Android Studio, Firebase"
            projectLink="https://github.com/adi7pranav/Zero-Waste"
            imageSrc="Zero-Waste"
            desc = "Zero-Waste is a Java-based app that connects donors with individuals in need, reducing goods waste and promoting community support. Users can list or request items, while Google Maps integration ensures seamless donation delivery. Built with Firebase for real-time data and secure authentication, it fosters sustainability, empathy, and resource sharing"
            />
          <ProjectDetails
            title="P.A.W.S."
            subtitle="Pet Adoption and Welfare System"
            techStack="HTML, CSS, JS, PHP, MySQL"
            projectLink="https://github.com/adi7pranav/PAWS-Pet_Adoption_and_Welfare_System"
            imageSrc="PAWS-Pet_Adoption_and_Welfare_System"
            desc="PAWS - Pet Adoption and Welfare System is a user-friendly platform designed to facilitate pet adoption and welfare. Built with HTML, CSS, JavaScript, PHP, and MySQL on an Apache server (XAMPP), it connects pet seekers with adopters, ensuring a seamless adoption process while promoting responsible pet care and welfare. 🐾"
            />
          <ProjectDetails
            title="Saarthi"
            subtitle="Road Sign Detection and Alert System"
            techStack="Python, Numpy, OpenCV"
            projectLink="https://github.com/adi7pranav/Saarthi-Traffic-Sign-Detection-and-Alert-System"
            imageSrc="Saarthi-Traffic-Sign-Detection-and-Alert-System"
            desc = "Saarthi - Road Sign Detection and Alert System is a project aimed to alert drivers about roadside traffic signs they may miss or not recognize. Developed as a project that won PBL Open Day Runner-Up, the app enhances road safety by providing real-time sign detection and alert, ensuring better awareness and compliance. 🚦🚗"
            />
      </div>
    </main>
  );
}
