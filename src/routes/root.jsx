import { Outlet } from "react-router-dom";
import  Nav from '../components/Navbar/Nav';
import { Link } from "react-router-dom";
//components
import  MainPage  from "../components/HomePage/Main";
import AboutMe from '../components/AboutPage/About.jsx';
import Project from "../components/ProjectPage/Project.jsx";


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
        <div className="initial-home-btn">
              <Link to="/" className="link">
                  <span className="initial-tag">AM</span>
              </Link>
        </div>
        {/* <div className="aside-line">
            <span className="aside-text"> A Junior Software Engineer</span>
            <span className="aside-text"> 📍Chicago, IL</span>

        </div> */}
        <Swiper className="mySwiper">
          <SwiperSlide><MainPage /></SwiperSlide>
          <SwiperSlide><AboutMe/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>


        </Swiper>
        <div className="bottom-line"></div>
      </>

    );
  }
