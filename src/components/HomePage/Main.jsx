
import SocialTag from '../Navbar/SocialTag';

//css & other
import '../../style/components/mainPage.css';

export default function MainPage() {

    return(
        <>
           <div className="main-profile-pic">
                <div className="carousel">
                    <span>Ann Mulling </span>
                    <span>Jr Software Engineer </span>
                    <span></span>
                </div>

           </div>
            <SocialTag />
        </>

    )
}
