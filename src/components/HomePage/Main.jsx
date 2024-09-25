
import SocialTag from '../Navbar/SocialTag';
import  Nav from '../Navbar/Nav';
//css & other
import '../../style/components/mainPage.css';

export default function MainPage() {

    return(
        <>
           <div className="main-page">
                <Nav />
                <div className="main-page-info">
                        <h1>Ann Mulling</h1>
                </div>

           </div>
            <div className="line-bt"></div>
           <SocialTag />
        </>

    )
}
