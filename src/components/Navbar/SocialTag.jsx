import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


//css & other
import '../../style/components/nav.css'

export default function SocialTag() {
    return(
        <>
              <div className="social-tag">
                <ul className="social-icons">
                    <li><a href="https://github.com/AnnMulling" title="Github" target="_blank"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/ann-m-653708227/" title="Linkedin" target="_blank"><FaLinkedin /></a></li>
                    <li><a href="mailto:p.annmulling@gmail.com" title="Email" target="_blank"><MdOutlineMarkEmailUnread /></a></li>
                </ul>
             </div>
        </>
    )
};
