import clsx from 'clsx'
import { motion } from 'framer-motion'

const About = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const animationItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section>
      <motion.h1
        layoutScroll
        id="about"
        variants={container}
        initial="hidden"
        animate="visible"
        className="font-extrabold uppercase text-transparent text-4xl py-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {'ABOUT'.split('').map((text, index) => (
          <motion.span key={index} variants={animationItem}>
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <div className="flex flex-col gap-3">
        <motion.div
          className={clsx(
            'min-h-[170px] max-h-[200px] gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span className="absolute">
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              PERSONAL INFOMATIONS
            </motion.h2>
          </span>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] max-h-[200px] gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span className="absolute">
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AWARDS
            </motion.h2>
          </span>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] max-h-[200px] gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span className="absolute">
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              SKILLS
            </motion.h2>
          </span>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] max-h-[200px] gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span className="absolute">
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ORIENTATE
            </motion.h2>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default About
