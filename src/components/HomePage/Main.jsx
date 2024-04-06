
import SocialTag from '../Navbar/SocialTag';

//css & other
import '../../style/components/mainPage.css';

export default function MainPage() {

    return(
        <>
           <div className="main-page">
                <div className="main-page-info">
                    <div>
                        <span className="hi-text">Hi there, I am</span>
                        <div className="name-slide">
                            <h1>Ann Mulling</h1>
                        </div>
                        <span className="role-text"> a Jr Software Engineer </span>
                    </div>


                </div>

           </div>
            <SocialTag />
        </>

    )
}
