import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiGithub, SiCplusplus } from 'react-icons/si';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-5xl text-white font-bold">Skills & Tools</h1>
      
      <div className="flex flex-row flex-wrap items-center justify-around">
        
        <div className="flex flex-wrap gap-8 md:gap-10 md:w-2/5 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 title="HTML" color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 title="CSS" color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs title="JavaScript" color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact title="Reactjs" color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss title="TailwindCSS" color="#2196F3" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode title="NodeJS" color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb title="MongoDB" color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress title="Expressjs" color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub title="Github" color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCplusplus title="C++" color="#00599C" size={50} />
          </span>
        </div>

        <div className="flex flex-wrap flex-col leading-10 w-auto">
          <div className="">
            <h2 className="text-4xl font-bold text-white pb-5 tracking-wider">Tech-Stack</h2>
            
            <div className="tracking-wider">
              <h3 className="text-2xl text-white"><b>Frontend:</b></h3>
              <ul className="list-disc pl-5 text-white">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js, Redux, Tailwind CSS</li>
              </ul>
            </div>

            <div className="tracking-wider">
              <h3 className="text-2xl text-white"><b>Programming Languages:</b></h3>
              <ul className="list-disc pl-5 text-white">
                <li>C++, JavaScript</li>
              </ul>
            </div>

            <div className="tracking-wider">
              <h3 className="text-2xl text-white"><b>Version Control:</b></h3>
              <ul className="list-disc pl-5 text-white">
                <li>Git, GitHub</li>
              </ul>
            </div>

            <div className="tracking-wider">
              <h3 className="text-2xl text-white"><b>Tools & Technologies:</b></h3>
              <ul className="list-disc pl-5 text-white ">
                <li>VS Code, Chrome DevTools</li>
                <li>Postman (for API testing)</li>
                <li>Node.js (for backend)</li>
              </ul>
            </div>

            <div className="tracking-wider">
              <h3 className="text-2xl text-white"><b>Tools & Technologies:</b></h3>
              <ul className="list-disc pl-5 text-white">
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

