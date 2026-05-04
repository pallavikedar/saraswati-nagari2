import React from "react";
import styles from "./WhyChoose.module.css";
import {
  FaMapMarkerAlt,
  FaHandshake,
  FaMoneyCheckAlt,
  FaTools,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Location Advantage",
      desc: "All layouts are within Nagpur’s city limits — perfectly connected and convenient.",
    },
    {
      icon: <FaHandshake />,
      title: "Trust & Transparency",
      desc: "100% NMRDA sanctioned, clean documentation, and complete legal clarity.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Financial Ease",
      desc: "Up to 90% loan facility available from leading nationalized banks.",
    },
    {
      icon: <FaTools />,
      title: "Quality Infrastructure",
      desc: "Cement roads, sewerage, water lines, electrification, streetlights, play area, and open compounds.",
    },
    {
      icon: <FaUsers />,
      title: "Community Living",
      desc: "A vibrant society of like-minded residents — government employees, service class, and professionals.",
    },
    {
      icon: <FaChartLine />,
      title: "Strong Value Appreciation",
      desc: "Our past layouts have shown 2–3x increase in property values within a few years.",
    },
  ];

  return (
    <section className={styles.whyChoose} id="whychoose">
      <div className={styles.overlay}></div>
      <h2 className={styles.title}>
        Why Choose <span>Saraswati Nagri?</span>
      </h2>
       
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <div
            className={styles.card}
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
