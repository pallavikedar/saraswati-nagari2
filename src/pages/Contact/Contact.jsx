import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";
import homeImage from "../../assets/about.jpg";
import { MdOutlineContactPhone, MdOutlineLocationOn, MdOutlineEmail, MdAccessTime, MdHelpOutline } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Animation variants - made more subtle
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: { y: -4, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Banner */}
      <motion.div
        className={styles.banner}
        style={{ backgroundImage: `url(${homeImage})` }}
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.bannerContent} variants={itemVariants}>
          <motion.h1 variants={fadeInUpVariants}>Contact Us</motion.h1>
          <motion.p className={styles.breadcrumbs} variants={fadeInUpVariants}>
            <a href="/">Home</a> <span>|</span><a href="/contact"> Contact Us</a>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Map */}
      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3720.637619819438!2d79.01232299999995!3d21.166815000000085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSai%20Shraddha%20Apt.%2C%20Behind%20White%20House%20Bungalow%2C%20Utkarsh%20Society%2C%20Dabha-Wadi%20Road%2C%20Nagpur!5e0!3m2!1sen!2sus!4v1749541710264!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        ></motion.iframe>
      </motion.div>

      {/* Contact Form Section */}
     
      {/* Contact Info Section */}
      <motion.div
        className={styles.contactInfoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className={styles.infoBox} variants={itemVariants} whileHover={hoverVariants}>
          <motion.div className={styles.iconContainer} whileHover={{ rotate: 180, transition: { duration: 0.3 } }}>
            <MdOutlineContactPhone className={styles.icon} />
          </motion.div>
          <motion.h3 variants={fadeInUpVariants}>Phone Numbers</motion.h3>
          <motion.p variants={fadeInUpVariants}>
            <a href="https://wa.me/91982338866" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
              📞 9823388866
            </a>
          </motion.p>
          <motion.p variants={fadeInUpVariants}>
            <a href="https://wa.me/917888028866" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
              📞 7888028866
            </a>
          </motion.p>
        </motion.div>

        <motion.div className={styles.infoBox} variants={itemVariants} whileHover={hoverVariants}>
          <motion.div className={styles.iconContainer} whileHover={{ rotate: 180, transition: { duration: 0.3 } }}>
            <MdOutlineLocationOn className={styles.icon} />
          </motion.div>
          <motion.h3 variants={fadeInUpVariants}>Office Address</motion.h3>
          <motion.p variants={fadeInUpVariants}>302, Sai Shraddha Appt.,</motion.p>
          <motion.p variants={fadeInUpVariants}>Behind White House Bungalow, Utkarsh Society,</motion.p>
          <motion.p variants={fadeInUpVariants}>Dabha-Wadi Road, Nagpur</motion.p>
        </motion.div>

        <motion.div className={styles.infoBox} variants={itemVariants} whileHover={hoverVariants}>
          <motion.div className={styles.iconContainer} whileHover={{ rotate: 180, transition: { duration: 0.3 } }}>
            <MdOutlineEmail className={styles.icon} />
          </motion.div>
          <motion.h3 variants={fadeInUpVariants}>Email Us</motion.h3>
          <motion.p variants={fadeInUpVariants}>
            <a href="mailto:info@saraswatinagri.com" className={styles.emailLink}>📧 info@saraswatinagri.com</a>
          </motion.p>
        </motion.div>

        <motion.div className={styles.infoBox} variants={itemVariants} whileHover={hoverVariants}>
          <motion.div className={styles.iconContainer} whileHover={{ rotate: 180, transition: { duration: 0.3 } }}>
            <MdAccessTime className={styles.icon} />
          </motion.div>
          <motion.h3 variants={fadeInUpVariants}>Business Hours</motion.h3>
          <motion.p variants={fadeInUpVariants}>Mon - Fri: 9:00 AM - 6:00 PM</motion.p>
          <motion.p variants={fadeInUpVariants}>Sat: 10:00 AM - 4:00 PM</motion.p>
          <motion.p variants={fadeInUpVariants}>Sun: Closed</motion.p>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className={styles.faqSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>
          <motion.span whileHover={{ rotate: 180, transition: { duration: 0.3 } }}>
            <MdHelpOutline />
          </motion.span>{" "}
          Frequently Asked Questions
        </motion.h2>
        <motion.div className={styles.faqItem} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h4 variants={fadeInUpVariants}>How soon will I get a response?</motion.h4>
          <motion.p variants={fadeInUpVariants}>We usually respond within 24 hours on business days.</motion.p>
        </motion.div>
        <motion.div className={styles.faqItem} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h4 variants={fadeInUpVariants}>Can I visit your office directly?</motion.h4>
          <motion.p variants={fadeInUpVariants}>
            Yes, feel free to drop by during our business hours. We’d love to meet you!
          </motion.p>
        </motion.div>
        <motion.div className={styles.faqItem} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h4 variants={fadeInUpVariants}>Do you offer online consultations?</motion.h4>
          <motion.p variants={fadeInUpVariants}>
            Absolutely! You can book a consultation with us via phone or email.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;