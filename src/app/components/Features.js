import styles from "../styles/try.module.css";
import Image from "next/image";


function Features() {
    return (
        <>
            <div className={styles['main-content']}>
                <div className={styles.container} style={{
                    padding: "0px 0px 20px"
                }}>
                    <div className={`${styles.row} ${styles['background-image']}`}
                        style={{
                            paddingRight: "50px",
                            paddingTop: "37px",
                            paddingBottom: "23px",
                        }}>

                        {/* FOR HEADING ONLY */}
                        <div className={styles.span12}>
                            <div className={styles.heading}
                                style={{
                                    paddingLeft: "204px",
                                    paddingTop: "67px",
                                }}>
                                <h1>Features</h1>
                            </div>
                        </div>

                        <div className={styles.span4}>
                            <div className={styles["hm-feat-boxes"]} style={{
                                width: "100%",
                                margin: 0,
                                paddingTop: "15px"
                            }}>
                                <a href="image-gallery.html">
                                    <span>Photo Gallery</span>
                                    <div className={styles["test-slide"]} style={{ height: "169px !important" }}>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-001.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "block",
                                                zIndex: 8,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-002.png"
                                                width={2000}
                                                height={110}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-003.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-004.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-005.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-006.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "none",
                                                zIndex: 7,
                                                opacity: 0,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-007.png"
                                                width={100}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.span4}>
                            <div className={styles["hm-feat-boxes"]} style={{
                                width: "100%",
                                margin: 0,
                                // marginBottom: "5px",
                            }}>
                                <a href="Infrastructure-Facilities.html">
                                    <span>Infrastructure</span>
                                    <div
                                        className={styles["test-slide"]}
                                        style={{
                                            position: "relative",
                                            width: 360,
                                            height: 179,
                                            overflow: "hidden"
                                        }}
                                    >
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 6,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-01.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 6,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-02.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 6,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-03.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 6,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-04.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "block",
                                                zIndex: 7,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-05.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 6,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image
                                                src="/gallery/dps-jaipur-icon-gal-06.png"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.span4}>
                            <div className={styles["hm-feat-boxes"]} style={{
                                width: "100%",
                                margin: 0,
                            }}>
                                <a href="events.html">
                                    <span>Events</span>
                                    <div
                                        className={styles["test-slide"]}
                                        style={{
                                            position: "relative",
                                            width: 360,
                                            height: 179,
                                            overflow: "hidden"
                                        }}
                                    >
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 3,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image src="/gallery/dps-jaipur-icon-gal.jpg"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur" />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 360,
                                                display: "none",
                                                zIndex: 3,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image src="/gallery/dps-jaipur-icon-sports.jpg"
                                                width={500}
                                                height={100}
                                                alt="DPS Jaipur" />
                                        </div>
                                        <div
                                            className={styles["test-box"]}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                display: "block",
                                                zIndex: 4,
                                                opacity: 1,
                                                width: 360,
                                                height: 179
                                            }}
                                        >
                                            <Image src="/gallery/dps-jaipur-icon-curri.jpg"
                                                width={5000}
                                                height={120}
                                                alt="DPS Jaipur" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}


export default Features;
