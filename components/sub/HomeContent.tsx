"use client"

import React from 'react'
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight, slideInFromTop} from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const HomeContent = () => {

    const onButtonClick = () => {
        const pdfUrl = "Michele_CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MicheleMarazzi_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        className='Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]'
        variants={slideInFromTop}>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='welcome-text text-[13px] text-[#b49bff]'>Software engineer</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
            Marazzi Michele
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Portfolio</span>   
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
            Hi, i am a software engineer with experience in game development using Unity 3D and Mobile.
            Check out my projects and skills.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        onClick={onButtonClick}>
            Download my CV
        </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
            <Image
            src="/static/mainiconsdark.svg"
            alt="icon"
            height={650}
            width={650}>
            </Image>
        </motion.div>
    </motion.div>

  )
}

export default HomeContent