import React from 'react'
import HeroImage from '../../assets/hero.png'
import HeroImageSmall from '../../assets/hero_sm.png'
function Hero() {
  return (
    <div className="  flex h-4/5 grow items-center shadow-lg shadow-[#2A2D33]">
      <div className="mx-auto  flex w-[min(1000px,90%)] justify-evenly">
        <div className="flex flex-col items-center justify-center">
          {' '}
          <div className="">
            <div className=" flex items-center justify-center">
              <div className="mb-10 w-[30%] overflow-hidden rounded-full lg:hidden ">
                <img src={HeroImageSmall} alt="Arvin Photo" />
              </div>
            </div>
            <h1 className="mb-4">
              <span className="text-xl font-extralight text-white sm:text-3xl">
                {' '}
                I&apos;M
              </span>
              <span className="font-display text-4xl text-text-primary sm:text-6xl">
                {' '}
                Arvin Bajande
              </span>
            </h1>
            <p className="text-xl font-light text-white sm:text-2xl">
              Third Year Software Engineering Student
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={HeroImage}
            alt="arvin Avatar Photo"
            width={'80%'}
            className="mx-auto "
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
