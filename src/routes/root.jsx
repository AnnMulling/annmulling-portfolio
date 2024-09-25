import { Outlet } from "react-router-dom";
import  Nav from '../components/Navbar/Nav';
import  MainPage  from "../components/HomePage/Main";
import Work from "../components/ProjectPage/Project";
import AboutMe from "../components/AboutPage/About";

import '../style/Main.css'

export default function Root() {
    return (
      <>

        <div className="line-left"></div>
        <Nav />
        <MainPage />
        <div className="line-bt"></div>
      </>
    );
  }
