import styles from "../styles/footer.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className={styles.footer}>    {/*MAIN FOOTER*/}
        
            {/* SOCIAL FOOTER */}
            <div className={styles['foot-social']}>
                <ul>
                    <li><Link className={styles["foot-social-link"]} href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf"><i> <FaFacebookF /> </i></Link></li>
                    <li><Link className={styles["foot-social-link"]} href="https://www.instagram.com/dps_jaipur_official/"><i> <FaInstagram /> </i></Link></li>
                    <li><Link className={styles["foot-social-link"]} href="https://www.youtube.com/channel/UCZET6hMeeritb2oo2z5QdJQ"><i> <FaYoutube /> </i></Link></li>
                    <li><Link className={styles["foot-social-link"]} href="https://twitter.com/DPSJaipur"><i> <FaTwitter /> </i></Link></li>
                </ul>
            </div>

            {/* FIRST FOOTER DIV*/}
            <div className={styles['first-footer']}>
                <div className={`${styles['footer-logo']} ${styles['foot-box']}`}>
                    <Image
                    style={{marginTop:"40px"}}
                        src="/dpslogo.png"
                        width={500}
                        height={120}
                        alt="DPS Jaipur"
                    />
                </div>

                {/* QUICK LINKS DIV */}
                <div className={`${styles['quick-links']} ${styles['foot-box']}`}
                style={{
                    height: '240.8px',
                    width: '423px'                
                }}>
                    <h3>Quick Links</h3>
                    <ul>
                        {/* <li><a href="Facilities">Facilities</a></li> */}
                        {/* <li><a href="Facilities-Infrastructure">Infrastructure</a></li> */}
                        <li><a href="Registration-Form.html">Registration Form</a></li>
                        <li><a href="RFID.html">RFID</a></li>
                        {/* <li><a href="upload/RTE-Notification-2021-DPS.PDF-(2).jpg" target="_blank">RTE Notification 2021</a></li> */}
                        <li><a href="upload/attach/933981681293940_new_RTE.pdf" target="_blank">RTE Notification 2023</a></li>
                        <li><a href="upload/attach/367921598538685_Important_Circulars.pdf" target="_blank">Important Circulars</a></li>
                        <li><a href="Contact.html">Contact Us</a></li>
                        <li><a href="https://www.dpsjaipur.com/message.html" target="_blank">PTA Registration</a></li>
                        <li><a href="https://epathshala.nic.in/">NCERT e books</a></li>
                    </ul>
                </div>

                {/* CONTACT US DIV */}
                <div className={styles['foot-box']}
                style={{
                    width: '400px',
                    height: '253px'
                }}>
                    <h3>Contact us</h3>
                    <div className={styles['conatct-box']}>
                        <div className={styles.contact}>
                            <p>Delhi Public School, Jaipur, Ajmer Road Branch NH-8, Jaipur Ajmer Highway, Jaipur Pin code – 302026</p>
                            <p>Phone : +91-829-056-5656, +91-9680006938<br />
                                For Admission Enquiry : +91-9116405333+91-9828982987<br />
                                E-mail : <a href="mailto:info@dpsjaipur.com">info@dpsjaipur.com</a>, <a href="mailto:admission@dpsjaipur.com">admission@dpsjaipur.com</a><br />
                                <a href="#" title="DPS Jaipur">Visitor Counter - <img style={{ width: '142px', marginLeft: '5px' }} src="https://counter8.stat.ovh/private/freecounterstat.php?c=1arxsltycyq6fpg8rz2wgbjkusdu6hg9" border="0" title="Visitor Counter" alt="DPS jaipur" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['button-top']}><i className="fa fa-arrow-up"></i>
            </div>

            {/* BOTTOM FOOTER */}
            <footer className={styles.bottom}>
                <p>© 2023 All rights reserved with DPS Jaipur</p>
                <div className={styles.ecis}>
                    <p>Powered by : <Link href="https://edunexttechnologies.com/" style={{ color: '#fff' }}>Edunext Technologies</Link></p>
                </div>
            </footer>     {/* BOTTOM FOOTER ENDS */}
        </footer>
    );
}

export default Footer;
