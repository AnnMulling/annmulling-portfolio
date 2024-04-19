import { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

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

        <div className="nav-btn">
            {!showMenu && <IoMdArrowDropdown onClick={dropDown} />}
            {/* <div className="drop-down-menu"> */}
            {showMenu &&
                <>
                    <IoMdArrowDropup onClick={dropDown} />
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

                        </ul>
                </>
            }

            {/* </div> */}
        </div>


    )
};
