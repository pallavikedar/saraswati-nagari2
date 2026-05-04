import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./BookingSteps.module.css";

const steps = [
  {
    title: "Layout Selection",
    bullets: [
      "Explore available NMRDA sanctioned layouts.",
      "Choose based on location, budget, and future growth."
    ]
  },
  {
    title: "Search & Shortlisting",
    bullets: [
      "Compare plots across selected layouts.",
      "Verify connectivity, amenities, and approvals."
    ]
  },
  {
    title: "Interest Confirmation",
    bullets: [
      "Confirm interest in shortlisted plot.",
      "Discuss pricing, availability, and offers."
    ]
  },
  {
    title: "Site Visit",
    bullets: [
      "Visit the layout with our executive.",
      "Understand plot demarcation and surroundings."
    ]
  },
  {
    title: "Document Verification",
    bullets: [
      "Verify NMRDA sanction, layout approvals, and legal documents.",
      "Ensure clear title and transparent ownership."
    ]
  },
  {
    title: "Payment Process",
    bullets: [
      "Pay token amount to block the plot.",
      "Complete agreement payment or initiate bank loan."
    ]
  },
  {
    title: "Registration",
    bullets: [
      "Execute sale deed at sub-registrar office.",
      "Receive registered documents and plot ownership."
    ]
  }
];


const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: (custom) => custom.isLeft ? -60 : 60, y: 40 },
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1
    } 
  },
  hover: { 
    scale: 1.03, 
    y: -8, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    } 
  }
};

export default function BookingSteps() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [100, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section className={styles.wrapper} id="how-to-book" ref={sectionRef}>
      <motion.div className={styles.container} style={{ opacity, scale }}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          How to Book a Plot 
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ 
            delay: 0.15, 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          A clear, transparent process from requirement to registry — designed to make your investment secure & effortless.
        </motion.p>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ y }}
        >
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.article
                key={idx}
                className={`${styles.step} ${isLeft ? styles.left : styles.right}`}
                variants={stepVariants}
                custom={{ isLeft }}
                whileHover="hover"
                tabIndex={0}
                aria-label={`Step ${idx + 1}: ${step.title}`}
              >
                <motion.div 
                  className={styles.stepNumber}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <span className={styles.num}>{idx + 1}</span>
                  <motion.span 
                    className={styles.numGlow}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>

                  <div className={styles.cardBody}>
                    <ul className={styles.bullets}>
                      {step.bullets.map((b, i) => (
                        <motion.li 
                          key={i} 
                          className={styles.bulletItem}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className={styles.bulletMark} aria-hidden>•</span>
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          className={styles.notice}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ 
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <strong>Quick note:</strong> Typical timelines are indicative — we handle faster processing where possible.
        </motion.p>
      </motion.div>
    </section>
  );
}