import React from 'react'
import Image from 'next/image'
import Picture from "../../public/programming-image.jpg"
import Link from 'next/link'
import Button from "./Button"

export default function About() {
    return (
        <div className='bg-neutral-200 mx-3 rounded-md'>
            <div className='flex items-center p-4 gap-6 lg:gap-20 lg:mx-16 lg:p-8 flex-col sm:flex-row'>
                <div className='w-5/6 p-2 sm:w-3/5 lg:w-3/6'>
                    <Image src={Picture} alt="about image" className='w-[28rem] h-auto md:w-[35rem] md:h-auto object-cover' />
                </div>
                <div className='text-center sm:text-left px-5 md:py-5 flex flex-col gap-4 sm:w-4/5 lg:w-4/6'>
                    <h1 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-bold font-sans'> About </h1>
                    <p className='leading-relaxed font-sans'> I am an educator and web developer passionate about creating engaging learning experiences both in the classroom and online. With a blend of teaching expertise and technical skills, I design interactive resources and websites that make complex topics accessible and enjoyable for learners. My mission is to inspire curiosity, foster creativity, and empower students to explore and succeed in the digital world </p>
                    <Link href="/CV">
                         <Button className='bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
