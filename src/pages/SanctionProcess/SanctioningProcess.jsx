import React from "react";
import { motion } from "framer-motion";
import styles from "./SanctioningProcess.module.css";

const steps = [
  {
    title: "Purchase Agricultural Land",
    desc: "Identify and purchase agricultural land located in the yellow belt zone.",
  },
  {
    title: "Prepare Essential Documents",
    desc: "7/12, K-Prat, Contour Map, Zone Certificate, Patwari Map, Abhinyas Nakasha, Notarized Affidavits, NOCs.",
  },
  {
    title: "Submission & Approval",
    desc: "Submit to NMRDA → Tentative Sanction → NA Process → Development Agreement → Final Sanction → Plotable 7/12 → RERA Registration.",
  },
  {
    title: "Final Result",
    desc: "Layouts are legally safe, NMRDA sanctioned, and RERA registered.",
  },
];

const SanctioningProcess = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Sanctioning Process
      </motion.h2>

      <div className={styles.flow}>
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className={styles.connector}>
              <span className={styles.number}>{idx + 1}</span>
            </div>
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SanctioningProcess;
