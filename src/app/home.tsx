"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
export default function HomePage() {

  return (
<main className="relative h-screen flex items-center justify-center scrollbar-hide">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Profile Image */}
      <div className="flex justify-center">
  <div className="relative w-64 h-64 rounded-full overflow-hidden 
    bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
    <Image width={300} height={200} 
      src="/profile.png" 
      alt="Profile" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      {/* Text Info + Resume */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pranav Aditya</h1>
        <p className="text-lg text-gray-900 dark:text-white">
          Software Developer | Passionate about building scalable applications.
        </p>
        <a  href="https://drive.google.com/uc?export=download&id=1lwdy_SVX0JetusxH26mmsHL10zBcAi_c" 
          download
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md 
          hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
        <p className="text-lg text-gray-900 dark:text-gray-300">
        Connect with me :
        </p>

        <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-gray-300 
  justify-center md:justify-start">

        <a  href="https://www.linkedin.com/in/pranav-aditya7/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30}/></a>
        <a  href="https://github.com/adi7pranav" target="_blank" rel="noopener noreferrer"> <FaGithub size={30}/></a>
        <a href="mailto:pranavaditya7@gmail.com" className="hover:text-blue-500"><FaEnvelope size={30} /></a>

        <div>

        </div>
        </div>
      </div>
     

    </div>
  </div>
</main>

  );
}
