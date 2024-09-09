import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='grid place-items-center h-screen  w-screen gap-0'>
      <motion.button
        className='bg-blue-700 w-40 h-50 p-5 text-lg text-white'
        onClick={() => setShow(!show)}
        layout
      >
        Show / Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {show && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{ duration: 1, ease: "backInOut", times: [0, 0.25, 0.5, 0.85, 1] }}
            className='w-[25%] h-[70%] bg-black mt-[-10%]'
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
