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
        id="career"
        variants={container}
        initial="hidden"
        animate="visible"
        className="font-extrabold uppercase text-transparent text-4xl py-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {'CAREER GOALS'.split('').map((text, index) => (
          <motion.span key={index} variants={animationItem}>
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className={clsx(
            'min-h-[170px] h-fit gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span>
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              IN THE SHORT TERM
            </motion.h2>
          </span>
          <p className="font-semibold">
            Become a skilled and dedicated fulltime Front-End or Fullstack developer. I aim to accumulate extensive
            experience in web programming thinking, master the latest technologies, and enhance my interpersonal and
            problem-solving skills.
          </p>
          <div className="flex flex-col md:flex-row gap-4 flex-1"></div>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] h-fit gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span>
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              LONG-TERM GOAL
            </motion.h2>
          </span>
          <p className="font-semibold">
            I aspire to be a highly skilled tech leader with a passion for technology and continuous learning. I am
            dedicated to honing my technical expertise and problem-solving abilities. Through innovation, I aim to drive
            impactful changes in the tech industry. I believe in fostering a collaborative and empowering work
            environment, inspiring my team to achieve exceptional results. My ultimate goal is to make a meaningful
            impact on the world through technology and leadership.
          </p>
          <div className="flex flex-col md:flex-row gap-4 flex-1"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
