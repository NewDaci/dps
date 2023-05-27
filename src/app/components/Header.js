import styles from "../styles/header.module.css";
import Link from "next/link";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Header() {
    return (
        <>
            {/* TOP HEADER */}
            <div className={styles['top-header']}>
                <div className="container">
                    <div className="row">
                        <div className="span3">
                        </div>
                        <div className="span9">
                            <ul>
                                <li><Link href='/pages/careers'>Career</Link></li>
                                <li><Link href='/pages/transfer_certificate'>Transfer Certificate</Link></li>
                                <li><Link href='/pages/rte_notification'>RTE Notification 2019</Link></li>
                                <li><Link href='/pages/blogs'>Blogs</Link></li>
                                <li><Link href='/pages/internation_links'>International Links</Link></li>
                                <li><Link href='/pages/student_login'>Student Login</Link></li>
                                <li><Link href='/pages/staff_login'>Staff Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECOND HEADER */}
            <div className={`${styles['logo-head']} ${styles['main-content']}`}>
                <div className="container">
                    <div className="row">
                        <div className="span3 desktop-view">
                            <div className="admission call-us"><a href="enquiry/index.html"><i className="fa fa-book"
                                style={{ color: "#fff" }}></i> <p style={{ color: "#fff" }}>Admission Enquiry</p></a></div>
                            <div className={styles["top-socials"]} style={{ lineHeight: "120px" }}>
                                <ul>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf"><Image src='/fb96.png' width={60} height={40} /></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.instagram.com/dps_jaipur_official/"><Image src='/ig96.png' width={60} height={40} /></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://www.youtube.com/channel/UCZET6hMeeritb2oo2z5QdJQ"><Image src='/yt96.png' width={60} height={40} /></Link></li>
                                    <li><Link className={styles["foot-social-link"]} href="https://twitter.com/DPSJaipur"><Image src='/tw96.png' width={60} height={40} /></Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="span6">
                            <div className={styles.logo}>
                                <Link href="/">
                                    <Image
                                        style={{
                                            marginTop: '-132px',
                                            marginBottom: '10px'
                                        }}
                                        src="/dpslogo.png"
                                        width={540}
                                        height={135}
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

export default Header;
