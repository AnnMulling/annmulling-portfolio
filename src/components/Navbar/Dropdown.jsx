import { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import { IoMenu } from "react-icons/io5";

//css & other
import '../../style/components/nav.css'

export default function DropDown() {
    const [showMenu, setShowmenu] = useState(false);

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
                            <Link to="/aboutme" className="link">About</Link>
                        </li>
                        <li>
                            <Link to="/work" className="link">Work</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>

         </>
    )
};
