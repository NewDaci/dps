import styles from "../styles/newsevent.module.css";


function NewsEvent() {
    return (
        <>
            <div className={styles['main-content']}>
                <div className={styles.container} 
                style={{ padding: "0px 0px 20px" }}>
                    <div className={styles.row}>

                        {/* HEADING PART */}
                        <div className={styles.span12}>
                            <div className={styles.heading}>
                                <h1>News &amp; Events</h1>
                            </div>
                        </div>

                        {/* UPCOMING EVENTS */}
                        <div className={styles.span4}>
                            <div className={styles['features-box']}>
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

                        {/* CALENDER */}
                        <div className={styles.span4} style={{ marginTop: "-8px" }}>
                            <iframe
                                src="/index.html"
                                width="100"
                                height="200"
                                title="Calender"
                            >
                            </iframe>
                        </div>

                        {/* NEWS AND UPDATES */}
                        <div className={styles.span4}>
                            <div className={styles['features-box']}>
                                <h3>
                                    <a href="latest-news.html" style={{ fontSize: 20, color: "#fff" }}>
                                        News &amp; Updates
                                    </a>
                                </h3>
                                <div className={styles["hm-features-content"]}>
                                    <ul className={styles.ticker}>
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
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail732b.html?gal_id=220">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shorya- Hindi Recitation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile280.html?gal_id=223">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shorya - Hindi Recitation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2355.html?gal_id=221">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>An online Introductory me...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail27bc.html?gal_id=222">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> DPS Jaipur Photography C...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1165.html?gal_id=216">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Folktales- A Treasure Tro...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0631.html?gal_id=218">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Folktales - A Treasure Tr...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2c33.html?gal_id=214">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Pajama Party for classes ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9caa.html?gal_id=219">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Pyjama Party...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4c6a.html?gal_id=211">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mathopolis: Inter-house M...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail16b7.html?gal_id=212">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of July 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mathopolis - Inter House ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0a08.html?gal_id=207">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>7th International Yoga Da...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1561.html?gal_id=208">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Delhi Public School, Jaip...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7e3e.html?gal_id=206">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Cool Chefs of the Junior ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile453.html?gal_id=202">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Another glorious moment f...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail07d6.html?gal_id=203">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS, Jaipur hosted its fi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6480.html?gal_id=205">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>MUN Club organized two pr...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9239.html?gal_id=201">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Jannat Sakshi Grade XII g...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7394.html?gal_id=200">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>World Environment Day 202...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb44e.html?gal_id=210">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of June 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Javin won the Consolation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail20b5.html?gal_id=199">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>School Magazine : Pratibi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9f98.html?gal_id=198">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>First position in Online ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2dc8.html?gal_id=196">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Science Experiments pave ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail86e4.html?gal_id=197">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Science Experiments pave ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailfd44.html?gal_id=192">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Tour of Museums ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail430b.html?gal_id=194">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Tour of Some Muse...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8d50.html?gal_id=195">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>HUBS OF LEARNING Session ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail25dd.html?gal_id=190">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Storytelling session usin...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4186.html?gal_id=191">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Storytelling Session usin...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf959.html?gal_id=189">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>CREATIVE WRITING SESSION...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila3f8.html?gal_id=186">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS, Jaipur salute all th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail49d1.html?gal_id=187">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    8th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mother’s Day Celebratio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7ce0.html?gal_id=188">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    8th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>An Interactive Session on...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailfeb4.html?gal_id=181">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>An Interactive Session on...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail485f.html?gal_id=193">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Visit to Greengro...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0d22.html?gal_id=175">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Delightful Veggies: A Ses...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb68a.html?gal_id=176">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Live on Facebook A Sessi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail71c1.html?gal_id=177">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Bhavik Bhargava of grade ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf1d8.html?gal_id=182">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>A Virtual Talk Show for P...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailee5e.html?gal_id=183">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of May 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>A Virtual Talk Show for P...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail75e4.html?gal_id=184">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of April 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Talk Show with th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailaa75.html?gal_id=185">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of April 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Virtual Talk Show wit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3056.html?gal_id=174">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Ruins Poem by Mansi Mahla...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3177.html?gal_id=172">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Basant Panchami Celebrati...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8a55.html?gal_id=170">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Session on Digital Eye St...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb3a2.html?gal_id=323">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Spellathon Grade III...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1eb5.html?gal_id=171">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>TIPS TO PREPARE FOR THE B...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail713f.html?gal_id=173">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of February 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>SESSION ON FACING BOARD E...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail68b7.html?gal_id=169">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Holocaust Remembr...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb50a.html?gal_id=162">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>72nd Republic Day celebra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail14e0.html?gal_id=167">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Republic Day Celebration...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6399.html?gal_id=163">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Let’s salute the nation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail56c0.html?gal_id=164">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fireless cooking on the e...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb525.html?gal_id=165">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fireless cooking on the e...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5e1e.html?gal_id=166">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Republic Day Special Asse...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc8c3.html?gal_id=161">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Special Prize Trophy ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailca11.html?gal_id=159">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>IGNITE-The Science Fest 2...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailab74.html?gal_id=160">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    22nd of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Dimension i...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6bb1.html?gal_id=155">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    20th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Queen’s Commonwealt...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild3ad.html?gal_id=158">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    20th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations to all th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb874.html?gal_id=156">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>English Story Narration A...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail16d7.html?gal_id=157">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>English Story Narration A...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail411f.html?gal_id=153">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Grade XII Online Citation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc02c.html?gal_id=154">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of January 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>INFORMATION SESSION BY BM...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8e72.html?gal_id=150">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Grade X Orientation Sessi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail25fe.html?gal_id=151">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Grade X Online Orientatio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc8ac.html?gal_id=138">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Christmas Celebration Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail827c.html?gal_id=139">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Valedictory Function of ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailce5d.html?gal_id=143">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Christmas art and craft a...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb14c.html?gal_id=147">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Christmas Celebration Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail594d.html?gal_id=140">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Safe Touch - Unsafe Touch...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailaade.html?gal_id=148">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hindi Story Telling Compe...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailad93.html?gal_id=149">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Grade V Hindi Story Telli...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile00e.html?gal_id=136">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>SESSION BY PLAKSHA UNIVER...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail13b8.html?gal_id=142">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Session on ‘Good Touch/...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6757.html?gal_id=137">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Orientation Session for t...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail787c.html?gal_id=145">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Orientation Session for t...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile2cf.html?gal_id=134">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>INFORMATION SESSION BY NI...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7aa3.html?gal_id=132">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Math Quiz Grade V...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail49a8.html?gal_id=133">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Math Quiz Grade V...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail971d.html?gal_id=131">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Aryaman Panda 5B secured ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail81b2.html?gal_id=127">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    8th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Information Session by O....</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf469.html?gal_id=130">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Tanmay Ba...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf296.html?gal_id=129">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Sumit Sin...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild60f.html?gal_id=141">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of December 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Table Manners Session Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila0ac.html?gal_id=125">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Intra MUN 2020 - Closing...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6f00.html?gal_id=144">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Table Etiquettes Sessions...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1af3.html?gal_id=146">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Intra MUN 2020...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailad77.html?gal_id=124">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Intra MUN 2020...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailfe2f.html?gal_id=123">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Table Etiquettes Session...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail17b7.html?gal_id=121">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur is Ranked No.2...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailba46.html?gal_id=122">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Proud Winner of The Diwal...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile79f.html?gal_id=115">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Webinar - Hubs of Learnin...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail69cf.html?gal_id=113">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Webinar on Adapting to th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild260.html?gal_id=114">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Second position in an onl...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3a1d.html?gal_id=112">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Karunanja...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail76e7.html?gal_id=111">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Circle Time Activity - Th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailef82.html?gal_id=109">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Build Good Habits, Break ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0cd9.html?gal_id=110">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Bhavik Bhargava bagged th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7325.html?gal_id=108">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Circle Time Activity - Th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail90cf.html?gal_id=106">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations to the Tw...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbff4.html?gal_id=105">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations for quali...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4c4a.html?gal_id=99">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur won third priz...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf2d1.html?gal_id=100">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur won First priz...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0b73.html?gal_id=96">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    8th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations to all th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail013d.html?gal_id=95">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>7 DPS Jaipur Students Qua...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc6a1.html?gal_id=91">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Role Play Competition Gr...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail59a6.html?gal_id=94">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play Competition Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail44ba.html?gal_id=90">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations to the Ac...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5ec8.html?gal_id=84">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hearty congratulations Un...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9865.html?gal_id=85">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Career counselling sessio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7b9d.html?gal_id=86">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Virtual Quiz ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9df7.html?gal_id=88">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>A Virtual Circle Time - R...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail17e3.html?gal_id=93">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of October 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Circle Time - Remembering...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile68b.html?gal_id=83">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Virtual Engli...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6a27.html?gal_id=78">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Water Wise - Water Saving...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail42ac.html?gal_id=80">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Water Saving Week Grades ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4b9b.html?gal_id=74">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play Competition Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile3cf.html?gal_id=75">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Role Play Competi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf602.html?gal_id=76">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mental Wellness Workshop...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailcfc2.html?gal_id=82">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Career counselling sessio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3f54.html?gal_id=73">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    20th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Virtual Investiture C...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3b32.html?gal_id=70">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Grade V Role Play Competi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5448.html?gal_id=68">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hearty congratulations Ak...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0787.html?gal_id=65">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Shanvi Sa...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8e56.html?gal_id=66">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! Mahek Ro...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbf4e.html?gal_id=67">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! Raghav A...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5557.html?gal_id=62">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Result Taal - Tarang 2020...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7add.html?gal_id=59">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hearty Congratulations Bh...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail99df.html?gal_id=60">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of September 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>AISSE 2019-20 Toppers awa...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail756c.html?gal_id=72">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of August 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Doha Recitation Competiti...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5067.html?gal_id=71">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of August 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Doha Recitation Competiti...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9e9b.html?gal_id=79">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of August 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hindi Poem Recitation Com...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail11a0.html?gal_id=81">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of August 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Independence Day Celebrat...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0c53.html?gal_id=39">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of July 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Report healthy eating act...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7494.html?gal_id=53">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of July 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Poem Recitation C...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail10dc.html?gal_id=22">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of July 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur The Success Sa...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7654.html?gal_id=3">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Life at D.P.S BHK, Jaipur...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail057e.html?gal_id=5">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hostel Life...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9163.html?gal_id=7">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Art Exhibition...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail433e.html?gal_id=8">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mohan to Mahatma - Gandhi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail16c0.html?gal_id=9">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Class III: Trailblazers: ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail793b.html?gal_id=10">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> Christmas Euphoria: Spre...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4732.html?gal_id=11">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Blood Donation Camp 2019...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail48e7.html?gal_id=12">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Robotics...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailaaa1.html?gal_id=15">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> The Citation Ceremony 20...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail90bf.html?gal_id=16">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Republic Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail850c.html?gal_id=6">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Cub Cricket 2018...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild26d.html?gal_id=13">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Winter Carnival 2019...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2fd2.html?gal_id=14">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of June 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Career Fest - 2019...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile0cc.html?gal_id=1">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of March 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Student Exchange Programm...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailee31.html?gal_id=17">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of March 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shreyans Dugar of IX G, a...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3a46.html?gal_id=18">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of February 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Our budding writer Ayesha...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail873a.html?gal_id=19">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of February 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Culmination Day (Grad...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail42b1.html?gal_id=20">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of February 2020{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Sub Junior Th...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailcb3b.html?gal_id=24">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    {" "}
                                                </span>
                                                <div className={styles["tile-box"]}>JOURNEY OF DPS JAIPUR...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3322.html?gal_id=40">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    {" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fathers' Day Celebration ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailead1.html?gal_id=57">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    {" "}
                                                </span>
                                                <div className={styles["tile-box"]}>EMINENT VISITORS...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2039.html?gal_id=69">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    {" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play Competition Gra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3456.html?gal_id=440">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of May 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mother’s Day celebrated...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4c51.html?gal_id=435">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Dress-up Activity by the ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailcebc.html?gal_id=436">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> SPIC MACAY EVENT AT DPS ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0eef.html?gal_id=438">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Senior School - Inter -Ho...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb977.html?gal_id=439">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>VIRTUAL TRIP TO THE MOON ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaileddf.html?gal_id=434">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Session on Yoga...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0411.html?gal_id=432">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>20 Glorious Years of DPSJ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail618e.html?gal_id=431">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of April 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Football for ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2d6d.html?gal_id=433">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Staff Get together at Del...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild64e.html?gal_id=429">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Orientation and Culminati...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0449.html?gal_id=426">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Achievement Unlocked...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5b4d.html?gal_id=422">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Poem by Suchi Banthia...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9999.html?gal_id=423">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>University Placements ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9728.html?gal_id=424">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Workshop on Gender Sensit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1c51.html?gal_id=425">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Women's Day Fest at Clark...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbb9c.html?gal_id=420">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of March 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>LEXICAL MISH MASH AT Delh...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail525c.html?gal_id=430">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Orientation_And_Culminati...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1f72.html?gal_id=419">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Priyanshu...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc620.html?gal_id=415">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Safer Internet Day - Asse...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf43f.html?gal_id=418">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Assembly on Safer Interne...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila2e7.html?gal_id=414">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Assembly on 'Road Safety'...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0306.html?gal_id=417">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Assembly on Road Safety ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailde28.html?gal_id=413">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur wins the award...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0657.html?gal_id=412">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Brainvita - G.K. Quiz...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild17d.html?gal_id=416">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of February 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Brainvita G.K. Quiz for F...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila364.html?gal_id=401">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Khwahish Bajpai of grade ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail174c.html?gal_id=411">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Stationary Drive...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7bb4.html?gal_id=406">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Stationery And Toy Drive...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0eae.html?gal_id=403">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Ek Bharat, Shrestha Bhara...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3be5.html?gal_id=404">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fancy dress activity Pre-...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf548.html?gal_id=407">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Phad se Padh ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailffa8.html?gal_id=408">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fancy Dress Activity ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail980e.html?gal_id=410">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hindi Poetry Recitation C...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila4ec.html?gal_id=402">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>World Education Day: Phad...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6c2f.html?gal_id=405">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Naisha Shekhawat of grade...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail32c9.html?gal_id=398">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur, launched DJTA...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailaea7.html?gal_id=400">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of January 2023{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Launching of DJTA...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail31f3.html?gal_id=399">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Christmas Fiesta ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail52bf.html?gal_id=390">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The VII DPS Cup...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2202.html?gal_id=397">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The VII DPS Cup Cub Crick...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail534e.html?gal_id=391">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>History Festival ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2099.html?gal_id=396">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>History Festival - Phad ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb7c0.html?gal_id=394">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>English Poem Recitation ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila0e9.html?gal_id=395">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of December 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Pre-Nur to II English Rec...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailef72.html?gal_id=393">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    28th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Akshita B...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail930c.html?gal_id=389">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila07d.html?gal_id=385">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mega Tinkering Activity b...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailef61.html?gal_id=386">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mega Tinkering Activity ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbbf9.html?gal_id=387">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Children’s Day Celebrat...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4a4f.html?gal_id=388">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Children’s Day Celebrat...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile536.html?gal_id=392">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Kritika Vats, Tanishka kh...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0b47.html?gal_id=384">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Akshita!...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8e5a.html?gal_id=380">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Special Assembly - Nation...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9405.html?gal_id=381">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>National Unity Day Specia...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7416.html?gal_id=378">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    20th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Diwali Assembly by Grade ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail44b3.html?gal_id=379">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    20th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Diwali Celebration ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail51a9.html?gal_id=369">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Celebrating World Mental ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila66e.html?gal_id=367">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Another milestone achieve...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbcac.html?gal_id=365">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Aniruddh....</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail62a4.html?gal_id=366">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Delhi Public School, Jaip...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0b97.html?gal_id=383">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Investiture and Scholar B...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail04c1.html?gal_id=368">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Closing Ceremony of 17th ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf938.html?gal_id=377">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>17th C.L Jaipuria Memoria...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1723.html?gal_id=376">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Day 3 of C.L Jaipuria Mem...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7b36.html?gal_id=375">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Day 2 of C.L Jaipuria Mem...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailb32f.html?gal_id=374">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    8th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>First Day of C.L Jaipuria...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8e3f.html?gal_id=370">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Navratri Celebration by t...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail79a6.html?gal_id=371">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    7th of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Navratri Celebration ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4080.html?gal_id=372">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Day of Non-...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail93b0.html?gal_id=382">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    31st of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Scholar Badge Ceremony Cl...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6bca.html?gal_id=364">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Scholar Badge Ceremony fo...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7cd8.html?gal_id=362">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Mini PTM...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail78d0.html?gal_id=360">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Independence Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail84c7.html?gal_id=359">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Raksha Bandhan Celebratio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9c64.html?gal_id=361">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Rakshabandhan Celebration...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail01df.html?gal_id=358">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    6th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS SETS ANOTHER BENCHMAR...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila686.html?gal_id=356">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Ariba Mir...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf926.html?gal_id=357">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations......</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7fb1.html?gal_id=355">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations on your a...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail054a.html?gal_id=354">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of August 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Our Squash Champ Avalokit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5830.html?gal_id=363">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of July 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Activity- Spellathon ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0b8f.html?gal_id=353">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of July 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Story Telling Session...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailfe8d.html?gal_id=352">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of June 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Magic Show by Illusionist...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailf37a.html?gal_id=349">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shaurya - Hindi Recitatio...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail23bd.html?gal_id=350">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shaurya- Hindi Poem Recit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailde29.html?gal_id=351">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Neerajakshi of grade XII ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbab9.html?gal_id=345">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Girls Volleyb...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailcf6b.html?gal_id=346">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House Girls Volleyb...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail775f.html?gal_id=347">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Fun with Colors -Curves a...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0013.html?gal_id=348">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Curves and Strokes and Ti...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6d64.html?gal_id=344">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Middle School Inter House...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3f3b.html?gal_id=342">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>RHYTHMICA 2022...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2d6e.html?gal_id=343">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPSJ RHYTHMICA 2022...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6ce3.html?gal_id=341">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of May 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Gold Medal for winning Ta...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2671.html?gal_id=337">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Investiture Ceremony...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3208.html?gal_id=338">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    25th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Investiture Ceremony ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaildd83.html?gal_id=340">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Earth Day Celebration Pre...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaileb66.html?gal_id=335">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Friendship Cup- Alumn...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4692.html?gal_id=336">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Friendship Cup 2022-2...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail28c1.html?gal_id=332">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter-House Sub Jr. Crick...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild92f.html?gal_id=334">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of April 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter-House Sub Jr. Crick...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild81a.html?gal_id=326">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    16th of March 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Pi Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail87b3.html?gal_id=327">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of March 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Pi Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7492.html?gal_id=328">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of March 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Jungle Safari ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7194.html?gal_id=325">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    22nd of February 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play - Azadi Ka Amri...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc213.html?gal_id=324">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of February 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play- Azadi ka Amrit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3c55.html?gal_id=321">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of February 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Spellathon...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail73ff.html?gal_id=320">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of February 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Basant Panchami Celebrati...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail305a.html?gal_id=322">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    4th of February 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Basant Panchami...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2f30.html?gal_id=314">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    22nd of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur Presented Grap...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5ef2.html?gal_id=315">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    22nd of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur Presented Grap...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailde93.html?gal_id=311">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Virtual Open House...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail603f.html?gal_id=312">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Brainvita Quiz...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1d63.html?gal_id=313">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Brainvita Quiz - Grade II...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail0ec5.html?gal_id=308">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>
                                                    International Mind &amp; Body...
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild9ec.html?gal_id=307">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Global Family Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4a6d.html?gal_id=309">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of January 2022{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>NEWSBUZZ - JAN TO MARCH...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail42e1.html?gal_id=305">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>DPS Jaipur - Frosty Fest ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2e1d.html?gal_id=302">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations Shaurya P...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail972a.html?gal_id=303">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Result - Frosty Fest 2021...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4228.html?gal_id=304">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Frosty Fest 2021...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail305f.html?gal_id=306">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    23rd of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>
                                                    Cyber Ethics &amp; Online Saf...
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile94c.html?gal_id=299">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Proud moment for Delhi Pu...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail69e3.html?gal_id=296">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Special Session on Intern...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail40e7.html?gal_id=297">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Mountain Da...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4e7a.html?gal_id=298">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Mountain Da...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailbdad.html?gal_id=300">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Mountain Da...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc828.html?gal_id=301">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    11th of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Mountain Da...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc8c8.html?gal_id=295">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of December 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Good Touch Bad Touch -Ses...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1dca.html?gal_id=294">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! Akshita ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail2e81.html?gal_id=293">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! Bhuvan G...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9406.html?gal_id=289">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shoe-DAAN ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail9933.html?gal_id=290">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Service Before Self Shoe-...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1ced.html?gal_id=291">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Learning by doing...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail3d7f.html?gal_id=292">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of November 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Learning by doing- Math A...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4b3d.html?gal_id=288">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    21st of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>National Inter School Deb...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail59c9.html?gal_id=282">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Happy Dussehra...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail62e9.html?gal_id=280">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Little Scientists Activit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5ab8.html?gal_id=283">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Rashtriya Poshan Maah...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail84f3.html?gal_id=284">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}> POSHAN...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail044e.html?gal_id=285">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Open-House Session...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail1b3d.html?gal_id=286">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Open-House Session Pre-Pr...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7c6b.html?gal_id=278">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    5th of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Welcome Aboard.......</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail03fb.html?gal_id=277">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Happy Gandhi Jayanti 2021...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaila207.html?gal_id=279">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    1st of October 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>TechArt Interplay Activit...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailc804.html?gal_id=287">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    29th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>A Session for the Educato...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4239.html?gal_id=273">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Phases of the Moon...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6d18.html?gal_id=274">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    27th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Phases of the Moon - Grad...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail331c.html?gal_id=276">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Little Scientists...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6403.html?gal_id=269">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    18th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The students of Junior sc...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail68ca.html?gal_id=267">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The integration of Art in...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailaf05.html?gal_id=268">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    17th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Art integration in Mathem...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaileb50.html?gal_id=271">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Decoding Divaswapna...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail04c2.html?gal_id=272">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>An insightful session on ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail629b.html?gal_id=270">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    14th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Hindi Day on September 14...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaild2aa.html?gal_id=265">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>National Level Group Comp...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail7809.html?gal_id=261">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Lessons and Values learnt...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailca87.html?gal_id=262">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    10th of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Lessons and Values learnt...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detailfe70.html?gal_id=264">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of September 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The students of classes I...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail451b.html?gal_id=256">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Shri Krishna is not confi...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail12c6.html?gal_id=259">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    30th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Janmashtami Celebration...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail315f.html?gal_id=255">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    26th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>A self composed poem by I...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail86e8.html?gal_id=257">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House English Debat...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail4bfa.html?gal_id=258">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    24th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Inter House English Debat...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8740.html?gal_id=250">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    19th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>MEGApixel- A photography ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail6cac.html?gal_id=234">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Happy 75th Independence D...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaile2b3.html?gal_id=248">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    15th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>75th Independence Day Cel...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail91fc.html?gal_id=235">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    13th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>World Elephant Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail5b3d.html?gal_id=236">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    12th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>International Youth Day...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail291f.html?gal_id=247">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    9th of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Role Play Activity Grade ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8e95.html?gal_id=233">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    3rd of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>The Girls’ Brigade lead...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detail8458.html?gal_id=232">
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        padding: "5px 0",
                                                        fontSize: 13,
                                                        marginRight: 5
                                                    }}
                                                >
                                                    2nd of August 2021{" "}
                                                </span>
                                                <div className={styles["tile-box"]}>Congratulations! Grade XI...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{ display: "list-item" }}
                                        >
                                            <a href="image-gallery-detaildeac.html?gal_id=226">
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
                                                <div className={styles["tile-box"]}>International Tiger Day. ...</div>
                                            </a>
                                        </li>
                                        <li
                                            className={styles["news-events-box-items"]}
                                            style={{
                                                display: "list-item",
                                                overflow: "hidden",
                                                height: 1,
                                                paddingTop: 0,
                                                marginTop: 0,
                                                paddingBottom: 0,
                                                marginBottom: 0
                                            }}
                                        >
                                            <a href="image-gallery-detail6fc7.html?gal_id=229">
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
                                                <div className={styles["tile-box"]}>DPS Jaipur Joins the Nati...</div>
                                            </a>
                                        </li>
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
