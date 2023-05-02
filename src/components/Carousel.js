import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { cardImageURL } from '../Constants';
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs';

export default function Carousel({carousel}) {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="bg-orange-100 w-14 h-14 rounded-full flex absolute top-[40%] left-[-2%] z-1 " onClick={onClick}>
                <BsArrowLeft size={24} className='m-auto' />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="bg-slate-100 w-14 h-14 rounded-full flex absolute top-[40%] right-[-2%] z-[3]" onClick={onClick}>
                <BsArrowRight size={24} className='m-auto' />
            </div>
        );
    };

    const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
          ]
      };
  return (
    <div className='py-6 m-auto relative w-10/12 h-[100%]'>
        <Slider {...settings}>
        {
            carousel.map((carousel)=>(
                <div key={carousel.data.bannerId} className='flex p-3'>
                    <img src={cardImageURL+carousel?.data?.creativeId} alt='Carousel Image' className='m-auto w-[100%] h-auto rounded-md'></img>
                </div>
            ))
        }
        </Slider>
    </div>
  )
}
