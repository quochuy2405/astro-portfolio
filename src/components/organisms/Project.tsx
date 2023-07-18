import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
interface IProject {
  id: string
  company: string
  title: string
  position: string
  thumbnail: string
  bg?: string
}
const items: IProject[] = [
  {
    id: '1',
    company: '(Otoman x AB InBev)',
    title: 'CATABINBEV',
    position: 'Frontend & Machine Learning',
    thumbnail: '/images/survey.png',
    bg: 'linear-gradient(160deg,_#0093E9_0%,_#80D0C7_100%)'
  },
  {
    id: '2',
    company: 'Ftisu teams',
    title: 'PREDICT CRYPTO PROJECT',
    position: 'Frontend & Machine Learning',
    thumbnail: '/images/survey.png'
  },
  {
    id: '4',
    company: 'Hopee - Software Company',
    title: 'HOMIS PROJECT',
    position: 'Frontend',
    thumbnail: '/images/survey.png'
  },
  {
    id: '5',
    company: 'Hopee - Software Company',
    title: 'ASTRAZENECA PROJECT',
    position: 'Frontend',
    thumbnail: '/images/survey.png'
  },
  {
    id: '6',
    company: 'Hopee - Software Company',
    title: 'KIDS CONNECT PROJECT',
    position: 'Frontend',
    thumbnail: '/images/survey.png'
  },
  {
    id: '7',
    company: 'Beliy Clothings',
    title: 'BELIY STORE',
    position: 'FullStack',
    thumbnail: '/images/survey.png'
  }
]

const Project = () => {
  const [itemSelected, setItemSelected] = useState<IProject | null>(null)
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
        variants={container}
        layoutScroll
        initial="hidden"
        animate="visible"
        className="font-extrabold uppercase text-transparent text-4xl py-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {'PROJECT'.split('').map((text, index) => (
          <motion.span key={index} variants={animationItem}>
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.div
        variants={container}
        layoutScroll
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 grid-rows-none gap-4 h-full w-full overflow-y-auto"
      >
        {items.map((item, index) => {
          return (
            <motion.div
              className={clsx(
                'min-h-[170px] max-h-[200px] gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
              )}
              key={index}
              layoutId={item.id}
              variants={animationItem}
              onClick={() => setItemSelected(item)}
            >
              <span className="absolute">
                <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {item?.title}
                </motion.h2>
                <motion.h5>{item?.company}</motion.h5>
                <motion.h5>Position: {item?.position}</motion.h5>
              </span>
            </motion.div>
          )
        })}
        <AnimatePresence>
          {itemSelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed w-screen left-0 z-20 top-0 right-0 h-screen flex items-center justify-center bg-[#00000075]"
            >
              <motion.div
                layoutId={itemSelected.id}
                className="w-1/2 h-1/2 bg-white rounded-lg p-3 relative font-semibold"
                exit={{ opacity: 0, scale: 0 }}
              >
                <div className="flex items-center justify-end absolute top-0 right-0 ">
                  <motion.button onClick={() => setItemSelected(null)}>
                    <GrFormClose size={28} />
                  </motion.button>
                </div>
                <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {itemSelected?.title}
                </motion.h2>
                <motion.h5>{itemSelected?.company}</motion.h5>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Project
