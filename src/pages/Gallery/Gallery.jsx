import React from "react";
import styles from "./Gallery.module.css";

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const Gallery = () => {

  const galleryItems = [
  {  img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%202%20(1).jpg?alt=media&token=8de92aab-be4f-4100-8956-a8655cf299a8" },
  {  img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%203%20(1).jpg?alt=media&token=e4ca4d02-449e-4a9c-ae35-2e171fa54bbb" },
  {  img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SATASWATI%20NAGRI%204%20(1).jpg?alt=media&token=4e31ec32-e733-4639-98f7-d66eb7a0a40e" },
  { img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%205%20(1).jpg?alt=media&token=c556b5a4-ffde-4b3f-b257-ec77f63f7fcc"},
  {  img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%206%20(1).jpg?alt=media&token=a8afe780-bc9c-41c2-9514-021caf770f4e" },
  { img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/8_1%20-%20Photo_21%20-%20Photo%20(1).jpg?alt=media&token=1b6f6b9b-3028-49ff-9e9c-7f2082704fe2" },
  { img:"https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/saraswati%20nagri%208_2%20-%20Photo%20(1).jpg?alt=media&token=21298f0a-4e8e-41b1-9658-f109f0b32c1f" },
  // {  img:"https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%209%20(1).jpg?alt=media&token=..." },
];

  return (
    <>
      <div className={styles.galleryPage}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>Gallery</h1>
            <p className={styles.breadcrumbs}>
              <a href="/">Home</a> <span>|</span> Gallery
            </p>
          </div>
        </div>

        <div className={styles.galleryContainer}>
          {galleryItems.map((item, index) => (
            <div className={styles.galleryItem} key={index}>

              <img
                src={item.img}
                alt={item.title}
                className={styles.galleryImage}
              />
              <div className={styles.overlay}>
                <span className={styles.title}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
