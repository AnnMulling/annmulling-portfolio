import { Swiper, SwiperSlide } from 'swiper/react';

//css & others
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import '../../style/components/Test/projects.css'


export default function Projects ({ projects }) {
    const volunteerproj = projects.filter((project) => project.developemeht === false);
    const developproj = projects.filter((project) => project.developement === true);
    return (
        <>

        </>
    )
};
