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
        <div className="aside-line"></div>
        <Swiper className="mySwiper">
          <div className="initial-home-btn">
                <Link to="/" className="link">
                    <span className="initial-tag">AM</span>
                </Link>
          </div>
          <SwiperSlide><MainPage /></SwiperSlide>
          <SwiperSlide><AboutMe/></SwiperSlide>


        </Swiper>
        <div className="bottom-line"></div>
      </>

    );
  }
