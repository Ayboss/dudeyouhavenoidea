import React from "react";

const experiences = [
  {
    name: "Feather Incorporation",
    duration: "February 2022 - January 2024",
    role: "React Native Mobile Developer",
    desciption: [
      "Developed and maintained a mobile application for a fintech company, providing users with secure access to their financial accounts and transactions.",
      "Enhanced the user-agent connectivity in the application, enabling real-time search and location tracking for over 200 users and agents with Google Maps API, reducing search time by 20% and improving real-time location accuracy.",
      "Leveraged Firebase and Expo to implement push notifications, ensuring instant transaction status updates for users and agents.",
      "Designed and implemented a Firebase database architecture for a chat system, leveraging Firestore for real-time communication, which reduced server workload by 10% and improved communication speed by 30%.",
      "Leveraged Expo-Contacts to display in-app contacts, facilitating transactions and enabling seamless communication.",
    ],
  },
  {
    name: "Munch",
    duration: "August 2022 - November 2022",
    role: "Full Stack Developer",
    desciption: [
      "Developed and Managed a mobile application for a restaurant, featuring real-time order tracking using Socket.IO technology, allowing customers to monitor the progress of their orders.",
      "Implemented the payment process on the user application and a scheduled payout plan on the driver application using Stripe, leading to a 25% increase in sales and streamlining transactions for 500 users.",
      "Integrated geolocation services using Google Map API and Socket.IO to provide real-time tracking of drivers, ensuring accurate delivery estimates and order status updates for customers.",
      "Conducted thorough testing to ensure seamless functionality and performance of both user and driver mobile applications, addressing issues with order synchronization, Socket.IO communication, and user experience, reducing production bugs by 15%.",
      "Utilized Firebase and push notifications using Expo, keeping customers, drivers and the restaurant informed about order status changes instantly and the order delivery details.",
    ],
  },
  {
    name: "Goldman Sachs",
    duration: "June 2022 - August 2022",
    role: "Summer Analyst Intern",
    desciption: [
      "Developed and enhanced backend API handlers for foreign exchange hedge trades using Java and Vert.x",
      "Supported the migration of a legacy system to a strategic one, employing Angular and NGRX technologies",
      "Conducted training sessions for teammates on using process management tools, resulting in a 10% increase in team productivity",
      "Diagnosed and resolved complex issues by analyzing root causes and delivering targeted solutions in the fixed-income trading tech stack.",
      "Engineered and integrated feature enhancements for the Asset Management division’s fixed-income trading platform, including the migration of legacy hedging functionality to a new system using Angular for the front-end and back-end API development.",
    ],
  },
  {
    name: "Rice 360",
    duration: "September 2021 - November 2021",
    role: "Biomedical Engineering Intern",
    desciption: [
      "Engineered real-world solutions for healthcare challenges, including the development of a medical AI chatbot using Python and React Native for health consultations.",
      "Constructed an advanced integration of software and hardware components, performing 10+ experimental trials to optimize biomedical product functionality; the system is now utilized in ongoing research for future innovations.",
      "Programmed Arduino microcontrollers in C++ to control servo motors and pulse rate sensors for biomedical applications.",
      "Built a Python application to monitor global COVID-19 rates, displaying real-time data with dynamic visualizations.",
    ],
  },
];
const volunteer = [
  {
    duration: "2024",
    name: "DSA lead tutor at ECX 4.0",
    desciption: [
      "Tutor at ECX 4.0, where I taught 42 students Data Structures and Algorithms, covering key concepts such as arrays, linked lists, trees, and sorting algorithms, guiding them through coding exercises and problem-solving.",
    ],
  },
  {
    duration: "2023",
    name: "Welfare Officer Biomedical Engineering 2023",
    desciption: [
      " Created a comprehensive repository of study materials and past exam questions, benefiting over 80 students and improving access to academic resources.",
    ],
  },
  {
    duration: "2023",
    name: "Python Tutor",
    desciption: [
      "Taught Python to a class of 15 Biomedical Engineering students, focusing on practical applications and coding skills relevant to the field",
    ],
  },
];
const accomplisment = [
  {
    name: "Devsprint 1.0",
    desciption:
      "Finished 5th place in an algorithm competition sponsored by IEEE and Github campus.",
  },
  {
    name: "IEEEXtreme17.0 Competitor",
    desciption:
      "Finished 489th out of 7091 teams in a global algorithmic competition.",
  },
  {
    name: "Meta Global Hackathon Competitor",
    desciption:
      "Secured 7th place in EMEA, and ranked 30th globally among 5,000+ competitors.",
  },
];
const skills = [
  "AWS",
  " Python",
  " C++ ",
  " Node.js ",
  " React ",
  " React Native (Android, iOS) ",
  " Redux ",
  " Firebase ",
  " Socket IO ",
  " MongoDB ",
  " Linux ",
  " Ansible ",
  " Terraform ",
  " Bash",
  " Docker ",
  " JavaScript ",
  " Typescript ",
  " HTML ",
  " CSS ",
];
function page() {
  return (
    <main>
      <div className="border-b pb-5 border-[#545454] mb-8">
        <h3 className="text-[30px] font-bold">LAWAL AYOBAMI</h3>
        <p>Software Engineer | Hardware Engineer</p>
      </div>
      <div className="mb-5">
        <div className="pl-5 border-l border-[#545454] mb-7">
          <h5 className="text-[10px] font-bold text-[#545454]">SUMMARY</h5>
          <p>Excited about technology and the related fields</p>
        </div>
        <div>
          {/* LINKS */}
          <ul>
            <li>Nigeria</li>
            <li>bamiayo90@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* EXPERINCE */}
      <div>
        <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
          Experience
        </h4>
        {experiences.map((experience) => (
          <div className="mb-10">
            <p className="text-[#7f7f7f]">{experience.duration}</p>
            <p className="text-[18px] mb-2">
              {experience.role} <span className="text-[#7f7f7f]">at</span>{" "}
              {experience.name}
            </p>
            <div className="pl-5 border-l border-[#545454]">
              <h5 className="text-[10px] font-bold text-[#545454] mb-2">
                SUMMARY
              </h5>
              <ul>
                {experience.desciption.map((desc) => (
                  <li className="text-[14px] mb-2 leading-snug">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* EXPERINCE */}
      {/* VOLUNTEERING */}
      <div>
        <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
          Volunteering / Leadership
        </h4>
        {volunteer.map((vol) => (
          <div className="mb-10">
            <p className="text-[#7f7f7f]">{vol.duration}</p>
            <p className="text-[18px] mb-2">{vol.name}</p>
            <div className="pl-5 border-l border-[#545454]">
              <h5 className="text-[10px] font-bold text-[#545454] mb-2">
                SUMMARY
              </h5>
              <ul>
                {vol.desciption.map((desc) => (
                  <li className="text-[14px] mb-2 leading-snug">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* VOLUNTEERING */}
      {/* EDUCATION */}
      <div>
        <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5 font-bold">
          Education
        </h4>
        <div className="mb-4">
          <p className="text-[#7f7f7f]">2018 - 2025</p>
          <p className="text-[18px] mb-2">
            Bachelor of Science in Computer Engineering{" "}
            <span className="text-[#7f7f7f]">at</span> Obafemi Awolowo
            University
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#7f7f7f]">2017- 2024</p>
          <p className="text-[18px] mb-2">
            Bachelor of Science in Biomedical Engineering{" "}
            <span className="text-[#7f7f7f]">at</span> University of Lagos
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#7f7f7f]">2022- 2023</p>
          <p className="text-[18px] mb-2">
            Diploma in Cloud Engineering{" "}
            <span className="text-[#7f7f7f]">at</span> ALTSchool Africa
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#7f7f7f]">2015- 2017</p>
          <p className="text-[18px] mb-2">
            National Diploma in Science Laboratory Technology{" "}
            <span className="text-[#7f7f7f]">at</span> Yaba College of
            Technology
          </p>
        </div>
      </div>
      {/* EDUCATION */}
      {/* ACCOMPLISHMENT */}
      <div>
        <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
          Accomplishments
        </h4>
        {accomplisment.map((experience) => (
          <div className="mb-4">
            <p className="text-[18px] mb-2">{experience.name}</p>
            <div className="pl-5 border-l border-[#545454]">
              <h5 className="text-[10px] font-bold text-[#545454] mb-2">
                SUMMARY
              </h5>
              <ul>
                <li className="text-[14px] mb-2 leading-snug">
                  {experience.desciption}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* ACCOMPLISHMENT */}
      {/* Skills */}
      <div>
        <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
          Skills
        </h4>

        <ul className="grid gap-5 grid-cols-4">
          {skills.map((skill) => (
            <li className="text-[14px] mb-2 leading-snug">{skill}</li>
          ))}
        </ul>
      </div>
      {/* Skills */}
    </main>
  );
}

export default page;
