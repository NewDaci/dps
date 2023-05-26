import styles from "../styles/mainwrapper.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


function Wrapper() {
    return (
        <>
            <div className={`${styles['logo-head']} ${styles['main-content']}`}>
                <div className="container">
                    <div className="row">
                        <div className="span3 desktop-view">
                            <div className="admission call-us"><a href="enquiry/index.html"><i className="fa fa-book"
                                style={{ color: "#fff" }}></i> <p style={{ color: "#fff" }}>Admission Enquiry</p></a></div>
                            <div className={styles["top-socials"]} style={{ lineHeight: "120px" }}>
                                <ul>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf"><i> <FaFacebookF /> </i></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.instagram.com/dps_jaipur_official/"><i> <FaInstagram /> </i></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.youtube.com/channel/UCZET6hMeeritb2oo2z5QdJQ"><i> <FaYoutube /> </i></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://twitter.com/DPSJaipur"><i> <FaTwitter /> </i></Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="span6">
                            <div className={styles.logo}>
                                <Link href="/">
                                    <Image
                                        src="/dpslogo.png"
                                        width={300}
                                        height={150}
                                        alt="DPS Jaipur"
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* <div className="span3" style={{ lineHeight: "120px" }}>
                            <div className={styles["top-socials"]}>
                                <ul>
                                    <li><a href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf" target="_blank"><img src="images/fb-icon.png" title="Facebook" /></a></li>
                                    <li><a href="https://www.instagram.com/dps_jaipur_official/" target="_blank"><img src="images/instagram.png" title="Instagram" /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCZET6hMeeritb2oo2z5QdJQ" target="_blank"><img src="images/chrome_youtube.png" title="Youtube" /></a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=+919116405333" target="_blank"><img src="images/whatsapp.png" title="Whatsapp" /></a></li>
                                    <li><a href="https://twitter.com/DPSJaipur" target="_blank"><img src="images/twitter.png" title="Whatsapp" /></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wrapper;
