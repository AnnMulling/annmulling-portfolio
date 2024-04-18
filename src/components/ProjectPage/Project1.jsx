import { Swiper, SwiperSlide } from 'swiper/react';

//css & others
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import { projects } from "./dataProject";

import '../../style/components/Test/projects.css'

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';


export default function Project1() {
    const filteredProj = projects.filter((project) => project.development === true);
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
                {filteredProj.map((project) => (

                    <SwiperSlide key={project.id}>
                        <img src={project.img} alt="project1" />
                        <div className="thumb-inner" >

                            <p>
                                {project.description}

                            </p>
                            <p>
                                {project.techStack.map((tool) => (
                                    <span className="tools-block-grid" key={tool.id}><tool.name /></span>
                                ))}
                            </p>
                            <p >
                                {project.url.map((url) => (
                                    <span className="tools-block-grid" key={url.id}>
                                        <a href={url.url} target="_blank"><span><url.icon /></span></a>
                                    </span>
                                ))}
                            </p>


                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
