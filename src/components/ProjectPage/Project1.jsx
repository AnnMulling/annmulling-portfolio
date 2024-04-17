import { Swiper, SwiperSlide } from 'swiper/react';

//css & others
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import '../../style/components/Test/projects.css'

// import required modules
import { Pagination, EffectCoverflow} from 'swiper/modules';


export default function Project1 () {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 2
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 3
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 4
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 5
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 6
                    <img src="" alt="project1"/>
                </SwiperSlide>
                <SwiperSlide>Slide 7
                    <img src="" alt="project1"/>
                </SwiperSlide>
            </Swiper>
    </>
    )
}
