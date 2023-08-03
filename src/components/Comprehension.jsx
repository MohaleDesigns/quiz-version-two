import React from 'react'
import { BiSolidChevronRightCircle, BiSolidChevronLeftCircle } from 'react-icons/bi';

const Comprehension = ({ toggleIsComprehesion }) => {
  return (
    <div className='w-screen h-screen bg-white p-5 md:rounded md:w-4/5 md:h-auto md:shadow-lg'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-primary text-4xl font-bold text-center mt-10 mb-3 md:text-5xl md:mb-2 '>Comprehension</h1>
            <p className='text-primary text-lg font-normal mb-5 text-center'>Now! it's time for you to answer the follwing the questions</p>
            <p className='text-primary text-base font-normal mb-2'>Tokoloho Kabelo Mohale, an ambitious individual hailing from South Africa, is an exceptional Front-End Developer, whose expertise in web development has earned him considerable recognition. Born on April 16th, 2000, in the vibrant hospital of Chris Hani Baragwanath Hospital, he was raised in a dynamic environment, first in the bustling neighborhood of Orange Farm, and later relocating to the heart of Soweto, where his passion for software development ignited.</p>
            <p className='text-primary text-base font-normal mb-2'>Tokoloho's journey into the world of coding began early on, as he explored various programming languages and honed his skills independently. His dedication and creativity soon led him to excel in Front-End Development, transforming captivating designs into seamless user experiences. Now, standing at the threshold of his career, Tokoloho envisions mastering the art of Full-Stack Development, seeking to broaden his horizons and tackle more intricate challenges in the realm of technology.</p>
            <p className='text-primary text-base font-normal mb-2'>Beyond his professional aspirations, Tokoloho is deeply connected to his family. His mother, Hazel Nosipho Mohale, and his father, Moses Tebogo Mohale, have been pillars of support throughout his journey. Alongside his brother, Thabang Mohale, he cherishes a bond fortified by shared dreams and values. Additionally, he holds dear his long-time best friend, Sinamile Maphalala, whose companionship has been a source of inspiration and motivation.</p>
            <p className='text-primary text-base font-normal mb-2'>While Tokoloho's career ambitions are impressive, his personal dreams are equally profound. Growing up in modest circumstances, he yearns to provide his parents with a better life, symbolizing gratitude and love for their unwavering belief in him.</p>

            <div className='flex gap-3 items-center justify-end border-t border-t-primary py-3 mt-3'>
                <BiSolidChevronLeftCircle 
                    className='text-primary/60 hover:cursor-not-allowed'
                    size={45} 
                />
                <BiSolidChevronRightCircle 
                    className='text-primary duration-300 hover:text-yellow-500  hover:cursor-pointer'
                    size={45} 
                    onClick={toggleIsComprehesion}
                />
            </div>
        </div>
    </div>
  )
}

export default Comprehension