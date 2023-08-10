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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className={clsx(
            'min-h-[170px] h-fit gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span>
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              PERSONAL INFOMATIONS
            </motion.h2>
          </span>
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <h1 className="flex items-center">
              <svg height="80px" viewBox="300 -498 1820 1820" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M521.481481 860.254815h245.191112L803.081481 709.783704l-201.481481 24.272592zM1045.807407 624.82963l104.296297-12.136297-31.478519-53.475555h-92.254815zM1179.306667 666.074074L924.444444 695.182222l4.835556 165.072593h368.924444z"
                  fill="#5FFFBA"
                />
                <path
                  d="M1023.905185 229.167407C977.825185 182.992593 921.979259 161.185185 858.832593 161.185185s-118.897778 21.807407-165.072593 67.982222c-46.08 46.08-67.982222 99.555556-67.982222 162.607408 0 58.216296 26.737778 114.062222 77.653333 172.373333l2.465185 2.465185 70.352593 84.954074c12.136296 19.437037 24.272593 36.408889 33.943704 55.845926 19.437037 38.874074 36.408889 89.78963 51.01037 155.306667 14.601481-65.517037 31.573333-116.527407 51.01037-155.306667 19.437037-38.874074 48.545185-80.118519 87.41926-123.828148l14.601481-19.437037c51.01037-58.216296 77.653333-114.062222 77.653333-172.373333 0-63.146667-21.807407-118.897778-67.982222-162.607408zM856.462222 510.672593c-67.982222 0-123.828148-55.845926-123.828148-123.828149s55.845926-123.828148 123.828148-123.828148 123.828148 55.845926 123.828148 123.828148S924.444444 510.672593 856.462222 510.672593z"
                  fill="#FFA28D"
                />
                <path d="M642.844444 666.074074l133.49926-14.601481-70.352593-84.954074z" fill="#5FFFBA" />
              </svg>
              28 Lam Son, Tan Binh District, Ho Chi Minh City
            </h1>
            <h1 className="flex items-center gap-4">
              <svg
                height="50px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M809.6 532.7v327.1c0 15.1-12.3 27.5-27.5 27.5H563.4V532.7h246.2zM454.4 532.7v354.5H238.9c-15.2 0-27.5-12.3-27.5-27.5v-327h243z"
                    fill="#5fffba"
                  ></path>
                  <path
                    d="M860.9 398.1v96.2c0 15.1-12.3 27.5-27.5 27.5h-270V370.6h270c15.2 0 27.5 12.3 27.5 27.5zM454.4 370.6v151.1H187.6c-15.2 0-27.5-12.3-27.5-27.5V398c0-15.1 12.3-27.5 27.5-27.5H454.4z"
                    fill="#ffedbd"
                  ></path>
                  <path
                    d="M871.9 398.1v96.2c0 21.2-17.3 38.5-38.5 38.5h-12.8v327.1c0 21.2-17.3 38.5-38.5 38.5H238.9c-21.2 0-38.5-17.3-38.5-38.5V532.7h-12.8c-21.2 0-38.5-17.3-38.5-38.5V398c0-21.2 17.3-38.5 38.5-38.5h121.9c-25.3-14.4-42.4-41.5-42.4-72.6 0-46.1 37.5-83.7 83.6-83.7 28.2 0 48.4 8.6 68.4 26.9-4.5-15.3-4.7-32.1-0.2-48.2 6.2-22.4 20.8-41.6 39.9-52.6 19.4-11.2 41.9-14.1 63.5-8.4 21.6 5.8 39.6 19.6 50.8 39 16.7 28.9 19.2 58.7 7.4 93.2 28.1-34.4 51.7-50 89.8-50 46.1 0 83.7 37.5 83.7 83.7 0 31.1-17.1 58.2-42.4 72.6h121.9c21.1 0.2 38.4 17.5 38.4 38.7z m-11 96.2v-96.2c0-15.1-12.3-27.5-27.5-27.5h-270v151.1h270c15.2 0 27.5-12.3 27.5-27.4z m-51.3 365.5V532.7H563.4v354.5h218.7c15.2 0.1 27.5-12.3 27.5-27.4z m-66.7-572.9c0-40.1-32.6-72.7-72.7-72.7-41.8 0-64.7 21.9-100.3 70.9l-49.2 74.4h149.5c40.1 0.1 72.7-32.5 72.7-72.6z m-190.2 0.2c28.3-49.1 31.6-85.5 10.8-121.5-9.7-16.8-25.4-28.8-44.1-33.9-6.3-1.7-12.6-2.5-18.9-2.5-12.6 0-25 3.3-36.2 9.8-16.6 9.6-29.3 26.4-34.8 46-5.5 19.7-3.1 40.4 6.4 56.9l73.6 109.2 43.2-64z m-0.3 600.2V370.6h-42.9l-0.1 0.1-0.1-0.1h-44v516.7h87.1z m-52.1-527.7L451 285c-35.5-48.8-58.4-70.7-100.2-70.7-40.1 0-72.7 32.6-72.7 72.7s32.6 72.6 72.7 72.6h149.5z m-45.9 527.7V532.7h-243v327.1c0 15.1 12.3 27.5 27.5 27.5h215.5z m0-365.6V370.6H187.6c-15.2 0-27.5 12.3-27.5 27.5v96.2c0 15.1 12.3 27.5 27.5 27.5h266.8z"
                    fill="#ffedbd"
                  ></path>
                  <path
                    d="M670.2 214.3c40.1 0 72.7 32.6 72.7 72.7s-32.6 72.6-72.7 72.6H520.7l49.2-74.4c35.6-49.1 58.6-70.9 100.3-70.9zM563.5 165.6c20.8 36 17.5 72.4-10.8 121.5l-43.3 64-73.6-109.2c-9.5-16.5-11.8-37.2-6.4-56.9 5.5-19.6 18.1-36.4 34.8-46 11.2-6.5 23.6-9.8 36.2-9.8 6.3 0 12.7 0.8 18.9 2.5 18.9 5.1 34.5 17.1 44.2 33.9zM552.4 589.5v297.8h-87V370.6h44l0.1 0.1v-0.1h42.9v162.1zM451 285l49.3 74.6H350.8c-40.1 0-72.7-32.6-72.7-72.6 0-40.1 32.6-72.7 72.7-72.7 41.7 0 64.7 21.8 100.2 70.7z"
                    fill="#ffa28d"
                  ></path>
                </g>
              </svg>
              24/05/2001
            </h1>
            <h1 className="flex items-center gap-4">
              <svg
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-100 0 612 512"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#ebebeb' }}
                    d="M439.541,264.237v231.068c0,9.238-7.345,16.696-16.584,16.696H89.044 c-9.239,0-16.696-7.457-16.696-16.696V264.237L256.001,80.584L439.541,264.237z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#D0D5E5' }}
                    d="M439.541,264.237v231.068c0,9.238-7.345,16.696-16.584,16.696H256.001V80.584L439.541,264.237z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#5fffba' }}
                    d="M491.742,285.83c-19.59,19.59-51.199,19.59-70.788,0L256.001,120.877L91.046,285.83 c-19.478,19.59-51.31,19.59-70.788,0c-19.59-19.59-19.59-51.2,0-70.79L220.606,14.692C230.066,5.231,242.644,0,256.001,0 c13.357,0,25.935,5.231,35.394,14.692L491.742,215.04C511.332,234.63,511.332,266.24,491.742,285.83z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#ffa28d' }}
                    d="M265.351,203.13c-2.894-1.892-6.122-2.783-9.351-2.783s-6.457,0.89-9.351,2.783 c-3.004,2.115-74.128,50.643-74.128,114.087c0,65.67,73.795,97.503,77.021,98.838c2.005,0.89,4.231,1.336,6.457,1.336 c2.226,0,4.452-0.445,6.457-1.336c3.227-1.336,77.021-33.169,77.021-98.838C339.479,253.774,268.355,205.245,265.351,203.13z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#ffa28d' }}
                    d="M339.479,317.217c0,65.67-73.795,97.503-77.021,98.838c-2.005,0.89-4.231,1.336-6.457,1.336V200.348 c3.228,0,6.457,0.89,9.351,2.783C268.355,205.245,339.479,253.774,339.479,317.217z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#DDDD47' }}
                    d="M272.585,317.217v100.174c0,9.238-7.345,16.696-16.584,16.696c-9.239,0-16.696-7.457-16.696-16.696 V317.217c0-9.238,7.456-16.696,16.696-16.696C265.24,300.522,272.585,307.979,272.585,317.217z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#C7D100' }}
                    d="M272.585,317.217v100.174c0,9.238-7.345,16.696-16.584,16.696V300.522 C265.24,300.522,272.585,307.979,272.585,317.217z"
                  />
                  {'{'}' '{'}'}
                  <path
                    style={{ fill: '#5fffba' }}
                    d="M491.742,285.83c-19.59,19.59-51.199,19.59-70.788,0L256.001,120.877V0 c13.357,0,25.935,5.231,35.394,14.692L491.742,215.04C511.332,234.63,511.332,266.24,491.742,285.83z"
                  />
                  {'{'}' '{'}'}
                </g>
              </svg>
              Gia Lai Provice
            </h1>
          </div>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] h-fit gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span>
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AWARDS
            </motion.h2>
          </span>
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <h1 className="flex items-center flex-1 gap-4">
              <svg
                height="50px"
                width="50px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.001 512.001"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    style={{ fill: '#51B3DA' }}
                    d="M506.799,46.668c-3.372-3.393-8.054-5.157-12.838-5.157H343.01c-6.455,0-12.397,3.513-15.509,9.168 l-66.33,120.552c-2.242,4.075-8.097,4.075-10.339,0L184.5,50.679c-3.112-5.655-9.055-9.168-15.509-9.168H18.041 c-4.783,0-9.466,1.764-12.838,5.157C-0.503,52.409-1.53,60.98,2.193,67.746L137.74,314.081c7.328,13.321,26.9,11.785,32.124-2.429 c12.246-33.325,42.983-56.776,78.386-59.751c4.998-0.443,10.503-0.443,15.579,0.007c35.179,2.957,65.809,26.228,78.156,59.334 c5.565,14.924,25.028,16.012,32.276,2.839L509.807,67.747C513.531,60.98,512.504,52.409,506.799,46.668z"
                  />
                  <path
                    style={{ fill: '#238CC5' }}
                    d="M506.799,46.668c-3.372-3.393-8.054-5.157-12.838-5.157H343.01c-6.455,0-12.398,3.513-15.509,9.168 l-66.33,120.552c-1.121,2.038-3.145,3.056-5.17,3.056v77.284c2.639,0.001,5.288,0.113,7.829,0.338 c35.179,2.957,65.809,26.228,78.156,59.334c5.565,14.922,25.026,16.013,32.276,2.839L509.808,67.748 C513.531,60.98,512.504,52.409,506.799,46.668z"
                  />
                  <path
                    style={{ fill: '#f5f5f5' }}
                    d="M256,470.49c-70.115,0-127.156-57.047-127.156-127.168c0-66.748,51.482-121.239,116.362-126.692 c7.035-0.623,14.553-0.623,21.667,0.007c64.358,5.41,116.284,59.534,116.284,126.685C383.157,413.443,326.115,470.49,256,470.49z"
                  />
                  <path
                    style={{ fill: '#f5f5f5' }}
                    d="M266.801,216.637c-3.537-0.315-7.174-0.473-10.8-0.473V470.49 c69.649,0,126.312-57.047,126.312-127.168C382.313,276.178,330.74,222.047,266.801,216.637z"
                  />
                  <path
                    style={{ fill: '#FFC72D' }}
                    d="M277.614,399.753L256,388.389l-21.614,11.363c-10.591,5.568-23.016-3.449-20.992-15.252l4.128-24.067 l-17.486-17.044c-8.569-8.353-3.831-22.955,8.018-24.677l24.165-3.511l10.806-21.897c5.296-10.731,20.648-10.737,25.947,0 l10.807,21.897l24.165,3.511c11.842,1.721,16.591,16.318,8.018,24.677l-17.486,17.044l4.128,24.067 C300.645,396.392,288.122,405.277,277.614,399.753z"
                  />
                  <path
                    style={{ fill: '#80D0E1' }}
                    d="M164.84,155.116L102.33,41.511H61.921l71.9,130.672c4.715,8.568,15.479,11.687,24.042,6.976 C166.429,174.446,169.552,163.681,164.84,155.116z"
                  />
                  <path
                    style={{ fill: '#51B3DA' }}
                    d="M378.18,172.184l71.9-130.673h-40.409l-62.509,113.605c-4.713,8.565-1.59,19.329,6.976,24.042 C362.7,183.87,373.466,180.751,378.18,172.184z"
                  />
                  <path
                    style={{ fill: '#FFBE00' }}
                    d="M303.946,318.714l-24.165-3.511l-10.807-21.897c-2.649-5.368-7.811-8.051-12.973-8.049v103.134 l21.614,11.363c10.508,5.524,23.031-3.361,20.992-15.25l-4.128-24.067l17.486-17.044 C320.537,335.032,315.787,320.434,303.946,318.714z"
                  />
                </g>
              </svg>
              Silver medal in national student taekwondo tournament
            </h1>
            <h1 className="flex items-center flex-1 gap-4">
              <svg height="45px" viewBox="0 0 70 60" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <g data-name="21_Certificate" id="_21_Certificate">
                    <path
                      d="M61,50H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H61a1,1,0,0,1,1,1V49A1,1,0,0,1,61,50Z"
                      style={{ fill: '#febc00' }}
                    />
                    <path
                      d="M25.583,48l-5.767,5.675a1.051,1.051,0,0,0-.269,1.061,1.075,1.075,0,0,0,.824.734l3.1.6.634,3.077a1.067,1.067,0,0,0,.747.806,1.089,1.089,0,0,0,1.075-.265L32.5,53.218A9.72,9.72,0,0,1,25.583,48Z"
                      style={{ fill: '#f74e0c' }}
                    />
                    <path
                      d="M38.417,48l5.767,5.675a1.051,1.051,0,0,1,.269,1.061,1.075,1.075,0,0,1-.824.734l-3.1.6L39.9,59.148a1.067,1.067,0,0,1-.747.806,1.089,1.089,0,0,1-1.075-.265L31.5,53.218A9.72,9.72,0,0,0,38.417,48Z"
                      style={{ fill: '#f74e0c' }}
                    />
                    <path
                      d="M57,46H7a1,1,0,0,1-1-1V9A1,1,0,0,1,7,8H57a1,1,0,0,1,1,1V45A1,1,0,0,1,57,46Z"
                      style={{ fill: '#fdfeff' }}
                    />
                    <path
                      d="M21.051,46a10.9,10.9,0,0,0,1.163,4H41.786a10.9,10.9,0,0,0,1.163-4Z"
                      style={{ fill: '#edaa03' }}
                    />
                    <path
                      d="M43,45a11,11,0,0,0-22,0c0,.338.021.67.051,1h21.9C42.979,45.67,43,45.338,43,45Z"
                      style={{ fill: '#dfeaef' }}
                    />
                    <path
                      d="M8,45V9A1,1,0,0,1,9,8H7A1,1,0,0,0,6,9V45a1,1,0,0,0,1,1H9A1,1,0,0,1,8,45Z"
                      style={{ fill: '#dfeaef' }}
                    />
                    <path d="M32,54a9,9,0,1,1,9-9A9.01,9.01,0,0,1,32,54Z" style={{ fill: '#f74e0c' }} />
                    <path
                      d="M34,52a8.984,8.984,0,0,1-7.276-14.276A8.99,8.99,0,1,0,39.276,50.276,8.944,8.944,0,0,1,34,52Z"
                      style={{ fill: '#cc2600' }}
                    />
                    <circle cx={32} cy={45} r={4} style={{ fill: '#febc00' }} />
                    <path
                      d="M34,47a4,4,0,0,1-4-4,3.964,3.964,0,0,1,.36-1.64,3.995,3.995,0,1,0,5.28,5.28A3.964,3.964,0,0,1,34,47Z"
                      style={{ fill: '#edaa03' }}
                    />
                    <rect height={2} style={{ fill: '#dfeaef' }} width={28} x={18} y={16} />
                    <rect height={2} style={{ fill: '#dfeaef' }} width={28} x={18} y={20} />
                    <rect height={2} style={{ fill: '#dfeaef' }} width={28} x={18} y={24} />
                    <rect height={2} style={{ fill: '#dfeaef' }} width={14} x={32} y={28} />
                    <rect height={2} style={{ fill: '#dfeaef' }} width={8} x={38} y={32} />
                  </g>
                </g>
              </svg>
            3 times won the scholarship
            </h1>
          </div>
        </motion.div>
        <motion.div
          className={clsx(
            'min-h-[170px] h-fit gap-1 backdrop-blur-sm cursor-pointer flex flex-col border p-2 rounded-lg text-black hover:border-gray-800 hover:border-2 transition-colors'
          )}
          variants={animationItem}
        >
          <span>
            <motion.h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              SOFT SKILLS
            </motion.h2>
            <div className="flex flex-col gap-3">
              <p>
                <b>Communication</b>: Have excellent communication skills to collaborate effectively with teams.
                Proficient in reading English documents.
              </p>
              {/* <p>
                <b>TOEIC</b>: 450/900.
              </p> */}
              <p>
                <b>Problem-Solving</b>: Strong analytical and critical thinking abilities to resolve issues.
              </p>
            </div>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default About
