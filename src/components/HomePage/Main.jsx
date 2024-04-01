
import SocialTag from '../Navbar/SocialTag';

//css & other
import '../../style/components/mainPage.css';

export default function MainPage() {

    return(
        <>
           <div className="main-profile-pic">
                <div className="carousel">
                    <span>Ann Mulling </span>
                    <span>Ann Mulling </span>
                    <span>Ann Mulling </span>
                </div>
                {/* <img src="https://source.unsplash.com/a-close-up-of-a-gray-cats-face-YQlNLVYckRk" alt="profile-pic" /> */}
           </div>
            <SocialTag />
        </>

    )
}
