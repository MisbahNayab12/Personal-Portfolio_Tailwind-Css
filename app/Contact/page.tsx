import React from 'react'
import Button from './Button/Button'

export default function Contact() {
    return (
        <div className='bg-neutral-200 mx-3 rounded-md flex justify-center p-5'>
            <div className='sm:w-3/6 xl:w-2/6 bg-white rounded-md'>
                <div className='text-center space-y-2'>
                    <h1 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-bold font-sans pt-5'>Contact Me</h1>
                    <p className='font-sans text-xs md:text-sm text-gray-500 px-5'>Get in touch for collaboration, inquiries, or support. I am here to help!</p>
                </div>
                <div>
                    <div className='grid w-full gap-4 p-4'>
                        <div className='flex flex-col gap-2 items-start space-y-2'>
                            <label htmlFor="email" className='font-sans text-sm md:text-lg font-semibold'> Email </label>
                            <input type="email" placeholder='abc@gmail.com' className='w-full font-sans border h-10 p-2 text-sm md:text-base' />
                        </div>

                        <div className='grid gap-2 items-start space-y-2'>
                            <label htmlFor="message" className='font-sans text-sm md:text-lg font-semibold'> Message </label>
                            <textarea id="message" name="message" placeholder='Type your message here' className='border h-[150px] font-sans text-sm md:text-base  p-2'/>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <Button className='bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold text-sm font-sans w-full' />
                </div>
            </div>
        </div>
    )
}
