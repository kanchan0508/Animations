import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );
  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>
      <div
        style={{
          padding: "40px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          exercitationem, libero accusamus cumque laudantium tenetur quaerat
          obcaecati perferendis ducimus suscipit pariatur optio impedit fuga
          nulla consectetur tempore dignissimos, voluptatem repudiandae
          consequatur facere, eaque delectus. Expedita at quidem soluta
          molestiae porro consequuntur totam provident error quasi. Officiis
          doloremque dicta consectetur, provident, doloribus neque voluptate non
          esse assumenda aut numquam recusandae ipsa. Ut sequi, illum excepturi
          expedita quod ducimus perspiciatis culpa eaque veniam nemo aperiam eos
          consectetur tenetur ipsa nesciunt dicta quisquam pariatur! Corporis,
          quibusdam! Repudiandae quibusdam, eum officia animi nisi tempora nihil
          modi hic veniam dignissimos dolor molestiae consequuntur enim harum.
        </p>
      </div>
    </div>
  );
}

export default App;
