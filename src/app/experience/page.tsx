"use client";
import { useRef } from "react";
import LiIcon from "@/components/liIcon";
import Image from "next/image";
import Timeline from "@/components/timeline/component"
import TimelineItem from "@/components/timeline/item"

// Define Props for Experience
interface ExperienceProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
}

const ExpDetails: React.FC<ExperienceProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  return (
    <>
      <div>
        <h3 className="capitalize font-bold text-base sm:text-xl lg:text-2xl">
          {position}{" "}
          <a href={companyLink} target="_blank" rel="noopener noreferrer">
            @ {company}
          </a>
        </h3>

        <span className="capitalize text-sm sm:text-lg text-dark/75">
          {time} | {address}
        </span>
      </div>

      <div className="mt-3 bg-white/30 dark:bg-black/30 backdrop-blur-sm p-3 rounded-lg">
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base lg:text-lg leading-relaxed">
          {work.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
};



// Define Props for Education
interface EducationProps {
  degree: string;
  course?: string;
  institute: string;
  instituteLink?: string;
  time: string;
  address: string;
  marks: string;
}

const EduDetails: React.FC<EducationProps> = ({
  degree,
  course,
  institute,
  instituteLink,
  time,
  address,
  marks,
}) => {
  return (
    <div>
      <h3 className="capitalize font-bold text-base sm:text-xl lg:text-2xl">
        {degree}{" "}
        {instituteLink ? (
          <a href={instituteLink} target="_blank" rel="noopener noreferrer">
            @ {institute}
          </a>
        ) : (
          `@ ${institute}`
        )}
      </h3>

      <span className="capitalize text-sm sm:text-lg text-dark/75">
        {course && (
          <>
            {course}
            <br />
          </>
        )}
        {time} | {address} | {marks}
      </span>
    </div>
  );
};



// Main Experience Component
export default function Experience() {
  return (
    <main className="relative min-h-screen transition-all duration-300 text-black dark:text-white pt-24 pb-20">

      {/* EXPERIENCE */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl mb-8 w-full text-center">
          Experience
        </h2>

        <Timeline>

          <TimelineItem imageSrc="/mv1.jpg">
            <ExpDetails
              position="SDE"
              company="Moneyview"
              companyLink="https://moneyview.in/"
              time="July, 2024 - Present"
              address="Bengaluru, India"
              work={[
                "Contributed to the creation of the BNPL flow for iOS PWA users, ensuring smooth backend integration while handling edge cases in purchase details fetching and lead creation.",
                "Sanitized invalid documents in S3, fixed incorrect extensions, and back-populated data using Python.",
                "Developed generic APIs for document upload/download to S3 with file validation and duplicate checks.",
                "Collaborated with the frontend team to implement invoice upload functionality supporting dealer approval configurations.",
                "Implemented AOP with custom annotations for fine-grained API access control based on dealerId and schemeId.",
              ]}
            />
          </TimelineItem>

          <TimelineItem imageSrc="/mv1.jpg">
            <ExpDetails
              position="Intern"
              company="Moneyview"
              companyLink="https://moneyview.in/"
              time="Feb 2024 - Jun 2024"
              address="Bengaluru, India"
              work={[
                "Enhanced BNPL feature with dynamic interest rate selection.",
                "Developed AddOn Service feature enabling dealer-provided services like VAS and Insurance.",
                "Created Python scripts for large-scale merchant onboarding.",
                "Designed modular reward system supporting fixed and percentage discounts.",
                "Implemented account lock feature with Slack alert automation.",
              ]}
            />
          </TimelineItem>

        </Timeline>
      </div>

      {/* EDUCATION */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl mb-8 w-full text-center">
          Education
        </h2>

        <Timeline>

          <TimelineItem imageSrc="/bmsit.jpg">
            <EduDetails
              degree="B.E"
              course="Information Science"
              institute="BMS IT & M"
              time="June 2024"
              address="Bengaluru, India"
              marks="CGPA: 8.96"
            />
          </TimelineItem>

          <TimelineItem imageSrc="/gn.jpg">
            <EduDetails
              degree="XIIᵗʰ"
              course="PCM"
              institute="Gyan Niketan"
              time="Apr 2019"
              address="Patna"
              marks="Perc: 85.8%"
            />
          </TimelineItem>

          <TimelineItem imageSrc="/gn.jpg">
            <EduDetails
              degree="Xᵗʰ"
              institute="Gyan Niketan"
              time="Apr 2017"
              address="Patna"
              marks="CGPA: 10"
            />
          </TimelineItem>

        </Timeline>
      </div>

    </main>
  );
}
