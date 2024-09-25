import { Outlet } from "react-router-dom";
import  Nav from '../components/Navbar/Nav';
import  MainPage  from "../components/HomePage/Main";
import { Link } from "react-router-dom";

import '../style/Main.css'

export default function Root() {
    return (
      <>
        <Link to="/" className="link">
          <div className="initial-home-btn">
            <span>AM</span>
          </div>
        </Link>
        <div className="aside-left">
            <h1> A Junior Software Engineer</h1>
        </div>
        <div className="line-left"> </div>
        
        <Nav />
        <MainPage />
        <div className="line-bt"></div>
      </>
    );
  }
