import React from 'react'

export default function ProcessPage1() {
  return (
    <div><div className="  text-black p-6 flex flex-col justify-center">
    <h2 className="text-xl font-bold mb-4 text-[#ff5100]">Our Process</h2>
    <p className="text-md">
      At Tudelü, we prioritize a seamless, customer-focused experience
      from start to finish. Here's a look at how we bring your vision to
      life with our customizable wall systems.
    </p>
  </div>

  {/* Paso 1: Tailored to Your Specifications */}
  <div className=" p-6 flex flex-col">
    <h3 className="text-lg font-bold mb-4 text-[#ff5100]">1. Tailored to Your Specifications</h3>
    <p className="text-md mb-4">
      Once we’ve tailored a system to your specifications, you’ll receive
      a detailed quote. Within an hour, we'll provide custom shop
      drawings to help you and your architectural team visualize exactly
      how our product will fit into your build.
    </p>
    <p className="text-sm text-gray-500">This early visualization ensures clarity and alignment from the start.</p>
  </div>

  {/* Paso 2: Your Project Moves into Production */}
  <div className="p-6 flex flex-col">
    <h3 className="text-lg font-bold mb-4 text-[#ff5100]">2. Your Project Moves into Production</h3>
    <p className="text-md mb-4">
      After the design and consultation phase, your project moves into
      production. Our project management team will keep you updated at
      every step of the process, ensuring you're informed at all times.
    </p>
    <p className="text-sm text-gray-500">
      Step-by-step updates will be provided to keep you in the loop.
    </p>
  </div>

 </div>
  )
}
