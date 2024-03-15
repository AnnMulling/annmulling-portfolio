import { CiGlobe } from "react-icons/ci";
import '../../style/components/mainPage.css';

export default function MainPage() {
    return(
        <>
            {/* location tag */}
            <div className="location-tag">
                <div>Location <CiGlobe id="globe" /> </div>
                <div>Chicago, IL</div>
            </div>
        </>
    )
}
