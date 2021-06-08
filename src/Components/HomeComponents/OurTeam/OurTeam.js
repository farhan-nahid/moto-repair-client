import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import entry from '../../../images/entry-img.png';
import gear from '../../../images/gear.png';
import helMate from '../../../images/helmate.png';
import liloPistol from '../../../images/lilonpistol.png';
import paint from '../../../images/paint.png';
import silencer from '../../../images/silencer.png';
import sitCover from '../../../images/sitcover.png';
import wheel from '../../../images/wheel.png';
import "./OurTeam.css";
import SingleMember from './SingleMember';


SwiperCore.use([EffectCoverflow,Pagination]);

const teamSlide = [
    {
        id:1,
        name: 'Entry Writer' ,
        img:entry
    },
    {
        id:2,
        name: 'Gear Expert' ,
        img:gear
    },
    {
        id:3,
        name: 'Helmet Expert' ,
        img:helMate
    },
    {
        id:4,
        name: 'Lilo Pistol Expert' ,
        img:liloPistol
    },
    {
        id:5,
        name: 'Print Expert' ,
        img:paint
    },
    {
        id:6,
        name: 'Silencer Expert' ,
        img:silencer
    },
    {
        id:7,
        name: 'Sit cover Expert' ,
        img:sitCover
    },
    {
        id:8,
        name: 'Wheel Expert' ,
        img:wheel
    }
]

const OurTeam = () => {
    return (
       <section className="team-container" id="about">
           <h3>Meet our Awesome team</h3>
           <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla! Lorem ipsum dolor sit</small></p>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}   
             autoplay={{  delay: 2500, disableOnInteraction: false}} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
          >
                {
                        teamSlide.map(team => {
                            return(
                                <SwiperSlide  key={team.id}>
                                    <SingleMember key={team.id} team={team} />
                                </SwiperSlide>
                            )
                        })
                }
            
          
            </Swiper>
       </section>
    );
};

export default OurTeam;