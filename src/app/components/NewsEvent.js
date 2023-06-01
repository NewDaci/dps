import styles from "../styles/newsevent.module.css";


function NewsEvent() {
    return (
        <>
            <div className={styles['main-content']}>
                <div className={styles.container}
                    style={{ padding: "0px 0px 20px" }}
                >
                    <div className={styles.row}
                        style={{ display: "flex" }}>

                        {/* HEADING PART */}
                        <div className={styles.span12}>
                            <div className={styles.heading}>
                                <h1
                                    style={{
                                        marginTop: "30px",
                                        marginLeft: "-304px",
                                    }}>News &amp; Events</h1>
                            </div>
                        </div>

                        {/* UPCOMING EVENTS */}
                        <div className={styles.span4}
                            style={{
                                width: "538px",
                                marginLeft: "26px",
                            }}>
                            <div className={styles['features-box']}
                                style={{
                                    width: "555px",
                                    marginRight: "811px",
                                }}>
                                <h3>
                                    <a
                                        href="upcoming-event.html"
                                        style={{ fontSize: 20, color: "#fff" }}
                                    >
                                        Upcoming Events
                                    </a>
                                </h3>
                                <div className={styles["hm-features-content"]}>
                                    <ul className={styles.ticker}>
                                        <marquee
                                            style={{ height: 255 }}
                                            direction="down"
                                            scrolldelay={200}
                                            onmouseover="stop();"
                                            onmouseout="start();"
                                        >
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        23rd of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        Summer Camp for III to VI...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        20th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        PTM for Classes VI to VII...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        19th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        {" "}
                                                        Summer Fun Activity for ...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        19th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        {" "}
                                                        Drawing Competition on C...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        18th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        Inter -House Poster Makin...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        18th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        {" "}
                                                        3-day LEAD workshop for ...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        18th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        3-day Indiation workshop ...
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="upcoming-event.html">
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        18th of May 2023{" "}
                                                    </span>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            verticalAlign: "middle",
                                                            width: "56%"
                                                        }}
                                                    >
                                                        3-day MUN workshop for VI...
                                                    </div>
                                                </a>
                                            </li>
                                        </marquee>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CALENDER
                        <div className={styles.span4} style={{ marginTop: "-8px" }}>
                            <iframe
                                src="/index.html"
                                width="100"
                                height="200"
                                title="Calender"
                            >
                            </iframe>
                        </div> */}

                        {/* NEWS AND UPDATES */}
                        <div className={styles.span4}>
                            <div className={styles['features-box']}
                                style={{
                                    width: "554px",
                                    marginLeft: "31px",
                                }}>
                                <h3>
                                    <a href="latest-news.html" style={{ fontSize: 20, color: "#fff" }}>
                                        News &amp; Updates
                                    </a>
                                </h3>
                                <div className={styles["hm-features-content"]}>
                                    <ul className={styles.ticker}>
                                        <marquee
                                            style={{ height: 255 }}
                                            direction="down"
                                            scrolldelay={200}
                                            onmouseover="stop();"
                                            onmouseout="start();"
                                        >
                                            <li
                                                className={styles["news-events-box-items"]}
                                                style={{ display: "list-item" }}
                                            >
                                                <a href="image-gallery-detail91e2.html?gal_id=230">
                                                    <span
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "5px 0",
                                                            fontSize: 13,
                                                            marginRight: 5
                                                        }}
                                                    >
                                                        29th of July 2021{" "}
                                                    </span>
                                                    <div className={styles["tile-box"]}>DPS Jaipur - Joins the Na...</div>
                                                </a>
                                            </li>
                                            <li
                                                className={styles["news-events-box-items"]}
                                                style={{ display: "list-item" }}
                                            >
                                                <a href="image-gallery-detailc4a3.html?gal_id=224">
                                                    <span
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "5px 0",
                                                            fontSize: 13,
                                                            marginRight: 5
                                                        }}
                                                    >
                                                        24th of July 2021{" "}
                                                    </span>
                                                    <div className={styles["tile-box"]}>Guru Purnima - Plantation...</div>
                                                </a>
                                            </li>
                                            <li
                                                className={styles["news-events-box-items"]}
                                                style={{ display: "list-item" }}
                                            >
                                                <a href="image-gallery-detailf8c3.html?gal_id=225">
                                                    <span
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "5px 0",
                                                            fontSize: 13,
                                                            marginRight: 5
                                                        }}
                                                    >
                                                        24th of July 2021{" "}
                                                    </span>
                                                    <div className={styles["tile-box"]}>Guru Purnima- Plantation ...</div>
                                                </a>
                                            </li>
                                        </marquee>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default NewsEvent;
