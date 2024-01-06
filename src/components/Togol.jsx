import React, { useEffect, useState } from 'react'

const Togol = () => {
    const [mood,setMood]=useState(true)

    // ================== =============================== ====================== >> dark and light mood setting

  const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light");
  useEffect(()=>{
    console.log("use",theme)
    localStorage.setItem("theme",theme)
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
      
    }
  })
  
   const handleThemeClick=()=>{
    console.log("clicked")
    if(theme == "light"){
          console.log(theme)
          setTheme("dark")
         }else{
            console.log(theme)
            setTheme("light")
          }
   }
    console.log(mood)
  return (
    <div className='flex flex-col fixed'>
      {/* <input type="checkbox" className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500 rotate-90 fixed" onClick={handleThemeClick}  /> */}

     
  <svg xmlns="http://www.w3.org/2000/svg" className=' dark:text-white ' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller my-4 ml--4 rotate-90 " onClick={handleThemeClick}  />
  <svg xmlns="http://www.w3.org/2000/svg" className='dark:text-white' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>


    </div>
  )
}

export default Togol
