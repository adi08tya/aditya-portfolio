import avatar from "../assets/avatar.png"
import TextChanger from "../TextChanger"
const Home = () => {

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
      <h1 className="text-2xl md:text-5xl font-bold flex leading-normal"><TextChanger/></h1>
      <p className="text-sm md:text-2xl tracking-tight">
      I am a passionate and dedicated developer with expertise in web development and programming. I specialize in HTML, CSS, and JavaScript, along with frameworks like React.js, Redux, and Tailwind CSS. I also have a solid foundation in Data Structures and Algorithms using C++ and other programming languages. I enjoy building intuitive and user-friendly applications and am committed to continuously learning and improving my skills to create impactful solutions in the tech industry
      </p>
      <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697] rounded-3xl">Contact Me</button>
      </div>
      <div className=""><img className="w-auto h-auto sm:" src={avatar} alt="" /></div>
    </div>
  )
}

export default Home
