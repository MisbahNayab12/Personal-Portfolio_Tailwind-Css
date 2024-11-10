import React from 'react'
import Image from 'next/image'
import Icon1 from "../../public/90 Percent Image.jpg"
import Icon2 from "../../public/80 Percent Image.jpg"
import Button from "./Button"

export default function Skills() {
  return (
    <div className='bg-neutral-200 mx-3 rounded-md h-auto'>
      <div>
        <h1 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-bold font-sans text-center pt-10'> Skills </h1>
        <h2 className='text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold p-10 font-sans text-center'> Educational Skills </h2>

        <section className='flex justify-center items-center flex-col md:flex-row md:gap-10 2xl:gap-80'>

          <div className='bg-white rounded-xl mb-5'>
            <h2 className='text-center text-xl p-5 font-sans'>Padagogical Skills</h2>
            <Image src={Icon1} alt="icon1" className='w-[300px] h-[300px] p-6'/>
            <div className='text-center p-4'>
            <Button className=' bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
            </div>
          </div>

          <div className='bg-white rounded-xl mb-5'>
            <h2 className='text-center text-xl p-5 font-sans'>Instructional Skills</h2>
            <Image src={Icon1} alt="icon1" className='w-[300px] h-[300px] p-6'/>
            <div className='text-center p-4'>
            <Button className=' bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
            </div>
          </div>

        </section>

        <h2 className='text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold p-10 font-sans text-center'> Programming Skills </h2>

        <section className='flex justify-center items-center flex-col md:flex-row md:gap-10 flex-wrap pb-10 2xl:gap-80'>

          <div className='bg-white rounded-xl mb-5'>
            <h2 className='text-center text-xl p-5 font-sans'>HTML</h2>
            <Image src={Icon1} alt="icon1" className='w-[300px] h-[300px] p-6'/>
            <div className='text-center p-4'>
            <Button className=' bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
            </div>
            
          </div>

          <div className='bg-white rounded-xl mb-5'>
            <h2 className='text-center text-xl p-5 font-sans'>CSS</h2>
            <Image src={Icon1} alt="icon1" className='w-[300px] h-[300px] p-6'/>
            <div className='text-center p-4'>
            <Button className=' bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
            </div>
          </div>

          <div className='bg-white rounded-xl lg:mb-5'>
            <h2 className='text-center text-xl p-5 font-sans'>Typescript</h2>
            <Image src={Icon2} alt="icon2" className='w-[300px] h-[300px] p-6'/>
            <div className='text-center p-4'>
            <Button className='bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}
