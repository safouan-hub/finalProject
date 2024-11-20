import React from 'react'
import { WobbleCard } from './component/ui/Wobble-card'
import img4 from './images/image4.jpg'
import img1 from './images/image1.jpg'

function Header() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-green-400 to-yellow-400 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Boost Crop Growth with Fertilizer Solutionsse
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          With a wide range of nutrient-rich fertilizers, our solutions empower thousands of farmers to achieve optimal yields and sustainable growth.
          </p>
        </div>
        <img
          src={img1}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-r from-yellow-400 to-green-400">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        No Weeds, No Pests, Only Growth.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        When your crops thrive without interference, you achieve higher yields and sustainable farming success.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-400 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sign Up for High-Performance Fertilizer Solutions Today !
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Trusted by thousands of farmers, our products are designed for maximum yield and sustainable growth.
          </p>
        </div>
        <img
          src={img4}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  )
}

export default Header