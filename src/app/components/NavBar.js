import styles from "../styles/navbar.module.css";

function NavBar() {
    return (
        <div className={styles.navigation}>
            <div className={styles.container}>
                <div className="row">
                    <div className="span12">
                        <nav className={styles['site-desktop-menu-new']}>
                            <ul className={styles.clearfix}>
                                <li className="" data-wow-delay="0.2s">
                                    <a href="index-2.html"> Home</a>
                                </li>
                                {/* ABOUT US */}
                                <li className="" data-wow-delay="0.3s">
                                    <a href="#">About Us</a>
                                    <ul style={{ display: "none" }}>
                                        <li>
                                            <a href="About-Us.html">Overview</a>
                                        </li>
                                        <li>
                                            <a href="Vision-and-Mission.html">Vision and Mission</a>
                                        </li>
                                        <li>
                                            <a href="DPS-Society.html">DPS Society</a>
                                        </li>
                                        <li>
                                            <a href="Director-Message.html">Director's Message</a>
                                        </li>
                                        <li>
                                            <a href="Principal-Message.html">Principal's Message</a>
                                        </li>
                                        <li>
                                            <a href="Management-Committee.html">Management Committee</a>
                                        </li>
                                        <li>
                                            <a href="PTA-FOR-2022-23.html">SLFC for 2022-23</a>
                                        </li>
                                        <li>
                                            <a href="School-Committees.html">School Committees</a>
                                        </li>
                                        <li>
                                            <a href="Safety-and-Security.html">Safety And Security</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* INFRASTRUCTURE */}
                                <li className="" data-wow-delay="0.8s">
                                    <a href="#">Infrastructure</a>
                                    <ul style={{ display: "none" }}>
                                        <li className="">
                                            <a href="Infrastructure-Facilities.html">Facilities</a>
                                        </li>
                                        <li className="">
                                            <a href="Hybrid--Classes.html">Hybrid Learning</a>
                                        </li>
                                        <li>
                                            <a href="Junior-Labs.html">Junior Labs</a>
                                        </li>
                                        <li>
                                            <a href="Senior-Labs.html">Senior Labs</a>
                                        </li>
                                        <li>
                                            <a href="ATL-Lab.html">Atal Tinkering Lab</a>
                                        </li>
                                        <li>
                                            <a href="Performing-Arts-Studios.html">
                                                Performing Arts Studios
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Library.html">Library</a>
                                        </li>
                                        <li>
                                            <a href="Transport.html">Transport</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* HOSTEL */}
                                <li className="" data-wow-delay="0.16s">
                                    <a href="#">Hostel</a>
                                    <ul style={{ display: "none" }}>
                                        <li className="">
                                            <a href="Hostel-Overview.html">Hostel Overview</a>
                                        </li>
                                        <li>
                                            <a href="Facilities-Infrastructure.html">
                                                Facilities &amp; Infrastructure
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Schedule.html">Schedule</a>
                                        </li>
                                        <li>
                                            <a href="Boarding-Registration-Form.html">
                                                Hostel Registration Form
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* ADMISSION */}
                                <li className={`${styles.dropdown}`}>
                                    <a href="#">Admission</a>
                                    <ul className={styles['dropdown-menu']}>
                                        <li className="">
                                            <a href="Admission-Information.html">Admission Information</a>
                                        </li>
                                        <li className="">
                                            <a href="Registration-Form.html">Registration Form</a>
                                        </li>
                                        <li>
                                            <a href="Fee-Structure.html">Fee Structure</a>
                                        </li>
                                        <li>
                                            <a href="upload/attach/430291668413026_FEE_RULES.pdf">Fee Rules</a>
                                        </li>
                                        <li>
                                            <a href="Withdrawals.html">Withdrawals</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <li className="hovered" data-wow-delay="0.21s">
                                    <a href="#">Admission</a>
                                    <ul
                                        style={{
                                            display: "block",
                                            overflow: "hidden",
                                            height: 1,
                                            paddingTop: 0,
                                            marginTop: 0,
                                            paddingBottom: 0,
                                            marginBottom: 0
                                        }}>
                                        <li className="">
                                            <a href="Admission-Information.html">Admission Information</a>
                                        </li>
                                        <li className="">
                                            <a href="Registration-Form.html">Registration Form</a>
                                        </li>
                                        <li>
                                            <a href="Fee-Structure.html">Fee Structure</a>
                                        </li>
                                        <li>
                                            <a href="upload/attach/430291668413026_FEE_RULES.pdf">
                                                Fee Rules
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Withdrawals.html">Withdrawals </a>
                                        </li>
                                    </ul>
                                </li> */}

                                {/* ACADEMICS */}
                                <li className="" data-wow-delay="0.26s">
                                    <a href="#">Academics</a>
                                    <ul style={{ display: "none" }}>
                                        <li className="">
                                            <a href="Examination.html">Examination</a>
                                        </li>
                                        <li className="">
                                            <a href="Our-Team.html">Our Team</a>
                                        </li>
                                        <li className="">
                                            <a href="Class-Teachers.html">Class Teachers</a>
                                        </li>
                                        <li>
                                            <a href="Coordinators.html">Coordinators</a>
                                        </li>
                                        <li>
                                            <a href="Houses.html">Houses</a>
                                        </li>
                                        <li>
                                            <a href="-Student-Council.html">Student Council</a>
                                        </li>
                                        <li>
                                            <a href="Clubs.html">Clubs</a>
                                        </li>
                                        <li>
                                            <a href="Experiential-Learning.html">Experiential Learning</a>
                                        </li>
                                        <li>
                                            <a href="Hall-off-fame.html">Hall of fame</a>
                                        </li>
                                        <li>
                                            <a href="Syllabus.html">Syllabus</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* GALLERY */}
                                <li className="" data-wow-delay="0.37s">
                                    <a href="#">Gallery</a>
                                    <ul style={{ display: "none" }}>
                                        <li>
                                            <a href="image-gallery.html">Image Gallery</a>
                                        </li>
                                        <li>
                                            <a href="Video-Gallery.html">Video Gallery</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* INITIATIVES */}
                                <li className="" data-wow-delay="0.38s">
                                    <a href="#">Initiatives</a>
                                    <ul style={{ display: "none" }}>
                                        <li className="">
                                            <a href="Learner-Centric-Programmes.html">
                                                Learner Centric Programmes
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Shiksha Kendra</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="About.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="social-initiative.html">Shiksha Kendra Photos</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="Pravaah.html">Pravaah</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* RESULT */}
                                <li className="" data-wow-delay="0.45s">
                                    <a href="#">Result</a>
                                    <ul style={{ display: "none" }}>
                                        <li>
                                            <a href="upload/attach/2601684353431_Class_XII_Result.pdf">
                                                Class XII
                                            </a>
                                        </li>
                                        <li>
                                            <a href="upload/attach/507911684353584_Class_X_Result.pdf">
                                                Class X
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* HUBS OF LEARNING */}
                                <li className="" data-wow-delay="0.70s">
                                    <a href="DPS-HOL.html"> Hubs of Learning</a>
                                </li>

                                {/* TENNIS ACADEMY */}
                                <li className="" data-wow-delay="0.82s">
                                    <a href="#">Devyani Jaipuria Tennis Academy</a>
                                    <ul style={{ display: "none" }}>
                                        <li>
                                            <a href="-About-Academy.html">About Academy</a>
                                        </li>
                                        <li>
                                            <a href="The-Zeeshan-Advantage-Our-Mentor.html">
                                                The Zeeshan Advantage Our Mentor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Programmes.html">Programmes</a>
                                        </li>
                                        <li>
                                            <a href="Facilities.html">Facilities</a>
                                        </li>
                                        <li>
                                            <a href="Blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="DJTA-Gallery.html">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="DJTA-Contact-us.html">Contact us</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NavBar;
