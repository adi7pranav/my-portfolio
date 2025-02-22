"use client";
import { useRef } from "react";
import LiIcon from "@/components/liIcon";

// Define Props for Experience
interface ExperienceProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
  imageSrc: string;
}

const ExpDetails: React.FC<ExperienceProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  imageSrc,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col justify-between">
      <LiIcon reference={ref} />
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg">
        <div className="flex justify-start items-start gap-4 left-16">
          {/* Image */}
          <img src={imageSrc} alt="Company Logo" className="w-[55px] h-[55px] rounded-[10px] object-cover" />

          {/* Text Content */}
          <div>
            <h3 className="capitalize font-bold text-lg sm:text-2xl flex items-center">
              {position}&nbsp;
              <a href={companyLink} target="_blank" rel="noopener noreferrer">
                @ {company}
              </a>
            </h3>
            <span className="capitalize text-lg sm:text-xl text-dark/75">
              {time} | {address}
            </span>
          </div>
        </div>

        {/* Work List */}
        <ul className="list-disc pl-5 mt-2 space-y-2 text-xl">
          {work.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </li>
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
  imageSrc: string;
}

const EduDetails: React.FC<EducationProps> = ({
  degree,
  course,
  institute,
  instituteLink,
  time,
  address,
  marks,
  imageSrc,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col justify-between">
      <LiIcon reference={ref} />
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-3 rounded-lg">
        <div className="flex justify-start items-start gap-4 left-16">
          {/* Image */}
          <img src={imageSrc} alt="Institute Logo" className="w-[55px] h-[55px] rounded-[10px] object-cover" />

          {/* Text Content */}
          <div>
            <h3 className="capitalize font-bold text-lg sm:text-2xl flex items-center">
              {degree}&nbsp;
              {instituteLink ? (
                <a href={instituteLink} target="_blank" rel="noopener noreferrer">
                  @ {institute}
                </a>
              ) : (
                `@ ${institute}`
              )}
            </h3>
            <span className="capitalize text-xl text-dark/75">
              {course?.trim() ? <>{course} <br /></> : null}
              {time} | {address} | {marks}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

// Main Experience Component
export default function Experience() {
  return (
    <main className="relative min-h-screen transition-all duration-5000 dark:text-white pt-20 pb-20">
      <div className="relative flex-row items-center justify-center">
        <h2 className="font-bold text-6xl mb-16 w-full text-center">Experience</h2>
        <div className="w-[90%] mx-auto relative">
          <ul>
            <ExpDetails
              position="SDE"
              company="Moneyview"
              companyLink="https://moneyview.in/"
              time="July, 2024 - Present"
              address="Bengaluru, India"
              imageSrc="./mv1.jpg"
              work={[
                "Contributed to the creation of the BNPL flow for iOS PWA users, ensuring smooth backend integration while handling edge cases in purchase details fetching and lead creation, improving system stability.",
                "Sanitized invalid documents in S3, fixed incorrect extensions, and back-populated data using Python.",
                "Developed generic APIs for document upload/download to S3 with file type validation (PDF, PNG, JPG, JPEG), duplicate checks, and support for multiple document types (Invoice, DeliveryOrder, KFS) with the flexibility to add more document types as needed.",
                "Collaborated with the frontend team to implement invoice upload functionality, supporting various approval requirements (Disabled, Mandatory, Optional) according to dealer specifications.",
                "Implemented Aspect-Oriented Programming (AOP) with custom annotations for fine-grained resource (API/page) access control based on dealerId and schemeId, enhancing security and performance.",
              ]}
            />
            <ExpDetails
              position="Intern"
              company="Moneyview"
              companyLink="https://moneyview.in/"
              time="Feb 2024 - Jun 2024"
              address="Bengaluru, India"
              imageSrc="./mv1.jpg"
              work={[
                "Enhanced Buy Now Pay Later (BNPL) feature with dynamic interest rate selection based on dealer input.",
                "Developed AddOn Service feature in BNPL to enable users to select dealer-provided services during purchases with support for multiple addOns and multiple AddOn types like VAS and Insurance.",
                "Created Python scripts to generate queries from CSV for large-scale merchant/dealer onboarding.",
                "Designed a modular reward system supporting fixed and percentage discounts, with future support for cashback and loyalty points.",
                "Implemented account lock feature and set up automation properties and Slack alerts for real-time system notifications.",
              ]}
            />
          </ul>
        </div>
      </div>

      <h2 className="font-bold text-6xl mb-16 mt-8 w-full text-center">Education</h2>
      <div className="w-[90%] mx-auto relative mb-16">
        <ul>
          <EduDetails
            degree="B.E"
            course="Information Science"
            institute="BMS IT & M"
            time="June 2024"
            address="Bengaluru, India"
            marks="CGPA: 8.96"
            imageSrc="./bmsit.jpg"
          />
          <EduDetails
            degree="XIIᵗʰ"
            course="PCM"
            institute="Gyan Niketan"
            time="Apr 2019"
            address="Patna"
            marks="Percentage: 85.8%"
            imageSrc="./gn.jpg"
          />
          <EduDetails
            degree="Xᵗʰ"
            institute="Gyan Niketan"
            time="Apr 2017"
            address="Patna"
            marks="CGPA: 10"
            imageSrc="./gn.jpg"
          />
        </ul>
      </div>
    </main>
  );
}
