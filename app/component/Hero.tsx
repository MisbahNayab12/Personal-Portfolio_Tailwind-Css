import React from 'react'
import Image from 'next/image'
import myImage from "../../public/profileimage.jpeg"
import Button from './HeroButton';

export default function Hero(){
  return (
    <div className='bg-neutral-200 mx-3 rounded-md'>
    <div className='flex justify-between items-center gap-6 p-5 lg:p-8 flex-col sm:flex-row lg:mx-16'>
        <div className='lg:w-3/6 text-center sm:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans'>Hello, I'm </h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans'> Misbah Nayab</h1>
          <p className='my-9 font-sans lg:text-xl'>I am an Elementary School Teacher and a Web Designer. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric designs. </p>
          <Button className='bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
        </div>
        <div>
          <Image src={myImage} alt="profile image" className='w-[20rem] object-cover rounded-lg sm:w-[30rem] md:w-[30rem] lg:w-[20rem]'/>
        </div>
    </div>
    </div>
  )
}


 


