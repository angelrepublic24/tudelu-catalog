import Image from 'next/image'
import React from 'react'

export default function ClosureImage() {
  return (
    <div>
        <div>
        <Image width={500} height={500} alt="closure" src={'/images/closure-left.jpg'} className="h-full" />
       </div>
       <div>
        <Image width={500} height={500} alt="closure" src={'/images/closure-right.jpg'} className="h-full"/>
       </div>
    </div>
  )
}
