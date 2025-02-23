"use client";
import React from "react";

interface AchievementProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
  imageSrc1: string;
  imageSrc2: string;
}

const AchievementDetails: React.FC<AchievementProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  imageSrc1,
  imageSrc2,
}) => {
  return (
    <div className="my-8 w-[80%] max-w-lg mx-auto flex flex-col justify-center">
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg flex justify-between max-w-[500px] max-h-[700px] ">
        <div className="flex  justify-center flex-col md:flex-col gap-1">
          {/* Image */}
          <div className="flex justify-center flex-col gap-2">
            <img
              src={imageSrc1}
              className="w-auto h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />

          {imageSrc2 && (
              <img
                src={imageSrc2}
                className="w-auto h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            )}
            </div>
          

          {/* Text Content */}
          <div>
            <h3 className="capitalize font-bold text-lg sm:text-xl flex items-center underline underline-offset-4">
              {position}
              
            </h3>
            
            {/* <a href={companyLink} target="_blank" rel="noopener noreferrer"> */}
               {company}
              {/* </a> */}
              <br/>
            <span className="capitalize text-lg sm:text-lg text-dark/75">
              {time} | {address}
            </span>
            

            {/* Work List */}
            {/* <ul className="list-disc pl-5 mt-2 space-y-2 text-xl">
          {work.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul> */}
           <p className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-3 rounded-lg">{work}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Achievements() {
  return (
    <main className="relative min-h-screen transition-all duration-5000 dark:text-white pt-24 pb-20">
      <h2 className="font-bold text-6xl w-full text-center">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
          <AchievementDetails
            position="Best Student of Institute"
            company="BMSIT & M"
            companyLink="https://google.com"
            time="March 2024"
            address="Bengaluru"
            imageSrc1="./awardSoty.jpg"
            imageSrc2="./awardSoty3.png"
            work="Recognized as the Best Student of the Institute for outstanding academic performance, leadership, and contributions to the college community."
            />
           <AchievementDetails
            position="National Winner"
            company="Smart India Hackathon"
            companyLink="https://google.com"
            time="Aug 2022"
            address="Komarapalayam"
            imageSrc1="./awardSih.jpg"
            imageSrc2="./awardSih2.jpg"
            work="Part of team that won in India’s largest hackathon, solving real-world problems with innovation, competing against top national teams."
            />
          <AchievementDetails
            position="International Siver Medal"
            company="SOF Cyber Olympiad"
            companyLink="https://google.com"
            time="2018"
            address="Delhi"
            imageSrc1="./awardSof.jpg"
            imageSrc2="./awardSof2.jpg"
            work="Secured International 2nd Rank in the Science Olympiad Foundation’s Cyber Olympiad, showcasing excellence in computational and analytical skills."
            />
      </div>

      <h2 className="font-bold text-6xl mb-8 w-full text-center">
        Co-Curricular
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
          <AchievementDetails
            position="2 Times, 1st Runner UP"
            company="VTU  State Quiz"
            companyLink="https://google.com"
            time="2021, 2022"
            address="Bengaluru"
            imageSrc1="./awardQuiz.jpg"
            imageSrc2="./awardQuiz2.jpg"
            work="Achieved 1st runner-up position twice in the VTU State Quiz Championship, competing against top university teams in technical and general knowledge quizzes."
            />
           <AchievementDetails
            position="Resource Person"
            company="Open Course on Programming for IT"
            companyLink="https://google.com"
            time="12th-16th June 2023"
            address="BMSIT & M"
            imageSrc1="./openCourse1.png"
            imageSrc2="./openCourse2.jpg"
            work="Served as a resource person, mentoring students in programming fundamentals, algorithms, and problem-solving as part of an open IT course."
            />
          <AchievementDetails
            position="Coordinator, Quiz Club"
            company="BMSIT & M"
            companyLink="https://google.com"
            time="2023"
            address="Bengaluru"
            imageSrc1="./quizCoord1.jpg"
            imageSrc2="./quizCoord2.jpg"
            work="Coordinated the college quiz club, organizing competitions like Quizzardry and training students for inter-collegiate and national quiz events."
            />
            <AchievementDetails
            position="First, City School Science Quiz"
            company="BMSIT & M"
            companyLink="https://google.com"
            time="2017"
            address="Patna"
            imageSrc1="./cityQuiz.jpg"
            imageSrc2="./cityQuiz2.jpg"
            work="Won first place in a prestigious city-wide science quiz, demonstrating deep knowledge and quick thinking."
            />
          <AchievementDetails
            position="Qualified RMO"
            company="Homi Bhabha Centre for Science Education"
            companyLink="https://olympiads.hbcse.tifr.res.in/"
            time="2018"
            address="Patna"
            imageSrc2="./RMO.jpg"
            imageSrc1="./RMO2.png"
            work="Selected for the RMO, one of Indias most competitive mathematics contests, showcasing advanced problem-solving abilities"
            />
            <AchievementDetails
            position="NCC A Certificate"
            company="No.1 Bihar Air Sqn."
            companyLink="https://olympiads.hbcse.tifr.res.in/"
            time="2016"
            address="Patna"
            imageSrc1="./NCCA.png"
            imageSrc2=""
            work="Earned the NCC 'A' Certificate, demonstrating discipline, leadership, and commitment to service under the Indian National Cadet Corps (Air Wing)."
            />
      </div>
    </main>
  );
}
