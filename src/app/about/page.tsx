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
  👋 <strong>I'm Pranav Aditya</strong>, SDE at <strong>Moneyview</strong>.  <br/>
  I hold a <strong>B.E. in Information Science</strong> from BMSIT, Bengaluru (CGPA: 8.96).
</p>

<p className="text-base mt-4">
  💻 <strong>Tech Stack:</strong> C/C++, Java, JavaScript, React, MongoDB, SpringBoot, MySQL, Firebase, Git.
</p>

<p className="text-base mt-2">
  🏀 Also interested in <strong>basketball, cricket, painting</strong>, and exploring <strong>anime & manga</strong>.  
</p>


<a
              href="https://drive.google.com/uc?export=download&id=1lwdy_SVX0JetusxH26mmsHL10zBcAi_c"
              download
              className="inline-block px-6 py-2 mt-2 bg-blue-600 text-white rounded-lg shadow-md 
              hover:bg-blue-700 transition-all"
            >
              Download Resume
            </a>
<p className="text-base mt-4">
  📢 Passionate about tech, problem-solving & innovation.  
  Open to collaborations<br/>— <strong>let's connect!</strong> 🚀
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
      <section className="w-fullbg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded py-12 mt-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            My Paintings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Replace with your actual painting Image fill URLs */}
            <Image width={300} height={200} src="/painting1.jpg" alt="Painting 1" className="rounded-lg shadow-md" />
            <Image width={300} height={200} src="/painting2.jpg" alt="Painting 2" className="rounded-lg shadow-md" />
            <Image width={300} height={200} src="/painting3.jpg" alt="Painting 3" className="rounded-lg shadow-md" />
            <Image width={300} height={200} src="/painting4.jpg" alt="Painting 4" className="rounded-lg shadow-md" />
            <Image width={300} height={200} src="/painting5.png" alt="Painting 4" className="rounded-lg shadow-md" />
            <Image width={300} height={200} src="/painting6.png" alt="Painting 4" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
}
