"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function IntroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 items-center">
      
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden 
        bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
          <Image
            src="/profile.png"
            alt="Profile"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur-sm p-6 md:p-8 rounded-lg">

        <h1 className="text-4xl font-bold">Pranav Aditya</h1>

        <p className="text-lg">Software Developer</p>

        <p className="text-base leading-relaxed">
          👋 <strong>I'm Pranav Aditya</strong>, SDE at <strong>Kotak811</strong>. <br/>
          I hold a <strong>B.E. in Information Science</strong> from BMSIT, Bengaluru (CGPA: 8.96).
        </p>

        <p className="text-base mt-4">
          💻 <strong>Tech Stack:</strong> C/C++, Java, JavaScript, React, MongoDB, SpringBoot, MySQL, Firebase, Git.
        </p>

        <p className="text-base mt-2">
          🏀 Also interested in <strong>basketball, cricket, painting</strong>, and exploring <strong>anime & manga</strong>.
        </p>

        {/* Resume Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <span className="font-medium text-lg">Resume:</span>

          <a
            href="/Pranav_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
          >
            Preview
          </a>

          <a
            href="/Pranav_resume.pdf"
            download
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download
          </a>
        </div>

        <p className="text-base mt-4">
          📢 Passionate about tech, problem-solving & innovation.  
          Open to collaborations — <strong>let's connect!</strong> 🚀
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg mt-3">

          <a
            href="https://www.linkedin.com/in/pranav-aditya7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/adi7pranav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          <a href="mailto:pranavaditya7@gmail.com">
            <FaEnvelope size={30} />
          </a>

        </div>
      </div>

    </div>
  );
}
