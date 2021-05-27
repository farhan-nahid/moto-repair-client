import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import entry from '../../../images/entry.png';
import gear from '../../../images/gear.png';
import helmate from '../../../images/helmate.png';
import lilonpistol from '../../../images/lilonpistol.png';
import paint from '../../../images/paint.png';
import silencer from '../../../images/silencer.png';
import sitcover from '../../../images/sitcover.png';
import wheel from '../../../images/wheel.png';
import "./OurTeam.css";


SwiperCore.use([EffectCoverflow,Pagination]);

const OurTeam = () => {
    return (
       <section className="team-container">
           <h3 className="pt-5">Meet our Awesome team</h3>
           <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla! Lorem ipsum dolor sit</small></p>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
          }} pagination={true} className="mySwiper">
            <SwiperSlide>
                <div className="team-card">
                    <img src={entry} alt='...' />
                    <h5>Entry Writer</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-card">
                    <img src={gear} alt='...' />
                    <h5>Gear Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-card">
                    <img src={helmate} alt='...' />
                    <h5>Helmet Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-card">
                    <img src={lilonpistol} alt='...' />
                    <h5>Lilo Pistol Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-card">
                     <img src={paint} alt='...' />
                      <h5>Print Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                 <div className="team-card">
                    <img src={silencer}alt='...' />
                    <h5>Silencer Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                 <div className="team-card">
                    <img src={sitcover} alt='...' />
                    <h5>Sit cover Expert</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-card">
                     <img src={wheel} alt='...' />
                     <h5>Wheel Expert</h5>
                </div>
            </SwiperSlide>
            </Swiper>
       </section>
    );
};

export default OurTeam;