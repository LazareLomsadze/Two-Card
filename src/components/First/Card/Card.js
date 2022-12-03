import React from 'react'
import Bu from './img/me.jpg'


const Card = ({Name,universe, imagess}) => {
  return (
    <>
<div className='w-full h-full' >
<section
      className="bg-black h-screen flex justify-center items-center gap-x-16 text-white border"
    >
      <div
        className="w-5/12 h-3/5 bg-transparent cursor-pointer group perspective"
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2  w-full rounded-2xl lo:h-1/2 2xl:h-full">
            <img src={`${imagess}`} alt="hackerlogo" className="w-full h-full rounded-2xl " />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-2xl lo:h-1/2 2xl:h-full"
          >
            <div
              className="rounded-2xl text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 border-2 border-orange-600"
            >
              <img src={Bu} alt="BU" className="rounded-2xl w-5/12 h-2/3 align-top items-center lo:mt-16" />
              <h1 className="text-3xl font-semibold text-red-900 lo:text-xs lo:mt-2 lo:mb-3 2xl:text-xl">{Name}</h1>
              <p className='mt-3 font-black 2xl:text-2xl lo:text-xs lo:mt-2 lo:mb-3' >
               {universe}
              </p>
              
              <button
                className="bg-teal-500 px-3 text-xs py-2 font-semibold lo:px-1 lo:w-3/4 lo:group-hover:bottom-3  lo:h-8 lo:text-[8px] sm:text-sm md:text-base text-white rounded-xl absolute -bottom-20 delay-500 duration-1000 2xl:group-hover:bottom-15 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
        </div>
        </section>

      </div>
    
    </>
  )
}

export default Card