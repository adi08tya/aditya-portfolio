import AboutImage from "../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[rgba(0,0,0,0.3)] shadow-xl mx-0 md:mx-20  rounded-lg p-12"
    >
      <h2 className="text-2xl md:text-6xl font-bold text-white">About Me</h2>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80" src={AboutImage} alt="About IMG" />
        <ul>
          <div className="flex gap-3 py-4 ">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-150">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal ">
                Web Development Expertise
              </h1>
              <p className="text-sm md:text-lg leading-tight">
                I specialize in building modern, responsive, and user-friendly
                web applications using technologies like HTML, CSS, and
                JavaScript. I also have experience with frameworks such as
                React.js, Redux, and Tailwind CSS. My focus is on creating
                visually appealing and functional designs that enhance user
                experience while maintaining code efficiency and scalability.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-150">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal ">
                Algorithmic Problem Solver
              </h1>
              <p className="text-sm md:text-lg leading-tight">
                I have a strong foundation in Data Structures and Algorithms,
                with experience solving over 250 problems on LeetCode and GFG
                combined. My problem-solving skills are honed through consistent
                practice, focusing on optimizing solutions for performance and
                scalability.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-150">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal ">
                Technical Proficiency
              </h1>
              <p className="text-sm md:text-lg leading-tight">
                <ul>
                  <li><b>Data Structures and Algorithms:</b> Proficient in implementing and optimizing algorithms for real-world problems.</li>
                  <li><b>Operating Systems:</b> Understanding of process management, memory allocation, and system architecture.</li>
                  <li><b>Database Management Systems (DBMS):</b> Familiarity with SQL and database design principles.</li>
                  <li><b>Object-Oriented Programming (OOP):</b> Skilled in designing modular, reusable, and maintainable code structures.</li>
                  <li><b>Web Development Concepts:</b> Knowledge of modern web technologies, frontend/backend architecture, and RESTful APIs.</li>
                </ul>
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
