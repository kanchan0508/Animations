import { useRef, useState } from 'react'
import {motion, useInView} from "framer-motion"

function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <>
    <div style={{
      height: "150vh",
      width: "200vh"
    }}>   </div>
   <motion.div style={{
    height:"100vh", background: "black"
   }}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
   >
    <div ref={ref} style={{height: "100vh", background :isInView ? "blue": "red", transition: "is background"}}></div>

   </motion.div>
      
  </>
  )
}

export default App
