import styles from "../styles/socials.module.css";


function Socials() {
    return (
        <>
            <div className={`${styles["main-content"]} ${styles.social}`}>
                <div className={styles.container}>
                    <div className={`${styles.row} ${styles['background-image']}`}
                     style={{ width: '1520px' }}>
                        <div className={`${styles.span4} ${styles.socialdata}`}>
                            <div
                                className={styles["fb-page"]}
                                dataHref="https://www.facebook.com/dps.jaipur.1/?ref=br_tf"
                                dataTabs="timeline"
                                dataWidth={400}
                                dataHeight={274}
                                dataSmallHeader="false"
                                dataAdaptContainerWidth="true"
                                dataHideCover="false"
                                dataShowFacepile="false"
                            >
                                <blockquote
                                    cite="https://www.facebook.com/dps.jaipur.1/?ref=br_tf"
                                    className="fb-xfbml-parse-ignore"
                                >
                                    <a href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf">
                                        DPS Jaipur
                                    </a>
                                </blockquote>
                            </div>
                            <a href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf" target="_blank">
                                <span id="fb">FACEBOOK</span>
                            </a>
                        </div>
                        <div className={`${styles.span4} ${styles.socialdata}`}>
                            <video
                                style={{ background: "#000" }}
                                width="100%"
                                height={315}
                                controls=""
                                autoPlay=""
                                loop=""
                            >
                                <source src="https://www.dpsjaipur.com/video/campus.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className={`${styles.span4} ${styles.socialdata}`}>
                            <iframe
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""
                                height={315}
                                src="https://www.youtube.com/embed/CsizrTZlpIE"
                                width="100%"
                            />
                        </div>
                        {/* <div class="span4 socialdata">
          <video style="background: #000;" width="100%" height="275" controls="" autoplay loop>
              <source src="https://dpsjaipur.com/video/campus.mp4" type="video/mp4">
          </video>

          <p style="color:#fff; text-align:center; margin-top:-5px;">
              <a href="https://dpsjaipur.com/video/campus.mp4" style="color:#fff;" target="_blank"><span id="fb">Video's URLhttps://dpsjaipur.com/video/campus.mp4</span></a>
          </p>
      </div> 
    <div class="span4 socialdata">
						<video style="border: 1px solid #fffd99" width="100%" height="270" controls="" autoplay  loop><source src="https://dpsjaipur.com/video/campusVisit.mp4" type="video/mp4"></video>
						<h4 style="color:#fff; text-align:center">Video's URL</h4>
						<p style="color:#fff; text-align:center">
						<a href="https://dpsjaipur.com/video/campusVisit.mp4" style="color:#fff;" target="_blank">https://dpsjaipur.com/video/campusVisit.mp4</a></p>
</div> */}
                    </div>
                </div>
            </div>

        </>

    )
}
export default Socials;