
import React from "react";
import styles from "./FeaturesCarousel.module.css";
import { FaSchool, FaHospital, FaHome, FaTrain } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  { icon: <FaSchool size={64} color="#b8860b" />, label: "Surrounded by Schools" },
  { icon: <FaHospital size={64} color="#b8860b" />, label: "Surrounded by Hospital" },
  { icon: <FaHome size={64} color="#b8860b" />, label: "Surrounded by Residential Houses" },
  { icon: <FaTrain size={64} color="#b8860b" />, label: "Proximity to Railway Station" },

];

const FeaturesCarousel = () => {
  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.featuresHeading}>
        What Make <span className={styles.orange}>Saraswati Nagri</span> Different From Others
      </h2>
      <h3 className={styles.subFeaturesHeading}>PROPERTY FEATURES</h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          
        }}
        style={{background:"#ca9921", padding:"25px"}}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className={styles.featureBox}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <p>{feature.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturesCarousel;
