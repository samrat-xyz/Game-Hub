import { motion } from "framer-motion";

export default function About() {

  // 🔥 Animation config must be declared here, not inside JSX
  const floatAnimation = {
    y: [0, -25, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="w-full min-h-screen bg-white pt-28 pb-16">

      {/* HEADER SECTION */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About GameHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25, duration: .7 }}
          className="text-lg opacity-80 mt-3"
        >
          GameHub is the ultimate destination for discovering, exploring and enjoying
          quality games across all genres. We connect gamers worldwide.
        </motion.p>
      </div>


      {/* 🔥 ANIMATED IMAGE FLOAT AREA */}
      <div className="relative h-[330px] w-full max-w-4xl mx-auto mt-16 overflow-hidden">

        {/* Image 1 */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={floatAnimation}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="w-48 h-28 rounded-xl bg-cover bg-center shadow-lg absolute"
          style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/GfzwEBy5XYUZnfV5tkZ7dH-1200-80.jpg')",
                   top:"20%", left:"10%" }}
        />

        {/* Image 2 */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ ...floatAnimation, transition:{ ...floatAnimation.transition, delay: .5 }}}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="w-48 h-28 rounded-xl bg-cover bg-center shadow-lg absolute"
          style={{ backgroundImage:"url('https://media.wired.com/photos/62855b1bb6cfd378a30c474a/3:2/w_2560%2Cc_limit/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg')",
                   top:"55%", left:"38%" }}
        />

        {/* Image 3 */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ ...floatAnimation, transition:{ ...floatAnimation.transition, delay:.9 }}}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="w-48 h-28 rounded-xl bg-cover bg-center shadow-lg absolute"
          style={{ backgroundImage:"url('https://gmedia.playstation.com/is/image/SIEPDC/the-crew-motorfest-hero-banner-desktop-01-en-30may23?$native$')",
                   top:"10%", right:"10%" }}
        />

        {/* Image 4 */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ ...floatAnimation, transition:{ ...floatAnimation.transition, delay:1.3 }}}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="w-48 h-28 rounded-xl bg-cover bg-center shadow-lg absolute"
          style={{ backgroundImage:"url('https://cms-assets.xboxservices.com/assets/be/10/be10aae2-852a-41bc-b345-804b52cfbe94.jpg?n=Games-Hub_Hero-Image-768_Fallout-4-Annv-Edt_1920x1080.jpg')",
                   bottom:"10%", left:"60%" }}
        />
      </div>



      {/* TEXT CONTENT */}
      <div className="max-w-3xl mx-auto text-center mt-20 px-4">
        <motion.h2 
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
          className="text-3xl font-semibold mb-3"
        >
          Why GameHub?
        </motion.h2>

        <p className="text-lg leading-relaxed opacity-85">
           A massive library of games <br />
           Connect, compete and have fun <br />
           Fast browsing experience <br />
           Hand-picked quality for gamers like you
        </p>

        <motion.h2
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.8, delay:.2 }}
          className="text-3xl font-semibold mt-10 mb-3"
        >
          Our Mission
        </motion.h2>

        <p className="text-lg opacity-85 leading-relaxed">
          Our goal is to build a global gaming space where players can discover,
          enjoy and share thrilling adventures. We are shaping a future where
          gaming becomes limitless.
        </p>
      </div>
    </div>
  );
}
