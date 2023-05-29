import styles from "../styles/features.module.css";


function Testimonials() {
    return (
        <>
            <div className={styles['main-content']}>
                <div className={styles.container} style={{ padding: "0px 0px 20px" }}>
                    <div className={styles.row}>
                        <div className={styles.span12}>
                            <div className={styles.heading}>
                                <h1>Testimonials</h1>
                            </div>                  
                            <div className={`${styles['hm-feat-box']} ${styles.testi}`}>
                                <div className={styles["test-slide"]} style={{ width: 1053, height: 180 }}>
                                    <div
                                        className={styles["test-box"]}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "none",
                                            zIndex: 16,
                                            opacity: 0,
                                            width: 948,
                                            height: 158
                                        }}
                                    >
                                        <div className={styles["test-box-content"]}>
                                            <img
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="upload/testimonial/709841620809501.jpg"
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Currently a 4th year undergraduate at IIT Kharagpur.
                                                <br />
                                                My education at DPS Jaipur transformed me holistically with
                                                constant inspirations and encouragement from my teachers. I
                                                was very young when I developed an interest in science and
                                                robots, bu... <a href="Alumni-Speak.html">Read More</a>
                                                <span>Mohit Singh </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={styles["test-box"]}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "none",
                                            zIndex: 16,
                                            opacity: 0,
                                            width: 948,
                                            height: 158
                                        }}
                                    >
                                        <div className={styles["test-box-content"]}>
                                            <img
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="upload/testimonial/510511620809421.jpg"
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                (Studied Manufacturing Engineering from BITS Pilani and
                                                pursuing Masters in Financial Engineering from UC Berkeley
                                                University, California.)
                                                <br />
                                                It gives me immense pride to say that I was part of the first
                                                batch of students enrolled in DPS Jaipur...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Nitish Garg</span>
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="next">
                                        <i className="fa fa-angle-left" />
                                    </div>
                                    <div className="prev">
                                        <i className="fa fa-angle-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>

    )
}
export default Testimonials;