import ProjectCard from "./ProjectCard"
import quote from "../assets/qg.png"
import todo from "../assets/todo.png"
import joke from "../assets/JT.png"
import wallpaper from "../assets/wallpaper.png"
import lightdark from "../assets/Light_darkmode.png"
const Project = () => {
  return (
    <div id="Projects" className="p-10 md:pd-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 flex flex-wrap justify-center items-center gap-4 ">
        <ProjectCard title="Quote-Generator" img={quote} main="A simple and interactive app that generates random inspirational quotes using JavaScript. It fetches quotes from an API and displays them to users with a click, focusing on enhancing user experience through smooth data fetching and a clean UI design." src="https://github.com/adi08tya/Quote-Generator" demo="https://adi08tya.github.io/Quote-Generator/" />
        <ProjectCard title="To-Do-List" img={todo} main="A simple and efficient task management app built using JavaScript. This app allows users to add, mark, and delete tasks, helping them stay organized. With a user-friendly interface, the app offers a smooth experience for managing daily activities. The focus was on implementing CRUD (Create, Read, Update, Delete) operations, along with local storage to persist tasks between sessions" src="https://github.com/adi08tya/To-do-list" demo="https://adi08tya.github.io/To-do-list/"/>
        <ProjectCard title="Light and Dark Mode" img={lightdark} main="This project allows users to seamlessly switch between light and dark themes, enhancing the user experience by providing a personalized interface. Built using HTML, CSS, and JavaScript, it detects the user’s theme preference and saves it in the browser's local storage, so the theme persists across sessions. The toggle functionality provides a smooth transition between modes, making it visually appealing and accessible." src="https://github.com/adi08tya/light-dark-mode" demo="https://adi08tya.github.io/light-dark-mode/" />
        <ProjectCard title="Infinite-Wallpapers" img={wallpaper} main="This website offers an endless collection of high-quality wallpapers that users can browse through effortlessly. Built with HTML, CSS, and JavaScript, the app loads new wallpapers automatically as the user scrolls, providing an infinite scrolling experience. It integrates smooth transitions, ensuring a visually engaging and user-friendly interface for seamless navigation." src="https://github.com/adi08tya/Infinite-wallpapers" demo="https://adi08tya.github.io/Infinite-wallpapers/" />
        <ProjectCard title="Joke-Teller" img={joke} main="A fun and interactive app that delivers random jokes at the click of a button. Built using JavaScript, this app fetches jokes from an API and displays them to users, providing a lighthearted experience. It focuses on smooth user interaction, with a simple interface and a seamless API integration." src="https://github.com/adi08tya/Joke_teller" demo="https://adi08tya.github.io/Joke_teller/" />
      </div>
    </div>
  )
}

export default Project;
