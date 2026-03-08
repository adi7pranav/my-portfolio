"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden
              bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            >
              <Image
                src="/profile.png"
                alt="Profile"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur-sm p-6 rounded-lg shadow-lg">

            <h1 className="text-4xl font-bold">Pranav Aditya</h1>

            <p className="text-lg mt-2">
              SDE <b>@Kotak811</b><br></br>Passionate about building scalable applications.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
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

            {/* Social Links */}
            <p className="text-lg mt-6">Connect with me:</p>

            <div className="flex items-center gap-4 mt-2 text-lg">
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
    </main>
  );
}
