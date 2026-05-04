
import React, { lazy} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Layouts.module.css";
import {
  FaRoad,
  FaChild,
  FaWalking,
} from "react-icons/fa";
import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
import {
  GiBrickWall,
  GiWaterRecycling,
  GiWaterfall,
} from "react-icons/gi";
import image from '../../assets/layouts1.jpg'
import Map5 from "../../components/Map/Map4";
import LazyOnScroll from "../../components/LazyOnScroll";

// Lazy load heavy components
const Map = lazy(() => import("../../components/Map/Map"));
const PanoramaViewer = lazy(() => import("../../components/PanoramaViewer"));

// Professional loading component with animation
const LoadingSpinner = () => (
  <motion.div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '400px',
      color: '#B8860B' 
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div 
      className={styles.spinner}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#B8860B"
          strokeWidth="3"
          strokeDasharray="31.4 31.4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  </motion.div>
);

const Layout4 = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const videoUrl = "https://fra.cloud.appwrite.io/v1/storage/buckets/69410e4f002f12a6a22b/files/69451874000fcbdc5254/view?project=69410e2700329697a6d1&mode=all";
  const image ="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%205%20(1).jpg?alt=media&token=c556b5a4-ffde-4b3f-b257-ec77f63f7fcc"

  const amenitiesList = [
    { icon: <FaRoad />, title: "Cement Roads" },
    { icon: <GiWaterfall />, title: "Sewer Lines" },
    { icon: <GiWaterfall />, title: "Stormwater Drainage" },
    { icon: <MdWaterDrop />, title: "Water Pipelines" },
    { icon: <MdElectricBolt />, title: "Electricity Connections" },
    { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
    { icon: <FaChild />, title: "Children's Play Areas" },
    { icon: <FaWalking />, title: "Walking Tracks" },
    { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
  ];

  // Professional animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section with parallax effect */}
      <motion.section 
        className={styles.heroSection}
        style={{ opacity, scale }}
      >
        <motion.div 
          className={styles.heroGradient}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Saraswati Nagri – 05 
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Where Timeless Elegance Meets Discerning Serenity
        </motion.p>
        <motion.div 
          className={styles.heroAccent}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </motion.section>

      {/* Video Section with staggered animations */}
      <motion.section 
        className={styles.videoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={fadeInUp}
        >
          Plots Status
        </motion.h2>
        
        {/* Lazy loaded Map with scale animation */}
        <motion.div 
          className={styles.mapWrapper}
          variants={fadeInScale}
        >
          <motion.div 
            className={styles.mapFrame}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 45px rgba(184, 134, 11, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <LazyOnScroll fallback={<LoadingSpinner />}>
              <Map5/>
            </LazyOnScroll>
          </motion.div>
        </motion.div>
    
        <motion.h2 
          className={styles.sectionTitle}
          variants={fadeInUp}
        >
          Immersive Aerial Overview
        </motion.h2>
        
         <motion.div
                 className={styles.videoWrapper}
                 variants={fadeInScale}
               >
                 <iframe
                   width="100%"
                   height="450px"
                   src="https://www.youtube.com/embed/PQ_tZziknUw?si=eb9oPe7V6A8OQY2Z?autoplay=1&mute=1&controls=0&modestbranding=0&rel=0"
                   frameBorder="0"
                   allow="autoplay;"
                   // allowFullScreen
                 />
               </motion.div>
      </motion.section>

      {/* Virtual Tour with slide-in animation */}
      {/* <motion.section 
        className={styles.virtualTour}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={slideInLeft}
        >
          360° Symphony of Serenity
        </motion.h2>
        <motion.p 
          className={styles.virtualText}
          variants={fadeInUp}
        >
          Surrender to a transcendent panorama, where every nuance of our artful designs unfolds in luminous detail— 
          a prelude to your personal odyssey.
        </motion.p>
        <motion.div 
          className={styles.virtualFrame}
          variants={fadeInScale}
        >
          <LazyOnScroll fallback={<LoadingSpinner />}>
            <PanoramaViewer />
          </LazyOnScroll>
          <motion.div 
            className={styles.virtualAura}
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section> */}
     
 

      {/* Amenities Section with staggered grid animation */}
      <motion.section 
        className={styles.amenitiesSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={slideInRight}
        >
          Artistry in Infrastructure & Timeless Amenities
        </motion.h2>
        <motion.div 
          className={styles.amenitiesGrid}
          variants={staggerContainer}
        >
          {amenitiesList.map((amenity, index) => (
            <motion.div 
              className={styles.amenityItem} 
              key={index}
              variants={itemVariant}
              whileHover={{ 
                y: -8,
                boxShadow: "0 12px 30px rgba(184, 134, 11, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.iconHalo}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className={styles.icon}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                >
                  {amenity.icon}
                </motion.span>
              </motion.div>
              <p className={styles.amenityTitle}>
                {amenity.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className={styles.mapwrapper}>
        <motion.p 
          className={styles.amenitiesFooter}
          variants={fadeInUp}
        >
          Orchestrated under the stewardship of{" "}
          <motion.span 
            className={styles.backSpan}
            whileHover={{ 
              color: "#DAA520",
              transition: { duration: 0.2 }
            }}
          >
            SS Construction
          </motion.span>, each vision materializes with exquisite finesse, 
          unyielding refinement, and an ethos of cultivating legacies that whisper of enduring grace.
        </motion.p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56555.08898577785!2d79.07115345!3d21.244107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c39a55300eff%3A0x22b4e6662f4f0216!2sGumthi%2C%20Maharashtra%20441111!5e1!3m2!1sen!2sin!4v1766387968731!5m2!1sen!2sin" width="100%" height="450px"></iframe>
        </div>
      </motion.section>
   
      {/* Footer with fade and lift animation */}
      <motion.footer 
        className={styles.pageFooter} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shall We Unveil Your Chapter? Our Attendants Await.
        </motion.p>
         <a href="https://wa.me/919823388866 "  >
        <motion.button 
          className={styles.footerCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(184, 134, 11, 0.3)",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
         
            Arrange an Intimate Tour
         
        </motion.button>
         </a>
      </motion.footer>
    </div>
  );
};

export default Layout4;