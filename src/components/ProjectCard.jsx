import { useState } from "react"
const ProjectCard = ({title, main ,demo,src,img}) => {
  const[isOpen,setisOpen] = useState(false);
  return (
    <div className=" p-2 flex flex-col w-85 h-min-120 bg-[#0c0e19] shadow-slate-900 rounded-2xl hover:bg-[#0c0e19cc] transform scale-100 hover:scale-102 transition-transform duration-300">
      <img className="p-2 rounded-2xl h-60 w-80" src={img} alt="" />
      <h3 className="px-4 text-xl font-bold leading-normal">{title}</h3>
      <span className="inline">
      <p id="expandable-text" className={`px-4 text-sm leading-tight py-1 ${isOpen? "": "line-clamp-4"}`}>{main}</p>
      <button
        className="text-xs cursor-pointer underline px-4"
        onClick={() => setisOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="expandable-text"
      >
        {isOpen ? "Show less" : "Show more"}
      </button>
      </span>
      <div className="p-1 md:p-4 flex justify-between ">
        <button className=" text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"><a href={demo} target="_blank" rel="noopener noreferrer">Demo</a></button>
        <button className=" text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"><a href={src} target="_blank" rel="noopener noreferrer">Source</a></button>
      </div>
    </div>
  )
}

export default ProjectCard
