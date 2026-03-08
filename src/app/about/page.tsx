"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-5 items-center">
          {/* Profile Image fill */}
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden 
            bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            >
              <Image width={300} height={200}
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dark Box with About Info */}
          <div className="bg-white/70 text-black dark:bg-black/70 dark:text-white  backdrop-blur-sm p-3 rounded-lg">
            <h1 className="text-4xl font-bold">Pranav Aditya</h1>
            <p className="text-lg">
              Software Developer
            </p>
            <p className="text-base leading-relaxed">
              👋 <strong>I'm Pranav Aditya</strong>, SDE at <strong>Kotak811</strong>.  <br />
              I hold a <strong>B.E. in Information Science</strong> from BMSIT, Bengaluru (CGPA: 8.96).
            </p>

            <p className="text-base mt-4">
              💻 <strong>Tech Stack:</strong> C/C++, Java, JavaScript, React, MongoDB, SpringBoot, MySQL, Firebase, Git.
            </p>

            <p className="text-base mt-2">
              🏀 Also interested in <strong>basketball, cricket, painting</strong>, and exploring <strong>anime & manga</strong>.
            </p>


            <div className="flex items-center gap-4 mt-4">
              <span className="font-medium text-lg">
                Resume:
              </span>

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
              Open to collaborations<br />— <strong>let's connect!</strong> 🚀
            </p>


            {/* <p className="text-lg mt-2">Connect with me:</p> */}
            <div className="flex items-center gap-4 text-lg">
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
              <a
                href="mailto:pranavaditya7@gmail.com"
                className="hover:text-blue-500"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Paintings Section */}
      <section className="w-full py-12 mt-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            My Paintings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              "/painting-3.jpg",
              "/painting-2.jpg",
              "/painting-1.jpg",
              "/painting1.jpg",
              "/painting2.jpg",
              "/painting3.jpg",
              "/painting4.jpg",
              "/painting5.png",
              "/painting6.png",
            ].map((src, i) => (

              <div
                key={i}
                className="relative aspect-square
                          rounded-xl
                          bg-white/20 dark:bg-white/10
                          border border-white/20
                          shadow-lg
                          flex items-center justify-center
                          p-6
                          hover:scale-[1.03]
                          transition">
                <Image
                  src={src}
                  alt={`Painting ${i}`}
                  width={320}
                  height={320}
                  className="object-contain max-h-full max-w-full rounded-md shadow-md"
                />
              </div>

            ))}

          </div>

        </div>
      </section>
    </main>
  );
}
