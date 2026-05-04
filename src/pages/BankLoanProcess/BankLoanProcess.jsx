import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./BankLoanProcess.module.css";

const steps = [
  {
    title: "Loan Availability",
    desc: "Up to 90% loan available with all nationalized banks.",
  },
  {
    title: "Required Documents",
    desc: "PAN, Aadhaar, Photos, Salary Slip (3 months), Bank Statement (6 months), ITR (2 years).",
  },
  {
    title: "Bank Verification",
    desc: "CIBIL check, residence verification, workplace verification, and legal verification by bank advocate.",
  },
  {
    title: "Loan Approval & Registry",
    desc: "Loan approval → registry process → cheque disbursement — your dream becomes reality.",
  },
];

const BankLoanProcess = () => {
  const [current, setCurrent] = useState(0);

  const nextStep = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  useEffect(() => {
    const timer = setInterval(() => nextStep(), 3500); // Auto slide every 3.5s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Bank Loan Process</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.line} />

        <button className={`${styles.arrow} ${styles.left}`} onClick={prevStep}>
          <FaChevronLeft />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.card}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className={styles.numberCircle}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {current + 1}
            </motion.div>
            <div className={styles.content}>
              <h3>{steps[current].title}</h3>
              <p>{steps[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className={`${styles.arrow} ${styles.right}`} onClick={nextStep}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default BankLoanProcess;
