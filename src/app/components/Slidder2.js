import styles from "../styles/slidder.module.css";
import Image from 'next/image';


const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slide}>
                <Image
                    src="/1.jpg"
                    width={450}
                    height={250}
                    alt="DPS Jaipur"
                />
                <p className={styles.legend}>My school, my happy place!</p>
                <Image
                    src="/2.jpg"
                    width={450}
                    height={250}
                    alt="DPS Jaipur"
                />
                <p className={styles.legend}>My school, my happy place!</p>
                <Image
                    src="/3.jpg"
                    width={450}
                    height={250}
                    alt="DPS Jaipur"
                />
                <p className={styles.legend}>My school, my happy place!</p>
                <Image
                    src="/4.jpg"
                    width={450}
                    height={250}
                    alt="DPS Jaipur"
                />
                <p className={styles.legend}>My school, my happy place!</p>
                <Image
                    src="/5.jpg"
                    width={450}
                    height={250}
                    alt="DPS Jaipur"
                />
                <p className={styles.legend}>My school, my happy place!</p>
            </div>
            
            {/* Add more slides here */}
        </div>
        
    );
}

export default Slider;
