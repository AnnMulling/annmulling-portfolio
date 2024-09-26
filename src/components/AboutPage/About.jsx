
import DropDown from '../Navbar/Dropdown';

//icons & imgs
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import profile from '../../assets/images/profile.jpg'

//css & other
import { data } from "./data";
import '../../style/components/aboutMe.css';
import SocialTag from '../Navbar/SocialTag';

export default function AboutMe() {

    // const slideLeft = () => {
    //     let slider = document.getElementById('slide');
    //     slider.scrollLeft = slider.scrollLeft - 175;
    // };

    // const slideRight = () => {
    //     let slider = document.getElementById('slide');
    //     slider.scrollLeft = slider.scrollLeft + 175;
    // };

    return (
        <div className="about-me-page">

            <div className="about-detail">
                <div className="about-title">
                    <h1>About me</h1>
                </div>
                <div className="about-info">
                    <p>My name is <strong>Ann.</strong> I speak Thai and English.</p>
                    <p>
                        I'm a creative and easy-going individual who loves tackling new challenges.
                        I bring a mix of curiosity and adaptability to everything I do.
                        Whether it's collaborating with others or diving into solo projects,
                        I'm always up for a good adventure.
                    </p>
                    <p>
                        In my free time, I find joy in the art of baking🧁,
                        experimenting with flavors and textures to create delicious treats that bring joy to others.
                    </p>
                    <p> "Full stack software engineering provides the perfect canvas for me to express creativity
                        in both logical and visual ways, and I love every bit of it"
                    </p>
                </div>
            </div>
            <div className="info-divider"></div>

            <div className="about-img">
                    <img src={profile} alt='profile-img' />
            </div>
        </div>
    )
}
