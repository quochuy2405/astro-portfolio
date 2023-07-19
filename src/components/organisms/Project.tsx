import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
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
    <section className="flex flex-col gap-2">
      <motion.h1
        variants={container}
        layoutScroll
        id="project"
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
      <div
        className={clsx(
          'min-h-[170px] h-fit gap-1 backdrop-blur-3xl cursor-pointer flex flex-col border p-4 rounded-lg text-black '
        )}
      >
        <ol className="md:items-center flex flex-col-reverse md:flex-row md:justify-center flex-wrap">
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FTISU - RESEARCH TEAM</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 01, 2022
              </time>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Position: Research member
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HOPPEE - SOFTWARE COMPANY</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 04, 2022
              </time>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Position: Fresher
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">OTOMAN X ABINBEV - SURVEY APP</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 02, 2023
              </time>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Position: Freelance - Junior
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">OTOMAN - SOCIAL COMPANY</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 15, 2023
              </time>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Position: Freelance - Junior
              </p>
            </div>
          </li>
        </ol>
      </div>
      <motion.div
        variants={container}
        layoutScroll
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-none gap-4 h-full w-full overflow-y-auto"
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
                <div className="flex items-center justify-end absolute top-2 right-2 ">
                  <motion.button onClick={() => setItemSelected(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                      <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)" />
                      <path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)" />
                    </svg>
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
