import { useState } from 'react'
import {motion, MotionConfig} from "framer-motion"
import Anim3 from './Animations/Anim3'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='grid content-center '>
    <MotionConfig 
     transition={{
      duration: 0.125,
      ease: "easeInOut"
     }}
     >
    <motion.button
     whileHover={{scale: 1.05}}
     whileTap={{scale: 0.95, rotate: "2.5deg"}}
    className='bg-blue-700 text-white p-4 rounded-lg w-[20%] text-xl mt-[5%] ml-[35%]'>
      Click me
    </motion.button>
    <motion.button
     whileHover={{scale: 1.05}}
     whileTap={{scale: 0.95, rotate: "2.5deg"}}
    className='bg-red-700 text-white p-4 rounded-lg w-[20%] text-xl mt-[5%] ml-[35%]'>
      Click me
    </motion.button>
    </MotionConfig>
     <Anim3 />
          
   </div>
  )
}

export default App
