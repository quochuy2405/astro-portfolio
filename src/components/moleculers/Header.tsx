import { path } from 'animation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
const textScript = [
  "I'M A SYSTEM INFORMATION ENGINEER",
  'FRONT-END DEVELOPER',
  'FULLSTACK DEVELOPER',
  'ALWAYS CHALLENGE MY SELF'
]
const Header = () => {
  const [text, setText] = useState({
    index: 0,
    value: textScript[0]
  })
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
  useEffect(() => {
    const time = setInterval(
      () => {
        setText((curr) => {
          let nextIndex = curr.index + 1
          if (nextIndex > textScript.length - 1) {
            nextIndex = 0
          }
          return { index: nextIndex, value: textScript[nextIndex] }
        })
      },
      (text.value.length / 7) * 1000
    )
    return () => clearInterval(time)
  }, [])

  return (
    <>
      <header className="p-4 relative z-10">
        <div className="lg:w-4/5 m-auto flex flex-col md:flex-row">
          <ul className="flex gap-2 flex-1">
            <a
              className="px-3 py-[2px] rounded-md hover:bg-[#e2e2e28f] text-base flex items-center ease-linear duration-150 transition-all h-fit"
              href="/"
            >
              Home
            </a>
            <a
              className="px-3 py-[2px] rounded-md hover:bg-[#e2e2e28f] text-base flex items-center ease-linear duration-150 transition-all h-fit"
              href="/#about"
            >
              About
            </a>
            <a
              className="px-3 py-[2px] rounded-md hover:bg-[#e2e2e28f] text-base flex items-center ease-linear duration-150 transition-all h-fit"
              href="/#project"
            >
              Project
            </a>
            <a
              className="px-3 py-[2px] rounded-md hover:bg-[#e2e2e28f] text-base flex items-center ease-linear duration-150 transition-all h-fit"
              href="/#career"
            >
              Career
            </a>
          </ul>
          <div className="flex-1 flex items-center justify-center">
            <motion.h1
              variants={container}
              key={text.index}
              initial="hidden"
              animate="visible"
              className="font-extrabold uppercase text-transparent text-2xl py-4 bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600"
            >
              {text.value.split('').map((txt, index) => (
                <motion.span key={index} variants={animationItem}>
                  {txt}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <ul className="flex gap-4 flex-1 justify-end">
            {/* <a href="/">
              <BsFacebook />
            </a> */}
            <a href="/">
              <BsGithub />
            </a>
            <a href="/">
              <BsLinkedin />
            </a>
          </ul>
        </div>
      </header>
      <div className="w-screen h-screen fixed top-0 right-0 left-0 scale-[100%] z-0 flex align-top justify-center opacity-30">
        <motion.svg viewBox="0 0 456 430" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M3.21021 276.186C42.0279 284.149 58.735 253.321 66.055 219.437C72.1342 191.296 73.2012 163.582 73.2012 134.943C73.2012 125.682 74.6586 98.413 71.73 107.199C68.3553 117.323 71.3096 132.696 71.3096 143.14C71.3096 163.97 72.498 184.32 75.9336 204.934C81.2505 236.836 87.3431 268.188 91.0668 300.357C94.8021 332.626 100.838 367.004 94.6399 399.354C93.1393 407.186 89.4569 424.368 79.2966 426.677C70.6342 428.646 63.2924 383.263 62.4819 378.545C57.2378 348.025 58.9266 314.122 68.367 284.594C76.9364 257.789 92.4436 233.39 103.678 207.666C112.665 187.089 122.53 166.358 127.639 144.401C130.938 130.221 132.341 115.225 137.517 101.524C139.6 96.0108 136.147 108.124 136.046 109.09C134.164 127.072 136.909 145.296 141.301 162.687C146.247 182.273 151.487 201.622 157.485 220.908C159.943 228.812 162.494 248.582 167.784 230.997C173.931 210.562 178.112 189.655 183.337 168.993C183.939 166.612 188.592 145.022 188.592 158.484C188.592 168.152 188.592 177.82 188.592 187.489C188.592 197.142 189.943 201.222 193.006 188.75C194.774 181.552 196.324 152.516 203.305 149.025C206.315 147.52 203.725 155.748 203.725 159.114C203.725 164.577 203.666 170.045 203.725 175.508C203.901 191.68 209.883 171.129 211.712 166.26C212.76 163.471 222.303 133.479 221.17 148.395C221.087 149.488 221.61 163.184 222.221 162.267C225.82 156.869 222.539 139.961 221.801 134.102C220.335 122.466 215.764 109.085 224.323 99.0017C243.471 76.4436 280.562 65.8882 306.505 56.3345C344.344 42.3996 382.856 30.4251 420.844 16.9251C428.175 14.3199 445.645 9.6927 452.792 3.15809C453.737 2.294 436.186 6.90012 434.506 7.57194"
            stroke="black"
            stroke-width="6"
            stroke-linecap="round"
            variants={path}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'circOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
      </div>
    </>
  )
}
export default Header
