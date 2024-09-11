import React from 'react'
import { motion, useAnimationControls } from "framer-motion"

function Anim3() {
  const controls = useAnimationControls()

  const handleclick = () =>{
        controls.start("flip")
  }
  return (
    <div className='flex justify-center items-center w-[90%] h-[100%]'>
      <button onClick={handleclick} className='bg-blue-700 text-white text-xl p-5 w-[20%] mr-10'>Flip me</button>
      <motion.div
      variants={{
        initial:{
          rotate: "0deg"
        },
        flip :{
          rotate: "360deg"
        }
      }}
      initial = "initial"
      animate = {controls}
       className= 'w-[40%] h-[50vh] bg-black border mt-10'>
           
      </motion.div>

    </div>
  )
}

export default Anim3
