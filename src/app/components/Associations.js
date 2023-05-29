import styles from "../styles/features.module.css";

function Associations() {
    return (
        <>
            <div className={styles['main-content']}>
                <div className={`${styles["hm-quick"]} ${styles["hm-quicks"]}`}>
                    <div className={styles["hm-quicklinks"]} style={{ padding: "30px 20px 2px" }}>
                        <div className={styles.heading}>
                            <h1 style={{ marginTop: "-8px" }}>Quick Links</h1>
                        </div>
                        <div className={styles.quickbox}>
                            <div className={styles.quickboxes}>
                                <a href="Newsletter.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks1-new.png"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>Career Counselling</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="Robotics.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks2.png"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>Robotics</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="Sports.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks3.png"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>Sports</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="internation-exchange-programs.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks4-new.jpg"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>International Exchange Programs</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="Schoolinformation-CBSE.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks5-new.jpg"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>School Information for CBSE</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="External-Examination.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks6.png"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span> External Examination</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="International-Award.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-quicklinks7-new.jpg"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>IDS</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="School-Publications.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-School_Publications.jpg"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>Newsletter</span>
                                </a>
                            </div>
                            <div className={styles.quickboxes}>
                                <a href="media-gallery.html">
                                    <img
                                        src="images/quicklinks/dps-jaipur-News_Paper_Post.jpg"
                                        alt="DPS Jaipur"
                                        style={{ border: "3px solid #03723b" }}
                                    />
                                    <span>Newspaper Posts</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles["ib-scl"]}>
                        <div className={styles.heading}>
                            <h1 style={{
                                color:"#fff"
                                }}>
                                     Accreditation &amp; Associations </h1>
                        </div>
                        <div className={styles["collaboration-logos"]}>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-2.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-3.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-4.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-9.png" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-10.png" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-6.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-5.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img src="images/quicklinks/dps-jaipur-1.jpg" alt="DPS Jaipur" />
                            </div>
                            <div className={styles["ib-world"]}>
                                <img
                                    src="images/quicklinks/dps-jaipur-microsoft-showcase-school.jpg"
                                    alt="DPS Jaipur"
                                />
                            </div>
                            {/*<div class="ib-world-long">
                      <div class="ib-world isa">
                          <a href="" ><img src="images/quicklinks/7.png"></a>
                      </div>
							<div class="ib-world isa">
                          <a href="" ><img src="images/quicklinks/8.png"></a>
                      </div>
						</div>*/}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Associations;
