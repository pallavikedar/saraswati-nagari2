import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import adBanner from "../../../public/banner-ad.jpeg";
import styles from "./AdPopup.module.css";

const BROCHURE_PDF = "/Saraswati 11.pdf";
const PAMPHLET_PDF = "/Pomplate.pdf";

const AdPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setVisible(false)}
        >
          <motion.div
            className={styles.popup}
            initial={{ opacity: 0, y: 24, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.93 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.imgBlock}>
              <img src={adBanner} alt="Saraswati Nagri" />

              <button
                className={styles.close}
                onClick={() => setVisible(false)}
              >
                ✕
              </button>

              <div className={styles.btnOverlay}>
                <div className={styles.contact}>
                  For more details contact us
                </div>

                <div className={styles.phones}>
                  <a href="tel:+919494942894" className={styles.phone}>
                    📞 +91 94 94 94 28 94
                  </a>
                  <a href="tel:+917888028866" className={styles.phone}>
                    📞 +91 78 88 02 88 66
                  </a>
                </div>

                <div className={styles.btnRow}>
                  <button
                    className={styles.btnBrochure}
                    onClick={() => window.open(BROCHURE_PDF, "_blank")}
                  >
                    ⬇ Brochure
                  </button>
                 <button
  className={styles.btnPamphlet}
  onClick={() => window.location.href = "tel:+919494942894"}
>
  Call
</button>

<button
  className={styles.btnPamphlet2}
  onClick={() =>
    window.open(
      "https://wa.me/919494942894?text=Hello!%20I'm%20interested%20in%20Saraswati%20Nagri 11%20layouts.%20Can%20you%20share%20more%20details?",
      "_blank"
    )
  }
>
  WhatsApp
</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdPopup;