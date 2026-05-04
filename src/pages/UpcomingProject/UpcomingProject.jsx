import React, { useEffect, useRef, useState } from "react";
import styles from "./UpcomingProjects.module.css";

const WHATSAPP_NUMBER = "919823388866"; // +91 98233 88866

const UpcomingProjects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const locations = [
    "Chicholi",
    "Fetri",
    "Khadgaon",
    "Kamptee",
    "Nagpur",
    "Chhindwara",
    "Hingna",
    "Kalmeshwar",
  ];

  const handleWhatsApp = (location) => {
    const message = `Hello, I am interested in the upcoming project at ${location}. Please share more details.`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <h2 className={`${styles.heading} ${visible ? styles.animate : ""}`}>
        Upcoming Projects
      </h2>

      <div className={styles.grid}>
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.showCard : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <h3 className={styles.title}>{loc}</h3>
            <p className={styles.subtext}>Coming Soon</p>

            <button
              className={styles.cta}
              onClick={() => handleWhatsApp(loc)}
            >
              Get Early Access →
            </button>
          </div>
        ))}
      </div>

      <p className={`${styles.note} ${visible ? styles.fadeIn : ""}`}>
        (Over <strong>1000 acres</strong> of future development.)
      </p>
    </section>
  );
};

export default UpcomingProjects;
