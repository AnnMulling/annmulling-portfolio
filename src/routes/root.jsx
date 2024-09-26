import { Outlet } from "react-router-dom";
import  Nav from '../components/Navbar/Nav';
import  MainPage  from "../components/HomePage/Main";
import AboutMe from '../components/AboutPage/About.jsx';
import { Link } from "react-router-dom";


//css & other
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/Main.css'
import 'swiper/scss';
import 'swiper/scss/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Root() {
    return (
      <>
        <div className="aside-left">
          <h1> A Junior Software Engineer</h1>
        </div>

        <div className="initial-home-btn">
              <Link to="/" className="link">
                  <span>AM</span>
              </Link>
        </div>
        <div className="line-left">

        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide> <MainPage /> </SwiperSlide>
          <SwiperSlide> <AboutMe /> </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>



        <div className="line-bt"></div>
      </>

    );
  }
