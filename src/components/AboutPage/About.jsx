
//icons
import { CiTimer } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAutoFixHigh } from "react-icons/md";
import { LuGlassWater } from "react-icons/lu";
import { BiWater } from "react-icons/bi";

import '../../style/components/aboutMe.css';
import profile from '../../assets/images/profile-girl.jpg'

export default function AboutMe() {
    return (
        <>
        <div className="about-me-page">
            <div className="about-img">
                <img src={profile} alt='profile-img'/>
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

            </div>
        </div>
        <div className="qualification-box">
            {/* <h2>Qualification</h2> */}
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><CiTimer /></span>
                    <span>Time Management</span>
                </div>
            </div>
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><GoLightBulb /></span>
                    <span>Creativity</span></div>
                </div>
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><FaPeopleGroup /></span>
                    <span>Collaboration</span>
                </div>
            </div>
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><MdAutoFixHigh /></span>
                    <span>Problem-Solving</span>
                </div>
            </div>
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><BiWater /></span>
                    <span>Flexibility</span>
                </div>
            </div>
            <div className="counter-box">
                <div className="counter-detail">
                    <span className="counter-icon"><LuGlassWater /></span>
                    <span>Learning</span>
                </div>
            </div>
           
        </div>
        </>
    )
}
