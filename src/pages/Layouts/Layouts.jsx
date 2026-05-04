// import React from "react";
// import { motion } from "framer-motion";
// import Map from "../../components/Map/Map";
// import styles from "./Layouts.module.css";
// // import View from "../../components/360";
// import PanoramaViewer from "../../components/PanoramaViewer";
// import {
//   FaRoad,
//   FaChild,
//   FaWalking,
// } from "react-icons/fa";
// import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
// import {
//   GiBrickWall,
//   GiWaterRecycling,
//   GiWaterfall,
// } from "react-icons/gi";
// import image from '../../assets/Oops!.jpeg'
// import Product360 from "../../components/PanoramaViewer";
// import Panorama360Viewer from "../../components/PanoramaViewer";
// // import Product360 from "../../components/360";

// const Layouts = () => {
//   const amenitiesList = [
//     { icon: <FaRoad />, title: "Cement Roads" },
//     { icon: <GiWaterfall />, title: "Sewer Lines" },
//     { icon: <GiWaterfall />, title: "Stormwater Drainage" },
//     { icon: <MdWaterDrop />, title: "Water Pipelines" },
//     { icon: <MdElectricBolt />, title: "Electricity Connections" },
//     { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
//     { icon: <FaChild />, title: "Children's Play Areas" },
//     { icon: <FaWalking />, title: "Walking Tracks" },
//     { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const leftToRightVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   const fadeInUpVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   const staggerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const hoverVariants = {
//     hover: { y: -10, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
//   };

//   return (
//     <motion.div
//       className={styles.container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={containerVariants}
//     >
//       <motion.h1 
//         className={styles.mainTitle} 
//         variants={leftToRightVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         Saraswati Nagri – Premium Plot Layouts
//       </motion.h1>

//       {/* Plot Status Legend */}
//       <motion.div 
//         className={styles.legend}
//         variants={staggerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {[
//           { status: "Available", class: styles.statusAvailable },
//           { status: "Sold", class: styles.statusSold },
//           { status: "Reserved", class: styles.statusReserved },
//           { status: "Open", class: styles.statusOpen },
//         ].map((item, i) => (
//           <motion.div 
//             className={styles.legendItem} 
//             key={i}
//             variants={itemVariants}
//             whileHover={hoverVariants}
//           >
//             <motion.div 
//               className={`${styles.statusBox} ${item.class}`}
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.2 }}
//             ></motion.div>
//             <motion.span 
//               className={styles.legendText}
//               whileHover={{ color: "#b8860b" }}
//               transition={{ duration: 0.2 }}
//             >
//               {item.status}
//             </motion.span>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Interactive Map */}
//       <motion.div 
//         className={styles.mapWrapper}
//         variants={fadeInUpVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Map />
//       </motion.div>

//       {/* Featured Plot Layout */}
//       <motion.section 
//         className={styles.featuredPlot}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle} 
//           variants={fadeInUpVariants}
//         >
//           Featured Premium Layout
//         </motion.h2>
//         <motion.div 
//           className={styles.featuredContent}
//           variants={staggerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.img
//             src={image}
//             alt="Featured Plot Layout"
//             className={styles.featuredImage}
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.4 }}
//           />
//           <motion.div 
//             className={styles.featuredText}
//             variants={itemVariants}
//           >
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Our <strong>Premium Residential Plot</strong> is located in the heart of
//               Saraswati Nagri. Designed with meticulous planning, wide cement roads,
//               underground drainage, and abundant green zones, it represents a perfect
//               balance of modern infrastructure and serene living.
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Each plot is well-demarcated, ensuring clear boundaries and long-term value.
//               With easy access to highways, schools, and essential services, this layout
//               is ideal for building your dream home or for long-term investment.
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* 360° Virtual Tour */}
//       <motion.section 
//         className={styles.virtualTour}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle}
//           variants={fadeInUpVariants}
//         >
//           360° Virtual Experience
//         </motion.h2>
//         <motion.p 
//           className={styles.virtualText}
//           variants={itemVariants}
//         >
//           Immerse yourself in our project with this interactive 360° showcase.
//           Explore every detail of the layout before visiting in person.
//         </motion.p>
//         <motion.div 
//           className={styles.virtualFrame}
//           variants={fadeInUpVariants}
//           whileHover={{ scale: 1.02 }}
//           transition={{ duration: 0.3 }}
//         >
//         {/* <PanoramaViewer/> */}
//         {/* <Product360/> */}
// <Panorama360Viewer/>
//         </motion.div>
//       </motion.section>

//       {/* Amenities */}
//       <motion.section 
//         className={styles.amenitiesSection}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle}
//           variants={fadeInUpVariants}
//         >
//           World-Class Infrastructure & Amenities
//         </motion.h2>
//         <motion.div 
//           className={styles.amenitiesGrid}
//           variants={staggerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {amenitiesList.map((item, index) => (
//             <motion.div 
//               className={styles.amenityItem} 
//               key={index}
//               variants={itemVariants}
//               whileHover={hoverVariants}
//             >
//               <motion.span 
//                 className={styles.icon}
//                 whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
//               >
//                 {item.icon}
//               </motion.span>
//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 {item.title}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.p 
//           className={styles.amenitiesFooter}
//           variants={fadeInUpVariants}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           Backed by <motion.span 
//             className={styles.backSpan}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             SS Construction
//           </motion.span>, every project is executed with
//           unmatched precision, uncompromising quality, and a vision to create
//           sustainable, family-friendly communities.
//         </motion.p>
//       </motion.section>
//     </motion.div>
//   );
// };

// export default Layouts;
























// import React from "react";
// import { motion } from "framer-motion";
// import Map from "../../components/Map/Map";
// import styles from "./Layouts.module.css";
// import PanoramaViewer from "../../components/PanoramaViewer";
// import {
//   FaRoad,
//   FaChild,
//   FaWalking,
// } from "react-icons/fa";
// import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
// import {
//   GiBrickWall,
//   GiWaterRecycling,
//   GiWaterfall,
// } from "react-icons/gi";
// import image from '../../assets/Oops!.jpeg'
// import Product360 from "../../components/PanoramaViewer";
// import Panorama360Viewer from "../../components/PanoramaViewer";

// const Layouts = () => {
//   const amenitiesList = [
//     { icon: <FaRoad />, title: "Cement Roads" },
//     { icon: <GiWaterfall />, title: "Sewer Lines" },
//     { icon: <GiWaterfall />, title: "Stormwater Drainage" },
//     { icon: <MdWaterDrop />, title: "Water Pipelines" },
//     { icon: <MdElectricBolt />, title: "Electricity Connections" },
//     { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
//     { icon: <FaChild />, title: "Children's Play Areas" },
//     { icon: <FaWalking />, title: "Walking Tracks" },
//     { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
//   ];

//   // Refined Animation variants for subtle elegance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.4,
//       },
//     },
//   };

//   const leftToRightVariants = {
//     hidden: { opacity: 0, x: -80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }, // Back ease for graceful entry
//     },
//   };

//   const fadeInUpVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
//     },
//   };

//   const staggerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.4,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -30, scale: 0.98 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const hoverVariants = {
//     hover: { 
//       y: -5, 
//       scale: 1.02, 
//       transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
//       boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)" // Softer shadow for refinement
//     },
//   };

//   return (
//     <motion.div
//       className={styles.container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-120px" }}
//       variants={containerVariants}
//     >
//       {/* Serene Hero Section with Ethereal Overlay */}
//       <motion.section className={styles.heroSection}>
//         <motion.div className={styles.heroGradient} />
//         <motion.h1 
//           className={styles.mainTitle} 
//           variants={leftToRightVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           Saraswati Nagri – Premium Plot Layouts
//         </motion.h1>
//         <motion.p className={styles.heroSubtitle} variants={fadeInUpVariants}>
//           Where Timeless Elegance Meets Discerning Serenity
//         </motion.p>
//         <motion.div className={styles.heroAccent} variants={itemVariants} />
//       </motion.section>

//       {/* Discreet Plot Status Legend with Subtle Refinement */}
//       <motion.div 
//         className={styles.legend}
//         variants={staggerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {[
//           { status: "Available", class: styles.statusAvailable },
//           { status: "Sold", class: styles.statusSold },
//           { status: "Reserved", class: styles.statusReserved },
//           { status: "Open", class: styles.statusOpen },
//         ].map((item, i) => (
//           <motion.div 
//             className={styles.legendItem} 
//             key={i}
//             variants={itemVariants}
//             whileHover={hoverVariants}
//           >
//             <motion.div 
//               className={`${styles.statusBox} ${item.class}`}
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.25 }}
//             />
//             <motion.span 
//               className={styles.legendText}
//               whileHover={{ color: "#C9A66B" }} // Warm gold for understated luxury
//               transition={{ duration: 0.25 }}
//             >
//               {item.status}
//             </motion.span>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Poised Interactive Map with Ornate Frame */}
//       <motion.div 
//         className={styles.mapWrapper}
//         variants={fadeInUpVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ scale: 1.005 }}
//         transition={{ duration: 0.35 }}
//       >
//         <div className={styles.mapFrame}>
//           <Map/>
//         </div>
//         <motion.p className={styles.mapCaption} variants={itemVariants}>
//           Navigate the Essence of Exquisite Spatial Harmony
//         </motion.p>
//       </motion.div>

//       {/* Graceful Featured Plot Layout with Balanced Composition */}
//       <motion.section 
//         className={styles.featuredPlot}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle} 
//           variants={fadeInUpVariants}
//         >
//           The Pinnacle of Premium Layout
//         </motion.h2>
//         <motion.div 
//           className={styles.featuredContent}
//           variants={staggerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div className={styles.featuredImageWrapper}>
//             <motion.img
//               src={image}
//               alt="Featured Plot Layout"
//               className={styles.featuredImage}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />
//             <div className={styles.imageVeil} />
//           </motion.div>
//           <motion.div 
//             className={styles.featuredText}
//             variants={itemVariants}
//           >
//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.25 }}
//               className={styles.featuredDescription}
//             >
//               Gracefully situated within the venerable core of Saraswati Nagri, our <strong>Premium Residential Plots</strong> 
//               epitomize refined artistry. Thoughtfully orchestrated with broad, enduring avenues, 
//               concealed utilities, and verdant retreats, they weave a tapestry of poised modernity and tranquil repose.
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.45 }}
//               className={styles.featuredDescription}
//             >
//               Immaculately defined for perpetual distinction, these sanctuaries afford effortless liaison with 
//               distinguished thoroughfares, venerated institutions, and vital conveniences—supreme for manifesting 
//               your visionary abode or safeguarding an heirloom of value.
//             </motion.p>
//             <motion.button 
//               className={styles.ctaButton}
//               whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(201, 166, 107, 0.3)" }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ duration: 0.25 }}
//             >
//               Discover Exclusivity
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Ethereal 360° Virtual Tour with Velvet Framing */}
//       <motion.section 
//         className={styles.virtualTour}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle}
//           variants={fadeInUpVariants}
//         >
//           360° Symphony of Serenity
//         </motion.h2>
//         <motion.p 
//           className={styles.virtualText}
//           variants={itemVariants}
//         >
//           Surrender to a transcendent panorama, where every nuance of our artful designs unfolds in luminous detail— 
//           a prelude to your personal odyssey.
//         </motion.p>
//         <motion.div 
//           className={styles.virtualFrame}
//           variants={fadeInUpVariants}
//           whileHover={{ scale: 1.005 }}
//           transition={{ duration: 0.35 }}
//         >
//           <Panorama360Viewer />
//           <div className={styles.virtualAura} /> {/* Gentle glow for elegance */}
//         </motion.div>
//       </motion.section>

//       {/* Harmonious Amenities Mosaic with Poetic Flourish */}
//       <motion.section 
//         className={styles.amenitiesSection}
//         variants={leftToRightVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.h2 
//           className={styles.sectionTitle}
//           variants={fadeInUpVariants}
//         >
//           Artistry in Infrastructure & Timeless Amenities
//         </motion.h2>
//         <motion.div 
//           className={styles.amenitiesGrid}
//           variants={staggerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {amenitiesList.map((item, index) => (
//             <motion.div 
//               className={styles.amenityItem} 
//               key={index}
//               variants={itemVariants}
//               whileHover={hoverVariants}
//             >
//               <motion.div className={styles.iconHalo}>
//                 <motion.span 
//                   className={styles.icon}
//                   whileHover={{ 
//                     rotate: 180, // Subtle half-turn for poise
//                     scale: 1.05,
//                     color: "#C9A66B",
//                     transition: { duration: 0.4 } 
//                   }}
//                 >
//                   {item.icon}
//                 </motion.span>
//               </motion.div>
//               <motion.p
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className={styles.amenityTitle}
//               >
//                 {item.title}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.p 
//           className={styles.amenitiesFooter}
//           variants={fadeInUpVariants}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9 }}
//         >
//           Orchestrated under the stewardship of <motion.span 
//             className={styles.backSpan}
//             whileHover={{ scale: 1.05, color: "#C9A66B" }}
//             transition={{ duration: 0.25 }}
//           >
//             SS Construction
//           </motion.span>, each vision materializes with exquisite finesse, 
//           unyielding refinement, and an ethos of cultivating legacies that whisper of enduring grace.
//         </motion.p>
//       </motion.section>

//       {/* Whispered Invitation Footer for Intimate Closure */}
//       <motion.footer className={styles.pageFooter} variants={fadeInUpVariants}>
//         <motion.p>
//           Shall We Unveil Your Chapter? Our Attendants Await.
//         </motion.p>
//         <motion.button 
//           className={styles.footerCta}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//         >
//           Arrange an Intimate Tour
//         </motion.button>
//       </motion.footer>
//     </motion.div>
//   );
// };

// export default Layouts;
































// import React, { lazy, Suspense } from "react";
// import { motion } from "framer-motion";
// import styles from "./Layouts.module.css";
// import {
//   FaRoad,
//   FaChild,
//   FaWalking,
// } from "react-icons/fa";
// import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
// import {
//   GiBrickWall,
//   GiWaterRecycling,
//   GiWaterfall,
// } from "react-icons/gi";
// import image from '../../assets/layouts1.jpg'

// // Lazy load heavy components
// const Map = lazy(() => import("../../components/Map/Map"));
// const PanoramaViewer = lazy(() => import("../../components/PanoramaViewer"));

// // Loading fallback component
// const LoadingSpinner = () => (
//   <div style={{ 
//     display: 'flex', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     minHeight: '400px',
//     color: '#C9A66B' 
//   }}>
//     <div className={styles.spinner}>Loading...</div>
//   </div>
// );

// const Layouts = () => {
//   const videoUrl = "https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/69425efd002e2614a2d2/view?project=68ece1d1000abe9952c0&mode=all";

//   const amenitiesList = [
//     { icon: <FaRoad />, title: "Cement Roads" },
//     { icon: <GiWaterfall />, title: "Sewer Lines" },
//     { icon: <GiWaterfall />, title: "Stormwater Drainage" },
//     { icon: <MdWaterDrop />, title: "Water Pipelines" },
//     { icon: <MdElectricBolt />, title: "Electricity Connections" },
//     { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
//     { icon: <FaChild />, title: "Children's Play Areas" },
//     { icon: <FaWalking />, title: "Walking Tracks" },
//     { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
//   ];

//   // Simplified animation variants - reduce complexity
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.6 } }
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const stagger = {
//     visible: { transition: { staggerChildren: 0.1 } }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Hero Section - no viewport triggers for above-fold content */}
//       <motion.section 
//         className={styles.heroSection}
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         <div className={styles.heroGradient} />
//         <motion.h1 className={styles.mainTitle} variants={slideUp}>
//           Saraswati Nagri – Premium Plot Layouts
//         </motion.h1>
//         <motion.p className={styles.heroSubtitle} variants={slideUp}>
//           Where Timeless Elegance Meets Discerning Serenity
//         </motion.p>
//         <motion.div className={styles.heroAccent} variants={item} />
//       </motion.section>

//       {/* Video Section with lazy loading */}
//       <motion.section 
//         className={styles.videoSection}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={slideUp}
//       >
//         <h2 className={styles.sectionTitle}>Plots Status</h2>
        
//         {/* Lazy loaded Map */}
//         <motion.div 
//           className={styles.mapWrapper}
//           variants={slideUp}
//         >
//           <div className={styles.mapFrame}>
//             <Suspense fallback={<LoadingSpinner />}>
//               <Map />
//             </Suspense>
//           </div>
//         </motion.div>
    
//         <h2 className={styles.sectionTitle}>Immersive Aerial Overview</h2>
        
//         <motion.div 
//           className={styles.videoWrapper}
//           variants={item}
//         >
//           <video 
//             className={styles.featuredVideo}
//             src={videoUrl}
//             controls
//             playsInline
//             poster={image}
//             preload="metadata"
//             loading="lazy"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </motion.div>
//       </motion.section>

//       {/* Virtual Tour - lazy loaded */}
//       <motion.section 
//         className={styles.virtualTour}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={slideUp}
//       >
//         <h2 className={styles.sectionTitle}>
//           360° Symphony of Serenity
//         </h2>
//         <p className={styles.virtualText}>
//           Surrender to a transcendent panorama, where every nuance of our artful designs unfolds in luminous detail— 
//           a prelude to your personal odyssey.
//         </p>
//         <div className={styles.virtualFrame}>
//           <Suspense fallback={<LoadingSpinner />}>
//             <PanoramaViewer />
//           </Suspense>
//           <div className={styles.virtualAura} />
//         </div>
//       </motion.section>

//       {/* Amenities Section - simplified animations */}
//       <motion.section 
//         className={styles.amenitiesSection}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={slideUp}
//       >
//         <h2 className={styles.sectionTitle}>
//           Artistry in Infrastructure & Timeless Amenities
//         </h2>
//         <motion.div 
//           className={styles.amenitiesGrid}
//           variants={stagger}
//         >
//           {amenitiesList.map((item, index) => (
//             <motion.div 
//               className={styles.amenityItem} 
//               key={index}
//               variants={item}
//             >
//               <div className={styles.iconHalo}>
//                 <span className={styles.icon}>
//                   {item.icon}
//                 </span>
//               </div>
//               <p className={styles.amenityTitle}>
//                 {item.title}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.p 
//           className={styles.amenitiesFooter}
//           variants={slideUp}
//         >
//           Orchestrated under the stewardship of <span className={styles.backSpan}>
//             SS Construction
//           </span>, each vision materializes with exquisite finesse, 
//           unyielding refinement, and an ethos of cultivating legacies that whisper of enduring grace.
//         </motion.p>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer 
//         className={styles.pageFooter} 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={slideUp}
//       >
//         <p>Shall We Unveil Your Chapter? Our Attendants Await.</p>
//         <motion.button 
//           className={styles.footerCta}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//         >
//           Arrange an Intimate Tour
//         </motion.button>
//       </motion.footer>
//     </div>
//   );
// };

// export default Layouts;




















































import React, { lazy, Suspense } from "react";
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

const Layouts = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const videoUrl = "https://www.youtube.com/embed/QkBTTDTL47Y?si=4mTiE8ieBCayyHjB";

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
          Saraswati Nagri – 1 
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
              <Map />
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
    src="https://www.youtube.com/embed/QkBTTDTL47Y?si=4mTiE8ieBCayyHjB?autoplay=1&mute=1&controls=0&modestbranding=0&rel=0"
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
      </motion.section>
      */}
 

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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
        <LazyOnScroll fallback={<LoadingSpinner />}>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d840.9951728657273!2d79.06258418597663!3d21.224417740630297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzI4LjQiTiA3OcKwMDMnNDQuOCJF!5e1!3m2!1sen!2sin!4v1766133526483!5m2!1sen!2sin" width="100%" height="450px" ></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3719.1841516473546!2d79.06243099999999!3d21.224545000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzI4LjQiTiA3OcKwMDMnNDQuOCJF!5e0!3m2!1sen!2sin!4v1766752647297!5m2!1sen!2sin" width="600" height="450" ></iframe>
         </LazyOnScroll>
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

export default Layouts;





























// import React, { lazy } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import styles from "./Layouts.module.css";
// import {
//   FaRoad,
//   FaChild,
//   FaWalking,
// } from "react-icons/fa";
// import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
// import {
//   GiBrickWall,
//   GiWaterRecycling,
//   GiWaterfall,
// } from "react-icons/gi";

// import image from "../../assets/layouts1.jpg";
// import LazyOnScroll from "../../components/LazyOnScroll";

// // 🔥 Lazy Components
// const Map = lazy(() => import("../../components/Map/Map"));
// const PanoramaViewer = lazy(() => import("../../components/PanoramaViewer"));

// // 🔄 Loader
// const LoadingSpinner = () => (
//   <div className={styles.loader}>
//     Loading...
//   </div>
// );

// const Layouts = () => {
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   const videoUrl =
//     "https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/69425efd002e2614a2d2/view";

//   const amenitiesList = [
//     { icon: <FaRoad />, title: "Cement Roads" },
//     { icon: <GiWaterfall />, title: "Sewer Lines" },
//     { icon: <MdWaterDrop />, title: "Water Pipelines" },
//     { icon: <MdElectricBolt />, title: "Electricity Connections" },
//     { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
//     { icon: <FaChild />, title: "Children's Play Areas" },
//     { icon: <FaWalking />, title: "Walking Tracks" },
//     { icon: <GiWaterRecycling />, title: "STP Plant" },
//   ];

//   return (
//     <div className={styles.container}>

//       {/* HERO */}
//       <motion.section
//         className={styles.heroSection}
//         style={{ opacity, scale }}
//       >
//         <h1>Saraswati Nagri – 1</h1>
//         <p>Where Timeless Elegance Meets Serenity</p>
//       </motion.section>

//       {/* MAP – RENDERS ONLY ON SCROLL */}
//       <section className={styles.section}>
//         <h2>Plots Status</h2>

//         <LazyOnScroll fallback={<LoadingSpinner />}>
//           <Map />
//         </LazyOnScroll>
//       </section>

//       {/* VIDEO – Native Lazy */}
//       <section className={styles.section}>
//         <h2>Aerial View</h2>

//         <video
//           className={styles.video}
//           controls
//           preload="metadata"
//           poster={image}
//           loading="lazy"
//           playsInline
//         >
//           <source src={videoUrl} type="video/mp4" />
//         </video>
//       </section>

//       {/* PANORAMA – ON SCROLL ONLY */}
//       <section className={styles.section}>
//         <h2>360° Virtual Tour</h2>

//         <LazyOnScroll fallback={<LoadingSpinner />}>
//           <PanoramaViewer />
//         </LazyOnScroll>
//       </section>

//       {/* AMENITIES */}
//       <section className={styles.section}>
//         <h2>Amenities</h2>

//         <div className={styles.amenitiesGrid}>
//           {amenitiesList.map((item, index) => (
//             <div key={index} className={styles.amenityCard}>
//               {item.icon}
//               <p>{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* GOOGLE MAP – TRUE LAZY */}
//       <section className={styles.section}>
//         <h2>Location</h2>

//         <LazyOnScroll fallback={<LoadingSpinner />}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d840.9951728657273!2d79.06258418597663!3d21.224417740630297!"
//             width="100%"
//             height="450"
//             loading="lazy"
//             style={{ border: 0 }}
//             allowFullScreen
//           />
//         </LazyOnScroll>
//       </section>

//       {/* FOOTER */}
//       <footer className={styles.footer}>
//         <p>Shall We Unveil Your Chapter?</p>
//         <a href="https://wa.me/919823388866">
//           <button>Arrange an Intimate Tour</button>
//         </a>
//       </footer>

//     </div>
//   );
// };

// export default Layouts;
