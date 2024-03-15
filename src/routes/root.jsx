import { Outlet } from "react-router-dom";
import  Nav from '../components/Navbar/Nav';
import  MainPage  from "../components/HomePage/Main";

import '../style/Main.css'

export default function Root() {
    return (
      <>
        <Nav />
        <h1>This is Root</h1>
      </>
    );
  }
