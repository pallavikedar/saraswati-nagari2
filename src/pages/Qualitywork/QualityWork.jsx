import React,{useRef,useState,useEffect} from "react";
import { FaRoad, FaWater, FaBolt, FaChild, FaRecycle } from "react-icons/fa";
import styles from "./QualityWork.module.css";
import { MdWaterDrop} from "react-icons/md";
const qualityData = [
  {
    icon: <FaRoad />,
    title: "Cement Roads",
    description: [
      "Sub-base & compaction",
      "RCC mixing and curing",
      "Expansion joints",
      "Final float finishing",
    ],
  },
  {
    icon: <FaWater />,
    title: "Sewer Line",
    description: [
      "Deep trench excavation",
      "Leak-proof joints",
      "RCC pipe bedding",
      "Manhole chambers",
    ],
  },
   {
    icon: <MdWaterDrop />,
    title: "Water Line",
    description: [
      "DI/HDPE pipeline laying",
      "Pressure testing & disinfection",
      "House connection points provided",
    ],
  },
  {
    icon: <FaBolt />,
    title: "Electrification & Lighting",
    description: [
      "Underground cabling",
      "LED streetlights",
      "Transformer setup",
      "Meter points ready",
    ],
  },
  {
    icon: <FaChild />,
    title: "Play Area & Garden",
    description: [
      "Children’s play zone",
      "Jogging & walking tracks",
      "Tree plantation drive",
      "Green open spaces",
    ],
  },
  {
    icon: <FaRecycle />,
    title: "Sewage Treatment Plant",
    description: [
      "Aeration & clarifier tank",
      "Treated water reuse",
      "Eco-friendly process",
    ],
  },
];

const QualityWork = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Trigger only once
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className={styles.qualitySection}>
      <h2
      ref={headingRef}
      className={`${styles.heading} ${isVisible ? styles.visible : ""}`}
    >Quality & Technical Development Work</h2>
      <div className={styles.cardGrid}>
        {qualityData.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.topContent}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <div className={styles.details}>
              <ul>
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualityWork;
