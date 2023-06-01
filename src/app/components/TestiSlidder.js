"use client"
import React, { useEffect, useRef } from 'react';
import styles from "../styles/test.module.css";
import Image from 'next/image';

const TestiSlidder = () => {
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const testSlideRef = useRef(null);

    useEffect(() => {
        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        const testSlide = testSlideRef.current;

        const handleNextClick = () => {
            testSlide.scrollBy({ left: 200, behavior: 'smooth' });
        };

        const handlePrevClick = () => {
            testSlide.scrollBy({ left: -200, behavior: 'smooth' });
        };

        nextButton.addEventListener('click', handleNextClick);
        prevButton.addEventListener('click', handlePrevClick);

        return () => {
            nextButton.removeEventListener('click', handleNextClick);
            prevButton.removeEventListener('click', handlePrevClick);
        };
    }, []);

    return (
        <div className={styles['main-content']}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles['background-image']}`}>
                    <div className={styles.span12}>
                        <div className={styles.heading}>
                            <h1 style={{
                                color: "#065e3e",
                                fontWeight: "400",
                                fontSize: "30px",
                            }}
                            >
                                Testimonials</h1>
                        </div>
                        <div className={styles.TestiSlidder}>
                            <div className={`${styles.hmFeatBox} ${styles.testi}`}>
                                <div className={styles.testSlide} ref={testSlideRef}>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/709841620809501.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Currently a 4th year undergraduate at IIT Kharagpur.
                                                <br />
                                                My education at DPS Jaipur transformed me holistically
                                                with constant inspirations and encouragement from my
                                                teachers. I was very young when I developed an interest in
                                                science and robots, bu...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Mohit Singh </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/511771620809476.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                We leave a part of ourselves wherever we go, but probably
                                                school is the only place that we take a part of with us,
                                                we make it our own, and then we spend the rest of our
                                                lives trying to stay the kind of person we stepped out of
                                                that institution as....{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Kkusha Vohra</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/346121620809453.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                BS Mathematics and Statistics, IIT Kanpur.
                                                <br />
                                                Fourteen years is a long time to spend in a single
                                                institute, and in hindsight, DPS Jaipur was the best place
                                                for me to spend my formative years. Good facilities and
                                                infrastructure are ubiquitous, bu...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Kushagra Gupta</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/510511620809421.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                (Studied Manufacturing Engineering from BITS Pilani and
                                                pursuing Masters in Financial Engineering from UC Berkeley
                                                University, California.)
                                                <br />
                                                It gives me immense pride to say that I was part of the
                                                first batch of students enrolled in DPS Jaipur...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Nitish Garg</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/14031620809393.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                DPS, Jaipur gave me the 'grittiness', academic skills and
                                                intellectual curiosity to pursue my doctoral studies. The
                                                lessons we learn during our schooling years are rarely
                                                ever ones we understand at that moment in time. It's only
                                                when we are thrown...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Shubham Tikkiwal</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/479201620809369.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                "Blessed are those who get the gift of education."
                                                <br />I must confess that I was the fortunate one to have
                                                been blessed with the best school, Delhi Public School,
                                                Jaipur. The infinite opportunities that the school and
                                                educators provided me helped...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Sarvesh Jhunjhunwala</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/243591620809345.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Economics, Mathematics and Computer Science at Dartmouth
                                                College
                                                <br />
                                                My experience at DPS, Jaipur was nothing short of
                                                transformational. I started at the school in 10th grade,
                                                and instantly found an immensely supportive and accepting
                                                community he... <a href="Alumni-Speak.html">Read More</a>
                                                <span>Goutham Veeramachaneni</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/736231620809320.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Pursuing BA Political Science (Honors), Miranda House,
                                                University of Delhi
                                                <br />
                                                The first time I set foot in DPS Jaipur, was 12 years ago
                                                as a 6 yearold, who was in awe of the beautiful campus
                                                that it has to offer. Little did I know that DPS would...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Harshita Singh</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/833421620809298.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Jaipur Topper- Commerce
                                                <br />
                                                Pursuing BA Economics (Honours), St. Stephen’s College,
                                                University of Delhi
                                                <br />I joined DPS, Jaipur in Nursery with a few tears and
                                                a lot of trepidation. Little did I know that this school
                                                would give me everyth...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Vanshika Jain</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/643481620809275.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                BA LLB (Honors) Nalsar, University of Law
                                                <br />
                                                At DPS Jaipur, I never ran out of new opportunities and
                                                learning experiences. The teachers always extended a
                                                helping hand in all difficulties and encouraged me to
                                                reach my highest potential. The insti...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Bhavisha Sharma</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/168131620809247.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                CA, Pursuing MBA, IIM Ahmedabad
                                                <br />I can- not thank DPS, Jaipur enough for bringing me
                                                to where I am today. The academic rigour, the dedication
                                                and perseverance of the teachers and their emotional
                                                support made me most comfortable in the hostel. ...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Anant Bordia</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/733921620809224.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                MBBS, SMS Medical College, Jaipur
                                                <br />
                                                Medicine Resident, SMS Hospital Jaipur
                                                <br />
                                                As a young child, I had always been shy and quiet,
                                                focusing my attention on academics and putting in every
                                                effort to excel in my studies. DPS Jaipur as an
                                                instituti... <a href="Alumni-Speak.html">Read More</a>
                                                <span>Dr. Abhishek Bhargava</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/940061620809200.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Educator, DPS, Jaipur
                                                <br />
                                                BA (Honours), History, Lady Sri Ram College for Women,
                                                University of Delhi
                                                <br />
                                                MA, History, School of Oriental and African Studies,
                                                University of London.
                                                <br />
                                                My tribute to my teachers and my school is that I chose to
                                                b... <a href="Alumni-Speak.html">Read More</a>
                                                <span>Suhasini Gupta</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/240871620809175.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Consultant, Global Regulatory Affairs &amp; Government
                                                Relations
                                                <br />
                                                Canadian Imperial Bank of Commerce, Toronto
                                                <br />
                                                From academics to squash to theatre and music, there is
                                                nothing that my school did not offer. As I stepped into
                                                the internationa...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Pratique Kain</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/970071620809148.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                IIT Kanpur and Stanford Graduate School of Business, USA
                                                <br />
                                                Senior Associate, Pricewaterhouse Coopers
                                                <br />A school is a place that celebrates your inherent
                                                strengths and polishes your rough edges. I would not be
                                                wrong if I were to say that that...{" "}
                                                <a href="Alumni-Speak.html">Read More</a>
                                                <span>Ayush Bhuyan</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.testBox}>
                                        <div className={styles.testBoxContent}>
                                            <Image
                                                style={{
                                                    border: "2px solid #0080004a",
                                                    boxShadow: "0px 0px 10px 0px #4f42928f",
                                                    float: "left",
                                                    width: "16%",
                                                    borderRadius: "50%",
                                                    marginRight: 12
                                                }}
                                                src="/upload/testimonial/468551620809123.jpg"
                                                width={600}
                                                height={110}
                                                alt="DPS JAIPUR"
                                            />
                                            <p>
                                                Couturier, Paris Fashion Week &amp; Lakme Fashion Week
                                                <br />
                                                To let your imagination run wild, to think outside the box
                                                and to dare to dream is what DPS, Jaipur groomed me to do.
                                                The demands of the fashion industry are multi fold and to
                                                succeed her... <a href="Alumni-Speak.html">Read More</a>
                                                <span>Karishma Luharuwala</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <button className="next" ref={nextButtonRef}>Next</button>
                            <button className="prev" ref={prevButtonRef}>Previous</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TestiSlidder;
