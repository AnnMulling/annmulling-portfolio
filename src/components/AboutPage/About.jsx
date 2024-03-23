import { Link } from 'react-router-dom';
import { useState } from 'react';
//icons
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IoMenu } from "react-icons/io5";

import { data } from "./data";

import '../../style/components/aboutMe.css';
import profile from '../../assets/images/profile-girl.jpg'

export default function AboutMe() {
    const [showMenu, setShowmenu] = useState(false);


    const slideLeft = () => {
        let slider = document.getElementById('slide');
        slider.scrollLeft = slider.scrollLeft - 175;
    };

    const slideRight = () => {
        let slider = document.getElementById('slide');
        slider.scrollLeft = slider.scrollLeft + 175;
    };
    const dropDown = (e) => {
        e.preventDefault();
        setShowmenu(!showMenu);
    };

    const ulClassName = showMenu ? "dropdown" : "hidden";

    return (
        <>
            <div className="nav-btn">
                <IoMenu
                    onClick={dropDown}
                />
                <div className="drop-down-menu">
                    <ul className={ulClassName}>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">Work</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="about-me-page">
                <div className="about-img">
                    <img src={profile} alt='profile-img' />
                </div>
                <div className="about-detail">
                    <h1>About me</h1>

                    <p>My name is <strong>Ann.</strong> I speak Thai and English.</p>
                    <p>
                        I'm a creative and easygoing individual who loves tackling new challenges.
                        I bring a mix of curiosity and adaptability to everything I do.
                        Whether it's collaborating with others or diving into solo projects,
                        I'm always up for a good adventure.
                        <p>
                            In my free time, I find joy in the art of baking🧁,
                            experimenting with flavors and textures to create delicious treats that bring joy to others.
                        </p>
                    </p>
                    <p> "Full stack software engineering provides the perfect canvas for me to express creativity
                        in both logical and visual ways, and I love every bit of it"
                    </p>

                    <div className="qualification-box">
                        <MdChevronLeft className="arrow" onClick={slideLeft} />
                        <div id="slide">
                            {data.map((item) => (
                                <div className="counter-box" id={item.id}>
                                    <div className="counter-detail">
                                        <span className="counter-icon"><item.icon /></span>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <MdChevronRight className="arrow" onClick={slideRight} />
                    </div>
                </div>
            </div>
        </>
    )
}
