import styles from "../styles/slidder.module.css";
import Image from 'next/image';


function Slidder() {
    return (
        <>
            <div className={`${styles['home-slider']} ${styles['slider-banners']}`}>
                <div
                    style={{
                        width: "100%",
                        margin: "0px auto",
                        height: 600,
                        visibility: "visible"
                    }}
                    className={styles['ls-container']}
                >
                    <div className={styles['ls-webkit-hack']} />
                    <div
                        className={styles["ls-inner"]}
                        style={{ backgroundColor: "transparent", width: 1519, height: 600 }}
                    >
                        <div
                            className={styles["ls-layer"]}
                            style={{
                                width: 0,
                                height: 600,
                                visibility: "visible",
                                display: "none",
                                inset: "0px auto auto 0px"
                            }}
                        >

                            <Image
                            className={styles["ls-bg"]}
                                style={{
                                    marginTop: "-304px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 608,
                                    marginLeft: "-759.5px"
                                }}
                                src="/dpslogo.png"
                                width={300}
                                height={150}
                                alt="DPS Jaipur"
                            />
                            {/* <img
                                style={{
                                    marginTop: "-304px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 608,
                                    marginLeft: "-759.5px"
                                }}
                                src="images/slider/875021656948443.jpg"
                                className="ls-bg"
                                alt="DPS Jaipur"
                            /> */}
                            <p
                                className="ls-s-1 block-1"
                                style={{
                                    left: "179.5px",
                                    top: 475,
                                    background: "rgba(4, 139, 72, 0.5)",
                                    color: "rgb(255, 255, 255)",
                                    padding: "0px 20px 10px",
                                    font: "600 28px poppins",
                                    boxShadow: "rgb(3, 114, 59) 0px 1px 1px",
                                    textTransform: "capitalize",
                                    width: "auto",
                                    height: "auto",
                                    borderWidth: 0,
                                    opacity: 1,
                                    transform: "rotate(0deg) scale(1, 1)",
                                    marginLeft: 0,
                                    marginTop: "-518px",
                                    display: "block",
                                    visibility: "visible"
                                }}
                            >
                                My school, my happy place!
                            </p>
                            {/*<p class="ls-s-2 block-2" style="slidedirection : bottom; slideoutdirection : top; left: 0px; top: 320px; durationin: 1000; easingin: easeOutExpo; delayin: 800; delayou: 1200;background:rgb(9 39 75 / .8);padding:0px 20px;color:#fff;">My school, my happy place!</p>*/}
                        </div>
                        <div
                            className="ls-layer"
                            style={{
                                width: 0,
                                height: 600,
                                visibility: "visible",
                                display: "none",
                                inset: "0px auto auto 0px"
                            }}
                        >
                            <img
                                style={{
                                    marginTop: "-304px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 608,
                                    marginLeft: "-759.5px"
                                }}
                                src="images/slider/115081656949217.jpg"
                                className="ls-bg"
                                alt="DPS Jaipur"
                            />
                            <p
                                className="ls-s-1 block-1"
                                style={{
                                    left: "179.5px",
                                    top: 475,
                                    background: "rgba(4, 139, 72, 0.5)",
                                    color: "rgb(255, 255, 255)",
                                    padding: "0px 20px 10px",
                                    font: "600 28px poppins",
                                    boxShadow: "rgb(3, 114, 59) 0px 1px 1px",
                                    textTransform: "capitalize",
                                    width: "auto",
                                    height: "auto",
                                    borderWidth: 0,
                                    opacity: 1,
                                    transform: "rotate(0deg) scale(1, 1)",
                                    marginLeft: 0,
                                    marginTop: "-518px",
                                    display: "block",
                                    visibility: "visible"
                                }}
                            >
                                Heralding the era of new age learning.
                            </p>
                            {/*<p class="ls-s-2 block-2" style="slidedirection : bottom; slideoutdirection : top; left: 0px; top: 320px; durationin: 1000; easingin: easeOutExpo; delayin: 800; delayou: 1200;background:rgb(9 39 75 / .8);padding:0px 20px;color:#fff;">Heralding the era of new age learning.</p>*/}
                        </div>
                        <div
                            className="ls-layer"
                            style={{
                                width: 0,
                                height: 600,
                                visibility: "visible",
                                display: "none",
                                inset: "0px auto auto 0px"
                            }}
                        >
                            <img
                                style={{
                                    marginTop: "-304px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 608,
                                    marginLeft: "-759.5px"
                                }}
                                src="images/slider/513481656949876.jpg"
                                className="ls-bg"
                                alt="DPS Jaipur"
                            />
                            <p
                                className="ls-s-1 block-1"
                                style={{
                                    left: "179.5px",
                                    top: 475,
                                    background: "rgba(4, 139, 72, 0.5)",
                                    color: "rgb(255, 255, 255)",
                                    padding: "0px 20px 10px",
                                    font: "600 28px poppins",
                                    boxShadow: "rgb(3, 114, 59) 0px 1px 1px",
                                    textTransform: "capitalize",
                                    width: "auto",
                                    height: "auto",
                                    borderWidth: 0,
                                    opacity: 1,
                                    transform: "rotate(0deg) scale(1, 1)",
                                    marginLeft: 0,
                                    marginTop: "-518px",
                                    display: "block",
                                    visibility: "visible"
                                }}
                            >
                                Art - The Global Connect.
                            </p>
                            {/*<p class="ls-s-2 block-2" style="slidedirection : bottom; slideoutdirection : top; left: 0px; top: 320px; durationin: 1000; easingin: easeOutExpo; delayin: 800; delayou: 1200;background:rgb(9 39 75 / .8);padding:0px 20px;color:#fff;">Art - The Global Connect.</p>*/}
                        </div>
                        <div
                            className="ls-layer"
                            style={{
                                width: 0,
                                height: 600,
                                visibility: "visible",
                                display: "none",
                                inset: "0px auto auto 0px"
                            }}
                        >
                            <img
                                style={{
                                    marginTop: "-333.5px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 667,
                                    marginLeft: "-759.5px"
                                }}
                                src="images/slider/992291645608793.jpg"
                                className="ls-bg"
                                alt="DPS Jaipur"
                            />
                            <p
                                className="ls-s-1 block-1"
                                style={{
                                    left: "179.5px",
                                    top: 475,
                                    background: "rgba(4, 139, 72, 0.5)",
                                    color: "rgb(255, 255, 255)",
                                    padding: "0px 20px 10px",
                                    font: "600 28px poppins",
                                    boxShadow: "rgb(3, 114, 59) 0px 1px 1px",
                                    textTransform: "capitalize",
                                    width: "auto",
                                    height: "auto",
                                    borderWidth: 0,
                                    opacity: 1,
                                    transform: "rotate(0deg) scale(1, 1)",
                                    marginLeft: 0,
                                    marginTop: 0,
                                    display: "block",
                                    visibility: "visible"
                                }}
                            >
                                Girls in blue- Reaching beyond the boundaries
                            </p>
                            {/*<p class="ls-s-2 block-2" style="slidedirection : bottom; slideoutdirection : top; left: 0px; top: 320px; durationin: 1000; easingin: easeOutExpo; delayin: 800; delayou: 1200;background:rgb(9 39 75 / .8);padding:0px 20px;color:#fff;">Girls in blue- Reaching beyond the boundaries</p>*/}
                        </div>
                        <div
                            className="ls-layer ls-active"
                            style={{
                                width: 1519,
                                height: 600,
                                inset: "0px 0px auto auto",
                                visibility: "visible",
                                display: "none"
                            }}
                        >
                            <img
                                style={{
                                    marginTop: "-304px",
                                    padding: 0,
                                    borderWidth: 0,
                                    width: 1519,
                                    height: 608,
                                    marginLeft: "-759.5px"
                                }}
                                src="images/slider/285451656950051.jpg"
                                className="ls-bg"
                                alt="DPS Jaipur"
                            />
                            <p
                                className="ls-s-1 block-1"
                                style={{
                                    left: "179.5px",
                                    top: 475,
                                    background: "rgba(4, 139, 72, 0.5)",
                                    color: "rgb(255, 255, 255)",
                                    padding: "0px 20px 10px",
                                    font: "600 28px poppins",
                                    boxShadow: "rgb(3, 114, 59) 0px 1px 1px",
                                    textTransform: "capitalize",
                                    width: "auto",
                                    height: "auto",
                                    borderWidth: 0,
                                    opacity: 1,
                                    transform: "rotate(0deg) scale(1, 1)",
                                    marginLeft: 0,
                                    marginTop: 0,
                                    display: "block",
                                    visibility: "visible"
                                }}
                            >
                                A World of opportunities.
                            </p>
                            {/*<p class="ls-s-2 block-2" style="slidedirection : bottom; slideoutdirection : top; left: 0px; top: 320px; durationin: 1000; easingin: easeOutExpo; delayin: 800; delayou: 1200;background:rgb(9 39 75 / .8);padding:0px 20px;color:#fff;">A World of opportunities.</p>*/}
                        </div>
                        <div className="ls-circle-timer" style={{ display: "block" }}>
                            <div className="ls-ct-left">
                                <div className="ls-ct-rotate" style={{ transform: "rotate(0deg)" }}>
                                    <div className="ls-ct-hider">
                                        <div className="ls-ct-half" />
                                    </div>
                                </div>
                            </div>
                            <div className="ls-ct-right">
                                <div
                                    className="ls-ct-rotate"
                                    style={{ transform: "rotate(123.75deg)" }}
                                >
                                    <div className="ls-ct-hider">
                                        <div className="ls-ct-half" />
                                    </div>
                                </div>
                            </div>
                            <div className="ls-ct-center" />
                        </div>
                    </div>
                    <div
                        className="ls-loading-container"
                        style={{ zIndex: -1, display: "none" }}
                    >
                        <div className="ls-loading-indicator" />
                    </div>
                    <a className="ls-nav-prev" href="#" style={{ visibility: "visible" }} />
                    <a className="ls-nav-next" href="#" style={{ visibility: "visible" }} />
                    <div className="ls-bottom-nav-wrapper" style={{ visibility: "visible" }}>
                        <a className="ls-nav-start ls-nav-start-active" href="#" />
                        <span className="ls-bottom-slidebuttons">
                            <a href="#" className="" />
                            <a href="#" className="" />
                            <a href="#" className="" />
                            <a href="#" className="" />
                            <a href="#" className="ls-nav-active" />
                            <div className="ls-thumbnail-hover" style={{ width: 100, height: 60 }}>
                                <div
                                    className="ls-thumbnail-hover-inner"
                                    style={{ visibility: "hidden", display: "block" }}
                                >
                                    <div className="ls-thumbnail-hover-bg" />
                                    <div
                                        className="ls-thumbnail-hover-img"
                                        style={{ width: 100, height: 60 }}
                                    >
                                        <img style={{ height: 60 }} />
                                    </div>
                                    <span />
                                </div>
                            </div>
                        </span>
                        <a className="ls-nav-stop" href="#" />
                    </div>
                    <div className="ls-shadow" />
                </div>
            </div>
        </>
    )
}

export default Slidder;
