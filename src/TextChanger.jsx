import { useState,useEffect } from 'react'
const TextChanger = () => {
    const texts = ["Hello, I am Aditya", "Welcome to my Portfolio", "Enjoy your visit!"]
    const [currentText,setcurrenttext]=useState("")
    const [endValue,setEndValue]=useState(0)
    const[isForward,setIsForward]=useState(true)
    const[index,setIndex]=useState(0);
    useEffect(() => {
         const IntervalId = setInterval(() => {
            setcurrenttext(texts[index].substring(0,endValue));
            if(isForward){
              if (endValue < texts[index].length) {
                setEndValue((prev) => prev + 1);
              } else {
                setIsForward(false);
              }
            }
            else{
              if (endValue > 2) {
                setEndValue((prev) => prev - 1);
              } else {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
              }
            }
         }, 100);
       return ()=>clearInterval(IntervalId)
    }, [endValue,isForward,index])
    
    return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  )
}

export default TextChanger;
