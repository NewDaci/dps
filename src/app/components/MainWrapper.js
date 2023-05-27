import styles from "../styles/mainwrapper.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Marquee from "./Marquee";

function Wrapper() {
    return (
        <>
            {/* first notification */}
            <div className={styles.purchase} style={{ background: "#DB9C27" }}>
                <div className={styles.container} style={{ padding: "5px 0px 4px" }}>
                    <div className="row">
                        <div className={styles.thought}>
                            <div className="span12">
                                <Marquee />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second notification */}
            <div className={styles.purchase}>
                <div className={styles.container} style={{ padding: "5px 0px 4px" }}>
                    <div className={styles.row}>
                        <div className={styles.thought}>
                            <div className={styles['desktop-view']}
                            style={{ background: "#DB9C27" }}>
                                <h2
                                    style={{
                                        margin: 0,
                                        padding: "0 20px",
                                        lineHeight: 34,
                                        fontSize: 13,
                                        color: "#FFF",
                                        height: 36,
                                        boxSizing: "border-box",
                                        fontWeight: "bold"
                                    }}
                                >
                                    New Notifications
                                </h2>
                            </div>

                            {/* <div className="span2 mobile-view" style={{ background: "#03723b" }}>
                                <h2
                                    style={{
                                        display: "inline-block",
                                        margin: 0,
                                        padding: "0 20px",
                                        textAlign: "center",
                                        lineHeight: 34,
                                        fontSize: 14,
                                        color: "#FFF",
                                        height: 36,
                                        boxSizing: "border-box",
                                        width: "100%"
                                    }}
                                >
                                    {" "}
                                    New Notifications
                                </h2>
                            </div> */}
                            <div className="span10 desktop-view" style={{ marginTop: '-28px', marginBottom:'7px' }}>
                                <marquee
                                    scrollamount={4}
                                    scrolldelay={40}
                                    onmouseover="this.stop();"
                                    onmouseout="this.start();"
                                    style={{ color: "#fff" }}
                                >
                                    <ul>
                                        <li className={styles.thoughts}> 
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="upload/attach/797731655919554_New_add.jpg"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                Admissions open for Session 2023-2024 ( Classes Pre-Nursery to
                                                IX &amp; XI )
                                            </a>
                                        </li>{" "}
                                        <li className={styles.thoughts}>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="upload/attach/244221618436747_covid.jpg"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                COVID-19 Prevention Measures
                                            </a>
                                        </li>{" "}
                                        <li className={styles.thoughts}>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="http://online.anyflip.com/ziclg/ehaw/mobile/index.html"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                Pratibimb - The Reflections
                                            </a>
                                        </li>
                                        {/*						<li><a href="#" target="_blank" style="color:white"><u>Welcome to DPS Jaipur</u> </a></li>*/}
                                    </ul>
                                </marquee> 
                            </div>

                            {/* <div className="span10 mobile-view">
                                <marquee
                                    scrollamount={2}
                                    scrolldelay={40}
                                    onmouseover="this.stop();"
                                    onmouseout="this.start();"
                                    style={{ color: "#fff" }}
                                >
                                    <ul>
                                        <li>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="upload/attach/797731655919554_New_add.jpg"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                Admissions open for Session 2023-2024 ( Classes Pre-Nursery to
                                                IX &amp; XI )
                                            </a>
                                        </li>{" "}
                                        <li>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="upload/attach/244221618436747_covid.jpg"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                COVID-19 Prevention Measures
                                            </a>
                                        </li>{" "}
                                        <li>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="http://online.anyflip.com/ziclg/ehaw/mobile/index.html"
                                                target="_blank"
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                Pratibimb - The Reflections
                                            </a>
                                        </li>
                                        {/*						<li><a href="#" target="_blank" style="color:white"><u>Welcome to DPS Jaipur</u> </a></li>
                                    </ul>
                                </marquee>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Wrapper;
