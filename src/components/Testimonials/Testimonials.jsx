import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../Heading/Heading'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa6";


const Testimonials = () => {
    return (
        <section>
            <div className='mx-w-[1400px] px-20 mx-auto py-20'>
                <Heading highlight='Customers' heading='Saying' />

                <div className='py-5 mt-5 flex justify-end gap-x-3'>
                    <button className='text-2xl custom-prev rounded-lg w-11 h-11 flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <IoIosArrowBack />
                    </button>

                    <button className='text-2xl custom-next rounded-lg w-11 h-11 flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <IoIosArrowForward />
                    </button>
                </div>

                <Swiper
                navigation={{
                    nextEl : ".custom-next",
                    prevEl : ".custom-prev"
                }}
                loop = {true}
                breakpoints={{
                    640: {slidesPerView: 1, spaceBetween: 20},
                    768: {slidesPerView: 2, spaceBetween: 20},
                    1024: {slidesPerView: 3, spaceBetween: 20},
                }}
                modules={[Navigation]} className="mySwiper">
                    {
                        review.map((item) => {
                            return (
                                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                                    <div className='flex gap-5 items-center'>
                                        <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                                            <img src={item.image} className='w-full h-full'/>
                                        </div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                                                {Array.from({length: item.rating} , () => (
                                                <FaStar />
                                            ))}</span>
                                        </div>
                                    </div>

                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className='text-zinc-600'>{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


            </div>
        </section>
    )
}

export default Testimonials

const review = [

    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        image: customer1,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!',
    }, {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 4,
        image: customer2,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!',
    }, {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 5,
        image: customer3,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!',
    }, {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 4,
        image: customer4,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!',
    }, {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 5,
        image: customer5,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, facilis!',
    },

]