"use client"
import { useState } from 'react';
import styles from "../styles/mainwrapper.module.css";

const Marquee = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <marquee
      scrollamount={4}
      scrolldelay={40}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ color: '#fff' }}
    >
      <ul>
        <li className={styles.thoughts} style={{ fontSize: 17 }}>
          Devyani Jaipuria Tennis Academy Powered By Mr Zeeshan Ali
          National Davis Cup Coach launched on 09 Jan 2023.
        </li>
      </ul>
    </marquee>
  );
};

export default Marquee;
