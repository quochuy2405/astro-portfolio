import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { Image } from 'astro:assets'
interface IProject {
  id: string
  company: string
  title: string
  position: string
  thumbnail: string
}
const items: IProject[] = [
  {
    id: '1',
    company: '(Otoman x AB InBev)',
    title: 'CATABINBEV',
    position: 'Frontend & Machine Learning',
    thumbnail: '/images/survey.png'
  }
]
const Project = () => {
  const [itemSelected, setItemSelected] = useState<IProject | null>(null)
  return (
    <div className="grid grid-cols-3 grid-rows-none gap-4 h-[400px] w-2/3">
      {items.map((item, index) => (
        <motion.div
          className={clsx('min-h-[100px] max-h-[300px] bg-white rounded-lg col-span-1 p-3 font-semibold', {
            '!col-span-2': index % 4 == 1 || index % 4 == 2
          })}
          layoutId={item.id}
          onClick={() => setItemSelected(item)}
        >
          <Image
            width={1000}
            height={2000}
            src="https://www.rappler.com/tachyon/2022/04/astro.png"
            alt="A base64 encoded image"
          />
          <motion.h2>{item?.title}</motion.h2>
          <motion.h5>{item?.company}</motion.h5>
          <motion.h5>Position: {item?.position}</motion.h5>
        </motion.div>
      ))}
      <AnimatePresence>
        {itemSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-screen l-0 top-0 right-0 h-screen flex items-center justify-center bg-[#bbbbbb71]"
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
              <motion.h2>{itemSelected?.title}</motion.h2>
              <motion.h5>{itemSelected?.company}</motion.h5>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Project
