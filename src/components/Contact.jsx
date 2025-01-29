import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Contact = () => {
  return (
    <div id="Contact" className="flex justify-around  bg-[#465697] text-white p-8 md:p-12 items-center">
      <div>
       <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
       <h3 className="text-sm md:text-2xl font-normal ">Feel Free To Reach Out!</h3>
       </div>
        <div>
       <ul className="text-xs md:text-xl leading-2 flex-col justify-center items-center ">
        <li className="flex gap-1 items-center transform scale-100 hover:scale-98 ease-in-out duration-300"><MdOutlineEmail size={20}/> <a href="mailto:adityaparashar966@gmail.com">adityaparashar966@gmail.com</a> </li>
        <li className="flex gap-1 items-center transform scale-100 hover:scale-98 ease-in-out duration-300"><CiLinkedin size={20}/><a href="https://www.linkedin.com/in/adityaparashar08" target="_blank">adityaparashar08</a></li>
        <li className="flex gap-1 items-center transform scale-100 hover:scale-98 ease-in-out duration-300"><FaGithub size={20}/><a href="https://github.com/adi08tya" target="_blank">adi08tya</a></li>
       </ul>
      </div>
    </div>
  )
}

export default Contact
